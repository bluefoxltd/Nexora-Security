import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Eye, EyeOff, Shield, Activity, RotateCcw, Compass } from 'lucide-react';

interface HeroScene3DProps {
  onExploreServices: () => void;
  onExploreTraining: () => void;
}

export const HeroScene3D: React.FC<HeroScene3DProps> = ({
  onExploreServices,
  onExploreTraining
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);
  const [hudCollapsed, setHudCollapsed] = useState<boolean>(false);
  const [coreMode, setCoreMode] = useState<'shield' | 'scanner' | 'trace'>('shield');
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [parallaxEnabled, setParallaxEnabled] = useState<boolean>(true);

  // Mutable refs for Three.js render loop to avoid re-renders
  const stateRef = useRef({
    coreMode: 'shield',
    rotationSpeed: 1,
    parallaxEnabled: true,
    mouseTarget: { x: 0, y: 0 },
    mouseCurrent: { x: 0, y: 0 }
  });

  useEffect(() => {
    stateRef.current.coreMode = coreMode;
    stateRef.current.rotationSpeed = rotationSpeed;
    stateRef.current.parallaxEnabled = parallaxEnabled;
  }, [coreMode, rotationSpeed, parallaxEnabled]);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check WebGL availability
    const checkWebGL = (): boolean => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch {
        return false;
      }
    };

    if (!checkWebGL()) {
      setWebGLSupported(false);
      return;
    }

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 580;

    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050505, 0.08);

    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8.2);

    // 3. Renderer Setup
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
    } catch {
      setWebGLSupported(false);
      return;
    }

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;

    container.appendChild(renderer.domElement);

    // 4. Lighting Rig
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const hemisphereLight = new THREE.HemisphereLight(0xff243d, 0x050505, 0.8);
    scene.add(hemisphereLight);

    const coreLight = new THREE.PointLight(0xff243d, 3.5, 12, 1.2);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 6, 7);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xff243d, 1.8);
    rimLight.position.set(-6, -4, -4);
    scene.add(rimLight);

    // 5. Procedural 3D Composite Model (THREE.Group with 3-12 parts)
    const masterGroup = new THREE.Group();
    scene.add(masterGroup);

    // Part 1: Central Solid Faceted Core (Dodecahedron)
    const innerCoreGeo = new THREE.DodecahedronGeometry(1.2, 1);
    const innerCoreMat = new THREE.MeshStandardMaterial({
      color: 0x0f0f14,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0x33050a,
      wireframe: false
    });
    const innerCoreMesh = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    masterGroup.add(innerCoreMesh);

    // Part 2: Inner Core Wireframe Lattice
    const innerWireGeo = new THREE.DodecahedronGeometry(1.22, 1);
    const innerWireMat = new THREE.MeshBasicMaterial({
      color: 0xff243d,
      wireframe: true,
      transparent: true,
      opacity: 0.45
    });
    const innerWireMesh = new THREE.Mesh(innerWireGeo, innerWireMat);
    masterGroup.add(innerWireMesh);

    // Part 3: Outer Geodesic Security Shield (Icosahedron)
    const shieldGeo = new THREE.IcosahedronGeometry(2.0, 2);
    const shieldMat = new THREE.MeshStandardMaterial({
      color: 0xff243d,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      roughness: 0.2,
      metalness: 0.9
    });
    const shieldMesh = new THREE.Mesh(shieldGeo, shieldMat);
    masterGroup.add(shieldMesh);

    // Part 4: Orbital Ring A (Tilted Torus)
    const ringAGeo = new THREE.TorusGeometry(2.6, 0.02, 16, 100);
    const ringAMat = new THREE.MeshStandardMaterial({
      color: 0xff243d,
      metalness: 0.9,
      roughness: 0.1,
      emissive: 0xaa1020
    });
    const ringAMesh = new THREE.Mesh(ringAGeo, ringAMat);
    ringAMesh.rotation.x = Math.PI / 3;
    ringAMesh.rotation.y = Math.PI / 6;
    masterGroup.add(ringAMesh);

    // Part 5: Orbital Ring B (Counter-tilt Torus)
    const ringBGeo = new THREE.TorusGeometry(3.1, 0.015, 16, 120);
    const ringBMat = new THREE.MeshStandardMaterial({
      color: 0xa1a1aa,
      metalness: 0.8,
      roughness: 0.3,
      transparent: true,
      opacity: 0.6
    });
    const ringBMesh = new THREE.Mesh(ringBGeo, ringBMat);
    ringBMesh.rotation.x = -Math.PI / 4;
    ringBMesh.rotation.z = Math.PI / 4;
    masterGroup.add(ringBMesh);

    // Part 6: Equatorial Scanning Disc
    const scanRingGeo = new THREE.RingGeometry(1.8, 3.4, 64);
    const scanRingMat = new THREE.MeshBasicMaterial({
      color: 0xff243d,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.12,
      wireframe: true
    });
    const scanRingMesh = new THREE.Mesh(scanRingGeo, scanRingMat);
    scanRingMesh.rotation.x = Math.PI / 2;
    masterGroup.add(scanRingMesh);

    // Part 7: Network Nodes (Small Spheres along orbits)
    const nodeCount = 18;
    const nodeGeo = new THREE.SphereGeometry(0.07, 12, 12);
    const nodeMat = new THREE.MeshBasicMaterial({ color: 0xff243d });
    const nodesGroup = new THREE.Group();

    const nodeOffsets: { angle: number; radius: number; speed: number; y: number }[] = [];
    for (let i = 0; i < nodeCount; i++) {
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      const angle = (i / nodeCount) * Math.PI * 2;
      const radius = 2.4 + (i % 3) * 0.4;
      const y = (Math.sin(i * 1.5) * 0.9);
      nodeOffsets.push({ angle, radius, speed: 0.4 + (i % 4) * 0.2, y });
      nodeMesh.position.set(Math.cos(angle) * radius, y, Math.sin(angle) * radius);
      nodesGroup.add(nodeMesh);
    }
    masterGroup.add(nodesGroup);

    // Part 8: Orbiting Red Data Packets (High speed signal beacons)
    const packetCount = 6;
    const packetGeo = new THREE.SphereGeometry(0.05, 8, 8);
    const packetMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const packetGroup = new THREE.Group();
    const packetMeshes: THREE.Mesh[] = [];

    for (let i = 0; i < packetCount; i++) {
      const pMesh = new THREE.Mesh(packetGeo, packetMat);
      packetGroup.add(pMesh);
      packetMeshes.push(pMesh);
    }
    masterGroup.add(packetGroup);

    // Part 9: Cyber Telemetry Particle Field
    const particleCount = 280;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 10;
      particlePositions[i + 2] = (Math.random() - 0.5) * 14;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xff243d,
      size: 0.045,
      transparent: true,
      opacity: 0.5
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Interaction & Parallax Handlers
    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      stateRef.current.mouseTarget.x = x * 0.7;
      stateRef.current.mouseTarget.y = y * 0.5;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 7. Render Loop with Stable Timestamp & Exponential Damping
    let animationFrameId: number;
    let clock = new THREE.Clock();
    let isTabVisible = true;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isTabVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      const speedMultiplier = prefersReducedMotion ? 0.2 : stateRef.current.rotationSpeed;

      // Rotate central groups
      innerCoreMesh.rotation.y += delta * 0.35 * speedMultiplier;
      innerCoreMesh.rotation.x += delta * 0.15 * speedMultiplier;
      innerWireMesh.rotation.y += delta * 0.35 * speedMultiplier;
      innerWireMesh.rotation.x += delta * 0.15 * speedMultiplier;

      shieldMesh.rotation.y -= delta * 0.25 * speedMultiplier;
      shieldMesh.rotation.z += delta * 0.1 * speedMultiplier;

      ringAMesh.rotation.z += delta * 0.4 * speedMultiplier;
      ringBMesh.rotation.y += delta * 0.3 * speedMultiplier;

      // Update node positions along orbits
      for (let i = 0; i < nodeCount; i++) {
        const offset = nodeOffsets[i];
        offset.angle += delta * offset.speed * 0.5 * speedMultiplier;
        const node = nodesGroup.children[i];
        if (node) {
          node.position.x = Math.cos(offset.angle) * offset.radius;
          node.position.z = Math.sin(offset.angle) * offset.radius;
        }
      }

      // Update data packet beacons
      const elapsed = clock.getElapsedTime() * speedMultiplier;
      packetMeshes.forEach((mesh, idx) => {
        const t = (elapsed * 1.8 + idx * 1.05) % (Math.PI * 2);
        mesh.position.x = Math.cos(t) * 2.6;
        mesh.position.y = Math.sin(t * 2) * 0.6;
        mesh.position.z = Math.sin(t) * 2.6;
      });

      // Scan ring modulation based on mode
      if (stateRef.current.coreMode === 'scanner') {
        scanRingMesh.rotation.z += delta * 1.2 * speedMultiplier;
        scanRingMat.opacity = 0.28 + Math.sin(elapsed * 4) * 0.12;
        shieldMat.opacity = 0.2;
      } else if (stateRef.current.coreMode === 'shield') {
        scanRingMesh.rotation.z += delta * 0.3 * speedMultiplier;
        scanRingMat.opacity = 0.1;
        shieldMat.opacity = 0.45 + Math.sin(elapsed * 2) * 0.1;
      } else {
        // trace mode
        scanRingMesh.rotation.z += delta * 0.7 * speedMultiplier;
        scanRingMat.opacity = 0.18;
        shieldMat.opacity = 0.3;
      }

      // Atmospheric particle drift
      particleSystem.rotation.y = elapsed * 0.03 * speedMultiplier;

      // Mouse Parallax with smooth exponential damping
      if (stateRef.current.parallaxEnabled && !prefersReducedMotion) {
        stateRef.current.mouseCurrent.x = THREE.MathUtils.damp(
          stateRef.current.mouseCurrent.x,
          stateRef.current.mouseTarget.x,
          4,
          delta
        );
        stateRef.current.mouseCurrent.y = THREE.MathUtils.damp(
          stateRef.current.mouseCurrent.y,
          stateRef.current.mouseTarget.y,
          4,
          delta
        );

        masterGroup.rotation.y = stateRef.current.mouseCurrent.x * 0.55;
        masterGroup.rotation.x = -stateRef.current.mouseCurrent.y * 0.4;
      }

      renderer.render(scene, camera);
    };

    // Pre-warm shader pipeline
    renderer.compile(scene, camera);
    animate();

    // 8. Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight || 580;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handlePointerMove);
      document.removeEventListener('visibilitychange', handleVisibilityChange);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometries & materials
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      innerWireGeo.dispose();
      innerWireMat.dispose();
      shieldGeo.dispose();
      shieldMat.dispose();
      ringAGeo.dispose();
      ringAMat.dispose();
      ringBGeo.dispose();
      ringBMat.dispose();
      scanRingGeo.dispose();
      scanRingMat.dispose();
      nodeGeo.dispose();
      nodeMat.dispose();
      packetGeo.dispose();
      packetMat.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden min-h-[640px] lg:min-h-[720px] flex flex-col items-center justify-between pt-6 pb-4">
      {/* Background Cyber Ambient Radiance */}
      <div 
        className="absolute inset-0 pointer-events-none cyber-grid opacity-25" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF243D]/10 rounded-full blur-[140px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top Header Content Overlay */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
        {/* Eyebrow kicker with clean typography */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#FF243D] uppercase">
          <span>Advanced Cybersecurity &amp; Digital Defense</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.12] text-balance">
          Secure the Digital World.
          <span className="block text-[#FF243D] mt-1">Build. Defend. Evolve.</span>
        </h1>

        {/* Supporting description */}
        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed text-balance">
          Nexora Security empowers businesses, organizations, and individuals with advanced cybersecurity, 
          professional security training, and innovative digital solutions to navigate an increasingly connected world with confidence.
        </p>

        {/* Primary & Secondary Call to Actions */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            onClick={onExploreServices}
            className="px-6 py-3 text-sm font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-all duration-200 shadow-lg shadow-[#FF243D]/25 hover:shadow-[#FF243D]/40 cursor-pointer whitespace-nowrap"
          >
            Explore Our Services &rarr;
          </button>
          <button
            onClick={onExploreTraining}
            className="px-6 py-3 text-sm font-semibold text-white bg-[#111114] hover:bg-[#18181c] border border-white/10 hover:border-[#FF243D]/40 rounded-lg transition-all duration-200 cursor-pointer whitespace-nowrap"
          >
            Explore Cybersecurity Training
          </button>
        </div>
      </div>

      {/* Central 3D Canvas Viewport (100% Unobstructed Center) */}
      <div className="relative w-full h-[360px] sm:h-[420px] lg:h-[460px] my-2 flex items-center justify-center">
        {webGLSupported ? (
          <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
        ) : (
          /* WebGL Fallback Container */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
            <div className="w-48 h-48 rounded-full border border-[#FF243D]/40 flex items-center justify-center bg-[#111114]/90 relative">
              <div className="w-32 h-32 rounded-full border border-white/10 border-dashed animate-spin" />
              <Shield className="w-16 h-16 text-[#FF243D] absolute" />
            </div>
            <p className="text-xs text-[#A1A1AA] mt-4 font-mono">
              Nexora Neural Defense Matrix — Operational
            </p>
          </div>
        )}
      </div>

      {/* Unified Bottom Control Dock (Adheres strictly to ThreeJS ergonomic UI standard:
          - Pin to bottom center
          - Collapsible drawer
          - No side floating cards
          - Clean static indicators, no pulsating dots) */}
      <div className="relative z-20 w-full max-w-2xl mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Collapse/Expand Drawer Toggle */}
          <button
            onClick={() => setHudCollapsed(!hudCollapsed)}
            className="text-[11px] font-mono tracking-wider text-[#A1A1AA] hover:text-white px-3 py-1 bg-[#111114] border border-b-0 border-white/10 rounded-t-md transition-colors flex items-center gap-1.5 cursor-pointer"
            aria-label={hudCollapsed ? 'Expand 3D core controls' : 'Collapse 3D core controls'}
          >
            {hudCollapsed ? <Eye className="w-3 h-3 text-[#FF243D]" /> : <EyeOff className="w-3 h-3 text-[#A1A1AA]" />}
            <span>{hudCollapsed ? 'Show 3D Telemetry Controls' : 'Hide Controls'}</span>
          </button>

          {/* Main Bottom HUD Dock */}
          {!hudCollapsed && (
            <div className="w-full p-2.5 sm:p-3 bg-[#0B0B0F]/95 border border-white/10 rounded-xl shadow-2xl flex flex-wrap items-center justify-between gap-3 text-xs">
              {/* Core Mode Segmented Buttons */}
              <div className="flex items-center gap-1 bg-[#111114] p-1 rounded-lg border border-white/5">
                <button
                  onClick={() => setCoreMode('shield')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    coreMode === 'shield'
                      ? 'bg-[#FF243D] text-white shadow-sm'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Shield className="w-3 h-3" />
                    <span>Shield Matrix</span>
                  </span>
                </button>
                <button
                  onClick={() => setCoreMode('scanner')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    coreMode === 'scanner'
                      ? 'bg-[#FF243D] text-white shadow-sm'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3 h-3" />
                    <span>Scan Sweep</span>
                  </span>
                </button>
                <button
                  onClick={() => setCoreMode('trace')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                    coreMode === 'trace'
                      ? 'bg-[#FF243D] text-white shadow-sm'
                      : 'text-[#A1A1AA] hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <Compass className="w-3 h-3" />
                    <span>Node Telemetry</span>
                  </span>
                </button>
              </div>

              {/* Sliders and Toggles */}
              <div className="flex items-center gap-3 ml-auto text-[11px] text-[#A1A1AA]">
                {/* Parallax Toggle */}
                <button
                  onClick={() => setParallaxEnabled(!parallaxEnabled)}
                  className={`px-2.5 py-1 rounded border transition-colors cursor-pointer ${
                    parallaxEnabled
                      ? 'border-[#FF243D]/40 text-white bg-[#FF243D]/10'
                      : 'border-white/10 text-[#A1A1AA]'
                  }`}
                  title="Enable or disable mouse parallax rotation"
                >
                  Parallax: {parallaxEnabled ? 'Active' : 'Off'}
                </button>

                {/* Speed Multiplier */}
                <div className="flex items-center gap-1.5">
                  <span>Speed:</span>
                  <button
                    onClick={() => setRotationSpeed(s => (s === 1 ? 1.5 : s === 1.5 ? 0.5 : 1))}
                    className="px-2 py-0.5 rounded bg-[#111114] border border-white/10 text-white hover:border-[#FF243D]/40 transition-colors font-mono cursor-pointer"
                  >
                    {rotationSpeed}x
                  </button>
                </div>

                {/* Reset Camera State */}
                <button
                  onClick={() => {
                    setCoreMode('shield');
                    setRotationSpeed(1);
                    setParallaxEnabled(true);
                  }}
                  className="p-1 rounded text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                  title="Reset 3D scene parameters"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
