import React, { useState, useEffect } from 'react';
import CTASection from './CTASection';

const sections = [
  { id: 'overview', title: '1. Overview' },
  { id: 'data-collect', title: '2. Data We Collect' },
  { id: 'how-we-use', title: '3. How We Use Your Information' },
  { id: 'legal-basis', title: '4. Legal Basis for Processing' },
  { id: 'data-sharing', title: '5. Data Sharing & Disclosure' },
  { id: 'data-retention', title: '6. Data Retention' },
  { id: 'privacy-rights', title: '7. Your Privacy Rights' },
  { id: 'cookies', title: '8. Cookies & Tracking' },
  { id: 'international-transfers', title: '9. International Data Transfers' },
  { id: 'policy-updates', title: '10. Updates to This Policy' },
  { id: 'contact-info', title: '11. Contact Information' },
  { id: 'specific-activities', title: '12. Specific Data Processing Activities' },
];

const PrivacyPolicyPage = ({ onNavigate }) => {
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
          <span className="text-xs font-bold text-slate-400">Legal</span>
          <span className="text-slate-300 text-xs">/</span>
          <span className="text-xs font-bold text-primary">Privacy Policy</span>
        </div>

        {/* Editorial Page Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-extrabold uppercase tracking-wider mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Legal Document</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Privacy Policy
            </h1>
            
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
              Learn how we collect, use, and protect your personal information
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold pt-6 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Last updated:</span>
                <span className="text-slate-800 font-bold">July 15, 2025</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Applies to:</span>
                <span className="text-slate-800 font-bold">CreamStack Platform Users & Data Processing</span>
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
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">12 Sections</span>
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
                    <span>✉️</span>
                    <span>Have Legal Questions?</span>
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform text-blue-600">➔</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Main Document Content */}
          <main className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Section 1: Overview */}
            <section id="overview" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                1. Overview
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                <p className="m-0">
                  CreamStack ("we," "our," or "us") is a content curation and lead generation platform operated under its parent company Pixoda ("Pixoda"). CreamStack primarily acts as a data processor on behalf of our users ("you" or "your"), collecting and processing data under your instructions to help you curate content and generate leads based on criteria you define. By using our platform, you acknowledge and agree to our data practices as outlined in this policy.
                </p>
                
                <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 sm:p-5 text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                  <div className="font-bold text-blue-900 mb-1 flex items-center gap-2">
                    <span>📜</span> Data Processing Agreement (DPA) Notice
                  </div>
                  This Privacy Policy also serves as a Data Processing Agreement (DPA) under applicable laws. By using CreamStack, you acknowledge and agree that this policy governs how we process data on your behalf, and you accept the roles and responsibilities described herein without requiring a separate signed DPA.
                </div>
              </div>
            </section>

            {/* Section 2: Data We Collect */}
            <section id="data-collect" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                2. Data We Collect
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                
                {/* 2.1 */}
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    2.1 User Account Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Name and email address</li>
                    <li>Company details (name, size, role)</li>
                    <li>Account credentials (securely hashed)</li>
                    <li>Profile information and preferences</li>
                  </ul>
                </div>

                {/* 2.2 */}
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    2.2 Billing Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Billing name and email</li>
                    <li>Billing address</li>
                    <li>Phone number (for billing purposes)</li>
                    <li>Country and region</li>
                    <li>Tax ID (if applicable)</li>
                    <li>Payment transaction details (processed through secure payment providers)</li>
                  </ul>
                </div>

                {/* 2.3 */}
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    2.3 Lead and Business Data (Collected on User's Behalf)
                  </h3>
                  <p className="mb-3 text-xs sm:text-sm">
                    At your direction, we collect publicly available content and lead data from available professional and social platforms through third-party APIs:
                  </p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 mb-4">
                    <li>Lead information (names, email addresses, professional profiles, company details, job titles, locations)</li>
                    <li>Intent leads data (prospect activity, engagement patterns, initial message ideas)</li>
                    <li>Target audience profiles (ICPs) (industry, company size, geography, job titles)</li>
                    <li>Offer and product information you create</li>
                    <li>Content and messaging data you generate or curate</li>
                    <li>Curator data (names, professional profiles, bios, post content, and engagement metrics)</li>
                  </ul>

                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 text-xs text-amber-900 leading-relaxed font-medium">
                    <span className="font-bold">Note:</span> API providers used for lead generation may change over time. Users can request information about current providers by emailing <a href="mailto:support@creamstack.io" className="underline font-bold text-amber-950">support@creamstack.io</a>. Master data collected through APIs is stored in a centralized database and may later be assigned to your account. Until assigned, it remains as master data.
                  </div>
                </div>

                {/* 2.4 */}
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    2.4 Content Generation Data
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Chat conversations with our AI content generator</li>
                    <li>Generated content (e.g., social media posts, marketing copy, lead magnets)</li>
                    <li>Content preferences and optimization settings</li>
                    <li>Content performance metrics</li>
                  </ul>
                </div>

                {/* 2.5 */}
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    2.5 Platform Usage Data
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Activity logs (feature usage, time spent, actions taken)</li>
                    <li>Credit usage tracking (for billing and feature access)</li>
                    <li>Notification preferences</li>
                    <li>Help submissions and support requests</li>
                  </ul>
                </div>

                {/* 2.6 */}
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    2.6 Technical Information
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Session data (stored temporarily for authentication)</li>
                    <li>Browser and device information</li>
                    <li>IP address and location data</li>
                    <li>Usage analytics and performance metrics</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section id="how-we-use" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                3. How We Use Your Information
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    3.1 Core Platform Functions
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Provide lead generation and prospecting services</li>
                    <li>Generate and curate content for marketing purposes</li>
                    <li>Manage your target audience profiles and offers</li>
                    <li>Process billing and subscription management</li>
                    <li>Maintain your account and provide customer support</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    3.2 AI-Powered Features
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Generate personalized content using AI models</li>
                    <li>Suggest new target audience attributes based on your lead data</li>
                    <li>Recommend content optimization strategies</li>
                    <li>Provide intelligent lead scoring and insights</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    3.3 Platform Improvement
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Analyze usage patterns to improve our services</li>
                    <li>Develop new features and functionality</li>
                    <li>Monitor platform performance and security</li>
                    <li>Provide customer support and troubleshooting</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: Legal Basis for Processing */}
            <section id="legal-basis" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                4. Legal Basis for Processing
              </h2>

              <p className="text-sm sm:text-base text-slate-600 mb-4">
                We process data based on:
              </p>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600 mb-6">
                <li><strong className="text-slate-900">Contract performance:</strong> To deliver the services you request</li>
                <li><strong className="text-slate-900">Legitimate interests:</strong> For platform operation, security, and improvement</li>
                <li><strong className="text-slate-900">User consent:</strong> For optional features where required</li>
              </ul>

              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                4.1 Legal Requirements
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4">
                We may disclose your information if required by law, court order, or government request, or to protect our rights and safety.
              </p>

              <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 font-medium">
                <span className="font-bold text-blue-900">Important:</span> For content and lead data, we act solely as a data processor under your instructions. You are responsible for ensuring you have the appropriate legal basis to direct us to collect and process this data.
              </div>
            </section>

            {/* Section 5: Data Sharing and Disclosure */}
            <section id="data-sharing" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                5. Data Sharing and Disclosure
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    5.1 Third-Party Services
                  </h3>
                  <p className="text-xs sm:text-sm mb-2">We integrate with trusted third-party services:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Supabase (database and authentication infrastructure)</li>
                    <li>Payment processors (for billing and subscription management)</li>
                    <li>AI providers (for content generation features)</li>
                    <li>Analytics services (for platform improvement)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    5.2 Business Transfers
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    In the event of a merger, acquisition, or asset sale, your information may be transferred as part of that transaction.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    5.3 Data Isolation
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Your data is isolated from other users through database-level security policies. You can only access and modify your assigned data. However, master data collected through APIs may remain stored in our systems for operational purposes.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Data Retention */}
            <section id="data-retention" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                6. Data Retention
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    6.1 Account Data
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    We retain your account information as long as your account is active or as needed to provide services and fulfill legal or operational requirements.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    6.2 Business Data
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Lead data, content, and ICPs are retained until you close your account, but Pixoda may continue to store certain lead data collected on your behalf for operational or legal reasons.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    6.3 Billing Information
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Payment records are retained for legal and accounting purposes (typically 7 years).
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    6.4 Communication Data
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Chat conversations with our AI system are retained to improve service quality and provide support.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Your Privacy Rights */}
            <section id="privacy-rights" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                7. Your Privacy Rights
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    7.1 Access and Control
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>View and download your data through your account dashboard</li>
                    <li>Update or correct your personal information</li>
                    <li>Delete specific data (Offerings, ICPs, Curators) directly through the platform</li>
                    <li>Export your data in standard formats</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    7.2 Account Management
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600 mb-4">
                    <li>Request deletion of personal data (subject to legal and operational constraints)</li>
                    <li>Opt out of marketing communications</li>
                    <li>Manage notification preferences</li>
                  </ul>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-xs text-slate-600 font-medium">
                    <span className="font-bold text-slate-900">Please note:</span> Deletion requests for leads and content data collected on your behalf may not always be possible due to system design or legal obligations.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 8: Cookies and Tracking */}
            <section id="cookies" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                8. Cookies and Tracking
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                We use essential cookies for:
              </p>

              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>Authentication and session management</li>
                <li>Platform functionality and user preferences</li>
                <li>Security and fraud prevention</li>
                <li>Analytics to improve our services (anonymized data)</li>
              </ul>
            </section>

            {/* Section 9: International Data Transfers */}
            <section id="international-transfers" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                9. International Data Transfers
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your data may be processed in countries outside your residence. We ensure appropriate safeguards (such as Standard Contractual Clauses) are in place for international transfers.
              </p>
            </section>

            {/* Section 10: Updates to This Policy */}
            <section id="policy-updates" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                10. Updates to This Policy
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We may update this Privacy Policy periodically. Users are responsible for checking this page from time to time to stay informed of updates. We may or may not always notify you via email or other communications.
              </p>
            </section>

            {/* Section 11: Contact Information */}
            <section id="contact-info" className="bg-gradient-to-br from-blue-50/80 via-white to-purple-50/60 rounded-3xl border border-blue-200/80 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-200/80">
                11. Contact Information
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-blue-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Email Support</div>
                  <a href="mailto:support@creamstack.io" className="text-sm font-bold text-blue-600 hover:underline">
                    support@creamstack.io
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-blue-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Physical Address</div>
                  <address className="text-xs text-slate-700 not-italic leading-relaxed font-medium">
                    1708, GRG Gen Nxt Foundation Incubator<br />
                    Chandra Textile Mills Compound, Avinashi Rd<br />
                    Civil Aerodrome Post, Coimbatore, Tamil Nadu, India 641014
                  </address>
                </div>
              </div>
            </section>

            {/* Section 12: Specific Data Processing Activities */}
            <section id="specific-activities" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                12. Specific Data Processing Activities
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    12.1 Lead Generation
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>We process publicly available professional information to generate leads</li>
                    <li>Lead data is sourced from professional networks and public databases exclusively through third-party APIs</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    12.2 AI Content Generation
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Your content prompts are processed by AI models to generate marketing copy</li>
                    <li>Conversations are analyzed to improve AI responses</li>
                    <li>No personal information is shared with AI providers beyond what is necessary for content generation</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    12.3 Credit System
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>We track credit usage for billing and feature access</li>
                    <li>Credit consumption is logged for transparent usage reporting</li>
                    <li>Historical credit data is retained for account management</li>
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

export default PrivacyPolicyPage;
