import React, { useState } from 'react';

const specs = [
  {
    name: 'LinkedIn Accounts',
    icon: <LinkedInIcon />,
    starter: '1',
    growth: '1',
    trial5: '1',
    trial10: '1',
    isHighlight: false
  },
  {
    name: 'Email Accounts',
    icon: <EmailIcon />,
    starter: '5',
    growth: '10',
    trial5: '5',
    trial10: '10',
    isHighlight: false
  },
  {
    name: 'Credits Included',
    icon: <CreditIcon />,
    starter: '2,000 / month',
    growth: '2,000 / month',
    trial5: '150',
    trial10: '150',
    isHighlight: true
  },
  {
    name: 'Plan Duration',
    icon: <ClockIcon />,
    starter: 'Billed monthly',
    growth: 'Billed monthly',
    trial5: '5 Days',
    trial10: '5 Days',
    isHighlight: false
  }
];

const featuresList = [
  'AI Message Personalization',
  'Visual Campaign Builder',
  'LinkedIn Automation',
  'Email Automation',
  'Unified Inbox',
  'CRM & Lead Management',
  'Analytics & Reports',
  'Email Tracking',
  'Templates',
  'Workflow Builder',
  'Human-like Delays',
  'AI Rewrite & Improve',
  'Campaign Reports',
  'Export & Import',
  'Future Feature Updates',
  'Priority Support'
];

const PricingSection = () => {
  const [activeTab, setActiveTab] = useState('monthly'); // 'monthly' | 'trial'

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white via-slate-50/50 to-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-primary/10 via-[#f472b6]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Header with Floating Decorative Chips */}
        <div className="relative text-center max-w-3xl mx-auto mb-12">
          {/* Floating chips (Desktop) */}
          <div className="hidden lg:flex absolute -left-20 top-0 items-center justify-center w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 shadow-lg shadow-blue-500/10 -rotate-12">
            <SendIcon />
          </div>
          <div className="hidden lg:flex absolute -left-12 bottom-6 items-center justify-center w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 shadow-lg shadow-emerald-500/10 rotate-6">
            <BarChartIcon />
          </div>
          <div className="hidden lg:flex absolute -right-20 top-2 items-center justify-center w-12 h-12 rounded-2xl bg-purple-50 text-primary shadow-lg shadow-purple-500/10 rotate-12 font-bold text-sm">
            <span className="font-extrabold text-base">AI</span>
          </div>
          <div className="hidden lg:flex absolute -right-12 bottom-4 items-center justify-center w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 shadow-lg shadow-amber-500/10 -rotate-6">
            <MailIcon />
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-primary uppercase mb-4">
            PRICING THAT SCALES WITH YOU
          </div>

          {/* Title */}
          <h2 className="text-4xl sm:text-5xl font-extrabold text-secondary tracking-tight mb-4 leading-tight">
            Everything you need.<br />
            Simple, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#a855f7] to-[#f472b6]">transparent</span> pricing.
          </h2>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-text-light max-w-xl mx-auto mb-8">
            All plans include full access to Creamstack. Pay monthly or try risk-free.
          </p>

          {/* Tab Filter Pills */}
          <div className="inline-flex items-center p-1 rounded-full bg-slate-100/90 border border-slate-200 shadow-inner">
            <button
              onClick={() => setActiveTab('monthly')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === 'monthly'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-600 hover:text-secondary'
              }`}
            >
              Monthly Plans
            </button>
            <button
              onClick={() => setActiveTab('trial')}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === 'trial'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-slate-600 hover:text-secondary'
              }`}
            >
              5-Day Trials <span className="text-xs opacity-80">(One-time)</span>
            </button>
          </div>
        </div>

        {/* Comparison Table Container */}
        <div className="max-w-[1140px] mx-auto overflow-x-auto pb-4 [scrollbar-width:thin]">
          <div className="min-w-[860px] bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            {/* Master Grid Table Header */}
            <div className="grid grid-cols-5 border-b border-slate-200">
              {/* Top Left Header Card */}
              <div className="p-6 flex flex-col justify-center border-r border-slate-200 bg-slate-50/50">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                    <StarIcon />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-wider text-primary">CHOOSE YOUR PLAN</span>
                </div>
                <p className="text-xs text-text-light m-0 leading-relaxed">
                  Pick the plan that fits your outreach volume.
                </p>
              </div>

              {/* Monthly Header (Col 2 & 3) */}
              <div className={`col-span-2 grid grid-cols-2 border-r border-slate-200 ${activeTab === 'trial' ? 'opacity-40 grayscale-[40%]' : ''}`}>
                <div className="col-span-2 bg-gradient-to-r from-primary/10 via-indigo-50 to-primary/10 text-primary py-2 text-center text-xs font-bold tracking-wider uppercase border-b border-primary/20">
                  MONTHLY PLANS (Recurring)
                </div>

                {/* Starter Plan Header */}
                <div className="p-6 text-center border-r border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Starter</h3>
                    <div className="text-3xl font-extrabold text-secondary tracking-tight">₹8,000</div>
                    <div className="text-xs text-text-light font-medium mt-1">+ GST / month</div>
                  </div>
                  <button className="mt-6 w-full py-2.5 px-4 rounded-xl border-2 border-primary/30 text-primary font-semibold hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 text-sm">
                    Choose Starter
                  </button>
                </div>

                {/* Growth Plan Header (Most Popular) */}
                <div className="p-6 text-center relative bg-primary/[0.02] flex flex-col justify-between">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-[#f472b6] to-primary text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                  <div className="pt-2">
                    <h3 className="text-xl font-bold text-secondary mb-2">Growth</h3>
                    <div className="text-3xl font-extrabold text-secondary tracking-tight">₹10,000</div>
                    <div className="text-xs text-text-light font-medium mt-1">+ GST / month</div>
                  </div>
                  <button className="mt-6 w-full py-2.5 px-4 rounded-xl bg-primary text-white font-semibold shadow-lg shadow-primary/25 hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 text-sm">
                    Choose Growth
                  </button>
                </div>
              </div>

              {/* 5-Day Trials Header (Col 4 & 5) */}
              <div className={`col-span-2 grid grid-cols-2 ${activeTab === 'monthly' ? 'opacity-40 grayscale-[40%]' : ''}`}>
                <div className="col-span-2 bg-gradient-to-r from-purple-50 via-pink-50 to-purple-50 text-purple-700 py-2 text-center text-xs font-bold tracking-wider uppercase border-b border-purple-100">
                  5-DAY TRIALS (One-time)
                </div>

                {/* Trial 5 Header */}
                <div className="p-6 text-center border-r border-slate-200 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Trial 5</h3>
                    <div className="text-3xl font-extrabold text-secondary tracking-tight">₹500</div>
                    <div className="text-xs text-text-light font-medium mt-1">One-time payment</div>
                  </div>
                  <button className="mt-6 w-full py-2.5 px-4 rounded-xl border-2 border-purple-200 text-purple-700 font-semibold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200 text-sm">
                    Start Trial 5
                  </button>
                </div>

                {/* Trial 10 Header */}
                <div className="p-6 text-center flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-secondary mb-2">Trial 10</h3>
                    <div className="text-3xl font-extrabold text-secondary tracking-tight">₹750</div>
                    <div className="text-xs text-text-light font-medium mt-1">One-time payment</div>
                  </div>
                  <button className="mt-6 w-full py-2.5 px-4 rounded-xl border-2 border-purple-200 text-purple-700 font-semibold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200 text-sm">
                    Start Trial 10
                  </button>
                </div>
              </div>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-slate-100">
              {specs.map((item, idx) => (
                <div key={idx} className="grid grid-cols-5 items-center hover:bg-slate-50/70 transition-colors py-3.5 px-6">
                  <div className="flex items-center gap-3 font-semibold text-sm text-secondary">
                    <span className="text-primary">{item.icon}</span>
                    <span>{item.name}</span>
                  </div>
                  <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-primary' : 'text-slate-700'}`}>
                    {item.starter}
                  </div>
                  <div className={`text-center text-sm bg-primary/[0.02] py-1 ${item.isHighlight ? 'font-bold text-primary' : 'text-slate-700 font-medium'}`}>
                    {item.growth}
                  </div>
                  <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-purple-700' : 'text-slate-700'}`}>
                    {item.trial5}
                  </div>
                  <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-purple-700' : 'text-slate-700'}`}>
                    {item.trial10}
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Checklist Header Divider */}
            <div className="bg-slate-100/60 px-6 py-2.5 text-xs font-bold text-slate-500 uppercase tracking-wider border-y border-slate-200">
              Included Features & Capabilities
            </div>

            {/* Checklist Feature Rows */}
            <div className="divide-y divide-slate-100">
              {featuresList.map((feature, idx) => (
                <div key={idx} className="grid grid-cols-5 items-center hover:bg-slate-50/70 transition-colors py-3 px-6">
                  <div className="flex items-center gap-2.5 text-sm text-slate-700">
                    <CheckIcon />
                    <span>{feature}</span>
                  </div>
                  <div className="flex justify-center">
                    <CheckCircle />
                  </div>
                  <div className="flex justify-center bg-primary/[0.02] py-1">
                    <CheckCircle />
                  </div>
                  <div className="flex justify-center">
                    <CheckCircle />
                  </div>
                  <div className="flex justify-center">
                    <CheckCircle />
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Sticky Action Bar */}
            <div className="grid grid-cols-5 items-center bg-slate-50 p-6 border-t border-slate-200">
              <div className="text-xs text-text-light">
                <span className="font-bold text-secondary block mb-0.5">Need a custom plan?</span>
                Talk to our sales team for enterprise tiers.
              </div>
              <div className="px-2">
                <button className="w-full py-2 px-3 rounded-lg border border-primary/40 text-primary hover:bg-primary hover:text-white font-semibold text-xs transition-colors">
                  Get Starter
                </button>
              </div>
              <div className="px-2">
                <button className="w-full py-2 px-3 rounded-lg bg-primary text-white font-semibold text-xs shadow-md shadow-primary/20 hover:bg-primary-hover transition-colors">
                  Get Growth
                </button>
              </div>
              <div className="px-2">
                <button className="w-full py-2 px-3 rounded-lg border border-purple-300 text-purple-700 hover:bg-purple-600 hover:text-white font-semibold text-xs transition-colors">
                  Get Trial 5
                </button>
              </div>
              <div className="px-2">
                <button className="w-full py-2 px-3 rounded-lg border border-purple-300 text-purple-700 hover:bg-purple-600 hover:text-white font-semibold text-xs transition-colors">
                  Get Trial 10
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Add-on Banner: Buy credits when you need them */}
        <div className="max-w-[1140px] mx-auto mt-14">
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-[#eff6ff] via-[#f5f8ff] to-[#fbf7ff] border border-blue-100/90 shadow-xl overflow-hidden p-6 sm:p-10 lg:p-12">
            {/* Decorative background glow */}
            <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-gradient-to-bl from-blue-300/20 via-pink-300/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
              {/* Left Column (Header & Cards) - 8 cols */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {/* Title & Badge */}
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-white/90 border border-blue-200/80 px-3.5 py-1 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-primary shadow-xs">
                    NEED MORE CREDITS?
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-secondary tracking-tight mt-3 mb-1">
                    Buy credits when you need them.
                  </h3>
                  <p className="text-sm sm:text-base text-text-light m-0 font-medium">
                    Top up anytime and keep your outreach running.
                  </p>
                </div>

                {/* 2 Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  {/* Card 1: 80 Credits */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-100/80 shadow-md shadow-slate-100/80 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <div className="text-lg font-bold text-secondary">80 Credits</div>
                      <div className="text-3xl font-extrabold text-secondary tracking-tight my-1">₹800</div>
                      <div className="text-xs text-text-light font-medium">(one-time payment)</div>
                    </div>
                    <button className="mt-5 w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primary-hover text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-primary/20 hover:shadow-primary/30 transition-all duration-200">
                      <span>Buy Credits</span>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>

                  {/* Card 2: Request a discount */}
                  <div className="bg-white rounded-2xl p-6 border border-slate-100/80 shadow-md shadow-slate-100/80 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
                    <div>
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-extrabold text-sm shrink-0 border border-blue-100">
                          %
                        </div>
                        <div>
                          <div className="text-base font-bold text-secondary">Request a discount</div>
                          <div className="text-xs text-text-light mt-0.5 font-medium">Need larger volumes?</div>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 mt-3 mb-0 leading-relaxed">
                        Request up to <span className="text-primary font-bold">35% discount</span> on credit purchases.
                      </p>
                    </div>
                    <button className="mt-5 w-fit py-2 px-4 rounded-xl border border-primary/40 text-primary hover:bg-primary/5 font-semibold text-xs flex items-center gap-1.5 transition-all duration-200">
                      <span>Request Discount</span>
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column (Layered 3D Cards Showcase) - 4 cols */}
              <div className="lg:col-span-4 flex items-center justify-center relative py-6 sm:py-8 lg:py-0">
                {/* Radiating sparkle rays around top right */}
                <div className="absolute top-2 right-4 sm:right-8 text-primary pointer-events-none">
                  <svg width="36" height="36" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="20" y1="4" x2="20" y2="10" />
                    <line x1="32" y1="9" x2="27" y2="14" />
                    <line x1="36" y1="20" x2="30" y2="20" />
                  </svg>
                </div>

                {/* Stacked Cards */}
                <div className="relative w-[210px] h-[220px] flex items-center justify-center">
                  {/* Back Card (Soft Blue) */}
                  <div className="absolute inset-0 bg-[#dbeafe] rounded-3xl transform -rotate-6 scale-95 opacity-80 shadow-md"></div>
                  
                  {/* Middle Card (Warm Peach/Sand) */}
                  <div className="absolute inset-0 bg-[#fed7aa]/60 rounded-3xl transform rotate-6 scale-95 opacity-90 shadow-md"></div>

                  {/* Front Card (White Card with Logo and Slogan) */}
                  <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-slate-100 text-center flex flex-col items-center justify-center transform -rotate-3 hover:rotate-0 transition-transform duration-300 w-full h-full">
                    {/* Creamstack Logo Icon */}
                    <img 
                      src="/33.png" 
                      alt="CreamStack Logo" 
                      className="w-12 h-12 object-contain mb-3 drop-shadow-sm transition-transform duration-300 group-hover:scale-105" 
                    />

                    {/* Slogan */}
                    <h4 className="text-base font-extrabold text-secondary tracking-tight leading-tight m-0">
                      More Credits.<br />
                      <span className="text-secondary">More Possibilities.</span>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

// SVGs
function CheckCircle() {
  return (
    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}

function CheckIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-[#0077B5]/10 text-[#0077B5] flex items-center justify-center">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.02-3.36 1.68 1.68 0 0 0 .02 3.36M5.07 18.5h2.79v-8.37H5.07v8.37z"></path>
      </svg>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-purple-100 text-primary flex items-center justify-center">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </div>
  );
}

function CreditIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    </div>
  );
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}
