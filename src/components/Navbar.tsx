import React, { useState } from 'react';
import { RoutePath } from '../types.ts';
import { Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  currentPath: RoutePath;
  onNavigate: (path: RoutePath) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; path: RoutePath }[] = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Training', path: '/training' },
    { label: 'Contact Us', path: '/contact' },
  ];

  const handleNavClick = (path: RoutePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#050505]/90 border-b border-white/10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single element, no adjacent descriptor pills) */}
        <button
          onClick={() => handleNavClick('/')}
          className="flex items-center gap-3 text-left group cursor-pointer shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF243D]"
        >
          {/* Nexora Geometric Cyber Shield Mark */}
          <div className="w-8 h-8 rounded-lg bg-[#111114] border border-[#FF243D]/40 flex items-center justify-center transition-transform group-hover:scale-105">
            <svg 
              className="w-5 h-5 text-[#FF243D]" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5" />
              <circle cx="12" cy="12" r="2.5" fill="#FF243D" />
            </svg>
          </div>
          <span className="text-lg font-bold tracking-wider text-white whitespace-nowrap">
            NEXORA <span className="text-[#FF243D]">SECURITY</span>
          </span>
        </button>

        {/* Zone 2: Navigation Links (Clean single-line text links with red indicator) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`relative py-1 transition-colors whitespace-nowrap cursor-pointer ${
                  isActive ? 'text-[#FF243D] font-semibold' : 'text-[#A1A1AA] hover:text-white'
                }`}
              >
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF243D] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Hamburger */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('/contact')}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-all shadow-md shadow-[#FF243D]/20 hover:shadow-[#FF243D]/30 whitespace-nowrap cursor-pointer"
          >
            <span>Get Started</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#A1A1AA] hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition-colors cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0B0B0F] px-4 pt-4 pb-6 space-y-3">
          {navLinks.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => handleNavClick(item.path)}
                className={`block w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#FF243D]/10 text-[#FF243D] font-semibold'
                    : 'text-[#A1A1AA] hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('/contact')}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-semibold text-white bg-[#FF243D] hover:bg-[#D91F36] rounded-lg transition-all"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
