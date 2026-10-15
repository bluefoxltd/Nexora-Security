import React, { useState } from 'react';
import { RoutePath, ServiceDetail } from '../types.ts';
import { servicesData } from '../data/services.ts';
import { 
  Crosshair, 
  ShieldAlert, 
  Target, 
  ShieldCheck, 
  Activity, 
  FileCheck2, 
  Terminal, 
  Cpu, 
  Lock, 
  Layout, 
  Palette, 
  ArrowRight, 
  Check, 
  X, 
  Search,
  Shield
} from 'lucide-react';

interface ServicesPageProps {
  onNavigate: (path: RoutePath, state?: { enquiryType?: string }) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cybersecurity' | 'development' | 'design'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeServiceModal, setActiveServiceModal] = useState<ServiceDetail | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'Crosshair': return <Crosshair className="w-5 h-5 text-[#FF243D]" />;
      case 'ShieldAlert': return <ShieldAlert className="w-5 h-5 text-[#FF243D]" />;
      case 'Target': return <Target className="w-5 h-5 text-[#FF243D]" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-[#FF243D]" />;
      case 'Activity': return <Activity className="w-5 h-5 text-[#FF243D]" />;
      case 'FileCheck2': return <FileCheck2 className="w-5 h-5 text-[#FF243D]" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-[#FF243D]" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-[#FF243D]" />;
      case 'Lock': return <Lock className="w-5 h-5 text-[#FF243D]" />;
      case 'Layout': return <Layout className="w-5 h-5 text-[#FF243D]" />;
      case 'Palette': return <Palette className="w-5 h-5 text-[#FF243D]" />;
      default: return <Shield className="w-5 h-5 text-[#FF243D]" />;
    }
  };

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.shortDesc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDiscuss = (service: ServiceDetail) => {
    let enquiryType = 'Cybersecurity Services';
    if (service.category === 'development') enquiryType = 'Development';
    if (service.category === 'design') enquiryType = 'Design';
    if (service.id.includes('penetration') || service.id.includes('vapt')) enquiryType = 'Penetration Testing / VAPT';
    if (service.id.includes('soc') || service.id.includes('defensive')) enquiryType = 'Defensive Security / SOC';

    onNavigate('/contact', { enquiryType });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full pb-24 space-y-16">
      {/* 1. Page Hero */}
      <section className="relative pt-12 pb-14 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-[#FF243D] uppercase">
          <span>Our Capabilities</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight text-balance">
          Security, Engineering &amp; Digital Innovation.
        </h1>
        <p className="text-base sm:text-lg text-[#A1A1AA] max-w-3xl mx-auto leading-relaxed text-balance">
          From security assessments and defense strategies to modern software development and digital experiences, 
          Nexora Security helps organizations build stronger, safer, and more reliable technology.
        </p>
      </section>

      {/* 2. Category Filters & Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          {/* Functional Category Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#111114] rounded-xl border border-white/5 overflow-x-auto">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-[#FF243D] text-white shadow-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              All Services ({servicesData.length})
            </button>
            <button
              onClick={() => setSelectedCategory('cybersecurity')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'cybersecurity'
                  ? 'bg-[#FF243D] text-white shadow-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Cybersecurity (6)
            </button>
            <button
              onClick={() => setSelectedCategory('development')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'development'
                  ? 'bg-[#FF243D] text-white shadow-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Development (3)
            </button>
            <button
              onClick={() => setSelectedCategory('design')}
              className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap cursor-pointer ${
                selectedCategory === 'design'
                  ? 'bg-[#FF243D] text-white shadow-sm'
                  : 'text-[#A1A1AA] hover:text-white'
              }`}
            >
              Design (2)
            </button>
          </div>

          {/* Search filter */}
          <div className="relative sm:w-72">
            <Search className="w-4 h-4 text-[#A1A1AA] absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capabilities..."
              className="w-full bg-[#111114] border border-white/10 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#A1A1AA]/60 focus:outline-none focus:border-[#FF243D] transition-colors"
            />
          </div>
        </div>

        {/* 3. Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-2xl p-7 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-[#050505] border border-white/10 flex items-center justify-center">
                    {getServiceIcon(service.iconName)}
                  </div>
                  <span className="text-[11px] font-mono uppercase text-[#A1A1AA] tracking-wider">
                    {service.category}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-white group-hover:text-[#FF243D] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-[#A1A1AA] leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key features bullets */}
                <div className="pt-2 border-t border-white/5 space-y-2">
                  <p className="text-[11px] font-semibold text-white/70 uppercase tracking-wider">
                    Scope Highlights:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#A1A1AA]">
                    {service.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#FF243D] shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between gap-3">
                <button
                  onClick={() => setActiveServiceModal(service)}
                  className="text-xs font-medium text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
                >
                  View Full Details
                </button>
                <button
                  onClick={() => handleDiscuss(service)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-white bg-[#FF243D]/10 hover:bg-[#FF243D] border border-[#FF243D]/30 hover:border-[#FF243D] rounded-lg transition-all cursor-pointer"
                >
                  <span>Discuss Requirements</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-16 text-[#A1A1AA] space-y-2">
            <p className="text-sm">No services found matching your query.</p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="text-xs text-[#FF243D] hover:underline"
            >
              Reset filters
            </button>
          </div>
        )}
      </section>

      {/* 4. Service Detail In-Depth Modal */}
      {activeServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl bg-[#111114] border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between gap-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#050505] border border-[#FF243D]/40 flex items-center justify-center">
                  {getServiceIcon(activeServiceModal.iconName)}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {activeServiceModal.title}
                  </h3>
                  <span className="text-xs font-mono text-[#FF243D] uppercase">
                    Category: {activeServiceModal.category}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setActiveServiceModal(null)}
                className="p-1.5 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-sm text-[#A1A1AA] leading-relaxed">
              {activeServiceModal.shortDesc}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Full Technical Scope &amp; Methodology
              </h4>
              <ul className="space-y-2 text-xs text-[#A1A1AA]">
                {activeServiceModal.details.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#FF243D] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                Key Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#A1A1AA]">
                {activeServiceModal.deliverables.map((d, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-[#0B0B0F] border border-white/5 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF243D]" />
                    <span className="text-white">{d}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0B0B0F] border border-white/5 text-xs text-[#A1A1AA]">
              <strong className="text-white block mb-1">Operational Scope:</strong>
              {activeServiceModal.scope}
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-end gap-3">
              <button
                onClick={() => setActiveServiceModal(null)}
                className="px-4 py-2 text-xs font-semibold text-[#A1A1AA] hover:text-white transition-colors cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const s = activeServiceModal;
                  setActiveServiceModal(null);
                  handleDiscuss(s);
                }}
                className="px-5 py-2.5 text-xs font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-colors cursor-pointer"
              >
                Discuss This Requirement &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
