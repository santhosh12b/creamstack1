import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [showDemoGate, setShowDemoGate] = useState(false);

  // Derive currentPage based on pathname to pass down to Navbar/Footer
  const currentPage = location.pathname === '/' ? 'home' : location.pathname.slice(1);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const navigateTo = (page, sectionId = null) => {
    if (page === 'demo' || sectionId === 'demo') {
      if (checkIsVerified()) {
        navigate('/demo');
      } else {
        setShowDemoGate(true); // Intercept and show global popup
      }
      return;
    }
    
    if (page === 'pricing') navigate('/pricing');
    else if (page === 'about') navigate('/about');
    else if (page === 'contact') navigate('/contact');
    else if (page === 'privacy' || page === 'privacy-policy') navigate('/privacy');
    else if (page === 'terms' || page === 'terms-of-service') navigate('/terms');
    else if (page === 'cookie' || page === 'cookie-policy') navigate('/cookie');
    else if (page === 'security' || page === 'security-policy') navigate('/security');
    else if (page === 'lead-enrichment') navigate('/lead-enrichment');
    else if (page === 'omnichannel-outreach' || page === 'outreach-automation') navigate('/omnichannel-outreach');
    else if (page === 'lead-management') navigate('/lead-management');
    else if (page === 'unified-inbox') navigate('/unified-inbox');
    else {
      // If we are navigating to home or a section on the home page
      if (location.pathname !== '/') {
        navigate('/');
      }
      if (sectionId) {
        setTimeout(() => {
          const el = document.getElementById(sectionId);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={navigateTo} />
      <main className="flex-1 overflow-x-hidden">
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection onNavigate={navigateTo} />
              <LogoCloud />
              <WorkflowSection />
              <FeaturesSection />
              <BenefitsSection />
              <TestimonialSection />
              <CTASection onNavigate={navigateTo} />
            </>
          } />
          <Route path="/pricing" element={<PricingSection onNavigate={navigateTo} />} />
          <Route path="/about" element={<AboutPage onNavigate={navigateTo} />} />
          <Route path="/contact" element={<ContactPage onNavigate={navigateTo} />} />
          <Route path="/privacy" element={<PrivacyPolicyPage onNavigate={navigateTo} />} />
          <Route path="/terms" element={<TermsOfServicePage onNavigate={navigateTo} />} />
          <Route path="/cookie" element={<CookiePolicyPage onNavigate={navigateTo} />} />
          <Route path="/security" element={<SecurityPage onNavigate={navigateTo} />} />
          <Route path="/lead-enrichment" element={<LeadEnrichmentPage onNavigate={navigateTo} />} />
          <Route path="/omnichannel-outreach" element={<OmnichannelOutreachPage onNavigate={navigateTo} />} />
          <Route path="/lead-management" element={<LeadManagementPage onNavigate={navigateTo} />} />
          <Route path="/unified-inbox" element={<UnifiedInboxPage onNavigate={navigateTo} />} />
          <Route path="/demo" element={<DemoPage />} />
        </Routes>
      </main>
      <Footer currentPage={currentPage} onNavigate={navigateTo} />
      
      {/* Global Demo Gate Popup */}
      {showDemoGate && (
        <DemoGate 
          onClose={() => setShowDemoGate(false)} 
          onUnlock={() => {
            localStorage.setItem('demo_verified', 'true');
            setShowDemoGate(false);
            navigate('/demo');
          }} 
        />
      )}
    </div>
  );
}

export default App;
