import React, { useState, useEffect } from 'react';
import CTASection from './CTASection';

const sections = [
  { id: 'overview', title: '1. Overview & Security Architecture' },
  { id: 'db-security', title: '2. Database & Data Isolation' },
  { id: 'auth-sessions', title: '3. Authentication & Sessions' },
  { id: 'access-control', title: '4. Access Control Policies' },
  { id: 'app-security', title: '5. Application & Code Security' },
  { id: 'data-compliance', title: '6. Data Processing & Controls' },
];

const SecurityPage = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('overview');

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
          <span className="text-xs font-bold text-slate-400">Trust Center</span>
          <span className="text-slate-300 text-xs">/</span>
          <span className="text-xs font-bold text-primary">Security</span>
        </div>

        {/* Editorial Page Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
              </svg>
              <span>Enterprise Trust & Protection</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Security at CreamStack
            </h1>
            
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
              Multiple layers of security to protect your data and ensure your privacy
            </p>

            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 font-bold pt-6 border-t border-slate-100">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-100">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
                <span>Row Level Security (RLS) Active</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600"></span>
                <span>TLS 1.3 Encrypted Transmission</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 border border-purple-100">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-600"></span>
                <span>Isolated Multi-Tenant DB</span>
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
                <span>Security Directory</span>
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">6 Modules</span>
              </div>

              <nav className="flex flex-col gap-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      activeSection === sec.id
                        ? 'bg-blue-50 text-blue-700 font-bold border border-blue-100 shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className="line-clamp-1">{sec.title}</span>
                    {activeSection === sec.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0"></span>
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a 
                  href="mailto:support@creamstack.io" 
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-blue-50/60 text-xs font-bold text-slate-700 hover:text-primary transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <span>🛡️</span>
                    <span>Security Team Contact</span>
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform text-blue-600">➔</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Main Security Documentation Content */}
          <main className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Section 1: Overview & Highlights Grid */}
            <section id="overview" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                1. Overview & Security Architecture
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed mb-6 font-normal">
                At CreamStack, we employ multi-layered security protocols across authentication, database architecture, network transmission, and application execution to guarantee complete data isolation and privacy for your business.
              </p>

              {/* 6 Key Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Pillar 1 */}
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                    </svg>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Database Security</h3>
                  <p className="text-xs text-slate-600 leading-relaxed m-0">
                    Row Level Security (RLS) enabled on all user data tables with complete data isolation and encrypted transmission.
                  </p>
                </div>

                {/* Pillar 2 */}
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">User Data Isolation</h3>
                  <p className="text-xs text-slate-600 leading-relaxed m-0">
                    Your leads, content, offers, and profiles are completely isolated from other users with database-level access controls.
                  </p>
                </div>

                {/* Pillar 3 */}
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-purple-50 text-purple-600 border border-purple-100 flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Secure Authentication</h3>
                  <p className="text-xs text-slate-600 leading-relaxed m-0">
                    Email and password authentication with validation, email verification, and user enumeration protection.
                  </p>
                </div>

                {/* Pillar 4 */}
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-amber-50 text-amber-700 border border-amber-200 flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Session Security</h3>
                  <p className="text-xs text-slate-600 leading-relaxed m-0">
                    Automatic session timeout after 30 minutes of inactivity with real-time activity tracking and secure cleanup.
                  </p>
                </div>

                {/* Pillar 5 */}
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-indigo-50 text-indigo-600 border border-indigo-100 flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Access Control</h3>
                  <p className="text-xs text-slate-600 leading-relaxed m-0">
                    Comprehensive access control policies on all data tables with user ID verification for all operations.
                  </p>
                </div>

                {/* Pillar 6 */}
                <div className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/90">
                  <div className="w-8 h-8 rounded-xl bg-teal-50 text-teal-600 border border-teal-100 flex items-center justify-center mb-3">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-base font-extrabold text-slate-900 mb-1">Data Processing</h3>
                  <p className="text-xs text-slate-600 leading-relaxed m-0">
                    We act as a data processor for your business data with secure storage and complete user control over data.
                  </p>
                </div>

              </div>
            </section>

            {/* Section 2: Database Security & User Data Isolation */}
            <section id="db-security" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                2. Database Security & User Data Isolation
              </h2>

              <div className="space-y-6">
                
                {/* 2.1 DB Security */}
                <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-blue-600">🗄️</span> Database Security Architecture
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>Row Level Security (RLS) enabled on all user data tables</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>Users can only access their own data - complete data isolation</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>Encrypted data transmission using HTTPS/TLS</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>Secure data storage with encryption at rest</div>
                    </li>
                  </ul>
                </div>

                {/* 2.2 Data Isolation */}
                <div className="p-6 rounded-2xl bg-slate-50/70 border border-slate-200">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="text-emerald-600">🔒</span> User Data Isolation
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>Your leads, content, offers, and profiles are completely isolated from other users</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>Database-level access controls prevent unauthorized data access</div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <div>Credit tracking and billing information protected with strict access policies</div>
                    </li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Section 3: Authentication & Session Management */}
            <section id="auth-sessions" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                3. Authentication & Session Management
              </h2>

              <div className="space-y-6">
                
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
                    Secure Authentication
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Email and password authentication with validation</li>
                    <li>Email verification required for account activation</li>
                    <li>User enumeration protection during password reset</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
                    Session Security
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 mb-4">
                    <li>Automatic session timeout after 30 minutes of inactivity</li>
                    <li>Real-time activity tracking (mouse, keyboard, scroll, touch events)</li>
                    <li>Secure session cleanup on logout</li>
                    <li>Automatic removal of authentication tokens from browser storage</li>
                  </ul>

                  <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 text-xs text-slate-700 font-medium">
                    <span className="font-bold text-blue-900">Session Protection:</span> Inactivity timers continuously monitor user interaction. After 30 minutes without active events, sessions are securely terminated to prevent unauthorized physical terminal access.
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-3">
                    Password Security
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Email format validation to prevent invalid submissions</li>
                    <li>Secure password reset flow with redirect protection</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Section 4: Access Control */}
            <section id="access-control" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                4. Database-Level Access Control
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                Access to Platform databases is enforced via strict multi-tenant access control policies:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600 mb-6">
                <li>Comprehensive access control policies on all data tables</li>
                <li>User ID verification for all data operations</li>
                <li>Secure database functions with proper access controls</li>
                <li>Automated user profile creation with security defaults</li>
              </ul>
            </section>

            {/* Section 5: Application Security */}
            <section id="app-security" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                5. Application Security & Secure Development
              </h2>

              <div className="space-y-6">
                
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    Input Validation
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Email format validation across all forms</li>
                    <li>Basic input sanitization and validation</li>
                    <li>Error handling that doesn't expose sensitive information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    Secure Development Practices
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Regular security updates and patches</li>
                    <li>Activity logging for user actions</li>
                    <li>Credit usage tracking for transparency</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Section 6: Data Processing & Compliance */}
            <section id="data-compliance" className="bg-gradient-to-br from-blue-50/80 via-white to-emerald-50/60 rounded-3xl border border-blue-200/80 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-blue-200/80">
                6. Data Processing & User Controls
              </h2>

              <div className="space-y-6">
                
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    Data Handling
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>We act as a data processor for your business data</li>
                    <li>User activity and engagement tracking for platform functionality</li>
                    <li>Secure storage of content analysis and lead information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    User Controls
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Complete control over your data through your dashboard</li>
                    <li>Secure data export capabilities</li>
                  </ul>
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

export default SecurityPage;
