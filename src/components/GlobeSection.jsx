import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import {
  GLOBAL_CITIES,
  drawEarthCanvas,
  latLonToVector3
} from "./globeWorld.js";

function shortestAngleDiff(target, current) {
  let diff = (target - current) % (Math.PI * 2);
  if (diff > Math.PI) diff -= Math.PI * 2;
  if (diff < -Math.PI) diff += Math.PI * 2;
  return diff;
}

export default function GlobeSection() {
  const [view, setView] = useState("reported"); // "reported" = Façade / Night Lights, "personal" = Within Reality / Shadow Earth
  const [selectedCityId, setSelectedCityId] = useState("tokyo");
  const [autoRotate, setAutoRotate] = useState(true);
  const [fallback, setFallback] = useState(false);
  const containerRef = useRef(null);
  const controlsRef = useRef(null);

  const isPersonal = view === "personal";
  const selectedCity =
    GLOBAL_CITIES.find((c) => c.id === selectedCityId) || GLOBAL_CITIES[0];

  const handleCitySelect = useCallback((cityId) => {
    setSelectedCityId(cityId);
    controlsRef.current?.focusCity(cityId);
  }, []);

  const handleResetCamera = useCallback(() => {
    controlsRef.current?.resetView();
  }, []);

  const handleZoom = useCallback((direction) => {
    controlsRef.current?.zoom(direction);
  }, []);

  const toggleAutoRotate = useCallback(() => {
    setAutoRotate((prev) => {
      const next = !prev;
      controlsRef.current?.setAutoRotate(next);
      return next;
    });
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let renderer;
    try {
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    } catch {
      setFallback(true);
      return;
    }
    setFallback(false);

    const canvas = renderer.domElement;
    canvas.setAttribute("aria-hidden", "true");
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    container.appendChild(canvas);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
    camera.position.set(0, 0, 3.2);

    // Root group for all globe elements
    const globeGroup = new THREE.Group();
    scene.add(globeGroup);

    // Initial orientation: tilt slightly so Northern Hemisphere hubs are clearly visible
    globeGroup.rotation.x = 0.25;

    // 1. Procedural High-Res Earth Canvas
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = 2048;
    textureCanvas.height = 1024;
    drawEarthCanvas(textureCanvas, "reported", "tokyo");

    const earthTexture = new THREE.CanvasTexture(textureCanvas);
    earthTexture.colorSpace = THREE.SRGBColorSpace;

    const sphereGeometry = new THREE.SphereGeometry(1, 64, 48);
    const sphereMaterial = new THREE.MeshStandardMaterial({
      map: earthTexture,
      roughness: 0.65,
      metalness: 0.1,
    });
    const earthSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    globeGroup.add(earthSphere);

    // 2. Atmospheric Rim Glow Outer Shell
    const atmosphereGeometry = new THREE.SphereGeometry(1.035, 48, 48);
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x38bdf8,
      side: THREE.BackSide,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
    });
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphere);

    // 3. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.8);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffffff, 1.5);
    sunLight.position.set(5, 4, 6);
    scene.add(sunLight);

    const rimLight = new THREE.DirectionalLight(0x60a5fa, 0.9);
    rimLight.position.set(-6, -3, -4);
    scene.add(rimLight);

    // 4. Interactive 3D City Pins & Glowing Beacon Rings
    const pinGroup = new THREE.Group();
    globeGroup.add(pinGroup);

    const pinMeshes = [];
    const pinCoreGeo = new THREE.SphereGeometry(0.024, 16, 16);
    const pinRingGeo = new THREE.RingGeometry(0.035, 0.052, 24);

    GLOBAL_CITIES.forEach((city) => {
      const pos = latLonToVector3(city.lat, city.lon, 1.012);

      // Core glowing dot
      const coreMat = new THREE.MeshBasicMaterial({
        color: 0xfbbf24,
      });
      const core = new THREE.Mesh(pinCoreGeo, coreMat);
      core.position.copy(pos);
      core.userData = { cityId: city.id, isPin: true };
      pinGroup.add(core);

      // Tangential pulsing ring
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xf59e0b,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.75,
      });
      const ring = new THREE.Mesh(pinRingGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(0, 0, 0); // Orient normal to sphere surface
      pinGroup.add(ring);

      pinMeshes.push({ cityId: city.id, core, ring, basePos: pos.clone() });
    });

    // Interaction & Animation State
    let isDragging = false;
    let dragStart = { x: 0, y: 0 };
    let lastPointer = { x: 0, y: 0 };
    let dragVelocity = { x: 0, y: 0 };
    let hasMovedSignificantly = false;
    let targetRotation = null; // { x, y }
    let autoRotateEnabled = true;
    let userInteracting = false;
    let currentMode = "reported";
    let activeCityId = "tokyo";
    let pulseClock = 0;
    let animationFrameId;

    // Resize handling
    const resize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();

    // Smooth city focus navigation
    const focusOnCity = (cityId) => {
      const city = GLOBAL_CITIES.find((c) => c.id === cityId);
      if (!city) return;
      activeCityId = cityId;

      // Mathematically precise yaw and pitch to bring this coordinate directly facing camera
      const targetY = -((city.lon + 90) * Math.PI) / 180;
      const targetX = (city.lat * Math.PI) / 180;

      targetRotation = {
        x: THREE.MathUtils.clamp(targetX, -1.15, 1.15),
        y: targetY,
      };

      // Temporarily halt idle auto-spin so user can examine city
      userInteracting = true;
      setTimeout(() => {
        userInteracting = false;
      }, 5000);
    };

    // Controls object for React component callers
    controlsRef.current = {
      focusCity: (id) => focusOnCity(id),
      setMode: (mode) => {
        currentMode = mode;
        drawEarthCanvas(textureCanvas, mode, activeCityId);
        earthTexture.needsUpdate = true;

        if (mode === "reported") {
          // Night City Lights Mode
          atmosphereMaterial.color.setHex(0x38bdf8);
          atmosphereMaterial.opacity = 0.38;
          pinMeshes.forEach(({ cityId, core, ring }) => {
            const isSelected = cityId === activeCityId;
            core.material.color.setHex(isSelected ? 0xffffff : 0xfbbf24);
            ring.material.color.setHex(isSelected ? 0xf59e0b : 0xd97706);
          });
        } else {
          // The Within Reality (Shadow Earth Mode)
          atmosphereMaterial.color.setHex(0xa855f7);
          atmosphereMaterial.opacity = 0.28;
          pinMeshes.forEach(({ cityId, core, ring }) => {
            const isSelected = cityId === activeCityId;
            core.material.color.setHex(isSelected ? 0xffffff : 0xec4899);
            ring.material.color.setHex(isSelected ? 0xec4899 : 0x8b5cf6);
          });
        }
      },
      setAutoRotate: (enabled) => {
        autoRotateEnabled = enabled;
      },
      resetView: () => {
        targetRotation = { x: 0.25, y: 0 };
        camera.position.z = 3.2;
      },
      zoom: (direction) => {
        const delta = direction === "in" ? -0.3 : 0.3;
        camera.position.z = THREE.MathUtils.clamp(
          camera.position.z + delta,
          2.2,
          4.2
        );
      },
    };

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      pulseClock += 0.04;

      // 1. Smooth City Focus Interpolation
      if (targetRotation) {
        const diffX = targetRotation.x - globeGroup.rotation.x;
        const diffY = shortestAngleDiff(
          targetRotation.y,
          globeGroup.rotation.y
        );

        globeGroup.rotation.x += diffX * 0.07;
        globeGroup.rotation.y += diffY * 0.07;

        if (Math.abs(diffX) < 0.002 && Math.abs(diffY) < 0.002) {
          targetRotation = null;
        }
      } else if (!isDragging) {
        // 2. Momentum Deceleration
        globeGroup.rotation.y += dragVelocity.x;
        globeGroup.rotation.x += dragVelocity.y;
        globeGroup.rotation.x = THREE.MathUtils.clamp(
          globeGroup.rotation.x,
          -1.25,
          1.25
        );

        dragVelocity.x *= 0.92;
        dragVelocity.y *= 0.92;

        // 3. Ambient Auto-Rotation when idle
        if (
          autoRotateEnabled &&
          !userInteracting &&
          Math.abs(dragVelocity.x) < 0.0005
        ) {
          globeGroup.rotation.y += 0.0016;
        }
      }

      // 4. Animate Beacon Rings & Pulsing Pins
      const pulseScale = 1 + Math.sin(pulseClock * 2) * 0.25;
      const pulseOpacity = 0.5 + Math.cos(pulseClock * 2) * 0.35;

      pinMeshes.forEach(({ cityId, core, ring }) => {
        const isSelected = cityId === activeCityId;
        if (isSelected) {
          ring.scale.setScalar(pulseScale * 1.5);
          ring.material.opacity = pulseOpacity;
          core.scale.setScalar(1.4);
        } else {
          ring.scale.setScalar(1 + Math.sin(pulseClock) * 0.12);
          ring.material.opacity = 0.45;
          core.scale.setScalar(1);
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Raycaster for Pin Clicks
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    // Multi-Pointer Touch & Mouse Orbit Controls
    const activePointers = new Map();
    let initialPinchDistance = null;

    const getPinchDistance = () => {
      const pts = Array.from(activePointers.values());
      if (pts.length < 2) return null;
      return Math.hypot(pts[0].x - pts[1].x, pts[0].y - pts[1].y);
    };

    const onPointerDown = (event) => {
      if (event.button !== 0 && event.pointerType === "mouse") return;
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      if (activePointers.size === 1) {
        isDragging = true;
        hasMovedSignificantly = false;
        userInteracting = true;
        targetRotation = null;
        dragStart = { x: event.clientX, y: event.clientY };
        lastPointer = { x: event.clientX, y: event.clientY };
        dragVelocity = { x: 0, y: 0 };
        canvas.setPointerCapture(event.pointerId);
      } else if (activePointers.size === 2) {
        initialPinchDistance = getPinchDistance();
      }
    };

    const onPointerMove = (event) => {
      if (!activePointers.has(event.pointerId)) return;
      activePointers.set(event.pointerId, { x: event.clientX, y: event.clientY });

      // Handle 2-Finger Pinch Zoom
      if (activePointers.size >= 2) {
        const currentDist = getPinchDistance();
        if (initialPinchDistance && currentDist) {
          const pinchDelta = (initialPinchDistance - currentDist) * 0.005;
          camera.position.z = THREE.MathUtils.clamp(
            camera.position.z + pinchDelta,
            2.2,
            4.2
          );
          initialPinchDistance = currentDist;
        }
        return;
      }

      if (!isDragging) return;

      const deltaX = event.clientX - lastPointer.x;
      const deltaY = event.clientY - lastPointer.y;

      if (
        Math.hypot(event.clientX - dragStart.x, event.clientY - dragStart.y) > 6
      ) {
        hasMovedSignificantly = true;
      }

      // Free 3D Multi-Axis Orbit: Dragging horizontally turns yaw; dragging vertically turns pitch
      const sensitivity = 0.0055;
      globeGroup.rotation.y += deltaX * sensitivity;
      globeGroup.rotation.x += deltaY * sensitivity;
      globeGroup.rotation.x = THREE.MathUtils.clamp(
        globeGroup.rotation.x,
        -1.25,
        1.25
      );

      // Record velocity for inertia gliding
      dragVelocity = {
        x: deltaX * 0.004,
        y: deltaY * 0.004,
      };

      lastPointer = { x: event.clientX, y: event.clientY };

      // Hover indicator for pins
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hit = raycaster.intersectObjects(
        pinMeshes.map((p) => p.core),
        false
      )[0];
      canvas.style.cursor = hit ? "pointer" : "grab";
    };

    const onPointerUp = (event) => {
      activePointers.delete(event.pointerId);

      if (activePointers.size === 0) {
        if (!hasMovedSignificantly && isDragging) {
          // Detect pin tap/click
          const rect = canvas.getBoundingClientRect();
          pointer.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
          pointer.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
          raycaster.setFromCamera(pointer, camera);

          // Test intersections against core pins and globe sphere
          const intersects = raycaster.intersectObjects([
            earthSphere,
            ...pinMeshes.map((p) => p.core),
          ]);
          const firstHit = intersects[0];
          if (firstHit && firstHit.object.userData.isPin) {
            const cityId = firstHit.object.userData.cityId;
            setSelectedCityId(cityId);
            focusOnCity(cityId);
          }
        }

        isDragging = false;
        try {
          if (canvas.hasPointerCapture(event.pointerId)) {
            canvas.releasePointerCapture(event.pointerId);
          }
        } catch {
          // Ignore capture error
        }

        setTimeout(() => {
          userInteracting = false;
        }, 3500);
      }
    };

    const onWheel = (event) => {
      event.preventDefault();
      const zoomDelta = event.deltaY * 0.0018;
      camera.position.z = THREE.MathUtils.clamp(
        camera.position.z + zoomDelta,
        2.2,
        4.2
      );
    };

    const onContextLost = (e) => {
      e.preventDefault();
      setFallback(true);
    };

    canvas.addEventListener("pointerdown", onPointerDown);
    canvas.addEventListener("pointermove", onPointerMove);
    canvas.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointercancel", onPointerUp);
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("webglcontextlost", onContextLost);

    // Focus initial city
    focusOnCity("tokyo");

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      controlsRef.current = null;
      canvas.removeEventListener("pointerdown", onPointerDown);
      canvas.removeEventListener("pointermove", onPointerMove);
      canvas.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointercancel", onPointerUp);
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("webglcontextlost", onContextLost);

      sphereGeometry.dispose();
      sphereMaterial.dispose();
      earthTexture.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
      pinCoreGeo.dispose();
      pinRingGeo.dispose();
      pinMeshes.forEach(({ core, ring }) => {
        core.material.dispose();
        ring.material.dispose();
      });
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  // Update mode when toggle changes
  useEffect(() => {
    controlsRef.current?.setMode(view);
  }, [view]);

  return (
    <section className="world-atlas-section" id="world">
      <div className="world-atlas-wrap">
        {/* Section Header */}
        <div className="world-atlas-header">
          <span className="atlas-kicker">THE GLOBAL EMOTIONAL ATLAS</span>
          <h2 className="atlas-title">
            The Dual Perspective: What The World Projects vs. What It Endures
          </h2>
          <p className="atlas-lead">
            Spin the 3D globe. Toggle beneath the sparkling night lights to
            discover the unspoken somatic struggles hidden behind global
            high-functioning composure.
          </p>

          {/* Perspective Toggle Control */}
          <div
            className="atlas-toggle"
            role="group"
            aria-label="Toggle Globe Perspectives"
          >
            <button
              type="button"
              className={`atlas-toggle-btn ${!isPersonal ? "active facade" : ""}`}
              aria-pressed={!isPersonal}
              onClick={() => setView("reported")}
            >
              <span className="toggle-icon">🌟</span>
              <span className="toggle-text">
                <strong>The Projected World</strong>
                <small>Night City Lights &amp; Façade</small>
              </span>
            </button>
            <button
              type="button"
              className={`atlas-toggle-btn ${isPersonal ? "active reality" : ""}`}
              aria-pressed={isPersonal}
              onClick={() => setView("personal")}
            >
              <span className="toggle-icon">🌑</span>
              <span className="toggle-text">
                <strong>The Within Reality</strong>
                <small>Shadow Earth &amp; Somatic Truth</small>
              </span>
            </button>
          </div>
        </div>

        {/* Main 3D Globe & Inspector Workspace */}
        <div className={`atlas-stage-row ${isPersonal ? "mode-reality" : "mode-facade"}`}>
          {/* Left Column: 3D Globe Interactive Canvas */}
          <div className="globe-canvas-col">
            <div className="globe-viewport-box">
              <div
                ref={containerRef}
                className={`globe-webgl-stage ${fallback ? "stage-fallback" : ""}`}
                aria-label="Interactive 3D Earth Globe. Drag 360 degrees to rotate, pinch or scroll to zoom, click beacons to inspect."
              />

              {/* Floating Camera & Auto-Rotate Controls */}
              <div className="globe-hud-controls" aria-label="Globe HUD Controls">
                <button
                  type="button"
                  className="hud-btn"
                  title="Re-center View"
                  onClick={handleResetCamera}
                  aria-label="Center camera on front view"
                >
                  ⌖ Center
                </button>
                <button
                  type="button"
                  className={`hud-btn ${autoRotate ? "hud-active" : ""}`}
                  title={autoRotate ? "Pause Rotation" : "Resume Auto-Spin"}
                  onClick={toggleAutoRotate}
                  aria-label={autoRotate ? "Pause auto-rotation" : "Enable auto-rotation"}
                >
                  {autoRotate ? "⏸ Pause" : "▶ Spin"}
                </button>
                <div className="hud-zoom-group">
                  <button
                    type="button"
                    className="hud-btn hud-zoom-btn"
                    onClick={() => handleZoom("in")}
                    title="Zoom in"
                    aria-label="Zoom in"
                  >
                    +
                  </button>
                  <button
                    type="button"
                    className="hud-btn hud-zoom-btn"
                    onClick={() => handleZoom("out")}
                    title="Zoom out"
                    aria-label="Zoom out"
                  >
                    −
                  </button>
                </div>
              </div>

              {/* Interactive Gesture Hint */}
              <div className="globe-gesture-hint">
                <span>Drag 360° • Pinch / Scroll to Zoom • Tap any glowing beacon</span>
              </div>
            </div>

            {/* City Quick-Pill Strip */}
            <div
              className="city-pills-bar"
              role="tablist"
              aria-label="Select global city to inspect"
            >
              {GLOBAL_CITIES.map((city) => {
                const isSelected = city.id === selectedCityId;
                return (
                  <button
                    key={city.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`city-pill-btn ${isSelected ? "active" : ""}`}
                    onClick={() => handleCitySelect(city.id)}
                  >
                    <span className="pill-dot" />
                    <span className="pill-name">{city.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Dual-Perspective Inspector Card */}
          <div className="atlas-inspector-col">
            <div className={`inspector-card ${isPersonal ? "theme-reality" : "theme-facade"}`}>
              {/* City Top Identity */}
              <div className="inspector-city-top">
                <div className="city-headline-wrap">
                  <span className="city-region-badge">{selectedCity.region}</span>
                  <h3 className="city-title">
                    {selectedCity.name}, {selectedCity.country}
                  </h3>
                  <span className="city-tagline">{selectedCity.tag}</span>
                </div>
                <div className="city-coords">
                  <code>
                    {Math.abs(selectedCity.lat).toFixed(1)}°{selectedCity.lat >= 0 ? "N" : "S"},{" "}
                    {Math.abs(selectedCity.lon).toFixed(1)}°{selectedCity.lon >= 0 ? "E" : "W"}
                  </code>
                </div>
              </div>

              {/* Dynamic Perspective Content */}
              {!isPersonal ? (
                /* --- MODE 1: The Projected World (Façade) --- */
                <div className="inspector-mode-body facade-mode">
                  <div className="metric-banner gold-banner">
                    <div className="metric-score">{selectedCity.facade.metric}</div>
                    <div className="metric-meta">
                      <span className="metric-type">PROJECTED FAÇADE SCORE</span>
                      <strong>{selectedCity.facade.metricLabel}</strong>
                    </div>
                  </div>

                  <div className="inspector-section">
                    <span className="inspector-label">THE CULTURAL EXPECTATION</span>
                    <h4 className="inspector-subhead">{selectedCity.facade.headline}</h4>
                    <p className="inspector-text">{selectedCity.facade.socialExpectation}</p>
                  </div>

                  <div className="inspector-quote-box gold-quote">
                    <p>{selectedCity.facade.quote}</p>
                  </div>

                  <div className="inspector-tags-wrap">
                    {selectedCity.facade.tags.map((tag) => (
                      <span key={tag} className="inspector-tag tag-facade">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inspector-summary-callout">
                    <span className="callout-icon">💡</span>
                    <p>{selectedCity.facade.summary}</p>
                  </div>
                </div>
              ) : (
                /* --- MODE 2: The Within Reality (Beneath The Lights) --- */
                <div className="inspector-mode-body reality-mode">
                  <div className="metric-banner shadow-banner">
                    <div className="metric-score pink-score">{selectedCity.within.metric}</div>
                    <div className="metric-meta">
                      <span className="metric-type">INTERNAL SOMATIC LOAD</span>
                      <strong>{selectedCity.within.metricLabel}</strong>
                    </div>
                  </div>

                  <div className="inspector-section">
                    <span className="inspector-label reality-label">THE UNSPOKEN REALITY</span>
                    <h4 className="inspector-subhead">{selectedCity.within.headline}</h4>
                    <p className="inspector-text">{selectedCity.within.realStruggle}</p>
                  </div>

                  <div className="somatic-symptom-box">
                    <div className="somatic-header">
                      <span className="somatic-icon">🫀</span>
                      <strong>Where The Body Holds It:</strong>
                    </div>
                    <p>{selectedCity.within.somaticCue}</p>
                  </div>

                  <div className="inspector-quote-box violet-quote">
                    <span className="quote-label">EMOTIONAL INTELLIGENCE INSIGHT</span>
                    <p>“{selectedCity.within.eqInsight}”</p>
                  </div>

                  <div className="inspector-tags-wrap">
                    {selectedCity.within.tags.map((tag) => (
                      <span key={tag} className="inspector-tag tag-reality">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="inspector-cta-row">
                    <a className="inspector-action-btn" href="#tracker">
                      Log What You Feel In Tracker →
                    </a>
                  </div>
                </div>
              )}

              {/* Bottom Contrast Bar */}
              <div className="inspector-bottom-switch">
                <span>Currently Viewing:</span>
                <button
                  type="button"
                  className="switch-inline-btn"
                  onClick={() => setView(isPersonal ? "reported" : "personal")}
                >
                  {isPersonal ? "Switch to Projected Surface (Night Lights) →" : "Flip to The Within Reality (Shadow Earth) →"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Educational Invitation */}
        <div className="atlas-invitation">
          <p className="invitation-lead">
            Emotional regulation isn’t about never feeling broken—it’s knowing how
            to listen to your body before the lights go out.
          </p>
          <div className="invitation-links">
            <a className="invitation-btn primary" href="#journey">
              Start Your Journey Within →
            </a>
            <a className="invitation-btn secondary" href="#diagnostic">
              Discover Your EQ Archetype →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
