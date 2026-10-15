import React, { useState } from 'react';
import { RoutePath } from '../types.ts';
import { Mail, MapPin, X } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: RoutePath) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const handleNav = (path: RoutePath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#0B0B0F] border-t border-white/10 text-white pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Overview (Spans 2 columns on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded bg-[#111114] border border-[#FF243D]/40 flex items-center justify-center">
                <svg className="w-4 h-4 text-[#FF243D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
                  <circle cx="12" cy="12" r="2.5" fill="#FF243D" />
                </svg>
              </div>
              <span className="text-base font-bold tracking-wider text-white">
                NEXORA <span className="text-[#FF243D]">SECURITY</span>
              </span>
            </div>
            <p className="text-sm text-[#A1A1AA] max-w-sm leading-relaxed">
              Cybersecurity, secure engineering, and practical training for a safer digital future.
            </p>
            <div className="pt-2 space-y-2 text-xs text-[#A1A1AA]">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FF243D] shrink-0" />
                <span>Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FF243D] shrink-0" />
                <a
                  href="mailto:execute@nexorasecurity.org"
                  className="hover:text-white transition-colors underline decoration-white/20 underline-offset-2"
                >
                  execute@nexorasecurity.org
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wider text-white uppercase">
              Navigation
            </p>
            <ul className="space-y-2 text-sm text-[#A1A1AA]">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/training')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Cybersecurity */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wider text-white uppercase">
              Cybersecurity
            </p>
            <ul className="space-y-2 text-sm text-[#A1A1AA]">
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Offensive Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Defensive Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Penetration Testing / VAPT
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  SOC &amp; Threat Analysis
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Development & Training */}
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-wider text-white uppercase">
              Development &amp; Training
            </p>
            <ul className="space-y-2 text-sm text-[#A1A1AA]">
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/services')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  UI/UX Design
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/training')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Cybersecurity Training
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/training')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Red Team &amp; Blue Team
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A1A1AA]">
          <p>
            &copy; {currentYear} Nexora Security. All rights reserved. All security assessments conducted under authorized scope.
          </p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span aria-hidden="true" className="text-white/20">·</span>
            <button
              onClick={() => setLegalModal('terms')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {/* Legal Dialog Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg bg-[#111114] border border-white/10 rounded-xl p-6 shadow-2xl space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white">
                {legalModal === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h3>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 text-[#A1A1AA] hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-xs text-[#A1A1AA] leading-relaxed space-y-3 max-h-72 overflow-y-auto pr-2">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    Nexora Security is committed to preserving the confidentiality, integrity, and privacy of all organizational and personal data entrusted to us.
                  </p>
                  <p>
                    We do not sell, rent, or distribute personal information. Data submitted through our enquiry channels is used exclusively to evaluate security engagements, respond to technical requests, or coordinate training enrollments.
                  </p>
                  <p>
                    All diagnostic traces, customer scopes, and communication records are safeguarded with strict internal controls and cryptographic protections.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    All security testing, vulnerability scanning, and red teaming services provided by Nexora Security are conducted strictly under mutual written authorization, defined scopes, and established Rules of Engagement (RoE).
                  </p>
                  <p>
                    Training materials, exercises, and laboratory configurations provided through our academy are strictly intended for authorized educational and defensive skill-building purposes.
                  </p>
                  <p>
                    Unauthorized testing against third-party networks or systems without explicit permission is strictly prohibited.
                  </p>
                </>
              )}
            </div>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 text-xs font-semibold text-white bg-[#18181c] border border-white/10 hover:border-white/20 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
