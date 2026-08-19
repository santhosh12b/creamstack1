import React, { useState } from 'react';

const FeaturesSection = () => {
  const [activeChannel, setActiveChannel] = useState(0);

  const channels = [
    { 
      label: 'LinkedIn Search', 
      icon: (
        <span className="w-4 h-4 rounded bg-white text-primary flex items-center justify-center font-bold text-[10px]">
          in
        </span>
      ), 
      inactiveIcon: (
        <span className="w-4 h-4 rounded bg-[#0077B5] text-white flex items-center justify-center font-bold text-[10px]">
          in
        </span>
      ),
      desc: 'Direct prospect search with seniority, industry & location filters' 
    },
    { 
      label: 'Domain Enrichment', 
      icon: <GlobeIcon />, 
      inactiveIcon: <GlobeIcon className="text-blue-500" />,
      desc: 'Turn company domain URLs into verified executive decision-makers' 
    },
    { 
      label: 'CSV Bulk Import', 
      icon: <FileTextIcon />, 
      inactiveIcon: <FileTextIcon className="text-purple-500" />,
      desc: 'Upload existing lead spreadsheets and enrich data in bulk' 
    },
    { 
      label: 'Past Engagers', 
      icon: <HeartIcon />, 
      inactiveIcon: <HeartIcon className="text-pink-500" />,
      desc: 'Extract and enrich prospects who liked or commented on target posts' 
    },
    { 
      label: 'Company Websites', 
      icon: <BuildingIcon />, 
      inactiveIcon: <BuildingIcon className="text-cyan-600" />,
      desc: 'Identify key contacts and leadership directly from web domains' 
    },
    { 
      label: 'AI Buying Signals', 
      icon: <ZapIcon />, 
      inactiveIcon: <ZapIcon className="text-amber-500" />,
      desc: 'Trigger automatic enrichment on funding rounds and hiring surges' 
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-[#fcfaff] to-white relative overflow-hidden">
      {/* Decorative ambient background curves */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-l from-pink-200/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-purple-50 border border-purple-200/70 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-primary uppercase mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            POWERFUL FEATURES
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-secondary tracking-tight mb-4 leading-tight">
            Built for serious, <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#a855f7] to-[#f472b6]">high-conversion</span><br />
            outreach.
          </h2>

          <p className="text-base sm:text-lg text-text-light max-w-2xl mx-auto m-0 leading-relaxed font-medium">
            Everything you need to discover high-intent prospects,<br className="hidden sm:inline" />
            automate multi-touch outreach, and close deals effortlessly.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="max-w-[1180px] mx-auto space-y-6">
          
          {/* ================= TOP ROW: 2 EQUAL LARGE CARDS ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* TOP CARD 1: 6 Ways to Find & Enrich Prospects */}
            <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-xl shadow-slate-100/70 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-indigo-50/90 text-primary flex items-center justify-center shadow-xs border border-indigo-100/80 group-hover:scale-105 transition-transform">
                    <UsersIcon />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 border border-blue-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                    6 Ingest Methods
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-secondary mb-2.5">
                  4 Ways to Find & Enrich Prospects
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-6 font-medium">
                  Never run out of high-converting leads. Ingest, verify, and enrich decision-makers from multiple sources simultaneously.
                </p>
              </div>

              {/* Ingestion Source Showcase Box */}
              <div className="bg-[#f8fafc]/90 rounded-2xl p-5 border border-slate-200/80">
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider mb-3">
                  <span className="text-slate-400">SELECT INGESTION SOURCE:</span>
                  <span className="text-primary font-extrabold lowercase text-xs">95%+ verified accuracy</span>
                </div>

                {/* 6 Source Pills (3x2 Grid) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-3.5">
                  {channels.map((ch, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveChannel(idx)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 flex items-center gap-2 text-left cursor-pointer ${
                        activeChannel === idx
                          ? 'bg-primary text-white shadow-md shadow-primary/25 scale-[1.02]'
                          : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200/80 shadow-xs'
                      }`}
                    >
                      <span className="shrink-0">
                        {activeChannel === idx ? ch.icon : ch.inactiveIcon}
                      </span>
                      <span className="truncate">{ch.label}</span>
                    </button>
                  ))}
                </div>

                {/* Dynamic Preview & Ready to Sync Action */}
                <div className="pt-3 border-t border-slate-200/70 flex items-center justify-between gap-3 text-xs">
                  <span className="text-slate-600 font-medium truncate">
                    {channels[activeChannel].desc}
                  </span>
                  <span className="shrink-0 px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-[11px] border border-emerald-200/80">
                    Ready to Sync
                  </span>
                </div>
              </div>
            </div>

            {/* TOP CARD 2: LinkedIn + Email Automation */}
            <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-xl shadow-slate-100/70 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-purple-50/90 text-primary flex items-center justify-center shadow-xs border border-purple-100/80 group-hover:scale-105 transition-transform">
                    <PaperPlaneIcon />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-pink-50 text-purple-700 border border-purple-200/80">
                    ⚡ Multi-Touch Autopilot
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-secondary mb-2.5">
                  LinkedIn + Email Automation
                </h3>
                <p className="text-sm text-text-light leading-relaxed mb-6 font-medium">
                  Build seamless multi-channel drip sequences with intelligent fallback conditions and sender safety warmup.
                </p>
              </div>

              {/* Sequence Flow Micro-Canvas Box */}
              <div className="bg-[#fcfaff] rounded-2xl p-5 border border-purple-100/90 flex flex-col justify-center">
                {/* Step 1 Node */}
                <div className="bg-white rounded-xl p-3.5 shadow-xs border border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-[#0077B5] text-white flex items-center justify-center text-xs font-bold">
                      in
                    </div>
                    <span className="text-xs font-bold text-secondary">Step 1: LinkedIn Connect</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-200/80 px-2.5 py-0.5 rounded-md">
                    Sent
                  </span>
                </div>

                {/* Connector Branch Line */}
                <div className="my-2.5 flex items-center justify-center gap-2 text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
                  <span>◆ WAIT 2 DAYS — IF ACCEPTED</span>
                </div>

                {/* Step 2 Node */}
                <div className="bg-white rounded-xl p-3.5 shadow-xs border border-purple-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded-lg bg-purple-100 text-primary flex items-center justify-center text-xs">
                      ✉
                    </div>
                    <span className="text-xs font-bold text-secondary">Step 2: 1:1 Personalized Email</span>
                  </div>
                  <span className="text-[11px] font-bold text-primary bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-md">
                    AI Tailored
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* ================= BOTTOM ROW: 4 EQUAL CARDS ================= */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* BOTTOM CARD 1: AI Personalization */}
            <div className="bg-white rounded-[28px] p-6 border border-slate-200/80 shadow-lg shadow-slate-100/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center shadow-xs border border-pink-100 group-hover:scale-105 transition-transform">
                    <RobotIcon />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-pink-50 text-pink-600 border border-pink-200">
                    ⚡ GPT-4o Engine
                  </span>
                </div>

                <h4 className="text-lg font-bold text-secondary mb-1.5">
                  AI Personalization
                </h4>
                <p className="text-xs text-text-light leading-relaxed mb-5 font-medium">
                  Generate 1:1 icebreakers tailored to prospect recent posts, company funding, and tech stack.
                </p>
              </div>

              {/* Micro AI Icebreaker Box */}
              <div className="bg-[#f8fafc] rounded-2xl p-3.5 border border-slate-200/70">
                <div className="text-[9px] font-extrabold uppercase tracking-wider text-pink-600 mb-1.5">
                  AI-GENERATED ICEBREAKER
                </div>
                <p className="text-slate-700 italic text-[11px] leading-snug m-0 mb-2">
                  "Saw your team just expanded outbound in APAC—loved your note on multi-step warmup."
                </p>
                <div className="text-right">
                  <span className="text-[10px] font-bold text-emerald-600">
                    🔥 4.2x Higher Reply
                  </span>
                </div>
              </div>
            </div>

            {/* BOTTOM CARD 2: Unified Smart Inbox */}
            <div className="bg-white rounded-[28px] p-6 border border-slate-200/80 shadow-lg shadow-slate-100/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-xs border border-emerald-100 group-hover:scale-105 transition-transform">
                    <ChatIcon />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    📥 Zero Missed Chats
                  </span>
                </div>

                <h4 className="text-lg font-bold text-secondary mb-1.5">
                  Unified Smart Inbox
                </h4>
                <p className="text-xs text-text-light leading-relaxed mb-5 font-medium">
                  Reply to every LinkedIn prospect and multi-domain email reply from one centralized power inbox.
                </p>
              </div>

              {/* Micro Inbox Stream Box */}
              <div className="bg-[#f8fafc] rounded-2xl p-3 border border-slate-200/70 space-y-2">
                <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-[#0077B5] text-white flex items-center justify-center font-bold text-[9px]">
                      S
                    </div>
                    <span className="font-bold text-secondary text-xs">Sarah M.</span>
                  </div>
                  <span className="text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    Interested
                  </span>
                </div>

                <div className="bg-white p-2 rounded-xl border border-slate-200/60 shadow-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-primary text-white flex items-center justify-center font-bold text-[9px]">
                      A
                    </div>
                    <span className="font-bold text-secondary text-xs">Alex Ray</span>
                  </div>
                  <span className="text-[9px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                    Meeting booked
                  </span>
                </div>
              </div>
            </div>

            {/* BOTTOM CARD 3: CRM & Live Analytics */}
            <div className="bg-white rounded-[28px] p-6 border border-slate-200/80 shadow-lg shadow-slate-100/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center shadow-xs border border-amber-100 group-hover:scale-105 transition-transform">
                    <BarChartIcon />
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-50 text-amber-700 border border-amber-200">
                    📊 Real-time ROI
                  </span>
                </div>

                <h4 className="text-lg font-bold text-secondary mb-1.5">
                  CRM & Live Analytics
                </h4>
                <p className="text-xs text-text-light leading-relaxed mb-5 font-medium">
                  Score buyer intent automatically, organize prospect pipelines, and monitor open, reply, and booking rates.
                </p>
              </div>

              {/* Micro Metric Stat Cards */}
              <div className="grid grid-cols-2 gap-2 text-center bg-[#f8fafc] p-3 rounded-2xl border border-slate-200/70">
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                  <div className="text-lg font-extrabold text-secondary">42.8%</div>
                  <div className="text-[10px] text-text-light font-semibold">Avg Reply Rate</div>
                </div>
                <div className="bg-white p-2.5 rounded-xl border border-slate-200/60 shadow-xs">
                  <div className="text-lg font-extrabold text-primary">99.2%</div>
                  <div className="text-[10px] text-text-light font-semibold">Deliverability</div>
                </div>
              </div>
            </div>

            {/* BOTTOM CARD 4: Built for Scale & Safety */}
            <div className="bg-white rounded-[28px] p-6 border border-slate-200/80 shadow-lg shadow-slate-100/70 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div>
                <div className="flex items-center justify-between gap-3 mb-5">
                  <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs border border-blue-100 group-hover:scale-105 transition-transform">
                    <ShieldIcon />
                  </div>
                </div>

                <h4 className="text-lg font-bold text-secondary mb-1.5">
                  Built for Scale & Safety
                </h4>
                <p className="text-xs text-text-light leading-relaxed mb-5 font-medium">
                  Enterprise-grade infrastructure with sender rotation, warmup, and smart throttling to keep you safe.
                </p>
              </div>

              {/* Checklist Box */}
              <div className="bg-[#f8fafc] rounded-2xl p-3.5 border border-slate-200/70 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircleBlue />
                  <span>Sender Safety Warmup</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircleBlue />
                  <span>Smart Throttling</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircleBlue />
                  <span>GDPR Compliant</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

// SVGs
function UsersIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function PaperPlaneIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="10" rx="2"></rect>
      <circle cx="12" cy="5" r="2"></circle>
      <path d="M12 7v4"></path>
      <line x1="8" y1="16" x2="8" y2="16"></line>
      <line x1="16" y1="16" x2="16" y2="16"></line>
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
    </svg>
  );
}

function CheckCircleBlue() {
  return (
    <div className="w-4 h-4 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}

function GlobeIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"></circle>
      <line x1="2" y1="12" x2="22" y2="12"></line>
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
    </svg>
  );
}

function FileTextIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
      <polyline points="14 2 14 8 20 8"></polyline>
      <line x1="16" y1="13" x2="8" y2="13"></line>
      <line x1="16" y1="17" x2="8" y2="17"></line>
      <polyline points="10 9 9 9 8 9"></polyline>
    </svg>
  );
}

function HeartIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
    </svg>
  );
}

function BuildingIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
      <line x1="9" y1="22" x2="9" y2="2"></line>
      <line x1="8" y1="6" x2="10" y2="6"></line>
      <line x1="14" y1="6" x2="16" y2="6"></line>
      <line x1="8" y1="10" x2="10" y2="10"></line>
      <line x1="14" y1="10" x2="16" y2="10"></line>
      <line x1="8" y1="14" x2="10" y2="14"></line>
      <line x1="14" y1="14" x2="16" y2="14"></line>
      <line x1="8" y1="18" x2="10" y2="18"></line>
      <line x1="14" y1="18" x2="16" y2="18"></line>
    </svg>
  );
}

function ZapIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    </svg>
  );
}
