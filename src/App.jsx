import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LogoCloud from './components/LogoCloud';
import WorkflowSection from './components/WorkflowSection';
import FeaturesSection from './components/FeaturesSection';
import BenefitsSection from './components/BenefitsSection';
import TestimonialSection from './components/TestimonialSection';
import CTASection from './components/CTASection';
import PricingSection from './components/PricingSection';
import LeadEnrichmentPage from './components/LeadEnrichmentPage';
import OmnichannelOutreachPage from './components/OmnichannelOutreachPage';
import LeadManagementPage from './components/LeadManagementPage';
import UnifiedInboxPage from './components/UnifiedInboxPage';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#demo' || hash === '#/demo') {
        window.location.href = 'https://demo.creamstack.io/';
        return;
      }
      if (hash === '#pricing' || hash === '#/pricing') {
        setCurrentPage('pricing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#lead-enrichment' || hash === '#/lead-enrichment') {
        setCurrentPage('lead-enrichment');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (
        hash === '#omnichannel-outreach' || 
        hash === '#/omnichannel-outreach' || 
        hash === '#outreach-automation' || 
        hash === '#/outreach-automation'
      ) {
        setCurrentPage('omnichannel-outreach');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#lead-management' || hash === '#/lead-management') {
        setCurrentPage('lead-management');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#unified-inbox' || hash === '#/unified-inbox') {
        setCurrentPage('unified-inbox');
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
    if (page === 'demo' || sectionId === 'demo') {
      window.location.href = 'https://demo.creamstack.io/';
      return;
    }
    setCurrentPage(page);
    if (page === 'pricing') {
      window.location.hash = 'pricing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'lead-enrichment') {
      window.location.hash = 'lead-enrichment';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'omnichannel-outreach' || page === 'outreach-automation') {
      window.location.hash = 'omnichannel-outreach';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'lead-management') {
      window.location.hash = 'lead-management';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'unified-inbox') {
      window.location.hash = 'unified-inbox';
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
        ) : currentPage === 'omnichannel-outreach' ? (
          /* PRODUCT 2: OMNICHANNEL OUTREACH SINGLE PAGE */
          <OmnichannelOutreachPage onNavigate={navigateTo} />
        ) : currentPage === 'lead-management' ? (
          /* PRODUCT 3: LEAD MANAGEMENT SINGLE PAGE */
          <LeadManagementPage onNavigate={navigateTo} />
        ) : currentPage === 'unified-inbox' ? (
          /* PRODUCT 4: UNIFIED INBOX SINGLE PAGE */
          <UnifiedInboxPage onNavigate={navigateTo} />
        ) : (
          /* HOME PAGE: Shows full Landing Page */
          <>
            <HeroSection onNavigate={navigateTo} />
            <LogoCloud />
            <WorkflowSection />
            <FeaturesSection />
            <BenefitsSection />
            <TestimonialSection />
            <CTASection onNavigate={navigateTo} />
          </>
        )}
      </main>
      <Footer currentPage={currentPage} onNavigate={navigateTo} />
    </div>
  );
}

export default App;
