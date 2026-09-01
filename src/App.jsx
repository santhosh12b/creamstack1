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
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookiePolicyPage from './components/CookiePolicyPage';
import SecurityPage from './components/SecurityPage';
import DemoPage from './components/DemoPage';    
import DemoGate from './components/DemoGate';
import Footer from './components/Footer';

// Use localStorage so the verification persists across page reloads
const checkIsVerified = () => localStorage.getItem('demo_verified') === 'true';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showDemoGate, setShowDemoGate] = useState(false);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.startsWith('#demo') || hash.startsWith('#/demo')) {
        if (checkIsVerified()) {
          setCurrentPage('demo');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setCurrentPage('home');
          setShowDemoGate(true); 
        }
        return;
      }
      if (hash === '#pricing' || hash === '#/pricing') {
        setCurrentPage('pricing');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#about' || hash === '#/about') {
        setCurrentPage('about');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#contact' || hash === '#/contact') {
        setCurrentPage('contact');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#privacy' || hash === '#/privacy' || hash === '#privacy-policy' || hash === '#/privacy-policy') {
        setCurrentPage('privacy');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#terms' || hash === '#/terms' || hash === '#terms-of-service' || hash === '#/terms-of-service') {
        setCurrentPage('terms');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#cookie' || hash === '#/cookie' || hash === '#cookie-policy' || hash === '#/cookie-policy') {
        setCurrentPage('cookie');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#security' || hash === '#/security' || hash === '#security-policy' || hash === '#/security-policy') {
        setCurrentPage('security');
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
      if (checkIsVerified()) {
        setCurrentPage('demo');
        window.location.hash = 'demo';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setShowDemoGate(true); // Intercept and show global popup
      }
      return;
    }
    setCurrentPage(page);
    if (page === 'pricing') {
      window.location.hash = 'pricing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'about') {
      window.location.hash = 'about';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'contact') {
      window.location.hash = 'contact';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'privacy' || page === 'privacy-policy') {
      window.location.hash = 'privacy';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'terms' || page === 'terms-of-service') {
      window.location.hash = 'terms';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'cookie' || page === 'cookie-policy') {
      window.location.hash = 'cookie';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (page === 'security' || page === 'security-policy') {
      window.location.hash = 'security';
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
      <main className="flex-1 overflow-x-hidden">
        {currentPage === 'pricing' ? (
          /* PRICING PAGE ONLY: Shows PricingSection */
          <PricingSection onNavigate={navigateTo} />
        ) : currentPage === 'about' ? (
          /* ABOUT PAGE */
          <AboutPage onNavigate={navigateTo} />
        ) : currentPage === 'contact' ? (
          /* CONTACT PAGE */
          <ContactPage onNavigate={navigateTo} />
        ) : currentPage === 'privacy' ? (
          /* PRIVACY POLICY PAGE */
          <PrivacyPolicyPage onNavigate={navigateTo} />
        ) : currentPage === 'terms' ? (
          /* TERMS OF SERVICE PAGE */
          <TermsOfServicePage onNavigate={navigateTo} />
        ) : currentPage === 'cookie' ? (
          /* COOKIE POLICY PAGE */
          <CookiePolicyPage onNavigate={navigateTo} />
        ) : currentPage === 'security' ? (
          /* SECURITY PAGE */
          <SecurityPage onNavigate={navigateTo} />
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
        ) : currentPage === 'demo' ? (
          /* DEMO PAGE */
          <DemoPage />
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
      
      {/* Global Demo Gate Popup */}
      {showDemoGate && (
        <DemoGate 
          onClose={() => setShowDemoGate(false)} 
          onUnlock={() => {
            localStorage.setItem('demo_verified', 'true');
            setShowDemoGate(false);
            // After successful unlock, actually navigate to the demo page
            setCurrentPage('demo');
            window.location.hash = 'demo';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }} 
        />
      )}
    </div>
  );
}

export default App;
