import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { BRAIN_REGIONS } from "./brainData.js";

/**
 * Procedurally generates brain hemisphere surface points with natural sulci & gyri folds.
 */
function createBrainParticles() {
  const points = [];
  const numPoints = 1400;

  for (let i = 0; i < numPoints; i++) {
    // Generate spherical coordinates with hemisphere bias
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);

    // Anatomical brain dimensions (elongated anterior-posterior, flattened bottom)
    let x = 1.35 * Math.sin(phi) * Math.cos(theta);
    let y = 1.15 * Math.sin(phi) * Math.sin(theta);
    let z = 1.65 * Math.cos(phi);

    // Hemisphere separation fissure down the center (sagittal plane at x = 0)
    const hemisphereGap = 0.12;
    if (x > 0) x += hemisphereGap;
    else x -= hemisphereGap;

    // Brainstem & cerebellum curve at bottom-back
    if (z < -0.3 && y < -0.2) {
      x *= 0.75;
      y = y * 0.9 - 0.2;
    }

    // Natural surface convolutions (gyri and sulci)
    const foldFrequency = 6.5;
    const foldNoise = Math.sin(x * foldFrequency) * Math.cos(y * foldFrequency) * Math.sin(z * foldFrequency);
    const radiusMod = 1 + 0.1 * foldNoise;

    x *= radiusMod;
    y *= radiusMod;
    z *= radiusMod;

    points.push(new THREE.Vector3(x, y, z));
  }

  return points;
}

export default function BrainSection() {
  const [selectedRegionId, setSelectedRegionId] = useState("amygdala");
  const [autoRotate, setAutoRotate] = useState(true);
  const [fallback, setFallback] = useState(false);

  const containerRef = useRef(null);
  const controlsRef = useRef(null);

  const selectedRegion =
    BRAIN_REGIONS.find((r) => r.id === selectedRegionId) || BRAIN_REGIONS[0];

  const handleRegionSelect = useCallback((id) => {
    setSelectedRegionId(id);
    controlsRef.current?.focusRegion(id);
  }, []);

  const toggleAutoRotate = useCallback(() => {
    setAutoRotate((prev) => {
      const next = !prev;
      controlsRef.current?.setAutoRotate(next);
      return next;
    });
  }, []);

  const handleResetCamera = useCallback(() => {
    controlsRef.current?.resetCamera();
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

    const width = container.clientWidth || 440;
    const height = container.clientHeight || 440;
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 1.2, 5.2);
    camera.lookAt(0, 0, 0);

    // Ambient & Point Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const frontLight = new THREE.DirectionalLight(0x8b5cf6, 1.4);
    frontLight.position.set(2, 4, 3);
    scene.add(frontLight);

    const backGlow = new THREE.PointLight(0x6366f1, 2, 10);
    backGlow.position.set(-2, -2, -2);
    scene.add(backGlow);

    // Brain Root Group
    const brainGroup = new THREE.Group();
    scene.add(brainGroup);

    // 1. Procedural Neural Points Cloud
    const particlePositions = createBrainParticles();
    const geom = new THREE.BufferGeometry().setFromPoints(particlePositions);
    const particleMat = new THREE.PointsMaterial({
      color: 0x818cf8,
      size: 0.052,
      transparent: true,
      opacity: 0.65,
      blending: THREE.AdditiveBlending,
    });
    const brainPoints = new THREE.Points(geom, particleMat);
    brainGroup.add(brainPoints);

    // 2. Neural Filament Pathways (Curved lines connecting random neural centers)
    const lineGeom = new THREE.BufferGeometry();
    const linePositions = [];
    for (let i = 0; i < particlePositions.length; i += 7) {
      const p1 = particlePositions[i];
      const p2 = particlePositions[(i + 13) % particlePositions.length];
      if (p1.distanceTo(p2) < 1.1) {
        linePositions.push(p1.x, p1.y, p1.z);
        linePositions.push(p2.x, p2.y, p2.z);
      }
    }
    lineGeom.setAttribute("position", new THREE.Float32BufferAttribute(linePositions, 3));
    const lineMat = new THREE.LineBasicMaterial({
      color: 0xa5b4fc,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending,
    });
    const neuralLines = new THREE.LineSegments(lineGeom, lineMat);
    brainGroup.add(neuralLines);

    // 3. Interactive Glowing Beacon Spheres for each brain region
    const beaconMeshes = [];
    BRAIN_REGIONS.forEach((region) => {
      const beaconGroup = new THREE.Group();
      beaconGroup.position.set(...region.coords);

      // Inner solid core
      const coreGeom = new THREE.SphereGeometry(0.12, 16, 16);
      const coreMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(region.color),
      });
      const coreMesh = new THREE.Mesh(coreGeom, coreMat);
      beaconGroup.add(coreMesh);

      // Outer pulsating glow halo
      const haloGeom = new THREE.SphereGeometry(0.24, 16, 16);
      const haloMat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(region.color),
        transparent: true,
        opacity: 0.35,
        wireframe: true,
      });
      const haloMesh = new THREE.Mesh(haloGeom, haloMat);
      beaconGroup.add(haloMesh);

      beaconGroup.userData = { id: region.id, halo: haloMesh };
      brainGroup.add(beaconGroup);
      beaconMeshes.push(beaconGroup);
    });

    // Raycaster for clicking 3D beacons
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onPointerDown = (event) => {
      const rect = renderer.domElement.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(brainGroup.children, true);

      for (let hit of intersects) {
        let parent = hit.object.parent;
        if (parent && parent.userData?.id) {
          handleRegionSelect(parent.userData.id);
          break;
        }
      }
    };

    renderer.domElement.addEventListener("pointerdown", onPointerDown);

    // Drag-to-rotate interaction handling
    let isDragging = false;
    let prevMouseX = 0;
    let prevMouseY = 0;
    let autoSpin = true;
    let targetRotationX = 0.25;
    let targetRotationY = 0.6;

    const onStartDrag = (e) => {
      isDragging = true;
      prevMouseX = e.clientX || e.touches?.[0]?.clientX || 0;
      prevMouseY = e.clientY || e.touches?.[0]?.clientY || 0;
    };

    const onMoveDrag = (e) => {
      if (!isDragging) return;
      const clientX = e.clientX || e.touches?.[0]?.clientX || 0;
      const clientY = e.clientY || e.touches?.[0]?.clientY || 0;
      const deltaX = clientX - prevMouseX;
      const deltaY = clientY - prevMouseY;

      targetRotationY += deltaX * 0.008;
      targetRotationX += deltaY * 0.008;
      targetRotationX = Math.max(-0.8, Math.min(0.8, targetRotationX));

      prevMouseX = clientX;
      prevMouseY = clientY;
    };

    const onEndDrag = () => {
      isDragging = false;
    };

    const el = renderer.domElement;
    el.addEventListener("mousedown", onStartDrag);
    window.addEventListener("mousemove", onMoveDrag);
    window.addEventListener("mouseup", onEndDrag);

    el.addEventListener("touchstart", onStartDrag, { passive: true });
    window.addEventListener("touchmove", onMoveDrag, { passive: true });
    window.addEventListener("touchend", onEndDrag);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      if (autoSpin && !isDragging) {
        targetRotationY += 0.004;
      }

      // Smooth dampening towards target rotation
      brainGroup.rotation.y += (targetRotationY - brainGroup.rotation.y) * 0.08;
      brainGroup.rotation.x += (targetRotationX - brainGroup.rotation.x) * 0.08;

      // Pulse the beacon halos
      beaconMeshes.forEach((beacon) => {
        const pulse = 1 + 0.15 * Math.sin(elapsed * 4 + beacon.position.x);
        beacon.userData.halo.scale.set(pulse, pulse, pulse);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Resize Observer
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    controlsRef.current = {
      focusRegion: (id) => {
        const target = BRAIN_REGIONS.find((r) => r.id === id);
        if (target) {
          // Orient the brain to look right at the target's coordinates
          const [x, , z] = target.coords;
          targetRotationY = -Math.atan2(x, z);
          targetRotationX = 0.2;
        }
      },
      setAutoRotate: (active) => {
        autoSpin = active;
      },
      resetCamera: () => {
        targetRotationX = 0.25;
        targetRotationY = 0.6;
      },
    };

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", onMoveDrag);
      window.removeEventListener("mouseup", onEndDrag);
      window.removeEventListener("touchmove", onMoveDrag);
      window.removeEventListener("touchend", onEndDrag);
      el.removeEventListener("pointerdown", onPointerDown);
      el.removeEventListener("mousedown", onStartDrag);
      el.removeEventListener("touchstart", onStartDrag);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [handleRegionSelect]);

  return (
    <section className="brain-interactive-section" id="brain">
      <div className="learning-wrap">
        <header className="chapter-browser-heading">
          <span className="kicker">3D Neural Architecture</span>
          <h2>How Your Brain Navigates High-Emotion Moments</h2>
          <p>
            Emotions aren’t character flaws — they are electrical and neurochemical
            signals passing between primitive alarm systems and your conscious mind.
            Rotate the 3D brain to explore the 5 core centers of emotional intelligence.
          </p>
        </header>

        <div className="brain-stage-row">
          {/* Left: 3D Interactive Canvas */}
          <div className="brain-canvas-card">
            <div className="brain-canvas-container" ref={containerRef}>
              {fallback && (
                <div className="brain-fallback-msg">
                  <span>🧠 3D Brain Anatomy View</span>
                </div>
              )}

              {/* HUD Controls */}
              <div className="brain-hud-controls">
                <button
                  type="button"
                  className="hud-btn"
                  title="Re-center View"
                  onClick={handleResetCamera}
                >
                  ⌖ Center
                </button>
                <button
                  type="button"
                  className={`hud-btn ${autoRotate ? "hud-active" : ""}`}
                  title={autoRotate ? "Pause Rotation" : "Resume Auto-Spin"}
                  onClick={toggleAutoRotate}
                >
                  {autoRotate ? "⏸ Pause" : "▶ Spin"}
                </button>
              </div>

              <div className="brain-gesture-hint">
                <span>Drag to rotate • Tap beacon to inspect</span>
              </div>
            </div>

            {/* Brain Center Pill Buttons */}
            <div className="brain-pills-bar" role="tablist" aria-label="Select brain region">
              {BRAIN_REGIONS.map((region) => {
                const isSelected = region.id === selectedRegionId;
                return (
                  <button
                    key={region.id}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    className={`brain-pill-btn ${isSelected ? "is-active" : ""}`}
                    style={{
                      "--region-color": region.color,
                      "--region-tint": region.tint,
                    }}
                    onClick={() => handleRegionSelect(region.id)}
                  >
                    <span className="pill-beacon-dot" />
                    <span>{region.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Region Detail Card */}
          <div className="brain-inspector-card">
            <div
              className="brain-region-card"
              style={{
                "--region-accent": selectedRegion.color,
                "--region-tint": selectedRegion.tint,
              }}
            >
              <div className="brain-card-header">
                <span className="brain-region-badge">
                  {selectedRegion.role}
                </span>
                <h3 className="brain-region-name">{selectedRegion.name}</h3>
                <p className="brain-region-subtitle">{selectedRegion.subtitle}</p>
              </div>

              <div className="brain-card-block mechanism-block">
                <strong>⚙️ What Happens Biologically:</strong>
                <p>{selectedRegion.mechanism}</p>
              </div>

              <div className="brain-card-block stress-block">
                <strong>⚡ Under High Stress / Threat:</strong>
                <p>{selectedRegion.stressResponse}</p>
              </div>

              <div className="brain-card-block eq-move-block">
                <strong>✨ High-EQ Practice Move:</strong>
                <p>{selectedRegion.highEqMove}</p>
              </div>

              <div className="brain-card-quote">
                <p>{selectedRegion.quote}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
