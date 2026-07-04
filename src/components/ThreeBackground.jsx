'use client';
import { useEffect, useRef } from 'react';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    let THREE, scene, camera, renderer, particles, lines, animId;
    let mouse = { x: 0, y: 0 };

    const init = async () => {
      THREE = await import('three');
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 5;

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      renderer.setClearColor(0x000000, 0);
      mountRef.current?.appendChild(renderer.domElement);

      // Particle field
      const geo = new THREE.BufferGeometry();
      const count = 2000;
      const pos = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const palette = [
        [0, 0.96, 1], [0.47, 0, 1], [0, 1, 0.53], [1, 0, 0.5]
      ];
      for (let i = 0; i < count; i++) {
        pos[i * 3] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
        const c = palette[Math.floor(Math.random() * palette.length)];
        colors[i * 3] = c[0]; colors[i * 3 + 1] = c[1]; colors[i * 3 + 2] = c[2];
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      const mat = new THREE.PointsMaterial({ size: 0.02, vertexColors: true, transparent: true, opacity: 0.7 });
      particles = new THREE.Points(geo, mat);
      scene.add(particles);

      // Wireframe torus
      const torusGeo = new THREE.TorusKnotGeometry(2, 0.4, 120, 20);
      const torusMat = new THREE.MeshBasicMaterial({ color: 0x00f5ff, wireframe: true, transparent: true, opacity: 0.06 });
      lines = new THREE.Mesh(torusGeo, torusMat);
      scene.add(lines);

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      const onMouse = (e) => {
        mouse.x = (e.clientX / window.innerWidth - 0.5) * 0.5;
        mouse.y = -(e.clientY / window.innerHeight - 0.5) * 0.5;
      };
      window.addEventListener('resize', onResize);
      window.addEventListener('mousemove', onMouse);

      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.004;
        particles.rotation.y = t * 0.05 + mouse.x * 0.3;
        particles.rotation.x = mouse.y * 0.2;
        lines.rotation.x = t * 0.3;
        lines.rotation.y = t * 0.5;
        renderer.render(scene, camera);
      };
      animate();
    };

    init();
    return () => {
      cancelAnimationFrame(animId);
      if (renderer) { renderer.dispose(); mountRef.current?.removeChild(renderer.domElement); }
    };
  }, []);

  return (
    <div ref={mountRef} style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }} />
  );
}
