import React, { useState } from 'react';
import { RoutePath, TrainingProgram } from '../types.ts';
import { trainingProgramsData, trainingFaqs } from '../data/training.ts';
import { 
  BookOpen, 
  Network, 
  Terminal, 
  Shield, 
  Target, 
  ShieldAlert, 
  Activity, 
  Crosshair, 
  Code, 
  Cpu, 
  Cloud, 
  FileCheck, 
  ArrowRight, 
  CheckCircle, 
  ChevronDown, 
  ChevronUp, 
  X, 
  Search, 
  FlaskConical, 
  Sparkles
} from 'lucide-react';

interface TrainingPageProps {
  onNavigate: (path: RoutePath, state?: { enquiryType?: string }) => void;
}

export const TrainingPage: React.FC<TrainingPageProps> = ({ onNavigate }) => {
  const [selectedLevel, setSelectedLevel] = useState<'All' | 'Beginner' | 'Intermediate' | 'Advanced'>('All');
  const [selectedTrack, setSelectedTrack] = useState<'All' | 'Python & AI' | 'Offensive' | 'Defensive' | 'Operations' | 'Engineering'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProgramModal, setActiveProgramModal] = useState<TrainingProgram | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5 text-[#FF243D]" />;
      case 'Network': return <Network className="w-5 h-5 text-[#FF243D]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#FF243D]" />;
      case 'Shield': return <Shield className="w-5 h-5 text-[#FF243D]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#FF243D]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#FF243D]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#FF243D]" />;
      case 'Crosshair': return <Crosshair className="w-5 h-5 text-[#FF243D]" />;
      case 'Code': return <Code className="w-5 h-5 text-[#FF243D]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#FF243D]" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-[#FF243D]" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-[#FF243D]" />;
      default: return <Shield className="w-5 h-5 text-[#FF243D]" />;
    }
  };

  const filteredPrograms = trainingProgramsData.filter((item) => {
    const matchesLevel = selectedLevel === 'All' || item.level === selectedLevel;
    const matchesTrack = selectedTrack === 'All' || item.track === selectedTrack;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesLevel && matchesTrack && matchesSearch;
  });

  const handleEnquire = (programTitle?: string) => {
    onNavigate('/contact', { enquiryType: 'Cybersecurity Training' });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToPrograms = () => {
    const el = document.getElementById('programs-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full pb-24 space-y-20">
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-14 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-5">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#FF243D] uppercase">
          <span>Nexora Security Academy</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight text-balance">
          Learn Cybersecurity. Practice with Purpose.
        </h1>
        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed text-balance">
          Build practical cybersecurity knowledge through structured learning, controlled laboratory exercises, 
          security analysis, and guided offensive and defensive security practice.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => handleEnquire()}
            className="px-6 py-3 text-sm font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-all shadow-lg shadow-[#FF243D]/20 cursor-pointer whitespace-nowrap"
          >
            Enquire About Training &rarr;
          </button>
          <button
            onClick={scrollToPrograms}
            className="px-6 py-3 text-sm font-semibold text-white bg-[#111114] hover:bg-[#18181c] border border-white/10 hover:border-[#FF243D]/40 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
          >
            Explore Learning Paths
          </button>
        </div>
      </section>

      {/* 2. Programs Catalog & Filtering */}
      <section id="programs-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-white/10">
          {/* Level Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#A1A1AA] font-mono mr-2">Level:</span>
            {(['All', 'Beginner', 'Intermediate', 'Advanced'] as const).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-[#FF243D] text-white shadow-sm'
                    : 'bg-[#111114] text-[#A1A1AA] hover:text-white border border-white/5'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Track Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs text-[#A1A1AA] font-mono mr-2">Track:</span>
            {(['All', 'Python & AI', 'Offensive', 'Defensive', 'Operations', 'Engineering'] as const).map((trk) => (
              <button
                key={trk}
                onClick={() => setSelectedTrack(trk)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedTrack === trk
                    ? 'bg-[#FF243D] text-white shadow-sm'
                    : 'bg-[#111114] text-[#A1A1AA] hover:text-white border border-white/5'
                }`}
              >
                {trk}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-64">
            <Search className="w-4 h-4 text-[#A1A1AA] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programs..."
              className="w-full bg-[#111114] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#A1A1AA]/60 focus:outline-none focus:border-[#FF243D]"
            />
          </div>
        </div>

        {/* 12 Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPrograms.map((program) => (
            <div
              key={program.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center">
                    {getProgramIcon(program.iconName)}
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA]">
                    <span className="text-[#FF243D]">{program.track}</span>
                    <span aria-hidden="true">·</span>
                    <span>{program.level}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF243D] transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {program.shortDesc}
                  </p>
                </div>

                {/* Practical Labs Highlight */}
                <div className="pt-2 border-t border-white/5 space-y-2">
                  <div className="flex items-center gap-1.5 text-[11px] font-semibold text-white/80 uppercase tracking-wider">
                    <FlaskConical className="w-3.5 h-3.5 text-[#FF243D]" />
                    <span>Hands-On Laboratory Focus:</span>
                  </div>
                  <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                    {program.practicalLabs.slice(0, 2).map((lab, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D] mt-1.5 shrink-0" />
                        <span>{lab}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Meta details */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-[#A1A1AA]">
                  <span>Duration:</span>
                  <span className="text-white font-mono">{program.durationNotice}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveProgramModal(program)}
                  className="text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                >
                  View Full Syllabus
                </button>
                <button
                  onClick={() => handleEnquire(program.title)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-[#FF243D]/10 hover:bg-[#FF243D] border border-[#FF243D]/30 hover:border-[#FF243D] rounded-lg transition-all cursor-pointer"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredPrograms.length === 0 && (
          <div className="text-center py-16 text-[#A1A1AA] space-y-2">
            <p className="text-sm">No training programs match your selected criteria.</p>
            <button
              onClick={() => { setSelectedLevel('All'); setSelectedTrack('All'); setSearchQuery(''); }}
              className="text-xs text-[#FF243D] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* 3. Program Detail Syllabus Modal */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#111114] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#FF243D]/40 flex items-center justify-center">
                  {getProgramIcon(activeProgramModal.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {activeProgramModal.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#A1A1AA] mt-1">
                    <span className="text-[#FF243D]">{activeProgramModal.track} Track</span>
                    <span aria-hidden="true">·</span>
                    <span>Level: {activeProgramModal.level}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setActiveProgramModal(null)}
                className="p-1.5 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {activeProgramModal.shortDesc}
            </p>

            {/* Prerequisites */}
            <div className="p-3.5 rounded-xl bg-[#0B0B0F] border border-white/5 space-y-1">
              <span className="text-xs font-semibold text-white uppercase tracking-wider block">
                Prerequisites
              </span>
              <p className="text-xs text-[#A1A1AA]">
                {activeProgramModal.prerequisites}
              </p>
            </div>

            {/* Curriculum Modules */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Curriculum Modules &amp; Core Topics
              </h4>
              <ul className="space-y-2 text-xs text-[#A1A1AA]">
                {activeProgramModal.topics.map((topic, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 text-[#FF243D] shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Practical Laboratories */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
                <FlaskConical className="w-4 h-4 text-[#FF243D]" />
                <span>Dedicated Sandbox Laboratory Exercises</span>
              </h4>
              <div className="grid grid-cols-1 gap-2 text-xs">
                {activeProgramModal.practicalLabs.map((lab, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#0B0B0F] border border-white/5 text-[#A1A1AA] flex items-start gap-2.5">
                    <span className="font-mono text-[#FF243D] shrink-0">{String(idx + 1).padStart(2, '0')}.</span>
                    <span>{lab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Learner Develops */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Practical Skills Developed
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {activeProgramModal.skillsGained.map((sk, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-[#18181c] border border-white/10 text-white">
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
              <div className="text-xs text-[#A1A1AA]">
                Schedule &amp; Availability: <strong className="text-white">{activeProgramModal.durationNotice}</strong>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setActiveProgramModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const p = activeProgramModal;
                    setActiveProgramModal(null);
                    handleEnquire(p.title);
                  }}
                  className="px-5 py-2.5 text-xs font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-colors cursor-pointer"
                >
                  Enquire About Enrollment &rarr;
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <p className="text-xs font-semibold tracking-wider text-[#FF243D] uppercase">
            Questions &amp; Clarifications
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {trainingFaqs.map((faq, idx) => {
            const isOpen = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl bg-[#0B0B0F] border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setExpandedFaq(isOpen ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-white/5 transition-colors cursor-pointer"
                >
                  <span className="text-sm font-semibold text-white">{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-[#FF243D] shrink-0" /> : <ChevronDown className="w-4 h-4 text-[#A1A1AA] shrink-0" />}
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs text-[#A1A1AA] leading-relaxed border-t border-white/5 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Final Academy CTA */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-[#111114] border border-white/10 text-center space-y-5">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            Customized Training for Organizations
          </h2>
          <p className="text-sm text-[#A1A1AA] max-w-xl mx-auto leading-relaxed">
            Need customized security awareness, SOC tier upskilling, or secure software engineering workshops for your engineering teams?
          </p>
          <div className="pt-2">
            <button
              onClick={() => handleEnquire()}
              className="px-6 py-3 text-xs font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-colors cursor-pointer"
            >
              Contact Nexora Security &rarr;
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
