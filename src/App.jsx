import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCloud from './components/LogoCloud';
import WorkflowSection from './components/WorkflowSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import ProblemSection from './components/ProblemSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import PricingSection from './components/PricingSection';
import LeadEnrichmentPage from './components/LeadEnrichmentPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#pricing' || hash === '#/pricing') {
        setCurrentPage('pricing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#lead-enrichment' || hash === '#/lead-enrichment' || hash === '#product') {
        setCurrentPage('lead-enrichment');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, sectionId = null) => {
    setCurrentPage(page);
    if (page === 'pricing') {
      window.location.hash = 'pricing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'lead-enrichment') {
      window.location.hash = 'lead-enrichment';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.location.hash = sectionId || 'home';
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 50);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1">
        {currentPage === 'pricing' ? (
          /* PRICING PAGE ONLY: Shows PricingSection */
          <PricingSection onNavigate={navigateTo} />
        ) : currentPage === 'lead-enrichment' ? (
          /* PRODUCT 1: LEAD ENRICHMENT SINGLE PAGE */
          <LeadEnrichmentPage onNavigate={navigateTo} />
        ) : (
          /* HOME PAGE: Shows full Landing Page */
          <>
            <HeroSection />
            <LogoCloud />
            <WorkflowSection />
            <FeaturesSection />
            <BenefitsSection />
            <ProblemSection />
            <TestimonialSection />
            <CTASection />
          </>
        )}
      </main>
      <Footer currentPage={currentPage} onNavigate={navigateTo} />
    </div>
  );
}

export default App;
