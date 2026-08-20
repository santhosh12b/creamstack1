import React, { useState, useEffect } from 'react';
import CTASection from './CTASection';

const sections = [
  { id: 'acceptance', title: '1. Acceptance of Terms' },
  { id: 'description', title: '2. Description of Service' },
  { id: 'user-accounts', title: '3. Accounts & Registration' },
  { id: 'user-responsibilities', title: '4. User Responsibilities' },
  { id: 'payment-credits', title: '5. Payment & Credits' },
  { id: 'intellectual-property', title: '6. Intellectual Property' },
  { id: 'data-processing', title: '7. Data Processing & Privacy' },
  { id: 'third-party', title: '8. Third-Party APIs' },
  { id: 'service-availability', title: '9. Availability & Support' },
  { id: 'limitation-liability', title: '10. Limitation of Liability' },
  { id: 'termination', title: '11. Termination' },
  { id: 'modifications', title: '12. Modifications to Terms' },
  { id: 'governing-law', title: '13. Governing Law & Disputes' },
  { id: 'general-provisions', title: '14. General Provisions' },
  { id: 'contact-info', title: '15. Contact Information' },
];

const TermsOfServicePage = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState('acceptance');

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
          <span className="text-xs font-bold text-primary">Terms of Service</span>
        </div>

        {/* Editorial Page Header */}
        <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-12 shadow-sm mb-10 relative overflow-hidden">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-700 text-xs font-extrabold uppercase tracking-wider mb-4">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <span>Binding Legal Agreement</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight mb-4">
              Terms of Service
            </h1>
            
            <p className="text-base sm:text-xl text-slate-600 font-medium leading-relaxed mb-6">
              Review the terms and conditions for using our platform and services
            </p>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-semibold pt-6 border-t border-slate-100">
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Effective Date:</span>
                <span className="text-slate-800 font-bold">July 15, 2025</span>
              </div>
              <span className="text-slate-300">•</span>
              <div className="flex items-center gap-1.5">
                <span className="text-slate-400">Operating Company:</span>
                <span className="text-slate-800 font-bold">Pixoda (CreamStack Platform)</span>
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
                <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full font-bold">15 Sections</span>
              </div>

              <nav className="flex flex-col gap-1 max-h-[65vh] overflow-y-auto pr-1">
                {sections.map((sec) => (
                  <button
                    key={sec.id}
                    onClick={() => scrollToSection(sec.id)}
                    className={`text-left px-3 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center justify-between ${
                      activeSection === sec.id
                        ? 'bg-purple-50 text-purple-700 font-bold border border-purple-100 shadow-2xs'
                        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                    }`}
                  >
                    <span className="line-clamp-1">{sec.title}</span>
                    {activeSection === sec.id && (
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-600 shrink-0"></span>
                    )}
                  </button>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <a 
                  href="mailto:support@creamstack.io" 
                  className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 hover:bg-purple-50/60 text-xs font-bold text-slate-700 hover:text-purple-700 transition-all group"
                >
                  <span className="flex items-center gap-2">
                    <span>⚖️</span>
                    <span>Legal Support</span>
                  </span>
                  <span className="group-hover:translate-x-0.5 transition-transform text-purple-600">➔</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Main Document Content */}
          <main className="lg:col-span-8 flex flex-col gap-10">
            
            {/* Section 1: Acceptance of Terms */}
            <section id="acceptance" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                1. Acceptance of Terms
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal m-0">
                By accessing or using CreamStack ("the Platform"), a service operated by Pixoda ("Company," "we," "us," or "our"), you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, do not use the Platform.
              </p>
            </section>

            {/* Section 2: Description of Service */}
            <section id="description" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                2. Description of Service
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mb-3">
                CreamStack is a B2B content curation and lead generation platform that provides:
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div><strong className="text-slate-900">Content Curation:</strong> Collection and analysis of content from curators you designate via professional and social platforms</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div><strong className="text-slate-900">Lead Generation:</strong> Identification and collection of potential business leads based on your defined Ideal Customer Profiles (ICPs)</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div><strong className="text-slate-900">AI-Powered Content Generation:</strong> Creation of marketing content, messages, and lead magnets using artificial intelligence</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div><strong className="text-slate-900">Data Analytics:</strong> Insights and analytics on content performance and lead quality</div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">•</span>
                  <div><strong className="text-slate-900">Credit-Based System:</strong> Usage tracking and billing based on platform activities</div>
                </li>
              </ul>
            </section>

            {/* Section 3: User Accounts and Registration */}
            <section id="user-accounts" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                3. User Accounts and Registration
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    3.1 Account Creation
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>You must provide accurate, complete, and current information during registration.</li>
                    <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                    <li>You must be at least 18 years old and authorized to enter into binding agreements.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    3.2 Account Security
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>You are solely responsible for all activities under your account.</li>
                    <li>Notify us immediately of any unauthorized use of your account.</li>
                    <li>We reserve the right to suspend or terminate accounts that violate these Terms.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 4: User Responsibilities and Acceptable Use */}
            <section id="user-responsibilities" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                4. User Responsibilities and Acceptable Use
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    4.1 Compliance with Laws
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>You must comply with all applicable local, state, national, and international laws.</li>
                    <li>You are responsible for ensuring you have legal authority to direct data collection activities.</li>
                    <li>You must respect intellectual property rights and privacy laws.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    4.2 Prohibited Uses
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">You may not use the Platform to:</p>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on intellectual property rights</li>
                    <li>Collect data without proper authorization</li>
                    <li>Engage in harassment, spam, or malicious activities</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Use the Platform for illegal lead generation or marketing practices</li>
                    <li>Reverse engineer or attempt to extract our proprietary algorithms</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    4.3 Data Collection Responsibility
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>You are solely responsible for ensuring lawful collection of curator content and lead data.</li>
                    <li>You must have appropriate permissions for data collection activities we perform on your behalf.</li>
                    <li>You warrant that your use of collected data complies with applicable privacy laws.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 5: Payment Terms and Credits */}
            <section id="payment-credits" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                5. Payment Terms and Credits
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    5.1 Subscription Plans
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Access to Platform features requires an active subscription.</li>
                    <li>Billing cycles and pricing are as displayed on our website.</li>
                    <li>All fees are non-refundable unless otherwise specified.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    5.2 Credit System
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Platform usage is tracked through a credit-based system.</li>
                    <li>Credits are consumed for activities like content generation, lead discovery, and data processing.</li>
                    <li>Unused credits may expire according to your plan terms.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    5.3 Payment Processing
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Payments are processed through secure third-party providers.</li>
                    <li>You authorize us to charge your payment method for applicable fees.</li>
                    <li>Failed payments may result in service suspension.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 6: Intellectual Property Rights */}
            <section id="intellectual-property" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                6. Intellectual Property Rights
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    6.1 Platform Ownership
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">
                    CreamStack and all related technology, software, and content are owned by Pixoda. These Terms grant you a limited, non-exclusive license to use the Platform.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    6.2 User-Generated Content
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-2">
                    You retain ownership of content you create or upload. You grant us a license to use your content for Platform operations and improvements. AI-generated content created through our Platform may be subject to separate licensing terms.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    6.3 Data Ownership
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    You own the data collected on your behalf through the Platform. We retain the right to store leads and data collected on your behalf even after account closure for operational, legal, and business purposes.
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600">
                    Third-party data remains subject to the original source's terms and conditions.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 7: Data Processing and Privacy */}
            <section id="data-processing" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                7. Data Processing and Privacy
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    7.1 Data Processor Role
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    We act as a data processor for content and lead data collected on your behalf. You act as the data controller and are responsible for legal compliance.
                  </p>
                  
                  <div className="bg-purple-50/80 border border-purple-200/80 rounded-2xl p-4 text-xs sm:text-sm text-slate-700 font-medium mb-3">
                    <span className="font-bold text-purple-900">Automatic DPA Agreement:</span> This Terms of Service also functions as a Data Processing Agreement (DPA) under applicable data protection laws. By using CreamStack, you agree to this DPA without requiring a separate signed document.
                  </div>
                  
                  <p className="text-xs sm:text-sm text-slate-600">
                    Our Privacy Policy governs how we handle personal information.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    7.2 Data Security
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>We implement industry-standard security measures to protect your data.</li>
                    <li>You acknowledge that no system is completely secure.</li>
                    <li>We are not liable for security breaches beyond our reasonable control.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    7.3 Data Retention
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Data is retained according to our Privacy Policy and your account settings.</li>
                    <li>You may request to terminate your account by sending a request to us.</li>
                    <li>Some data may be retained for legitimate business purposes.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 8: Third-Party Services and APIs */}
            <section id="third-party" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                8. Third-Party Services and APIs
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    8.1 API Dependencies
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Our Platform relies on third-party APIs for data collection.</li>
                    <li>API providers may change over time.</li>
                    <li>Information about current providers is available upon request.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    8.2 Third-Party Terms
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Your use of the Platform may be subject to third-party terms of service.</li>
                    <li>You are responsible for compliance with all applicable third-party terms.</li>
                    <li>We are not responsible for third-party service interruptions or changes.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 9: Service Availability and Support */}
            <section id="service-availability" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                9. Service Availability and Support
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    9.1 Uptime and Availability
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>We strive to maintain high service availability but do not guarantee 100% uptime.</li>
                    <li>Planned maintenance will be announced when possible.</li>
                    <li>Emergency maintenance may occur without notice.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    9.2 Customer Support
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Support is provided through email and platform messaging.</li>
                    <li>Response times vary based on your subscription level.</li>
                    <li>We reserve the right to limit support for users who violate these Terms.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 10: Limitation of Liability */}
            <section id="limitation-liability" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                10. Limitation of Liability
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    10.1 Disclaimer of Warranties
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>The Platform is provided "as is" without warranties of any kind.</li>
                    <li>We disclaim all warranties, express or implied, including merchantability and fitness for purpose.</li>
                    <li>We do not warrant that the Platform will be error-free or uninterrupted.</li>
                    <li>We do not warrant the completeness, accuracy, or reliability of any data collected from third-party APIs or external sources.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    10.2 Liability Limits
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Our total liability to you shall not exceed the amount paid by you in the 3 months preceding the claim.</li>
                    <li>We are not liable for indirect, incidental, special, or consequential damages.</li>
                    <li>If your jurisdiction does not allow liability limitations, you must refrain from using the Platform.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 11: Termination */}
            <section id="termination" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                11. Termination
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    11.1 Termination by You
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>You may request to terminate your account by contacting us.</li>
                    <li>Termination does not relieve you of payment obligations for services already provided.</li>
                    <li>Some data may be retained according to our Privacy Policy.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    11.2 Termination by Us
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>We may terminate or suspend your account for Terms violations.</li>
                    <li>We may terminate service with 30 days' notice for business reasons.</li>
                    <li>Upon termination, your right to use the Platform immediately ceases.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 12: Modifications to Terms */}
            <section id="modifications" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-slate-100">
                12. Modifications to Terms
              </h2>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-slate-600">
                <li>We reserve the right to modify these Terms at any time.</li>
                <li>Material changes may be communicated via email or Platform notifications. It is the user's responsibility to check for updates and remain informed.</li>
                <li>Continued use of the Platform after changes constitutes acceptance.</li>
                <li>If you disagree with changes, you must stop using the Platform.</li>
              </ul>
            </section>

            {/* Section 13: Governing Law and Disputes */}
            <section id="governing-law" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                13. Governing Law and Disputes
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    13.1 Governing Law
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    These Terms are governed by the laws of India. Any disputes will be subject to the jurisdiction of the courts in Coimbatore, Tamil Nadu.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-2">
                    13.2 Dispute Resolution
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mb-3">
                    We encourage resolution of disputes through direct communication.
                  </p>
                  
                  <div className="bg-amber-50/80 border border-amber-200/80 rounded-2xl p-4 text-xs sm:text-sm text-amber-950 font-medium mb-3">
                    <span className="font-bold">Required Pre-Dispute Protocol:</span> Before initiating any legal proceedings, you agree to send a minimum of 3 emails citing the issue, with each email spaced at least 10 working days apart. If no response is received, you must send 2 physical mail notices to our address. Only if these steps fail may you proceed to arbitration as the first step in legal resolution.
                  </div>

                  <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
                    <li>Binding arbitration may be required for certain disputes.</li>
                    <li>Class action lawsuits are waived where legally permissible.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 14: General Provisions */}
            <section id="general-provisions" className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-6 pb-3 border-b border-slate-100">
                14. General Provisions
              </h2>

              <div className="space-y-6 text-sm sm:text-base text-slate-600 leading-relaxed">
                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    14.1 Entire Agreement
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    These Terms, together with our Privacy Policy, constitute the entire agreement. These Terms supersede all prior agreements and understandings.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    14.2 Severability
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    If any provision is found unenforceable, the remainder shall remain in effect. Invalid provisions will be replaced with enforceable alternatives.
                  </p>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 mb-1">
                    14.3 Assignment
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600">
                    You may not assign these Terms without our written consent. We may assign these Terms in connection with business transfers.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 15: Contact Information */}
            <section id="contact-info" className="bg-gradient-to-br from-purple-50/80 via-white to-blue-50/60 rounded-3xl border border-purple-200/80 p-7 sm:p-10 shadow-sm scroll-mt-28">
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mb-4 pb-3 border-b border-purple-200/80">
                15. Contact Information
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                If you have any questions regarding these Terms of Service, please contact us at:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white border border-purple-100">
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Legal Email Support</div>
                  <a href="mailto:support@creamstack.io" className="text-sm font-bold text-purple-700 hover:underline">
                    support@creamstack.io
                  </a>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-purple-100">
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

export default TermsOfServicePage;
