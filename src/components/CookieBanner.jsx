/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { getStoredConsent, saveCookieConsent, applyConsentToThirdParties } from '../utils/cookieConsent';

const CookieBanner = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('consent'); // 'consent' | 'about' | 'details'
  
  // Selection state for categories
  const [preferences, setPreferences] = useState(false);
  const [statistics, setStatistics] = useState(true);
  const [marketing, setMarketing] = useState(true);

  useEffect(() => {
    // Check if user already gave consent previously
    const existing = getStoredConsent();
    if (!existing) {
      // Delay showing slightly so it animates in smoothly
      const timer = setTimeout(() => setIsVisible(true), 600);
      return () => clearTimeout(timer);
    } else {
      // Apply saved consent settings to window.fbq, gtag, clarity
      applyConsentToThirdParties(existing);
      setPreferences(Boolean(existing.preferences));
      setStatistics(Boolean(existing.statistics));
      setMarketing(Boolean(existing.marketing));
    }

    // Listen for custom event to re-open cookie preferences from footer/policy
    const handleReopen = () => {
      const current = getStoredConsent();
      if (current) {
        setPreferences(Boolean(current.preferences));
        setStatistics(Boolean(current.statistics));
        setMarketing(Boolean(current.marketing));
      }
      setIsVisible(true);
      setIsModalOpen(true);
    };

    window.addEventListener('creamstack_open_cookie_preferences', handleReopen);
    return () => window.removeEventListener('creamstack_open_cookie_preferences', handleReopen);
  }, []);

  const handleAcceptAll = () => {
    saveCookieConsent({
      necessary: true,
      preferences: true,
      statistics: true,
      marketing: true,
    });
    setPreferences(true);
    setStatistics(true);
    setMarketing(true);
    setIsModalOpen(false);
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    saveCookieConsent({
      necessary: true,
      preferences: false,
      statistics: false,
      marketing: false,
    });
    setPreferences(false);
    setStatistics(false);
    setMarketing(false);
    setIsModalOpen(false);
    setIsVisible(false);
  };

  const handleAllowSelection = () => {
    saveCookieConsent({
      necessary: true,
      preferences,
      statistics,
      marketing,
    });
    setIsModalOpen(false);
    setIsVisible(false);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // If the user already has saved consent (e.g. opened from footer), also hide the banner
    if (getStoredConsent()) {
      setIsVisible(false);
    }
  };

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Sleek Floating Bottom Pill Banner (Default View) in CreamStack Theme */}
      {!isModalOpen && (
        <aside
          aria-label="Cookie consent banner"
          className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-[999] w-[calc(100%-1.5rem)] sm:w-[94%] max-w-4xl bg-white/95 backdrop-blur-md text-secondary rounded-2xl sm:rounded-full shadow-[0_12px_40px_-6px_rgba(15,23,42,0.14)] border border-slate-200/90 px-4 py-3 sm:px-6 sm:py-2.5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6 animate-in slide-in-from-bottom-5 duration-300 transition-all"
        >
          {/* Left Side: CreamStack Brand-Themed Cookie Icon Badge + Copy */}
          <div className="flex items-center gap-2.5 sm:gap-3 text-secondary text-center sm:text-left">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center text-primary shrink-0 shadow-2xs">
              <svg 
                className="w-4 h-4 text-primary shrink-0" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                <path d="M8.5 8.5v.01" />
                <path d="M16 15.5v.01" />
                <path d="M12 12v.01" />
                <path d="M11 17v.01" />
                <path d="M7 13v.01" />
              </svg>
            </div>
            <span className="text-xs sm:text-sm font-medium text-slate-700 tracking-tight">
              We use cookies to enhance your experience.
            </span>
          </div>

          {/* Right Side: Cookie settings link + Reject all + Accept all */}
          <div className="flex items-center justify-center sm:justify-end gap-2.5 sm:gap-4 shrink-0 w-full sm:w-auto flex-wrap sm:flex-nowrap">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="text-xs sm:text-sm font-semibold text-secondary hover:text-primary underline underline-offset-4 transition-colors cursor-pointer py-1 px-1 whitespace-nowrap"
            >
              Cookie settings
            </button>

            <button
              type="button"
              onClick={handleRejectAll}
              className="px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 active:scale-95 transition-all cursor-pointer whitespace-nowrap shadow-xs"
            >
              Reject all
            </button>

            <button
              type="button"
              onClick={handleAcceptAll}
              className="px-5 sm:px-6 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold text-white bg-primary hover:bg-primary-hover active:scale-95 shadow-md shadow-primary/25 transition-all cursor-pointer whitespace-nowrap"
            >
              Accept all
            </button>
          </div>
        </aside>
      )}

      {/* 2. Detailed Cookie Settings Modal - White Theme */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center p-2 sm:p-6 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-300">
          <div 
            role="dialog"
            aria-modal="true"
            aria-label="Cookie consent banner"
            className="w-full max-w-2xl bg-white border border-slate-200/90 text-secondary rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_-15px_rgba(15,23,42,0.22)] flex flex-col overflow-hidden max-h-[92vh] sm:max-h-none animate-in zoom-in-95 duration-200"
          >
            
            {/* Top Header: CreamStack Brand Logo + Privacy Badge + Close */}
            <div className="px-4 sm:px-7 pt-4 sm:pt-5 pb-3 sm:pb-4 flex items-center justify-between border-b border-slate-100 bg-white">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center p-1.5 shadow-2xs shrink-0">
                  <img 
                    src="/creamstack-icon.png" 
                    alt="CreamStack Brand" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-extrabold text-sm sm:text-base tracking-tight text-secondary flex items-center gap-1.5">
                    CreamStack
                    <span className="text-[9px] sm:text-[10px] font-bold text-primary bg-primary/10 border border-primary/20 px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider">
                      Privacy
                    </span>
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-text-light font-medium">Consent & Cookie Preferences</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Compliance Status Pill (Desktop/Tablet) */}
                <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-700 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>ePrivacy & GDPR</span>
                </div>

                {/* Close / Dismiss Button */}
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-secondary hover:bg-slate-100 transition-colors cursor-pointer"
                  aria-label="Close cookie modal"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Clean Segmented Navigation Tabs */}
            <div className="flex items-center gap-1.5 px-3 sm:px-7 pt-2.5 sm:pt-3 pb-2 border-b border-slate-100 bg-slate-50/70 overflow-x-auto no-scrollbar">
              <button
                type="button"
                onClick={() => setActiveTab('consent')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative cursor-pointer shrink-0 ${
                  activeTab === 'consent'
                    ? 'bg-white text-secondary shadow-xs border border-slate-200/70'
                    : 'text-slate-500 hover:text-secondary hover:bg-slate-100/70 font-semibold'
                }`}
              >
                Consent
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('about')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative cursor-pointer shrink-0 ${
                  activeTab === 'about'
                    ? 'bg-white text-secondary shadow-xs border border-slate-200/70'
                    : 'text-slate-500 hover:text-secondary hover:bg-slate-100/70 font-semibold'
                }`}
              >
                About cookies
              </button>

              <button
                type="button"
                onClick={() => setActiveTab('details')}
                className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative cursor-pointer shrink-0 ${
                  activeTab === 'details'
                    ? 'bg-white text-secondary shadow-xs border border-slate-200/70'
                    : 'text-slate-500 hover:text-secondary hover:bg-slate-100/70 font-semibold'
                }`}
              >
                Details
              </button>
            </div>

            {/* Content Body Area */}
            <div className="p-4 sm:p-7 max-h-[48vh] sm:max-h-[55vh] overflow-y-auto custom-scrollbar overscroll-contain bg-white">
              
              {/* TAB 1: CONSENT */}
              {activeTab === 'consent' && (
                <div className="flex flex-col">
                  <h3 className="text-sm sm:text-lg font-bold text-secondary mb-1.5 sm:mb-2 tracking-tight">
                    This website uses cookies
                  </h3>
                  <p className="text-[11px] sm:text-[13px] text-text-light leading-relaxed font-normal mb-3.5 sm:mb-5">
                    We use cookies to personalize content and ads, analyze traffic, and enhance user experience. We also share information about your use of our site with analytics partners (including <strong className="text-secondary font-bold">Microsoft Clarity</strong> & Google) and advertising partners (<strong className="text-secondary font-bold">Meta Pixel</strong>).
                  </p>

                  {/* Selection Category Cards with Smooth Switches */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
                    
                    {/* 1. Necessary (Required & Always On) */}
                    <div className="flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80 select-none">
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                          </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-secondary">Necessary</span>
                          <span className="text-[10px] text-slate-500 font-medium truncate">Core Security & Session</span>
                        </div>
                      </div>
                      <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shrink-0 ml-2">
                        Always On
                      </span>
                    </div>

                    {/* 2. Preferences (Settings) */}
                    <div 
                      onClick={() => setPreferences(!preferences)}
                      className={`flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer select-none ${
                        preferences 
                          ? 'bg-blue-50/50 border-primary/40 shadow-2xs' 
                          : 'bg-slate-50/80 border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          preferences ? 'bg-blue-100 text-primary border border-blue-200' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="4" y1="21" x2="4" y2="14"></line>
                            <line x1="4" y1="10" x2="4" y2="3"></line>
                            <line x1="12" y1="21" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12" y2="3"></line>
                            <line x1="20" y1="21" x2="20" y2="16"></line>
                            <line x1="20" y1="12" x2="20" y2="3"></line>
                            <line x1="1" y1="14" x2="7" y2="14"></line>
                            <line x1="9" y1="8" x2="15" y2="8"></line>
                            <line x1="17" y1="16" x2="23" y2="16"></line>
                          </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-secondary">Preferences</span>
                          <span className="text-[10px] text-slate-500 font-medium truncate">UI & Language State</span>
                        </div>
                      </div>
                      {/* Modern Toggle Switch */}
                      <div className={`w-9 h-5 sm:w-10 sm:h-6 rounded-full transition-colors p-0.5 flex items-center shrink-0 ml-2 ${
                        preferences ? 'bg-primary justify-end' : 'bg-slate-200 justify-start'
                      }`}>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white shadow-xs"></div>
                      </div>
                    </div>

                    {/* 3. Statistics (Microsoft Clarity & Google Analytics) */}
                    <div 
                      onClick={() => setStatistics(!statistics)}
                      className={`flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer select-none ${
                        statistics 
                          ? 'bg-sky-50/50 border-sky-300 shadow-2xs' 
                          : 'bg-slate-50/80 border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          statistics ? 'bg-sky-100 text-sky-600 border border-sky-200' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="18" y1="20" x2="18" y2="10"></line>
                            <line x1="12" y1="20" x2="12" y2="4"></line>
                            <line x1="6" y1="20" x2="6" y2="14"></line>
                          </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-secondary">Statistics</span>
                          <span className="text-[10px] text-sky-600 font-semibold truncate">Microsoft Clarity & Google</span>
                        </div>
                      </div>
                      {/* Modern Toggle Switch */}
                      <div className={`w-9 h-5 sm:w-10 sm:h-6 rounded-full transition-colors p-0.5 flex items-center shrink-0 ml-2 ${
                        statistics ? 'bg-primary justify-end' : 'bg-slate-200 justify-start'
                      }`}>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white shadow-xs"></div>
                      </div>
                    </div>

                    {/* 4. Marketing (Meta Pixel & Ad Tracking) */}
                    <div 
                      onClick={() => setMarketing(!marketing)}
                      className={`flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer select-none ${
                        marketing 
                          ? 'bg-purple-50/50 border-purple-300 shadow-2xs' 
                          : 'bg-slate-50/80 border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                        <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                          marketing ? 'bg-purple-100 text-purple-600 border border-purple-200' : 'bg-slate-100 text-slate-400'
                        }`}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                          </svg>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-xs font-bold text-secondary">Marketing</span>
                          <span className="text-[10px] text-purple-600 font-medium truncate">Meta Pixel & Ads</span>
                        </div>
                      </div>
                      {/* Modern Toggle Switch */}
                      <div className={`w-9 h-5 sm:w-10 sm:h-6 rounded-full transition-colors p-0.5 flex items-center shrink-0 ml-2 ${
                        marketing ? 'bg-primary justify-end' : 'bg-slate-200 justify-start'
                      }`}>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white shadow-xs"></div>
                      </div>
                    </div>

                  </div>
                </div>
              )}

              {/* TAB 2: ABOUT COOKIES */}
              {activeTab === 'about' && (
                <div className="flex flex-col text-xs sm:text-[13px] text-text-light leading-relaxed gap-2.5 sm:gap-3.5">
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <h4 className="text-xs sm:text-sm font-bold text-secondary mb-1 flex items-center gap-1.5">
                      <span>🍪</span> What are Cookies?
                    </h4>
                    <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed m-0">
                      Cookies are compact text files stored on your device that enable websites to recognize returning visitors, protect against unauthorized submissions, and remember preferences across sessions.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <h4 className="text-xs sm:text-sm font-bold text-secondary mb-1 flex items-center gap-1.5">
                      <span>📊</span> Microsoft Clarity & Analytics
                    </h4>
                    <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed m-0">
                      We use <strong className="text-secondary font-bold">Microsoft Clarity</strong> to capture how you interact with our website through behavioral metrics, heatmaps, and session replay to improve user experience. If turned off, Clarity cookies (<code className="text-sky-700 bg-sky-50 px-1 py-0.5 rounded border border-sky-200/70 font-mono">_clck</code>, <code className="text-sky-700 bg-sky-50 px-1 py-0.5 rounded border border-sky-200/70 font-mono">_clsk</code>) and session tracking are completely disabled.
                    </p>
                  </div>

                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <h4 className="text-xs sm:text-sm font-bold text-secondary mb-1 flex items-center gap-1.5">
                      <span>⚖️</span> Legal & Privacy Compliance
                    </h4>
                    <p className="text-slate-600 text-[11px] sm:text-xs leading-relaxed m-0">
                      Strictly necessary cookies ensure uninterrupted operation and security. For marketing trackers (such as the Meta Pixel) and analytical cookies (such as Microsoft Clarity & Google Analytics), your consent is required before cookies can be stored or shared.
                    </p>
                  </div>

                  <p className="text-slate-500 text-[11px] sm:text-xs pt-0.5">
                    You can withdraw or update your consent anytime by clicking &quot;Cookie Preferences&quot; in our footer or by reading our full{' '}
                    <button
                      type="button"
                      onClick={() => {
                        setIsModalOpen(false);
                        setIsVisible(false);
                        if (onNavigate) onNavigate('cookie-policy');
                      }}
                      className="text-primary underline font-semibold hover:text-primary-hover cursor-pointer inline"
                    >
                      Cookie Policy
                    </button>
                    .
                  </p>
                </div>
              )}

              {/* TAB 3: DETAILS */}
              {activeTab === 'details' && (
                <div className="flex flex-col gap-2.5 sm:gap-3 text-xs">
                  
                  {/* Necessary Details */}
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-secondary text-xs">Essential Storage (1)</span>
                      <span className="text-[9px] sm:text-[10px] text-emerald-700 font-bold uppercase tracking-wider bg-emerald-50 border border-emerald-200/80 px-2 py-0.5 rounded">Always Active</span>
                    </div>
                    <p className="text-slate-600 text-[11px] mb-2">
                      Essential for basic site security, CSRF protection, and storing consent decisions.
                    </p>
                    <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-slate-700">
                      <span className="bg-white px-2 py-0.5 rounded-lg border border-slate-200 font-mono text-emerald-700 font-medium">creamstack_cookie_consent</span>
                      <span className="text-slate-500">Stores consent choice (1 year)</span>
                    </div>
                  </div>

                  {/* Dedicated Microsoft Clarity Card */}
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-secondary text-xs flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                        <span>Microsoft Clarity</span>
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-sky-700 font-bold uppercase tracking-wider bg-sky-50 border border-sky-200/80 px-2 py-0.5 rounded">Heatmaps & Sessions</span>
                    </div>
                    <p className="text-slate-600 text-[11px] mb-2">
                      Operated by Microsoft Corporation. Captures user interaction, scroll depth, and click heatmaps to improve user experience.
                    </p>
                    <div className="flex flex-col gap-1 text-[10px] sm:text-[11px] text-slate-700">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="bg-white px-2 py-0.5 rounded-lg border border-slate-200 font-mono text-sky-700 font-medium">_clck</span>
                        <span className="text-slate-500">Persists Clarity User ID across page views (1 year)</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="bg-white px-2 py-0.5 rounded-lg border border-slate-200 font-mono text-sky-700 font-medium">_clsk</span>
                        <span className="text-slate-500">Connects multiple page views into a single session recording (24 hours)</span>
                      </div>
                    </div>
                  </div>

                  {/* Google Analytics Details */}
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-secondary text-xs">Google Analytics (1)</span>
                      <span className="text-[10px] text-slate-500 font-semibold">Google LLC</span>
                    </div>
                    <p className="text-slate-600 text-[11px] mb-2">
                      Helps our engineering team measure traffic, page load performance, and optimize UI interactions.
                    </p>
                    <div className="flex items-center gap-2 text-[10px] sm:text-[11px] text-slate-700">
                      <span className="bg-white px-2 py-0.5 rounded-lg border border-slate-200 font-mono text-blue-700 font-medium">_ga, _ga_*</span>
                      <span className="text-slate-500">Google Analytics 4 session metrics (2 years)</span>
                    </div>
                  </div>

                  {/* Marketing Details */}
                  <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-slate-50/80 border border-slate-200/80">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-secondary text-xs">Marketing & Ad Attribution (2)</span>
                      <span className="text-[9px] sm:text-[10px] text-purple-700 font-bold uppercase tracking-wider bg-purple-50 border border-purple-200/80 px-2 py-0.5 rounded">Meta Pixel</span>
                    </div>
                    <p className="text-slate-600 text-[11px] mb-2">
                      Tracks conversion events (such as Demo Gate unlocks) and optimizes ad delivery across Facebook, Instagram, and Google Ads.
                    </p>
                    <div className="flex flex-col gap-1 text-[10px] sm:text-[11px] text-slate-700">
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="bg-white px-2 py-0.5 rounded-lg border border-slate-200 font-mono text-purple-700 font-medium">_fbp, fr</span>
                        <span className="text-slate-500">Meta Platforms conversion pixel (90 days)</span>
                      </div>
                      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                        <span className="bg-white px-2 py-0.5 rounded-lg border border-slate-200 font-mono text-purple-700 font-medium">_gcl_au</span>
                        <span className="text-slate-500">Google Ads remarketing & attribution (90 days)</span>
                      </div>
                    </div>
                  </div>

                </div>
              )}

            </div>

            {/* Bottom Button Bar: Mobile 2-tier + Desktop 3-column row */}
            <div className="border-t border-slate-100 p-3 sm:p-5 bg-slate-50/80 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
                
                {/* Row 1 on Mobile: Reject all + Allow selection side-by-side */}
                <div className="grid grid-cols-2 sm:flex sm:flex-1 gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={handleRejectAll}
                    className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold transition-all text-center border border-slate-200 shadow-2xs cursor-pointer active:scale-[0.98] truncate"
                  >
                    Reject all
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleAllowSelection}
                    className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-white hover:bg-slate-100 text-slate-700 text-xs sm:text-sm font-bold transition-all text-center border border-slate-200 shadow-2xs cursor-pointer active:scale-[0.98] truncate"
                  >
                    Allow selection
                  </button>
                </div>
                
                {/* Row 2 on Mobile (Full Width) / 3rd Column on Desktop: Accept all */}
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="w-full sm:flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs sm:text-sm font-extrabold transition-all text-center shadow-md shadow-primary/25 cursor-pointer active:scale-[0.98]"
                >
                  Accept all
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
