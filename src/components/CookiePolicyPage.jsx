import React, { useState, useEffect } from 'react';
import CTASection from './CTASection';

const sections = [
  { id: 'introduction', title: '1. Introduction' },
  { id: 'what-are-cookies', title: '2. What Are Cookies?' },
  { id: 'types-of-cookies', title: '3. Types of Cookies We Use' },
  { id: 'local-session-storage', title: '4. Local & Session Storage' },
  { id: 'third-party-cookies', title: '5. Third-Party Cookies' },
  { id: 'cookie-duration', title: '6. Cookie Duration' },
  { id: 'managing-preferences', title: '7. Managing Preferences' },
  { id: 'specific-cookie-details', title: '8. Specific Cookie Details' },
  { id: 'data-security', title: '9. Data Security' },
  { id: 'updates-to-policy', title: '10. Updates to This Policy' },
  { id: 'contact-info', title: '11. Contact Information' },
];

const CookiePolicyPage = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('introduction');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-slate-50/60 min-h-screen pt-10 sm:pt-16 pb-0">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl mb-16 sm:mb-24">
        
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 mb-6">
          <button 
            onClick={() => onNavigate && onNavigate('home')} 
            className="text-xs font-bold text-slate-500 hover:text-primary transition-colors cursor-pointer"
          >
            Home
          </button>
          <span className="text-slate-300 text-xs">/</span>
          <span className="text-xs font-bold text-slate-400">Legal</span>
          <span className="text-slate-300 text-xs">/</span>
          <span className="text-xs font-bold text-primary">Cookie Policy</span>
        </div>

        {/* Editorial Page Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                <path d="M8.5 8.5v.01"></path>
                <path d="M16 15.5v.01"></path>
                <path d="M12 12v.01"></path>
                <path d="M11 17v.01"></path>
                <path d="M7 14v.01"></path>
              </svg>
              <span>Tracking Transparency</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Cookie Policy
            </h1>
            
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
              Learn how we use cookies and similar tracking technologies to enhance your experience
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold pt-6 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Effective Date:</span>
                <span className="text-slate-800 font-bold">July 15, 2025</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Platform:</span>
                <span className="text-slate-800 font-bold">CreamStack (Operated by Pixoda)</span>
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Sticky Table of Contents (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 lg:sticky lg:top-24">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-6 shadow-sm">
              <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 mb-4 pb-3 border-b border-slate-100 flex items-center justify-between">
                <span>Table of Contents</span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">11 Sections</span>
              </div>

              <nav className="flex flex-col gap-1 max-h-[65vh] overflow-y-auto pr-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      activeSection === sec.id
                        ? 'bg-emerald-50 text-emerald-700 font-bold border border-emerald-100 shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className="line-clamp-1">{sec.title}</span>
                    {activeSection === sec.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 shrink-0"></span>
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a 
                  href="mailto:support@creamstack.io" 
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-emerald-50/60 text-xs font-bold text-slate-700 hover:text-emerald-700 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <span>🍪</span>
                    <span>Cookie Inquiries</span>
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform text-emerald-600">➔</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Main Document Content */}
          <main className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Section 1: Introduction */}
            <section id="introduction" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                1. Introduction
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal m-0">
                This Cookie Policy explains how CreamStack ("we," "us," or "our"), operated by Pixoda, uses cookies and similar tracking technologies when you visit our website and use our platform. This policy should be read alongside our Privacy Policy and Terms of Service.
              </p>
            </section>

            {/* Section 2: What Are Cookies? */}
            <section id="what-are-cookies" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                2. What Are Cookies?
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal m-0">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a website. They help websites remember information about your visit, making your next visit easier and the site more useful to you.
              </p>
            </section>

            {/* Section 3: Types of Cookies We Use */}
            <section id="types-of-cookies" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                3. Types of Cookies We Use
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                {/* 3.1 Essential */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 m-0">
                      3.1 Essential Cookies
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    These cookies are strictly necessary for the Platform to function and cannot be switched off. They are usually only set in response to actions made by you which amount to a request for services.
                  </p>
                  <div className="text-xs font-bold text-slate-700 mb-1">Examples:</div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                    <li><strong className="text-slate-800">Authentication cookies:</strong> Keep you logged in during your session</li>
                    <li><strong className="text-slate-800">Security cookies:</strong> Protect against cross-site request forgery and other security threats</li>
                    <li><strong className="text-slate-800">Session management:</strong> Maintain your session state and preferences</li>
                  </ul>
                </div>

                {/* 3.2 Functional */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 m-0">
                      3.2 Functional Cookies
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    These cookies enable enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.
                  </p>
                  <div className="text-xs font-bold text-slate-700 mb-1">Examples:</div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                    <li><strong className="text-slate-800">User interface preferences:</strong> Remember sidebar state (expanded/collapsed)</li>
                    <li><strong className="text-slate-800">Theme settings:</strong> Dark/light mode preferences</li>
                    <li><strong className="text-slate-800">Dashboard configurations:</strong> Remember your customized dashboard layout</li>
                    <li><strong className="text-slate-800">Language preferences:</strong> Store your selected language settings</li>
                  </ul>
                </div>

                {/* 3.3 Analytics */}
                <div className="p-5 rounded-2xl bg-slate-50/70 border border-slate-100">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                    <h3 className="text-base sm:text-lg font-extrabold text-slate-900 m-0">
                      3.3 Analytics Cookies
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Platform. They help us know which pages are most and least popular and see how visitors move around the site.
                  </p>
                  <div className="text-xs font-bold text-slate-700 mb-1">Examples:</div>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                    <li><strong className="text-slate-800">Usage analytics:</strong> Track feature usage and user engagement</li>
                    <li><strong className="text-slate-800">Performance monitoring:</strong> Monitor platform performance and load times</li>
                    <li><strong className="text-slate-800">Error tracking:</strong> Identify and fix technical issues</li>
                    <li><strong className="text-slate-800">Credit usage tracking:</strong> Monitor your platform usage for billing purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Local Storage and Session Storage */}
            <section id="local-session-storage" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                4. Local Storage and Session Storage
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                In addition to cookies, we use browser storage technologies:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                    <span>💾</span> 4.1 Local Storage
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">Used to store:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                    <li>User preferences and settings</li>
                    <li>Authentication tokens (securely managed by Supabase)</li>
                    <li>Dashboard configurations</li>
                    <li>Cached data for improved performance</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 flex items-center gap-2">
                    <span>⏳</span> 4.2 Session Storage
                  </h3>
                  <p className="text-xs text-slate-500 mb-2">Used to store:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600">
                    <li>Temporary session data</li>
                    <li>Email verification contexts</li>
                    <li>Form data during navigation</li>
                    <li>Chat conversation states</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Third-Party Cookies */}
            <section id="third-party-cookies" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                5. Third-Party Cookies
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                We work with third-party service providers who may set cookies on our behalf:
              </p>

              <div className="space-y-4">
                {/* 5.1 Supabase */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 m-0">5.1 Supabase (Authentication & Database)</h3>
                    <p className="text-xs text-slate-500 m-0 mt-0.5">Purpose: Secure authentication and data management • Session tokens, user authentication state</p>
                  </div>
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">
                    Supabase Infrastructure
                  </span>
                </div>

                {/* 5.2 Payment Processors */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 m-0">5.2 Payment Processors (Stripe)</h3>
                    <p className="text-xs text-slate-500 m-0 mt-0.5">Purpose: Secure payment processing • Payment session information</p>
                  </div>
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200 shrink-0">
                    Stripe Secure Payment
                  </span>
                </div>

                {/* 5.3 AI Providers */}
                <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-900 m-0">5.3 AI Service Providers</h3>
                    <p className="text-xs text-slate-500 m-0 mt-0.5">Purpose: Content generation and AI-powered features • Anonymized usage patterns</p>
                  </div>
                  <span className="text-[10px] font-extrabold px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-200 shrink-0">
                    No Personal Data Shared
                  </span>
                </div>
              </div>
            </section>

            {/* Section 6: Cookie Duration */}
            <section id="cookie-duration" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                6. Cookie Duration
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-100">
                  <h3 className="text-base font-extrabold text-blue-900 mb-2">6.1 Session Cookies</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                    <li>Deleted when you close your browser</li>
                    <li>Used for temporary functionality during your visit</li>
                  </ul>
                </div>

                <div className="p-5 rounded-2xl bg-purple-50/60 border border-purple-100">
                  <h3 className="text-base font-extrabold text-purple-900 mb-2">6.2 Persistent Cookies</h3>
                  <ul className="list-disc pl-5 space-y-1 text-xs text-slate-700">
                    <li><strong className="text-slate-900">Authentication cookies:</strong> Remain until logout or expiration (typically 7 days)</li>
                    <li><strong className="text-slate-900">Preference cookies:</strong> Remain for up to 1 year</li>
                    <li><strong className="text-slate-900">Analytics cookies:</strong> Remain for up to 2 years</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 7: Managing Your Cookie Preferences */}
            <section id="managing-preferences" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                7. Managing Your Cookie Preferences
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    7.1 Browser Settings
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">You can control cookies through your browser settings:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li><strong className="text-slate-900">Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
                    <li><strong className="text-slate-900">Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
                    <li><strong className="text-slate-900">Safari:</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
                    <li><strong className="text-slate-900">Edge:</strong> Settings &gt; Site permissions &gt; Cookies and site data</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    7.2 Platform Settings
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">You can manage certain preferences within your CreamStack account:</p>
                  <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600">
                    <li>Dashboard preferences</li>
                    <li>Notification settings</li>
                    <li>Theme preferences</li>
                    <li>Language settings</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    7.3 Impact of Disabling Cookies
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li><strong className="text-slate-900">Essential cookies:</strong> Disabling these will prevent the Platform from functioning properly</li>
                    <li><strong className="text-slate-900">Functional cookies:</strong> Disabling these may affect your user experience and preferences</li>
                    <li><strong className="text-slate-900">Analytics cookies:</strong> Disabling these will not affect Platform functionality</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Specific Cookie Details (Technical Table Layout) */}
            <section id="specific-cookie-details" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                8. Specific Cookie Details
              </h2>

              <div className="space-y-4 mb-6">
                
                {/* Cookie 8.1 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-blue-700 bg-blue-100 px-2.5 py-1 rounded-md">
                      8.1 sb-[project-id]-auth-token
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">Duration: 7 days or until logout</span>
                  </div>
                  <p className="text-xs text-slate-600 m-0">
                    <strong className="text-slate-900">Purpose:</strong> Maintain user authentication • <strong className="text-slate-900">Domain:</strong> CreamStack platform
                  </p>
                </div>

                {/* Cookie 8.2 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-md">
                      8.2 sidebar:state
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">Duration: 7 days</span>
                  </div>
                  <p className="text-xs text-slate-600 m-0">
                    <strong className="text-slate-900">Purpose:</strong> Remember sidebar expanded/collapsed state • <strong className="text-slate-900">Domain:</strong> CreamStack platform
                  </p>
                </div>

                {/* Cookie 8.3 */}
                <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-bold text-purple-700 bg-purple-100 px-2.5 py-1 rounded-md">
                      8.3 Session Cookies
                    </span>
                    <span className="text-[10px] font-bold text-slate-500">Duration: Session only</span>
                  </div>
                  <p className="text-xs text-slate-600 m-0">
                    <strong className="text-slate-900">Purpose:</strong> Maintain user session and security • <strong className="text-slate-900">Domain:</strong> CreamStack platform
                  </p>
                </div>

              </div>

              {/* 8.4 Additional Cookies Note */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                <span className="font-bold text-amber-950">8.4 Additional Cookies:</span> This list includes core cookies we use. Some non-essential or experimental cookies may not be mentioned here. You may request a full current cookie list by emailing <a href="mailto:jeghan@pixoda.co" className="underline font-bold text-amber-950">jeghan@pixoda.co</a>.
              </div>
            </section>

            {/* Section 9: Data Security */}
            <section id="data-security" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                9. Data Security
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                All cookies and stored data are:
              </p>

              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Transmitted over secure HTTPS connections</li>
                <li>Protected by industry-standard encryption</li>
                <li>Subject to our data retention policies</li>
                <li>Regularly monitored for security threats</li>
              </ul>
            </section>

            {/* Section 10: Updates to This Policy */}
            <section id="updates-to-policy" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                10. Updates to This Policy
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                We may update this Cookie Policy periodically to reflect:
              </p>

              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm text-slate-600 mb-4">
                <li>Changes in our use of cookies</li>
                <li>New features or functionality</li>
                <li>Legal or regulatory requirements</li>
                <li>Security improvements</li>
              </ul>

              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                Users may be notified of material changes via email notifications, platform announcements, or updated policy posting date. Users are requested to check all policies from time to time to keep themselves updated.
              </p>
            </section>

            {/* Section 11: Contact Information */}
            <section id="contact-info" className="bg-gradient-to-br from-emerald-50/80 via-white to-blue-50/60 rounded-3xl border border-emerald-200/80 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-emerald-200/80">
                11. Contact Information
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                For questions about our use of cookies or this policy:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-emerald-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Support</div>
                  <a href="mailto:support@creamstack.io" className="text-sm font-bold text-emerald-700 hover:underline">
                    support@creamstack.io
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-emerald-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Registered Address</div>
                  <address className="text-xs text-slate-700 not-italic leading-relaxed font-medium">
                    1708, GRG Gen Nxt Foundation Incubator<br />
                    Chandra Textile Mills Compound, Avinashi Rd<br />
                    Civil Aerodrome Post, Coimbatore, Tamil Nadu, India 641014
                  </address>
                </div>
              </div>
            </section>

          </main>

        </div>

      </div>

      {/* Site-wide CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};

export default CookiePolicyPage;
