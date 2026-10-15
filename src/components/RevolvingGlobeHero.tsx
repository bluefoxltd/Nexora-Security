import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { RoutePath } from '../types.ts';
import { 
  Crosshair, 
  ShieldCheck, 
  Code2, 
  GraduationCap, 
  ArrowRight,
  Shield
} from 'lucide-react';

import avatar1 from '../assets/images/avatar_profile_1_1792081751875.jpg';
import avatar2 from '../assets/images/avatar_profile_2_1792081752179.jpg';
import avatar3 from '../assets/images/avatar_profile_3_1792081752693.jpg';
import avatar4 from '../assets/images/avatar_profile_4_1792081752988.jpg';

interface RevolvingGlobeHeroProps {
  onNavigate: (path: RoutePath, state?: { enquiryType?: string }) => void;
}

export const RevolvingGlobeHero: React.FC<RevolvingGlobeHeroProps> = ({ onNavigate }) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);

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

    const width = container.clientWidth || 800;
    const height = container.clientHeight || 560;

    // Scene & Camera
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);

    // Dynamic framing so globe, atmosphere, and arcs are 100% visible and NEVER cropped
    const updateCameraDistance = (cam: THREE.PerspectiveCamera, w: number, h: number) => {
      const aspect = w / h;
      const boundRadius = 2.45;
      const vFovRad = (cam.fov * Math.PI) / 360;
      const distV = boundRadius / Math.sin(vFovRad);
      const hFovRad = Math.atan(Math.tan(vFovRad) * aspect);
      const distH = boundRadius / Math.sin(Math.max(hFovRad, 0.1));
      cam.position.set(0, 0, Math.max(distV, distH) * 1.08);
    };

    updateCameraDistance(camera, width, height);

    // Renderer
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
    renderer.toneMappingExposure = 1.35;

    container.appendChild(renderer.domElement);

    // Master Globe Rotation Group
    const globeMaster = new THREE.Group();
    // Subtle axial tilt
    globeMaster.rotation.z = -0.15;
    globeMaster.rotation.x = 0.2;
    scene.add(globeMaster);

    const radius = 1.68;

    // 1. Dark Solid Occlusion Sphere (Deep space black with dark crimson specular)
    const baseSphereGeo = new THREE.SphereGeometry(radius * 0.995, 64, 64);
    const baseSphereMat = new THREE.MeshBasicMaterial({
      color: 0x060609
    });
    const baseSphere = new THREE.Mesh(baseSphereGeo, baseSphereMat);
    globeMaster.add(baseSphere);

    // 2. High-Density Realistic Continental Dot Matrix Points
    // Generates the exact point-cloud landmass distribution from download.webp in pure RED
    const isLand = (lat: number, lon: number): boolean => {
      // Coordinate bounding boxes for continents
      // North America
      if (lat >= 15 && lat <= 72 && lon >= -168 && lon <= -52) {
        if (lat < 30 && lon < -105) return false;
        if (lat > 50 && lon > -55) return false;
        return true;
      }
      // South America
      if (lat >= -56 && lat <= 13 && lon >= -82 && lon <= -34) {
        if (lat < -20 && lon > -40) return false;
        return true;
      }
      // Europe
      if (lat >= 35 && lat <= 71 && lon >= -10 && lon <= 40) return true;
      // Africa
      if (lat >= -35 && lat <= 37 && lon >= -18 && lon <= 51) {
        if (lat < 0 && lon < 10) return false;
        return true;
      }
      // Asia & India & Nepal (Kathmandu: 27.7N, 85.3E)
      if (lat >= 5 && lat <= 75 && lon >= 40 && lon <= 150) {
        if (lat < 10 && lon < 95) return false;
        return true;
      }
      // Japan
      if (lat >= 30 && lat <= 45 && lon >= 129 && lon <= 146) return true;
      // Australia & New Zealand
      if (lat >= -44 && lat <= -10 && lon >= 112 && lon <= 154) return true;
      if (lat >= -47 && lat <= -34 && lon >= 166 && lon <= 179) return true;
      // Greenland
      if (lat >= 60 && lat <= 83 && lon >= -72 && lon <= -18) return true;

      return false;
    };

    // Calculate spherical 3D points
    const pointsList: number[] = [];
    const colorsList: number[] = [];
    const latStep = 1.4; // Regular latitude rings
    const lonStep = 1.6; // Regular longitude spacing

    const cBright = new THREE.Color(0xff4a5a); // vibrant cyber red
    const cDeep = new THREE.Color(0xd91f36);   // deep red
    const cHot = new THREE.Color(0xffffff);    // hot white-red core

    for (let lat = -85; lat <= 85; lat += latStep) {
      const phi = (90 - lat) * (Math.PI / 180);
      const circumferenceAtLat = Math.cos(lat * (Math.PI / 180));
      const adjustedLonStep = lonStep / Math.max(circumferenceAtLat, 0.12);

      for (let lon = -180; lon < 180; lon += adjustedLonStep) {
        if (isLand(lat, lon)) {
          // Jitter slightly for natural digital raster aesthetic
          const jLat = lat + (Math.random() - 0.5) * 0.2;
          const jLon = lon + (Math.random() - 0.5) * 0.2;
          const rPhi = (90 - jLat) * (Math.PI / 180);
          const rTheta = (jLon + 180) * (Math.PI / 180);

          const px = -radius * Math.sin(rPhi) * Math.cos(rTheta);
          const py = radius * Math.cos(rPhi);
          const pz = radius * Math.sin(rPhi) * Math.sin(rTheta);

          pointsList.push(px, py, pz);

          // Color variation matching image (dense glowing points)
          const rand = Math.random();
          if (rand > 0.88) {
            colorsList.push(cHot.r, cHot.g, cHot.b);
          } else if (rand > 0.4) {
            colorsList.push(cBright.r, cBright.g, cBright.b);
          } else {
            colorsList.push(cDeep.r, cDeep.g, cDeep.b);
          }
        }
      }
    }

    const dotGeo = new THREE.BufferGeometry();
    dotGeo.setAttribute('position', new THREE.Float32BufferAttribute(pointsList, 3));
    dotGeo.setAttribute('color', new THREE.Float32BufferAttribute(colorsList, 3));

    // Crisp circular dot texture via canvas for razor-sharp rendering
    const createDotTexture = () => {
      const c = document.createElement('canvas');
      c.width = 32;
      c.height = 32;
      const ctx = c.getContext('2d')!;
      const grad = ctx.createRadialGradient(16, 16, 2, 16, 16, 15);
      grad.addColorStop(0, '#ffffff');
      grad.addColorStop(0.4, '#ff243d');
      grad.addColorStop(1, 'rgba(255, 36, 61, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(16, 16, 15, 0, Math.PI * 2);
      ctx.fill();
      const t = new THREE.CanvasTexture(c);
      t.colorSpace = THREE.SRGBColorSpace;
      return t;
    };

    const dotTexture = createDotTexture();
    const dotMat = new THREE.PointsMaterial({
      size: 0.042,
      map: dotTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const dotCloud = new THREE.Points(dotGeo, dotMat);
    globeMaster.add(dotCloud);

    // 3. Glowing Atmospheric Halo / Rim (Blue to Red as explicitly instructed!)
    const atmoGeo = new THREE.SphereGeometry(radius * 1.045, 64, 64);
    const atmoMat = new THREE.ShaderMaterial({
      uniforms: {
        rimColor: { value: new THREE.Color(0xff243d) } // replaced blue with red!
      },
      vertexShader: `
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 rimColor;
        varying vec3 vNormal;
        varying vec3 vPosition;
        void main() {
          vec3 viewDir = normalize(-vPosition);
          float intensity = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.2);
          gl_FragColor = vec4(rimColor, intensity * 0.95);
        }
      `,
      transparent: true,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide
    });
    const atmoMesh = new THREE.Mesh(atmoGeo, atmoMat);
    globeMaster.add(atmoMesh);

    // 4. Elegant 3D Arched Trajectory Curves (Exactly matching download.webp lines!)
    // Converts Lat/Lon to 3D point
    const latLonToVector3 = (lat: number, lon: number, r: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi),
        r * Math.sin(phi) * Math.sin(theta)
      );
    };

    const arcsGroup = new THREE.Group();
    globeMaster.add(arcsGroup);

    interface TrajectoryArc {
      curve: THREE.CubicBezierCurve3;
      line: THREE.Line;
      beaconMesh: THREE.Mesh;
      color: number;
    }

    const trajectories: TrajectoryArc[] = [];

    // Define 3 iconic flight/telemetry arcs (matching the pink, cyan, and orange routes in download.webp)
    const arcConfigs = [
      // Route 1: East Asia (Tokyo/Kathmandu) to West Coast (Matching pink line in download.webp)
      {
        start: { lat: 35.6, lon: 139.7 }, // Tokyo
        end: { lat: 37.7, lon: -122.4 },   // Silicon Valley
        color: 0xff243d, // radiant red
        altitude: 1.55
      },
      // Route 2: South Asia (Kathmandu) to Western Europe (London)
      {
        start: { lat: 27.7, lon: 85.3 },   // Kathmandu
        end: { lat: 51.5, lon: -0.1 },     // London
        color: 0xff6b81, // bright rose-red
        altitude: 1.45
      },
      // Route 3: Australia to East Asia
      {
        start: { lat: -33.8, lon: 151.2 }, // Sydney
        end: { lat: 1.3, lon: 103.8 },     // Singapore
        color: 0xff9900, // warm amber
        altitude: 1.35
      }
    ];

    arcConfigs.forEach((cfg) => {
      const p1 = latLonToVector3(cfg.start.lat, cfg.start.lon, radius);
      const p2 = latLonToVector3(cfg.end.lat, cfg.end.lon, radius);

      // Midpoints arching outward into space
      const mid = p1.clone().add(p2).multiplyScalar(0.5);
      const distance = p1.distanceTo(p2);
      mid.normalize().multiplyScalar(radius + distance * 0.32);

      const curve = new THREE.CubicBezierCurve3(
        p1,
        p1.clone().lerp(mid, 0.5).normalize().multiplyScalar(radius + distance * 0.25),
        p2.clone().lerp(mid, 0.5).normalize().multiplyScalar(radius + distance * 0.25),
        p2
      );

      const points = curve.getPoints(50);
      const curveGeo = new THREE.BufferGeometry().setFromPoints(points);
      const curveMat = new THREE.LineBasicMaterial({
        color: cfg.color,
        transparent: true,
        opacity: 0.85,
        linewidth: 2
      });
      const line = new THREE.Line(curveGeo, curveMat);
      arcsGroup.add(line);

      // Node pin spheres at both endpoints (matching the dots in download.webp)
      const pinGeo = new THREE.SphereGeometry(0.045, 12, 12);
      const pinMat1 = new THREE.MeshBasicMaterial({ color: cfg.color });
      const pinMat2 = new THREE.MeshBasicMaterial({ color: 0xffffff });

      const pin1 = new THREE.Mesh(pinGeo, pinMat1);
      pin1.position.copy(p1);
      arcsGroup.add(pin1);

      const pin2 = new THREE.Mesh(pinGeo, pinMat2);
      pin2.position.copy(p2);
      arcsGroup.add(pin2);

      // Moving light packet beacon along arc
      const beaconGeo = new THREE.SphereGeometry(0.038, 8, 8);
      const beaconMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
      const beaconMesh = new THREE.Mesh(beaconGeo, beaconMat);
      arcsGroup.add(beaconMesh);

      trajectories.push({ curve, line, beaconMesh, color: cfg.color });
    });

    // Initial position to showcase Asia/Pacific/Americas prominently like download.webp
    globeMaster.rotation.y = Math.PI * 0.45;

    // Interactive mouse parallax
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetMouseX = x * 0.35;
      targetMouseY = y * 0.25;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Render loop
    let animId: number;
    let isVisible = true;
    const clock = new THREE.Clock();

    const handleVisibility = () => {
      isVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibility);

    const animate = () => {
      animId = requestAnimationFrame(animate);
      if (!isVisible) return;

      const delta = Math.min(clock.getDelta(), 0.1);
      const speed = prefersReducedMotion ? 0.2 : 1;

      // Continuous 3D Earth Revolution
      globeMaster.rotation.y += delta * 0.18 * speed;

      // Move data packet beacons along trajectory curves
      const elapsed = clock.getElapsedTime() * speed;
      trajectories.forEach((traj, idx) => {
        const t = (elapsed * 0.4 + idx * 0.33) % 1;
        const pos = traj.curve.getPoint(t);
        traj.beaconMesh.position.copy(pos);
      });

      // Mouse Parallax with exponential damping
      mouseX = THREE.MathUtils.damp(mouseX, targetMouseX, 3, delta);
      mouseY = THREE.MathUtils.damp(mouseY, targetMouseY, 3, delta);
      globeMaster.rotation.x = 0.2 - mouseY;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight || 560;
      camera.aspect = nw / nh;
      updateCameraDistance(camera, nw, nh);
      camera.updateProjectionMatrix();
      renderer.setSize(nw, nh);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('visibilitychange', handleVisibility);

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }

      baseSphereGeo.dispose();
      baseSphereMat.dispose();
      dotGeo.dispose();
      dotMat.dispose();
      dotTexture.dispose();
      atmoGeo.dispose();
      atmoMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full min-h-[920px] lg:min-h-[880px] flex flex-col justify-between pt-8 pb-10 overflow-hidden">
      {/* Cybersecurity Video Background at 40% Opacity */}
      <video
        src="/videos/cyber-security-bg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none z-0"
      />

      {/* Background Cyber Grid & Radial Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/30 via-transparent to-[#050505] pointer-events-none z-0" />
      <div className="absolute inset-0 cyber-grid opacity-25 pointer-events-none z-0" />
      <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF243D]/12 rounded-full blur-[160px] pointer-events-none z-0" />

      {/* 1. Hero Header Section */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 text-center space-y-4">
        {/* Eyebrow Label */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#111114] border border-white/10 text-xs font-medium text-[#FF243D] tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
          <span>Advanced Cybersecurity &amp; Digital Defense</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] text-balance">
          Build the Future with <br />
          <span className="text-[#FF243D] drop-shadow-[0_0_35px_rgba(255,36,61,0.45)]">
            Cybersecurity &amp; Defense
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-[#A1A1AA] max-w-2xl mx-auto leading-relaxed text-balance">
          Nexora Security empowers enterprises, engineers, and learners with offensive vulnerability testing, 
          proactive threat detection, and resilient digital architectures.
        </p>

        {/* CTAs */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => onNavigate('/contact')}
            className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-full transition-all shadow-lg shadow-[#FF243D]/30 hover:shadow-[#FF243D]/50 cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => onNavigate('/services')}
            className="px-6 py-2.5 text-xs font-semibold text-white bg-[#111114] hover:bg-[#18181c] border border-white/10 hover:border-white/20 rounded-full transition-colors cursor-pointer"
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* 2. Central 3D Globe with the 4 Minimalist Side Cards (ICON & TITLE ONLY) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-2 flex-1 flex flex-col justify-center">
        <div className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-6">
          {/* LEFT COLUMN: 2 Minimalist Cards with Compact Gap (ICON + TITLE + ARROW) */}
          <div className="lg:col-span-3 flex flex-col gap-5 z-20 order-2 lg:order-1 items-center lg:items-end w-full">
            {/* Card 1: Offensive Security */}
            <div 
              onClick={() => onNavigate('/services', { enquiryType: 'Penetration Testing / VAPT' })}
              className="glass-card rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3.5 cursor-pointer group w-fit max-w-[285px] shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] group-hover:border-[#FF243D]/60 transition-colors shadow-inner shrink-0">
                <Crosshair className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF243D] transition-colors whitespace-nowrap">
                Offensive Security
              </h3>
              <div className="w-7 h-7 rounded-full bg-[#18181c] border border-white/10 flex items-center justify-center text-[#A1A1AA] group-hover:text-white group-hover:bg-[#FF243D] group-hover:border-[#FF243D] transition-colors shrink-0 ml-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 2: Defensive Security */}
            <div 
              onClick={() => onNavigate('/services', { enquiryType: 'Defensive Security / SOC' })}
              className="glass-card rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3.5 cursor-pointer group w-fit max-w-[285px] shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] group-hover:border-[#FF243D]/60 transition-colors shadow-inner shrink-0">
                <ShieldCheck className="w-4.5 h-4.5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF243D] transition-colors whitespace-nowrap">
                Defensive Security
              </h3>
              <div className="w-7 h-7 rounded-full bg-[#18181c] border border-white/10 flex items-center justify-center text-[#A1A1AA] group-hover:text-white group-hover:bg-[#FF243D] group-hover:border-[#FF243D] transition-colors shrink-0 ml-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>

          {/* CENTER: The 100% Realistic 3D Globe (Full, uncropped & prominent) */}
          <div className="lg:col-span-6 relative w-full h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center order-1 lg:order-2 overflow-visible">
            {webGLSupported ? (
              <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />
            ) : (
              /* WebGL Fallback */
              <div className="w-64 h-64 rounded-full border-2 border-[#FF243D]/40 bg-[#111114] flex items-center justify-center relative shadow-[0_0_60px_rgba(255,36,61,0.25)]">
                <div className="w-48 h-48 rounded-full border border-dashed border-[#FF243D]/50 animate-spin" />
                <Shield className="w-16 h-16 text-[#FF243D] absolute" />
              </div>
            )}
          </div>

          {/* RIGHT COLUMN: 2 Minimalist Cards with Compact Gap (ICON + TITLE + ARROW) */}
          <div className="lg:col-span-3 flex flex-col gap-5 z-20 order-3 items-center lg:items-start w-full">
            {/* Card 3: Development & Design */}
            <div 
              onClick={() => onNavigate('/services', { enquiryType: 'Development' })}
              className="glass-card rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3.5 cursor-pointer group w-fit max-w-[285px] shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] group-hover:border-[#FF243D]/60 transition-colors shadow-inner shrink-0">
                <Code2 className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF243D] transition-colors whitespace-nowrap">
                Development &amp; Design
              </h3>
              <div className="w-7 h-7 rounded-full bg-[#18181c] border border-white/10 flex items-center justify-center text-[#A1A1AA] group-hover:text-white group-hover:bg-[#FF243D] group-hover:border-[#FF243D] transition-colors shrink-0 ml-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>

            {/* Card 4: Cybersecurity Training */}
            <div 
              onClick={() => onNavigate('/training')}
              className="glass-card rounded-2xl px-4 py-3 sm:px-5 sm:py-3.5 flex items-center gap-3.5 cursor-pointer group w-fit max-w-[285px] shadow-lg"
            >
              <div className="w-9 h-9 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] group-hover:border-[#FF243D]/60 transition-colors shadow-inner shrink-0">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-white group-hover:text-[#FF243D] transition-colors whitespace-nowrap">
                Cybersecurity Training
              </h3>
              <div className="w-7 h-7 rounded-full bg-[#18181c] border border-white/10 flex items-center justify-center text-[#A1A1AA] group-hover:text-white group-hover:bg-[#FF243D] group-hover:border-[#FF243D] transition-colors shrink-0 ml-1">
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. "Trusted By" Metrics Dock with 4 Profile Avatars */}
      <div className="relative z-20 w-full max-w-4xl mx-auto px-4 mt-6">
        <div className="p-4 sm:p-5 rounded-2xl bg-[#0B0B0F]/90 border border-white/10 backdrop-blur-md shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 hover:border-[#FF243D]/40">
          {/* Left: The 4 Profile Avatars matching user images */}
          <div className="flex items-center gap-3.5">
            <div className="flex -space-x-2.5 overflow-hidden p-0.5">
              <img
                src={avatar1}
                alt="Security Team Member 1"
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0B0F] object-cover hover:scale-115 hover:z-30 transition-transform duration-200"
              />
              <img
                src={avatar2}
                alt="Security Team Member 2"
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0B0F] object-cover hover:scale-115 hover:z-30 transition-transform duration-200"
              />
              <img
                src={avatar3}
                alt="Security Team Member 3"
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0B0F] object-cover hover:scale-115 hover:z-30 transition-transform duration-200"
              />
              <img
                src={avatar4}
                alt="Security Team Member 4"
                className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0B0F] object-cover hover:scale-115 hover:z-30 transition-transform duration-200"
              />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-white tracking-tight">
                Trusted by 10,000+ teams
              </p>
              <p className="text-[11px] text-[#A1A1AA]">
                worldwide
              </p>
            </div>
          </div>

          {/* Right: Key Stats matching reference: 99.9%, 10K+, 50+, 24/7 */}
          <div className="flex items-center gap-6 sm:gap-10 text-center font-mono">
            <div>
              <div className="text-sm sm:text-base font-bold text-[#FF243D] tracking-tight">
                99.9%
              </div>
              <div className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">
                Uptime
              </div>
            </div>

            <div className="w-[1px] h-6 bg-white/10" aria-hidden="true" />

            <div>
              <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                10K+
              </div>
              <div className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">
                Active Users
              </div>
            </div>

            <div className="w-[1px] h-6 bg-white/10" aria-hidden="true" />

            <div>
              <div className="text-sm sm:text-base font-bold text-[#FF243D] tracking-tight">
                50+
              </div>
              <div className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">
                Integrations
              </div>
            </div>

            <div className="w-[1px] h-6 bg-white/10" aria-hidden="true" />

            <div>
              <div className="text-sm sm:text-base font-bold text-white tracking-tight">
                24/7
              </div>
              <div className="text-[10px] text-[#A1A1AA] uppercase tracking-wider">
                Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
