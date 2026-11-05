/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { getStoredConsent, saveCookieConsent, applyConsentToThirdParties } from '../utils/cookieConsent';

const CookieBanner = ({ onNavigate }) => {
  const [isVisible, setIsVisible] = useState(false);
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
    setIsVisible(false);
  };

  const handleAllowSelection = () => {
    saveCookieConsent({
      necessary: true,
      preferences,
      statistics,
      marketing,
    });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-end sm:items-center justify-center p-2 sm:p-6 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-300">
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Cookie consent banner"
        className="w-full max-w-2xl bg-[#14161a] border border-white/10 text-white rounded-2xl sm:rounded-3xl shadow-[0_25px_70px_-15px_rgba(0,0,0,0.85)] flex flex-col overflow-hidden max-h-[92vh] sm:max-h-none animate-in zoom-in-95 duration-200"
      >
        
        {/* Top Header: CreamStack Brand Logo + Privacy Badge + Close */}
        <div className="px-4 sm:px-7 pt-4 sm:pt-5 pb-3 sm:pb-4 flex items-center justify-between border-b border-white/[0.07]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-br from-blue-500/20 to-blue-600/10 border border-blue-400/30 flex items-center justify-center p-1.5 shadow-inner shrink-0">
              <img 
                src="/33.png" 
                alt="CreamStack Brand" 
                className="w-full h-full object-contain drop-shadow"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-white flex items-center gap-1.5">
                CreamStack
                <span className="text-[9px] sm:text-[10px] font-bold text-blue-400 bg-blue-500/10 border border-blue-500/20 px-1.5 sm:px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Privacy
                </span>
              </span>
              <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium">Consent & Cookie Preferences</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Compliance Status Pill (Desktop/Tablet) */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[11px] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>ePrivacy & GDPR</span>
            </div>

            {/* Close / Dismiss Button */}
            <button
              type="button"
              onClick={() => setIsVisible(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close cookie banner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Modern Segmented Navigation Tabs (Touch-friendly & responsive) */}
        <div className="flex items-center gap-1 px-3 sm:px-7 pt-2.5 sm:pt-3.5 pb-2 border-b border-white/[0.07] bg-[#101216]/60 overflow-x-auto no-scrollbar">
          <button
            type="button"
            onClick={() => setActiveTab('consent')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative cursor-pointer shrink-0 ${
              activeTab === 'consent'
                ? 'bg-white/10 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 font-medium'
            }`}
          >
            Consent
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('about')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative cursor-pointer shrink-0 ${
              activeTab === 'about'
                ? 'bg-white/10 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 font-medium'
            }`}
          >
            About cookies
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('details')}
            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative cursor-pointer shrink-0 ${
              activeTab === 'details'
                ? 'bg-white/10 text-white shadow-xs'
                : 'text-slate-400 hover:text-slate-200 hover:bg-white/5 font-medium'
            }`}
          >
            Details
          </button>
        </div>

        {/* Content Body Area */}
        <div className="p-4 sm:p-7 max-h-[48vh] sm:max-h-[55vh] overflow-y-auto custom-scrollbar overscroll-contain">
          
          {/* TAB 1: CONSENT */}
          {activeTab === 'consent' && (
            <div className="flex flex-col">
              <h3 className="text-sm sm:text-lg font-bold text-white mb-1.5 sm:mb-2 tracking-tight">
                This website uses cookies
              </h3>
              <p className="text-[11px] sm:text-[13px] text-slate-300 leading-relaxed font-normal mb-3.5 sm:mb-5">
                We use cookies to personalize content and ads, provide social media features, and analyze our website traffic. We also share information about your use of our site with our social media, advertising, and analytics partners. These partners may combine it with other information you&apos;ve provided to them or that they&apos;ve collected from your use of their services.
              </p>

              {/* Selection Category Cards with Smooth Switches */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 pt-0.5">
                
                {/* 1. Necessary (Required & Always On) */}
                <div className="flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08] select-none">
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-slate-200">Necessary</span>
                      <span className="text-[10px] text-slate-400 font-medium truncate">Core Security & Session</span>
                    </div>
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md sm:rounded-lg shrink-0 ml-2">
                    Always On
                  </span>
                </div>

                {/* 2. Preferences (Settings) */}
                <div 
                  onClick={() => setPreferences(!preferences)}
                  className={`flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer select-none ${
                    preferences 
                      ? 'bg-blue-500/[0.07] border-blue-500/30 shadow-xs' 
                      : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      preferences ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-400'
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
                      <span className="text-xs font-bold text-slate-200">Preferences</span>
                      <span className="text-[10px] text-slate-400 font-medium truncate">UI & Language State</span>
                    </div>
                  </div>
                  {/* Modern Toggle Switch */}
                  <div className={`w-9 h-5 sm:w-10 sm:h-6 rounded-full transition-colors p-0.5 flex items-center shrink-0 ml-2 ${
                    preferences ? 'bg-blue-600 justify-end' : 'bg-slate-700/80 justify-start'
                  }`}>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white shadow-xs"></div>
                  </div>
                </div>

                {/* 3. Statistics (Analytics & Clarity) */}
                <div 
                  onClick={() => setStatistics(!statistics)}
                  className={`flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer select-none ${
                    statistics 
                      ? 'bg-blue-500/[0.07] border-blue-500/30 shadow-xs' 
                      : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      statistics ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-400'
                    }`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="20" x2="18" y2="10"></line>
                        <line x1="12" y1="20" x2="12" y2="4"></line>
                        <line x1="6" y1="20" x2="6" y2="14"></line>
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-slate-200">Statistics</span>
                      <span className="text-[10px] text-slate-400 font-medium truncate">Google & Clarity</span>
                    </div>
                  </div>
                  {/* Modern Toggle Switch */}
                  <div className={`w-9 h-5 sm:w-10 sm:h-6 rounded-full transition-colors p-0.5 flex items-center shrink-0 ml-2 ${
                    statistics ? 'bg-blue-600 justify-end' : 'bg-slate-700/80 justify-start'
                  }`}>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white shadow-xs"></div>
                  </div>
                </div>

                {/* 4. Marketing (Meta Pixel & Ad Tracking) */}
                <div 
                  onClick={() => setMarketing(!marketing)}
                  className={`flex items-center justify-between p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl border transition-all cursor-pointer select-none ${
                    marketing 
                      ? 'bg-blue-500/[0.07] border-blue-500/30 shadow-xs' 
                      : 'bg-white/[0.03] border-white/[0.08] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
                    <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-lg sm:rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                      marketing ? 'bg-blue-500/20 text-blue-400' : 'bg-white/5 text-slate-400'
                    }`}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-xs font-bold text-slate-200">Marketing</span>
                      <span className="text-[10px] text-blue-400 font-medium truncate">Meta Pixel & Ads</span>
                    </div>
                  </div>
                  {/* Modern Toggle Switch */}
                  <div className={`w-9 h-5 sm:w-10 sm:h-6 rounded-full transition-colors p-0.5 flex items-center shrink-0 ml-2 ${
                    marketing ? 'bg-blue-600 justify-end' : 'bg-slate-700/80 justify-start'
                  }`}>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-white shadow-xs"></div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2: ABOUT COOKIES */}
          {activeTab === 'about' && (
            <div className="flex flex-col text-xs sm:text-[13px] text-slate-300 leading-relaxed gap-2.5 sm:gap-3.5">
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                  <span>🍪</span> What are Cookies?
                </h4>
                <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed m-0">
                  Cookies are compact text files stored on your device that enable websites to recognize returning visitors, protect against unauthorized submissions, and remember preferences across sessions.
                </p>
              </div>

              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h4 className="text-xs sm:text-sm font-bold text-white mb-1 flex items-center gap-1.5">
                  <span>⚖️</span> Legal & Privacy Compliance
                </h4>
                <p className="text-slate-400 text-[11px] sm:text-xs leading-relaxed m-0">
                  Strictly necessary cookies ensure uninterrupted operation and security. For marketing trackers (such as the Meta Pixel) and analytical cookies (such as Google Analytics), your consent is required before cookies can be stored or shared.
                </p>
              </div>

              <p className="text-slate-400 text-[11px] sm:text-xs pt-0.5">
                You can withdraw or update your consent anytime by clicking &quot;Cookie Preferences&quot; in our footer or by reading our full{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsVisible(false);
                    if (onNavigate) onNavigate('cookie-policy');
                  }}
                  className="text-blue-400 underline font-semibold hover:text-blue-300 cursor-pointer inline"
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
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white text-xs">Essential Storage (1)</span>
                  <span className="text-[9px] sm:text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded">Always Active</span>
                </div>
                <p className="text-slate-400 text-[11px] mb-2">
                  Essential for basic site security, CSRF protection, and storing consent decisions.
                </p>
                <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] text-slate-300">
                  <span className="bg-black/40 px-2 py-0.5 rounded-lg border border-white/5 font-mono text-emerald-300">creamstack_cookie_consent</span>
                  <span className="text-slate-400">Stores consent choice (1 year)</span>
                </div>
              </div>

              {/* Statistics Details */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white text-xs">Statistics & Analytics (2)</span>
                  <span className="text-[10px] text-slate-400 font-semibold">Google LLC & Microsoft</span>
                </div>
                <p className="text-slate-400 text-[11px] mb-2">
                  Helps our engineering team measure traffic, page load performance, and optimize UI interactions.
                </p>
                <div className="flex flex-col gap-1 text-[10px] sm:text-[11px] text-slate-300">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="bg-black/40 px-2 py-0.5 rounded-lg border border-white/5 font-mono text-blue-300">_ga, _ga_*</span>
                    <span className="text-slate-400">Google Analytics 4 metrics (2 years)</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="bg-black/40 px-2 py-0.5 rounded-lg border border-white/5 font-mono text-blue-300">_clck, _clsk</span>
                    <span className="text-slate-400">Microsoft Clarity session recordings (1 year)</span>
                  </div>
                </div>
              </div>

              {/* Marketing Details */}
              <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white text-xs">Marketing & Ad Attribution (2)</span>
                  <span className="text-[9px] sm:text-[10px] text-blue-400 font-bold uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded">Meta Pixel</span>
                </div>
                <p className="text-slate-400 text-[11px] mb-2">
                  Tracks conversion events (such as Demo Gate unlocks) and optimizes ad delivery across Facebook, Instagram, and Google Ads.
                </p>
                <div className="flex flex-col gap-1 text-[10px] sm:text-[11px] text-slate-300">
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="bg-black/40 px-2 py-0.5 rounded-lg border border-white/5 font-mono text-purple-300">_fbp, fr</span>
                    <span className="text-slate-400">Meta Platforms conversion pixel (90 days)</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <span className="bg-black/40 px-2 py-0.5 rounded-lg border border-white/5 font-mono text-purple-300">_gcl_au</span>
                    <span className="text-slate-400">Google Ads remarketing & attribution (90 days)</span>
                  </div>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Bottom Button Bar: Mobile 2-tier + Desktop 3-column row */}
        <div className="border-t border-white/[0.07] p-3 sm:p-5 bg-[#101216]/90 pb-[max(0.75rem,env(safe-area-inset-bottom))]">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2 sm:gap-3">
            
            {/* Row 1 on Mobile: Reject all + Allow selection side-by-side */}
            <div className="grid grid-cols-2 sm:flex sm:flex-1 gap-2 sm:gap-3">
              <button
                type="button"
                onClick={handleRejectAll}
                className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs sm:text-sm font-bold transition-all text-center border border-white/10 cursor-pointer active:scale-[0.98] truncate"
              >
                Reject all
              </button>
              
              <button
                type="button"
                onClick={handleAllowSelection}
                className="py-2.5 sm:py-3 px-3 sm:px-4 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 text-xs sm:text-sm font-bold transition-all text-center border border-white/10 cursor-pointer active:scale-[0.98] truncate"
              >
                Allow selection
              </button>
            </div>
            
            {/* Row 2 on Mobile (Full Width) / 3rd Column on Desktop: Accept all */}
            <button
              type="button"
              onClick={handleAcceptAll}
              className="w-full sm:flex-1 py-2.5 sm:py-3 px-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-extrabold transition-all text-center shadow-lg shadow-blue-600/30 cursor-pointer active:scale-[0.98]"
            >
              Accept all
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;
