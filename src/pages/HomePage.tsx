import React from 'react';
import { RoutePath } from '../types.ts';
import { RevolvingGlobeHero } from '../components/RevolvingGlobeHero.tsx';
import { 
  Target, 
  ShieldCheck, 
  Code2, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Shield, 
  Layers, 
  Search, 
  Lock, 
  Cpu, 
  Compass, 
  Award, 
  Terminal,
  Activity
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: RoutePath, state?: { enquiryType?: string }) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full space-y-24 pb-20">
      {/* 1. Hero Section: 3D Revolving Globe with 4 Flanking Sector Cards & Trusted-by Metrics */}
      <section className="w-full relative">
        <RevolvingGlobeHero onNavigate={onNavigate} />
      </section>

      {/* 2. Core Capabilities: The 4 Replaced Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <p className="text-xs font-semibold tracking-widest text-[#FF243D] uppercase">
            Core Capabilities
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight text-balance">
            Engineered for Modern Threat Landscapes
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed text-balance">
            Nexora Security delivers high-assurance offensive assessment, proactive defense engineering, 
            resilient software development, and professional technical education.
          </p>
        </div>

        {/* 2x2 Desktop Layout / 1x1 Mobile Layout (Replacing AI Models, Analytics, Automation, Integrations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {/* Card 1: Offensive Security */}
          <div className="glass-card rounded-2xl p-7 lg:p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] group-hover:border-[#FF243D]/50 transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF243D] transition-colors">
                  Offensive Security
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Identify vulnerabilities, evaluate attack surfaces, and uncover security weaknesses before malicious actors can exploit them.
                </p>
              </div>

              {/* Services List */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2.5">
                  Services include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Vulnerability assessment</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Web application testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>API security testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Network penetration testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Red team assessments</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#FF243D] transition-colors cursor-pointer"
              >
                <span>Explore Offensive Security</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Defensive Security */}
          <div className="glass-card rounded-2xl p-7 lg:p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] group-hover:border-[#FF243D]/50 transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF243D] transition-colors">
                  Defensive Security
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Strengthen your security posture through continuous monitoring, threat detection, incident response, and proactive defense strategies.
                </p>
              </div>

              {/* Services List */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2.5">
                  Services include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Security operations support</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Monitoring &amp; alerting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Threat detection &amp; analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Incident response planning</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Security hardening</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Log analysis &amp; telemetry</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#FF243D] transition-colors cursor-pointer"
              >
                <span>Explore Defensive Security</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Development & Design */}
          <div className="glass-card rounded-2xl p-7 lg:p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] group-hover:border-[#FF243D]/50 transition-colors">
                <Code2 className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF243D] transition-colors">
                  Development &amp; Design
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Build reliable, modern digital products with security-conscious engineering, intuitive interfaces, and scalable architecture.
                </p>
              </div>

              {/* Services List */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2.5">
                  Services include:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Website development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Web application development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Custom software development</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>API development &amp; integration</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>UI/UX &amp; interface design</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Secure coding practices</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#FF243D] transition-colors cursor-pointer"
              >
                <span>Explore Development</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 4: Cybersecurity Training */}
          <div className="glass-card rounded-2xl p-7 lg:p-8 flex flex-col justify-between group relative overflow-hidden">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center text-[#FF243D] group-hover:border-[#FF243D]/50 transition-colors">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF243D] transition-colors">
                  Cybersecurity Training
                </h3>
                <p className="text-sm text-[#A1A1AA] leading-relaxed">
                  Develop practical cybersecurity skills through structured learning, guided security labs, and real-world defensive and offensive exercises.
                </p>
              </div>

              {/* Services List */}
              <div className="pt-2">
                <p className="text-xs font-semibold text-white/80 uppercase tracking-wider mb-2.5">
                  Curriculum includes:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Ethical hacking fundamentals</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Offensive &amp; defensive security</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Red team &amp; blue team labs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>SOC operations &amp; analysis</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Vulnerability assessment (VAPT)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span>Web &amp; API security testing</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
              <button
                onClick={() => onNavigate('/training')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white group-hover:text-[#FF243D] transition-colors cursor-pointer"
              >
                <span>Explore Training Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>

        {/* Security Testing Authorization Notice */}
        <div className="mt-6 p-4 rounded-xl bg-[#0B0B0F] border border-white/10 text-center">
          <p className="text-xs text-[#A1A1AA] flex items-center justify-center gap-2">
            <Lock className="w-3.5 h-3.5 text-[#FF243D]" />
            <span>All security testing is conducted with explicit written authorization and within a clearly defined scope.</span>
          </p>
        </div>
      </section>

      {/* 3. Homepage Trust & Metrics Section (Replacing AI metrics) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#0B0B0F] border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF243D]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl space-y-3 mb-10">
            <p className="text-xs font-semibold tracking-wider text-[#FF243D] uppercase">
              Trust &amp; Principles
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Security Built on Expertise. Driven by Precision.
            </h2>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Combining security engineering, practical education, and modern development to help build a more resilient digital environment.
            </p>
          </div>

          {/* Compact Trust Indicators (No fabricated numbers) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-2">
            <div className="p-5 rounded-xl bg-[#111114] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Shield className="w-4 h-4 text-[#FF243D]" />
                <h3 className="text-sm font-bold tracking-tight">Security First</h3>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Security-conscious engineering embedded throughout the design, code, and deployment pipeline.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111114] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Activity className="w-4 h-4 text-[#FF243D]" />
                <h3 className="text-sm font-bold tracking-tight">Offensive + Defensive</h3>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                A balanced methodology pairing threat modeling and ethical exploitation with rigorous detection engineering.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111114] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Terminal className="w-4 h-4 text-[#FF243D]" />
                <h3 className="text-sm font-bold tracking-tight">Practical Learning</h3>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                Hands-on cybersecurity education conducted in safe, isolated virtual laboratories with real-world scenarios.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#111114] border border-white/5 space-y-2">
              <div className="flex items-center gap-2 text-white">
                <Layers className="w-4 h-4 text-[#FF243D]" />
                <h3 className="text-sm font-bold tracking-tight">End-to-End Solutions</h3>
              </div>
              <p className="text-xs text-[#A1A1AA] leading-relaxed">
                From bespoke web application development to security validation and organizational hardening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Section B: Our Approach */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
          <p className="text-xs font-semibold tracking-widest text-[#FF243D] uppercase">
            Systematic Methodology
          </p>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            Proactive Security. Practical Solutions.
          </h2>
          <p className="text-sm text-[#A1A1AA]">
            A disciplined, three-stage lifecycle ensuring robust defenses, verified controls, and sustained vigilance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Stage 1: Assess */}
          <div className="glass-card rounded-2xl p-7 relative space-y-4">
            <div className="text-xs font-mono font-bold text-[#FF243D] tracking-wider">
              STAGE 01
            </div>
            <h3 className="text-xl font-bold text-white">Assess</h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Understand the environment, map the attack surface, identify vulnerabilities, and establish clear operational priorities.
            </p>
            <ul className="space-y-2 text-xs text-[#A1A1AA] pt-2">
              <li className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#FF243D]" />
                <span>Asset discovery &amp; architecture review</span>
              </li>
              <li className="flex items-center gap-2">
                <Search className="w-3.5 h-3.5 text-[#FF243D]" />
                <span>Vulnerability scanning &amp; validation</span>
              </li>
            </ul>
          </div>

          {/* Stage 2: Protect */}
          <div className="glass-card rounded-2xl p-7 relative space-y-4">
            <div className="text-xs font-mono font-bold text-[#FF243D] tracking-wider">
              STAGE 02
            </div>
            <h3 className="text-xl font-bold text-white">Protect</h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Implement appropriate security controls, remediate structural flaws, and build resilient, secure systems from the ground up.
            </p>
            <ul className="space-y-2 text-xs text-[#A1A1AA] pt-2">
              <li className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#FF243D]" />
                <span>Hardening configurations &amp; IAM</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-3.5 h-3.5 text-[#FF243D]" />
                <span>Secure software engineering practices</span>
              </li>
            </ul>
          </div>

          {/* Stage 3: Improve */}
          <div className="glass-card rounded-2xl p-7 relative space-y-4">
            <div className="text-xs font-mono font-bold text-[#FF243D] tracking-wider">
              STAGE 03
            </div>
            <h3 className="text-xl font-bold text-white">Improve</h3>
            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              Validate defenses with continuous testing, develop human skills through practical training, and continuously refine security practices.
            </p>
            <ul className="space-y-2 text-xs text-[#A1A1AA] pt-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF243D]" />
                <span>Post-remediation verification testing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF243D]" />
                <span>Hands-on training &amp; skill enhancement</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Section C: Training Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-b from-[#111114] to-[#0B0B0F] border border-white/10 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <p className="text-xs font-semibold tracking-wider text-[#FF243D] uppercase">
                Nexora Security Academy
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Turn Curiosity into Cybersecurity Expertise.
              </h2>
              <p className="text-sm text-[#A1A1AA] max-w-xl">
                Structured learning paths and realistic virtual lab environments designed for aspiring professionals, developers, and organizations.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/training')}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-colors shrink-0 cursor-pointer"
            >
              <span>Explore All Academy Programs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div 
              onClick={() => onNavigate('/training')}
              className="p-5 rounded-xl bg-[#050505]/70 border border-white/5 space-y-2.5 cursor-pointer hover:border-[#FF243D]/50 transition-colors"
            >
              <span className="text-xs font-mono text-[#FF243D]">01. PYTHON</span>
              <h3 className="text-sm font-bold text-white">Python: Basic to Advance</h3>
              <p className="text-xs text-[#A1A1AA]">Core syntax, OOP, AsyncIO, security automation, and FastAPI microservices.</p>
            </div>

            <div 
              onClick={() => onNavigate('/training')}
              className="p-5 rounded-xl bg-[#050505]/70 border border-white/5 space-y-2.5 cursor-pointer hover:border-[#FF243D]/50 transition-colors"
            >
              <span className="text-xs font-mono text-[#FF243D]">02. DATA SCIENCE</span>
              <h3 className="text-sm font-bold text-white">Data Science &amp; Analytics</h3>
              <p className="text-xs text-[#A1A1AA]">NumPy, Pandas, statistical modeling, exploratory analysis, and data pipelines.</p>
            </div>

            <div 
              onClick={() => onNavigate('/training')}
              className="p-5 rounded-xl bg-[#050505]/70 border border-white/5 space-y-2.5 cursor-pointer hover:border-[#FF243D]/50 transition-colors"
            >
              <span className="text-xs font-mono text-[#FF243D]">03. AI &amp; ML</span>
              <h3 className="text-sm font-bold text-white">Artificial Intelligence / Machine Learning</h3>
              <p className="text-xs text-[#A1A1AA]">Supervised/unsupervised models, PyTorch deep learning, LLMs, and RAG architectures.</p>
            </div>

            <div 
              onClick={() => onNavigate('/training')}
              className="p-5 rounded-xl bg-[#050505]/70 border border-white/5 space-y-2.5 cursor-pointer hover:border-[#FF243D]/50 transition-colors"
            >
              <span className="text-xs font-mono text-[#FF243D]">04. CYBER DEFENSE</span>
              <h3 className="text-sm font-bold text-white">Ethical Hacking &amp; VAPT</h3>
              <p className="text-xs text-[#A1A1AA]">Authorized reconnaissance, vulnerability validation, and red team lab operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Section D: Development Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-wider text-[#FF243D] uppercase">
              Engineering Excellence
            </p>
            <h2 className="text-3xl font-bold text-white tracking-tight">
              Build Digital Products with Security in Mind.
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Software development, application security, and user-centered design do not have to be in conflict. 
              At Nexora Security, we embed security principles from the initial wireframe and schema design to final deployment.
            </p>

            <div className="space-y-3 pt-2 text-xs text-[#A1A1AA]">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-[#FF243D]/10 flex items-center justify-center text-[#FF243D] shrink-0 mt-0.5">
                  <Cpu className="w-3 h-3" />
                </div>
                <div>
                  <strong className="text-white block">Resilient Architecture:</strong>
                  Scalable web applications and backend APIs built with least-privilege principles and zero unvalidated endpoints.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded bg-[#FF243D]/10 flex items-center justify-center text-[#FF243D] shrink-0 mt-0.5">
                  <Lock className="w-3 h-3" />
                </div>
                <div>
                  <strong className="text-white block">Hardened Security Baselines:</strong>
                  Protection against injection, broken access control, and cross-site vectors configured at every layer.
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('/services')}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#111114] hover:bg-[#18181c] border border-white/10 hover:border-[#FF243D]/40 rounded-lg transition-colors cursor-pointer"
              >
                <span>Explore Development &amp; Design Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Visual Architecture Card */}
          <div className="p-7 rounded-2xl bg-[#0B0B0F] border border-white/10 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-[#A1A1AA]">Engineering Blueprint</span>
              <span className="text-xs font-mono text-[#FF243D]">DevSecOps Verified</span>
            </div>
            <div className="space-y-2.5 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#111114] border border-white/5 flex items-center justify-between">
                <span className="text-white">Layer 1: Edge Security &amp; TLS 1.3</span>
                <span className="text-[#A1A1AA]">Hardened</span>
              </div>
              <div className="p-3 rounded-lg bg-[#111114] border border-white/5 flex items-center justify-between">
                <span className="text-white">Layer 2: JWT Auth &amp; Role Access Control</span>
                <span className="text-[#A1A1AA]">Least Privilege</span>
              </div>
              <div className="p-3 rounded-lg bg-[#111114] border border-white/5 flex items-center justify-between">
                <span className="text-white">Layer 3: Schema Validation &amp; Rate Limits</span>
                <span className="text-[#A1A1AA]">Defended</span>
              </div>
              <div className="p-3 rounded-lg bg-[#111114] border border-white/5 flex items-center justify-between">
                <span className="text-white">Layer 4: Encrypted Data Persistence</span>
                <span className="text-[#A1A1AA]">AES-256</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Section E: Final CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-r from-[#111114] via-[#0B0B0F] to-[#111114] border border-white/10 text-center space-y-6 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#FF243D]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
              Ready to Strengthen Your Digital Future?
            </h2>
            <p className="text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
              Let's discuss your security goals, development requirements, or cybersecurity training needs.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-all shadow-lg shadow-[#FF243D]/25 cursor-pointer whitespace-nowrap"
            >
              Contact Nexora Security &rarr;
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="px-6 py-3 text-sm font-semibold text-white bg-[#111114] hover:bg-[#18181c] border border-white/10 hover:border-[#FF243D]/40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
            >
              Explore Our Services
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
