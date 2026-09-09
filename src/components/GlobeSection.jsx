import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const experiences = [
  "I feel supported.",
  "I’m under pressure.",
  "I’m still figuring things out.",
];

export default function GlobeSection() {
  const [view, setView] = useState("reported");
  const [fallback, setFallback] = useState(false);
  const containerRef = useRef(null);
  const controlsRef = useRef(null);
  const personal = view === "personal";

  useEffect(() => {
    const container = containerRef.current;
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
    const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 20);
    camera.position.z = 3.1;
    const group = new THREE.Group();
    scene.add(group);
    const sphereGeometry = new THREE.SphereGeometry(1, 64, 40);
    const textureCanvas = document.createElement("canvas");
    textureCanvas.width = textureCanvas.height = 256;
    const context = textureCanvas.getContext("2d");
    const gradient = context.createLinearGradient(0, 0, 256, 256);
    gradient.addColorStop(0, "#6ef3dc");
    gradient.addColorStop(0.45, "#4384ef");
    gradient.addColorStop(1, "#603ac5");
    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);
    const texture = new THREE.CanvasTexture(textureCanvas);
    texture.colorSpace = THREE.SRGBColorSpace;
    const sphereMaterial = new THREE.MeshPhongMaterial({
      map: texture,
      shininess: 55,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    group.add(sphere);
    scene.add(new THREE.AmbientLight(0xffffff, 1.8));
    const light = new THREE.DirectionalLight(0xffffff, 2.4);
    light.position.set(-3, 4, 5);
    scene.add(light);
    const dotGeometry = new THREE.SphereGeometry(0.024, 12, 8);
    const dots = Array.from({ length: 42 }, (_, index) => {
      const y = 1 - ((index + 0.5) / 42) * 2;
      const radius = Math.sqrt(1 - y * y);
      const angle = index * Math.PI * (3 - Math.sqrt(5));
      const dot = new THREE.Mesh(
        dotGeometry,
        new THREE.MeshBasicMaterial({ color: 0xffd85a }),
      );
      dot.position
        .set(Math.cos(angle) * radius, y, Math.sin(angle) * radius)
        .multiplyScalar(1.012);
      group.add(dot);
      return dot;
    });
    // Render only after an interaction or resize; no idle animation loop.
    const render = () => renderer.render(scene, camera);
    let personalMode = false;
    const rotate = (amount) => {
      group.rotation.y += amount;
      render();
    };
    controlsRef.current = {
      rotate,
      setPersonal(value) {
        personalMode = value;
        dots.forEach((dot) => {
          dot.visible = !value;
        });
        sphereMaterial.color.set(value ? 0xb5bce8 : 0xffffff);
        render();
      },
    };
    const resize = () => {
      const width = Math.max(1, container.clientWidth);
      const height = Math.max(1, container.clientHeight);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      render();
    };
    const observer = new ResizeObserver(resize);
    observer.observe(container);
    resize();
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();
    let drag = null;
    function down(event) {
      if (!event.isPrimary || event.button !== 0) return;
      drag = {
        id: event.pointerId,
        startX: event.clientX,
        startY: event.clientY,
        x: event.clientX,
        moved: false,
      };
      canvas.setPointerCapture(event.pointerId);
    }
    function move(event) {
      if (!drag || drag.id !== event.pointerId) return;
      if (
        Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) > 5
      )
        drag.moved = true;
      rotate((event.clientX - drag.x) * 0.008);
      drag.x = event.clientX;
    }
    function up(event) {
      if (!drag || drag.id !== event.pointerId) return;
      if (!drag.moved && !personalMode) {
        const rect = canvas.getBoundingClientRect();
        pointer.set(
          ((event.clientX - rect.left) / rect.width) * 2 - 1,
          -((event.clientY - rect.top) / rect.height) * 2 + 1,
        );
        raycaster.setFromCamera(pointer, camera);
        // Include the sphere to prevent selecting lights on its hidden side.
        const hit = raycaster.intersectObjects([sphere, ...dots])[0]?.object;
        if (hit && hit !== sphere) {
          hit.userData.active = !hit.userData.active;
          hit.material.color.set(hit.userData.active ? 0xff5caa : 0xffd85a);
          hit.scale.setScalar(hit.userData.active ? 1.5 : 1);
          render();
        }
      }
      drag = null;
      if (canvas.hasPointerCapture(event.pointerId))
        canvas.releasePointerCapture(event.pointerId);
    }
    const cancel = () => {
      drag = null;
    };
    const lostContext = (event) => {
      event.preventDefault();
      setFallback(true);
    };
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointercancel", cancel);
    canvas.addEventListener("lostpointercapture", cancel);
    canvas.addEventListener("webglcontextlost", lostContext);
    return () => {
      observer.disconnect();
      controlsRef.current = null;
      canvas.removeEventListener("pointerdown", down);
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerup", up);
      canvas.removeEventListener("pointercancel", cancel);
      canvas.removeEventListener("lostpointercapture", cancel);
      canvas.removeEventListener("webglcontextlost", lostContext);
      sphereGeometry.dispose();
      sphereMaterial.dispose();
      texture.dispose();
      dotGeometry.dispose();
      dots.forEach((dot) => dot.material.dispose());
      renderer.dispose();
      canvas.remove();
    };
  }, []);

  useEffect(() => {
    controlsRef.current?.setPersonal(personal);
  }, [personal]);

  return (
    <section className="world" id="world">
      <div className="wrap">
        <span className="kicker">The world and you</span>
        <h2>A happiness score doesn’t tell your whole story.</h2>
        <p className="lead">
          You can live in a happy country and still feel stressed, lonely or
          misunderstood. Your own experience matters.
        </p>
        <div
          className="toggle"
          role="group"
          aria-label="Explore two perspectives"
        >
          <button
            type="button"
            className={!personal ? "active" : ""}
            aria-pressed={!personal}
            aria-controls="world-perspective"
            onClick={() => setView("reported")}
          >
            What numbers show
          </button>
          <button
            type="button"
            className={personal ? "active" : ""}
            aria-pressed={personal}
            aria-controls="world-perspective"
            onClick={() => setView("personal")}
          >
            What numbers miss
          </button>
        </div>
        <div className={`globe-wrap ${personal ? "personal-world" : ""}`}>
          <div
            ref={containerRef}
            className={`globe-stage ${fallback ? "globe-stage-fallback" : ""}`}
            aria-hidden="true"
          />
          {personal && (
            <ul
              className="world-experiences"
              aria-label="Examples of personal experiences"
            >
              {experiences.map((experience) => (
                <li key={experience}>{experience}</li>
              ))}
            </ul>
          )}
        </div>
        <div
          className="globe-rotation"
          aria-label="Rotate the illustrative globe"
        >
          {!fallback && (
            <>
              <button
                aria-label="Rotate globe left"
                onClick={() => controlsRef.current?.rotate(-0.35)}
              >
                ←
              </button>
              <span>Drag sideways to rotate</span>
              <button
                aria-label="Rotate globe right"
                onClick={() => controlsRef.current?.rotate(0.35)}
              >
                →
              </button>
            </>
          )}
        </div>
        <div id="world-perspective" aria-live="polite" aria-atomic="true">
          <p className="world-caption">
            {personal
              ? "Illustrative personal experiences"
              : "Illustration — not actual country data"}
          </p>
          <p className="world-message">
            {personal
              ? "People in the same place can feel very differently. A country’s score cannot tell you what someone is going through."
              : "Surveys help us understand how people in a country feel about their lives overall. These lights are decorative, not country scores."}
          </p>
        </div>
        <div className="world-invitation">
          <p>Let’s start with you.</p>
          <a className="primary" href="#journey">
            How are you feeling today? →
          </a>
        </div>
      </div>
    </section>
  );
}
