import React, { useState } from 'react';
import leadMockup from '../assets/lead.jpg';
import CTASection from './CTASection';

const findMethods = [
  {
    id: 'linkedin-profile',
    name: 'LinkedIn Profile',
    desc: 'Turn any LinkedIn profile into a complete lead with verified contact information and company details.',
    icon: <LinkedInIcon />,
    badgeColor: 'border-blue-200 bg-blue-50/50 text-blue-600'
  },
  {
    id: 'website-job',
    name: 'Website + Job Title',
    desc: 'Already know the company? Just enter a website and designation to instantly discover matching decision makers.',
    icon: <GlobeIcon />,
    badgeColor: 'border-indigo-200 bg-indigo-50/50 text-indigo-600'
  },
  {
    id: 'prompt-search',
    name: 'Prompt Search',
    desc: 'Describe your ideal customer using filters like designation, industry, company size, location, and more. Creamstack builds your prospect list in seconds.',
    example: 'Marketing Managers in SaaS companies with 50–500 employees in the US.',
    icon: <SearchSparkleIcon />,
    badgeColor: 'border-purple-200 bg-purple-50/50 text-purple-600'
  },
  {
    id: 'post-enrichment',
    name: 'LinkedIn Post Enrichment',
    subheading: 'Find people already interested in your niche.',
    desc: 'Paste a LinkedIn post URL and Creamstack enriches everyone engaging with the post, helping you discover warm prospects already discussing topics related to your service.',
    icon: <MegaphoneIcon />,
    badgeColor: 'border-pink-200 bg-pink-50/50 text-pink-600'
  }
];

const signalTabs = [
  { id: 'hiring', label: 'Hiring', icon: <UserPlusIcon /> },
  { id: 'events', label: 'Events', icon: <CalendarIcon /> },
  { id: 'lead-magnets', label: 'Lead Magnets', icon: <GiftIcon /> },
  { id: 'pain-points', label: 'Pain Points', icon: <AlertTriangleIcon /> },
  { id: 'general-activity', label: 'General Activity', icon: <ActivityIcon /> }
];

const signalContent = {
  hiring: {
    title: 'Buying signal detected',
    tag: 'Hiring',
    desc: 'Sarah is hiring a Growth Marketing Specialist on LinkedIn.',
    suggestion: 'Congrats on the new hire! I help SaaS teams scale organic growth faster. Happy to share a quick idea that might help the new hire hit the ground running.'
  },
  events: {
    title: 'Buying signal detected',
    tag: 'Events',
    desc: 'Sarah recently attended SaaStr Annual 2025 and posted key takeaways.',
    suggestion: 'Loved your takeaways from SaaStr! Specifically around outbound scaling. We put together a short benchmark report on this—would love to pass it over.'
  },
  'lead-magnets': {
    title: 'Buying signal detected',
    tag: 'Lead Magnets',
    desc: 'Sarah downloaded and shared an eBook on B2B Cold Email Strategies.',
    suggestion: 'Noticed your interest in cold outreach benchmarks. We recently audited 50k+ campaigns and found a pattern that boosts reply rates by 3x.'
  },
  'pain-points': {
    title: 'Buying signal detected',
    tag: 'Pain Points',
    desc: 'Sarah posted about struggling with duplicate leads and bounced emails in their CRM.',
    suggestion: 'Saw your post about email bounce rates in HubSpot. Creamstack cleans and verifies emails pre-send to guarantee <2% bounce rates.'
  },
  'general-activity': {
    title: 'Buying signal detected',
    tag: 'Activity',
    desc: 'Sarah celebrated 3 years at Notion and shared their team expansion roadmap.',
    suggestion: 'Congrats on 3 years at Notion! Impressive roadmap ahead. If scaling outbound pipeline is on your radar this quarter, let\'s connect.'
  }
};

const builtFeatures = [
  {
    title: 'AI Message Ideas',
    desc: 'Personalized opening lines generated for every lead.',
    icon: <PencilIcon />,
    color: 'from-purple-500/10 to-pink-500/10 text-primary'
  },
  {
    title: 'Follow-up Suggestions',
    desc: 'Ready-to-send follow-ups that keep conversations going.',
    icon: <CalendarCheckIcon />,
    color: 'from-blue-500/10 to-indigo-500/10 text-blue-600'
  },
  {
    title: 'Buying Intent',
    desc: 'Understand what matters to them right now.',
    icon: <RadarIcon />,
    color: 'from-amber-500/10 to-orange-500/10 text-amber-600'
  },
  {
    title: 'Verified Contact Data',
    desc: 'Accurate, verified, and outreach-ready data.',
    icon: <ShieldCheckIcon />,
    color: 'from-emerald-500/10 to-teal-500/10 text-emerald-600'
  }
];

const LeadEnrichmentPage = ({ onNavigate }) => {
  const [activeSignal, setActiveSignal] = useState('hiring');
  const [selectedMethod, setSelectedMethod] = useState('linkedin-profile');

  return (
    <div className="bg-bg-light text-text-main">
      {/* SECTION 1: HERO */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-[#f472b6]/10 via-[#3b82f6]/5 to-transparent relative overflow-hidden">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-primary/10 via-[#f472b6]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="container mx-auto px-6 text-center">
          {/* Centered Hero Content */}
          <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-primary uppercase">
              1. Lead Enrichment
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary tracking-tight leading-[1.15] m-0">
              Find your next customer from <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#a855f7] to-[#f472b6]">anywhere.</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-text-light leading-relaxed max-w-3xl mx-auto m-0 font-medium">
              Enrich high-quality prospects from LinkedIn, company websites, search filters, or even people engaging with posts. Every lead comes enriched with verified contact data, AI-generated outreach ideas, and buying signals.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button 
                onClick={() => onNavigate && onNavigate('pricing')}
                className="btn btn-primary shadow-lg shadow-primary/25 text-sm"
              >
                <span>Start Enriching Leads</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <a 
                href="https://demo.creamstack.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline bg-white hover:bg-slate-50 text-sm"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                <span>Watch Demo</span>
              </a>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[url('https://i.pravatar.cc/100?img=11')] bg-cover"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[url('https://i.pravatar.cc/100?img=12')] bg-cover"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[url('https://i.pravatar.cc/100?img=13')] bg-cover"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-[url('https://i.pravatar.cc/100?img=14')] bg-cover"></div>
              </div>
              <span className="text-xs sm:text-sm text-text-light font-medium">
                Loved by <strong className="text-secondary font-bold">1,000+</strong> growth teams and agencies worldwide
              </span>
            </div>
          </div>

          {/* Centered Leads Table UI Mockup (Underneath) */}
          <div className="relative mt-10 sm:mt-16 max-w-5xl mx-auto text-left">
            {/* Ambient Glow */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 opacity-70"></div>

            <div className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl bg-white border border-slate-200/90 overflow-hidden relative transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src={leadMockup} 
                alt="CreamStack Leads Dashboard" 
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: FOUR WAYS TO FIND PROSPECTS */}
      <section className="py-20 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight mb-3">
              Four ways to find prospects
            </h2>
            <p className="text-base sm:text-lg text-text-light m-0">
              Discover and enrich the right leads from any source.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {findMethods.map((method) => {
              const isSelected = selectedMethod === method.id;
              return (
                <div
                  key={method.id}
                  onClick={() => setSelectedMethod(method.id)}
                  className={`p-7 rounded-3xl border transition-all duration-300 flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-primary bg-primary/[0.03] shadow-lg shadow-primary/10 -translate-y-1'
                      : 'border-slate-200/80 bg-slate-50/40 hover:bg-white hover:border-slate-300 hover:shadow-md'
                  }`}
                >
                  <div>
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xs border ${method.badgeColor}`}>
                      {method.icon}
                    </div>
                    <h3 className="text-lg font-bold text-secondary mb-2">{method.name}</h3>
                    {method.subheading && (
                      <p className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">{method.subheading}</p>
                    )}
                    <p className="text-sm text-text-light leading-relaxed m-0">{method.desc}</p>
                  </div>

                  {method.example && (
                    <div className="mt-6 p-3.5 rounded-xl bg-purple-50/80 border border-purple-100 text-xs text-purple-900 leading-relaxed">
                      <span className="font-bold block mb-1 text-primary">Example:</span>
                      {method.example}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: VERIFIED CONTACT DATA */}
      <section className="py-20 border-t border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center max-w-6xl mx-auto">
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight mb-2">
                  Verified Contact Data
                </h2>
                <p className="text-base text-text-light m-0 font-medium">
                  Every lead includes:
                </p>
              </div>

              {/* Data points pill grid */}
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-bold text-slate-700">
                  <span className="text-primary">✉️</span> Verified Email
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-bold text-slate-700">
                  <span className="text-primary">👥</span> Team Size
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-bold text-slate-700">
                  <span className="text-primary">🏢</span> Company
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-bold text-slate-700">
                  <span className="text-primary">🔗</span> LinkedIn
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-bold text-slate-700">
                  <span className="text-primary">💼</span> Designation
                </div>
                <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-bold text-slate-700">
                  <span className="text-primary">🌐</span> Company Website
                </div>
                <div className="col-span-2 flex items-center gap-2.5 p-3 rounded-xl bg-white border border-slate-200/80 shadow-xs text-xs font-bold text-slate-700">
                  <span className="text-primary">📊</span> Industry
                </div>
              </div>

              <p className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 m-0 bg-emerald-50 border border-emerald-200/60 p-3 rounded-xl">
                <ShieldCheckIcon />
                Emails are validated before they're delivered to your account.
              </p>
            </div>

            {/* Right Rich Prospect Card (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
                {/* Header profile */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <img src="https://i.pravatar.cc/100?img=32" alt="Sarah Johnson" className="w-14 h-14 rounded-2xl object-cover shadow-sm" />
                    <div>
                      <h4 className="text-lg font-bold text-secondary m-0">Sarah Johnson</h4>
                      <p className="text-xs text-text-light m-0 font-medium">Marketing Manager at Notion</p>
                      <div className="flex gap-2 mt-2">
                        <span className="w-6 h-6 rounded-md bg-blue-50 text-blue-600 flex items-center justify-center text-[10px]"><LinkedInIcon /></span>
                        <span className="w-6 h-6 rounded-md bg-purple-50 text-primary flex items-center justify-center text-[10px]">✉️</span>
                        <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-600 flex items-center justify-center text-[10px]">🔗</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-extrabold">
                    98% Match
                  </div>
                </div>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                  <div className="flex flex-col gap-3 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400">Email</span>
                      <span className="font-bold text-secondary flex items-center gap-1">
                        sarah.johnson@notion.so
                        <span className="bg-emerald-100 text-emerald-800 text-[9px] px-1.5 py-0.5 rounded font-bold">Verified</span>
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400">Company</span>
                      <span className="font-bold text-secondary">Notion</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400">Industry</span>
                      <span className="font-bold text-secondary">Software</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-50">
                      <span className="text-slate-400">Team Size</span>
                      <span className="font-bold text-secondary">201–500</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-400">Website</span>
                      <span className="font-bold text-primary">notion.so</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 flex flex-col justify-between text-xs">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-200/60">
                      <span className="text-slate-500 font-medium">Email Accuracy</span>
                      <span className="font-extrabold text-emerald-600">98%</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-200/60">
                      <span className="text-slate-500 font-medium">Data Points</span>
                      <span className="font-extrabold text-secondary">30+</span>
                    </div>
                    <div className="flex items-center justify-between py-2 border-b border-slate-200/60">
                      <span className="text-slate-500 font-medium">Enriched On</span>
                      <span className="font-extrabold text-secondary">May 12, 2025</span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-slate-500 font-medium">Source</span>
                      <span className="font-extrabold text-primary">LinkedIn Profile</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: AI UNDERSTANDS EVERY LEAD */}
      <section className="py-20 border-t border-slate-100 bg-white">
        <div className="container mx-auto px-6">
          <div className="rounded-3xl bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/20 border border-slate-200/80 p-8 sm:p-12 max-w-6xl mx-auto shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Left Column (5 cols) */}
              <div className="lg:col-span-5 flex flex-col gap-4">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight m-0">
                  AI understands every lead
                </h2>
                <p className="text-base text-slate-700 font-semibold m-0">
                  Creamstack doesn't just enrich contact information.
                </p>
                <p className="text-sm text-text-light leading-relaxed m-0">
                  It studies each prospect's recent public LinkedIn activity and compares it with the services you've added.
                </p>
                <p className="text-sm text-text-light leading-relaxed m-0">
                  Whenever it finds a relevant buying signal, it automatically generates personalized outreach ideas.
                </p>
              </div>

              {/* Right Column: Interactive Buying Signal Showcase (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                {/* Signal Tabs */}
                <div className="flex flex-wrap gap-2">
                  {signalTabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveSignal(tab.id)}
                      className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                        activeSignal === tab.id
                          ? 'bg-primary text-white shadow-md shadow-primary/20 scale-102'
                          : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.label}</span>
                    </button>
                  ))}
                </div>

                {/* Live Buying Signal Card */}
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                        {signalContent[activeSignal].title}
                      </span>
                    </div>
                    <span className="bg-primary/10 text-primary px-3 py-0.5 rounded-full text-xs font-extrabold">
                      {signalContent[activeSignal].tag}
                    </span>
                  </div>

                  <p className="text-sm font-semibold text-slate-800 m-0">
                    {signalContent[activeSignal].desc}
                  </p>

                  {/* Outreach Angle Box */}
                  <div className="p-4 rounded-xl bg-purple-50/70 border border-purple-100 flex flex-col gap-3">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold text-primary">
                      <SparkleIcon /> Suggested outreach angle
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed m-0">
                      "{signalContent[activeSignal].suggestion}"
                    </p>
                    <div className="flex justify-end pt-1">
                      <button className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-hover text-white text-xs font-bold shadow-sm flex items-center gap-1.5 transition-all">
                        <span>Use in Campaign</span>
                        <SparkleIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: BUILT FOR OUTREACH */}
      <section className="py-20 border-t border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight mb-2">
              Built for outreach
            </h2>
            <p className="text-base sm:text-lg text-text-light m-0 font-medium">
              Every enriched lead arrives ready to contact.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {builtFeatures.map((feat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feat.color} flex items-center justify-center mb-5 border border-slate-100`}>
                    {feat.icon}
                  </div>
                  <h3 className="text-base font-bold text-secondary mb-2">{feat.title}</h3>
                  <p className="text-xs text-text-light leading-relaxed m-0">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Master Common CTA Banner */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};

export default LeadEnrichmentPage;

// ICONS
function LinkedInIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.02-3.36 1.68 1.68 0 0 0 .02 3.36M5.07 18.5h2.79v-8.37H5.07v8.37z"></path>
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
}

function SearchSparkleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
  );
}

function MegaphoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11l18-5v12L3 14v-3z"></path>
      <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"></path>
    </svg>
  );
}

function FilterIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83"></path>
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      <polyline points="9 12 11 14 15 10"></polyline>
    </svg>
  );
}

function UserPlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="8.5" cy="7" r="4"></circle>
      <line x1="20" y1="8" x2="20" y2="14"></line>
      <line x1="23" y1="11" x2="17" y2="11"></line>
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function GiftIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="20 12 20 22 4 22 4 12"></polyline>
      <rect x="2" y="7" width="20" height="5"></rect>
      <line x1="12" y1="22" x2="12" y2="7"></line>
      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path>
      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path>
    </svg>
  );
}

function AlertTriangleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
      <line x1="12" y1="9" x2="12" y2="13"></line>
      <line x1="12" y1="17" x2="12.01" y2="17"></line>
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path>
    </svg>
  );
}

function CalendarCheckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
      <polyline points="9 16 11 18 15 14"></polyline>
    </svg>
  );
}

function RadarIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"></circle>
      <circle cx="12" cy="12" r="6"></circle>
      <circle cx="12" cy="12" r="2"></circle>
      <line x1="12" y1="12" x2="19" y2="5"></line>
    </svg>
  );
}
