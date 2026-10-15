/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { RoutePath } from './types.ts';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { ServicesPage } from './pages/ServicesPage.tsx';
import { TrainingPage } from './pages/TrainingPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

export default function App() {
  const [currentPath, setCurrentPath] = useState<RoutePath>('/');
  const [contactEnquiryType, setContactEnquiryType] = useState<string | undefined>(undefined);

  // Initialize path from window.location.pathname on first load
  useEffect(() => {
    const normalizePath = (path: string): RoutePath => {
      if (path === '/services') return '/services';
      if (path === '/training') return '/training';
      if (path === '/contact') return '/contact';
      return '/';
    };

    setCurrentPath(normalizePath(window.location.pathname));

    const handlePopState = () => {
      setCurrentPath(normalizePath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: RoutePath, state?: { enquiryType?: string }) => {
    setCurrentPath(path);
    if (state?.enquiryType) {
      setContactEnquiryType(state.enquiryType);
    }
    // Update browser history without full reload
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col selection:bg-[#FF243D]/30 selection:text-white">
      {/* Top Navbar Contract: Home | Services | Training | Contact Us + Get Started */}
      <Navbar currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Main Content Viewport */}
      <main className="flex-1">
        {currentPath === '/' && (
          <HomePage onNavigate={handleNavigate} />
        )}

        {currentPath === '/services' && (
          <ServicesPage onNavigate={handleNavigate} />
        )}

        {currentPath === '/training' && (
          <TrainingPage onNavigate={handleNavigate} />
        )}

        {currentPath === '/contact' && (
          <ContactPage initialEnquiryType={contactEnquiryType} />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
