import React, { useState } from 'react';
import campaignMockup from '../assets/cam.png';
import CTASection from './CTASection';

const OmnichannelOutreachPage = ({ onNavigate }) => {
  const [activeTabAI, setActiveTabAI] = useState('write'); // 'write' | 'preview'
  const [selectedVariable, setSelectedVariable] = useState('First Name');
  const [messageText, setMessageText] = useState(
    "Hi {{firstName}}, I noticed {{company}} is doing some incredible work in {{industry}}. I'd love to connect and explore how we can help {{company}} achieve even greater results."
  );

  const availableActions = [
    { name: 'View Profile', icon: '👤', channel: 'LinkedIn' },
    { name: 'Send Connection Request', icon: 'in', channel: 'LinkedIn', isLinkedIn: true },
    { name: 'Send LinkedIn Message', icon: 'in', channel: 'LinkedIn', isLinkedIn: true },
    { name: 'Like Recent Post', icon: 'in', channel: 'LinkedIn', isLinkedIn: true },
    { name: 'Send Email', icon: '✉️', channel: 'Email' },
    { name: 'Wait', icon: '⏱️', channel: 'Delay' },
    { name: 'Follow-up', icon: '🔄', channel: 'Sequence' },
    { name: 'Branch Logic', icon: '🔀', channel: 'Condition' }
  ];

  const dynamicVariables = [
    { label: 'First Name', code: '{{firstName}}' },
    { label: 'Last Name', code: '{{lastName}}' },
    { label: 'Company', code: '{{company}}' },
    { label: 'Designation', code: '{{designation}}' },
    { label: 'AI Message', code: '{{aiMessage}}' },
    { label: 'AI Follow-up', code: '{{aiFollowUp}}' }
  ];

  const kpis = [
    { label: 'Connection Requests', value: '1,248', growth: '+24.5%', color: 'from-blue-500 to-indigo-500', sparkColor: '#3b82f6' },
    { label: 'Acceptance Rate', value: '52.6%', growth: '+18.3%', color: 'from-emerald-500 to-teal-500', sparkColor: '#10b981' },
    { label: 'LinkedIn Replies', value: '312', growth: '+32.1%', color: 'from-blue-600 to-cyan-500', sparkColor: '#0284c7' },
    { label: 'Emails Sent', value: '2,340', growth: '+21.4%', color: 'from-amber-500 to-orange-500', sparkColor: '#f59e0b' },
    { label: 'Open Rate', value: '68.7%', growth: '+16.8%', color: 'from-purple-500 to-pink-500', sparkColor: '#8b5cf6' },
    { label: 'Reply Rate', value: '24.3%', growth: '+27.6%', color: 'from-emerald-500 to-green-600', sparkColor: '#10b981' }
  ];

  const leadActivities = [
    {
      name: 'Sarah Johnson',
      company: 'Notion',
      avatar: 'https://i.pravatar.cc/100?img=32',
      status: 'Replied',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      lastStep: 'Send LinkedIn Message',
      nextStep: 'Follow-up Message',
      time: '2h ago'
    },
    {
      name: 'Alex Morgan',
      company: 'Ramp',
      avatar: 'https://i.pravatar.cc/100?img=12',
      status: 'Opened',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200',
      lastStep: 'Send Email',
      nextStep: 'Follow-up Email',
      time: '5h ago'
    },
    {
      name: 'David Lee',
      company: 'Loom',
      avatar: 'https://i.pravatar.cc/100?img=60',
      status: 'Accepted',
      statusColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      lastStep: 'Wait',
      nextStep: 'Send LinkedIn Message',
      time: '1d ago'
    }
  ];

  return (
    <div className="bg-bg-light text-text-main">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-[#3b82f6]/10 via-[#f472b6]/5 to-transparent relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-primary/15 via-[#f472b6]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider text-primary uppercase shadow-xs">
              Omnichannel Outreach
            </div>

            {/* Headline in strictly 2 lines */}
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.5rem] text-secondary tracking-tight leading-[1.15] m-0">
              <span className="inline md:whitespace-nowrap">Reach prospects across LinkedIn and</span>
              <br />
              <span className="inline md:whitespace-nowrap">
                Email from <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#a855f7] to-[#f472b6]">one workflow.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-light leading-relaxed max-w-2xl mx-auto m-0 font-medium">
              Create outreach sequences that combine LinkedIn actions, emails, delays, AI writing, and follow-ups—all from a visual builder.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <button 
                onClick={() => onNavigate && onNavigate('pricing')}
                className="btn btn-primary shadow-lg shadow-primary/25 text-sm font-bold"
              >
                <span>Start Building for Free</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <a 
                href="https://demo.creamstack.io/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline bg-white hover:bg-slate-50 text-sm font-semibold"
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

          {/* Centered Campaign Visual Builder Image Mockup */}
          <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto text-left">
            {/* Soft Ambient Glow */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10 opacity-70"></div>

            {/* Visual Builder App Window / Image */}
            <div className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl bg-white border border-slate-200/90 overflow-hidden relative transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src={campaignMockup} 
                alt="CreamStack Omnichannel Campaign Builder" 
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: VISUAL CAMPAIGN BUILDER ================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            
            {/* Left Column: Heading & Description (5 cols) */}
            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center font-bold text-xl mb-2 shadow-xs border border-blue-100">
                ⚡
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight m-0">
                Visual Campaign Builder
              </h2>
              <p className="text-base text-text-light leading-relaxed m-0 font-medium">
                Design campaigns using an intuitive node-based workflow. Drag, connect, edit, and customize every step.
              </p>
            </div>

            {/* Right Column: 5 Process Steps Container (7 cols) */}
            <div className="lg:col-span-7 bg-[#fcfaff] rounded-3xl p-6 sm:p-8 border-2 border-dashed border-purple-200/90 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                {/* Step 1 */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-secondary text-lg font-bold group-hover:scale-105 transition-transform">
                    🖱️
                  </div>
                  <span className="text-xs font-bold text-secondary">Action</span>
                </div>

                <div className="text-slate-300 font-bold text-base">➔</div>

                {/* Step 2 */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-secondary text-lg font-bold group-hover:scale-105 transition-transform">
                    🔗
                  </div>
                  <span className="text-xs font-bold text-secondary">Connect</span>
                </div>

                <div className="text-slate-300 font-bold text-base">➔</div>

                {/* Step 3 */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-secondary text-lg font-bold group-hover:scale-105 transition-transform">
                    ✎
                  </div>
                  <span className="text-xs font-bold text-secondary">Edit</span>
                </div>

                <div className="text-slate-300 font-bold text-base">➔</div>

                {/* Step 4 */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-13 h-13 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-secondary text-lg font-bold group-hover:scale-105 transition-transform">
                    ⚙️
                  </div>
                  <span className="text-xs font-bold text-secondary">Customize</span>
                </div>

                <div className="text-slate-300 font-bold text-base">➔</div>

                {/* Step 5 */}
                <div className="flex flex-col items-center gap-2 group">
                  <div className="w-13 h-13 rounded-2xl bg-primary text-white shadow-md shadow-primary/30 flex items-center justify-center text-lg font-bold group-hover:scale-105 transition-transform">
                    🚀
                  </div>
                  <span className="text-xs font-bold text-primary">Launch</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: AVAILABLE ACTIONS & AI WRITING ASSISTANT (2 CARDS) ================= */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Left Card: LinkedIn + Email Available Actions */}
            <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#0077B5] text-white flex items-center justify-center font-bold text-sm">
                    in
                  </div>
                  <h3 className="text-2xl font-bold text-secondary m-0">LinkedIn + Email</h3>
                </div>
                <p className="text-sm text-text-light mb-6 font-medium">
                  Mix actions in any order to build the perfect sequence.
                </p>

                {/* 8 Action Pills Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                  {availableActions.map((action, idx) => (
                    <div 
                      key={idx}
                      className="bg-slate-50/80 hover:bg-white rounded-2xl p-3.5 border border-slate-200/80 shadow-xs flex items-center gap-3 transition-all hover:border-primary/40 group cursor-pointer"
                    >
                      <div className="w-8 h-8 rounded-xl bg-white border border-slate-200/80 flex items-center justify-center text-xs font-bold text-primary group-hover:scale-105 transition-transform">
                        {action.icon}
                      </div>
                      <span className="text-xs font-bold text-secondary group-hover:text-primary transition-colors">
                        {action.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Available across all monthly tiers</span>
                <span className="text-primary font-bold">Mix in any order ✨</span>
              </div>
            </div>

            {/* Right Card: AI inside every message */}
            <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-primary flex items-center justify-center font-bold text-lg">
                    ✨
                  </div>
                  <h3 className="text-2xl font-bold text-secondary m-0">AI inside every message</h3>
                </div>
                <p className="text-sm text-text-light mb-6 font-medium">
                  Every message node includes an AI writing assistant.
                </p>

                {/* AI Interactive Message Box */}
                <div className="bg-[#fcfaff] rounded-2xl p-5 border border-purple-100/90 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-extrabold uppercase text-purple-700 tracking-wider">
                      Generate a message
                    </span>
                    <div className="flex rounded-lg bg-slate-200/60 p-0.5 text-[10px] font-bold">
                      <button 
                        onClick={() => setActiveTabAI('write')}
                        className={`px-2.5 py-1 rounded-md transition-all ${activeTabAI === 'write' ? 'bg-white text-secondary shadow-xs' : 'text-slate-500'}`}
                      >
                        AI Write
                      </button>
                      <button 
                        onClick={() => setActiveTabAI('preview')}
                        className={`px-2.5 py-1 rounded-md transition-all ${activeTabAI === 'preview' ? 'bg-white text-secondary shadow-xs' : 'text-slate-500'}`}
                      >
                        Preview
                      </button>
                    </div>
                  </div>

                  {activeTabAI === 'write' ? (
                    <textarea 
                      value={messageText}
                      onChange={(e) => setMessageText(e.target.value)}
                      className="w-full bg-white rounded-xl p-3.5 border border-purple-200/80 text-xs text-slate-700 leading-relaxed outline-none focus:border-primary transition-colors resize-none font-mono"
                      rows="4"
                    />
                  ) : (
                    <div className="bg-white rounded-xl p-3.5 border border-purple-200/80 text-xs text-slate-800 leading-relaxed font-sans min-h-[96px]">
                      Hi <strong>Sarah</strong>, I noticed <strong>Notion</strong> is doing some incredible work in <strong>Productivity SaaS</strong>. I'd love to connect and explore how we can help Notion achieve even greater results.
                    </div>
                  )}

                  <div className="mt-3 flex justify-end">
                    <button 
                      onClick={() => {
                        setMessageText(
                          "Hey {{firstName}} - loved your insights on B2B outbound scaling at {{company}}! We recently helped similar teams boost reply rates by 3.8x. Open to taking a quick look?"
                        );
                      }}
                      className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-md shadow-primary/25 hover:bg-primary-hover transition-all flex items-center gap-1.5"
                    >
                      <span>Generate with AI</span>
                      <span>✨</span>
                    </button>
                  </div>
                </div>

                {/* AI Feature Capabilities Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100/90 px-3 py-1.5 rounded-lg border border-slate-200/70 flex items-center gap-1">
                    ✨ Generate outreach
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100/90 px-3 py-1.5 rounded-lg border border-slate-200/70 flex items-center gap-1">
                    📑 Rewrite templates
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100/90 px-3 py-1.5 rounded-lg border border-slate-200/70 flex items-center gap-1">
                    ✍️ Improve grammar
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100/90 px-3 py-1.5 rounded-lg border border-slate-200/70 flex items-center gap-1">
                    🔄 Create variations
                  </span>
                  <span className="text-[11px] font-bold text-slate-700 bg-slate-100/90 px-3 py-1.5 rounded-lg border border-slate-200/70 flex items-center gap-1 col-span-2 sm:col-span-2">
                    ⚡ Personalize at scale
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: DYNAMIC VARIABLES & HUMAN-LIKE AUTOMATION (2 CARDS) ================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Left Card: Dynamic Variables */}
            <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-100">
                    🏷️
                  </div>
                  <h3 className="text-2xl font-bold text-secondary m-0">Dynamic Variables</h3>
                </div>
                <p className="text-sm text-text-light mb-6 font-medium">
                  Personalize every message using variables like:
                </p>

                {/* Variable Pills */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mb-6">
                  {dynamicVariables.map((v, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedVariable(v.label)}
                      className={`px-3 py-2.5 rounded-xl text-xs font-bold transition-all text-center cursor-pointer ${
                        selectedVariable === v.label
                          ? 'bg-primary text-white shadow-md shadow-primary/25 scale-[1.02]'
                          : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200/80'
                      }`}
                    >
                      {v.code}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 text-xs text-slate-700 font-medium leading-relaxed">
                💡 <strong className="text-secondary font-bold">Automatic Replacement:</strong> Every prospect receives a personalized message automatically based on verified enrichment data.
              </div>
            </div>

            {/* Right Card: Human-like Automation */}
            <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-sm border border-emerald-100">
                    🛡️
                  </div>
                  <h3 className="text-2xl font-bold text-secondary m-0">Human-like Automation</h3>
                </div>
                <p className="text-sm text-text-light mb-6 font-medium">
                  Campaigns never feel robotic. Creamstack automatically introduces intelligent timing variations between actions while respecting sending limits and account safety.
                </p>

                {/* Sequence Timing Visual */}
                <div className="bg-slate-50/90 rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between gap-2 mb-6 text-xs font-bold">
                  <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-xs text-secondary">
                    Action
                  </div>
                  <span className="text-[11px] text-slate-400">➔</span>
                  <div className="bg-purple-50 text-primary border border-purple-200 px-3 py-1.5 rounded-xl text-[11px] text-center">
                    ⏱️ 18h - 24h
                  </div>
                  <span className="text-[11px] text-slate-400">➔</span>
                  <div className="bg-white px-3 py-2 rounded-xl border border-slate-200 shadow-xs text-secondary">
                    Action
                  </div>
                  <span className="text-[11px] text-slate-400">➔</span>
                  <div className="bg-purple-50 text-primary border border-purple-200 px-3 py-1.5 rounded-xl text-[11px] text-center">
                    ⏱️ 1d - 2d
                  </div>
                </div>
              </div>

              {/* Safety Badges */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold text-slate-700">
                <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1.5">
                  ✓ Account safe
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-blue-50 text-blue-700 border border-blue-200 flex items-center gap-1.5">
                  ✓ Smart delays
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-purple-50 text-purple-700 border border-purple-200 flex items-center gap-1.5">
                  ✓ Natural interactions
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 5: CAMPAIGN ANALYTICS DASHBOARD ================= */}
      <section className="py-20 bg-gradient-to-b from-slate-50/60 to-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header & Filter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight m-0">
                  Campaign Analytics
                </h2>
                <p className="text-sm sm:text-base text-text-light m-0 mt-1 font-medium">
                  Track performance in real-time and take action on what matters.
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs font-bold text-secondary shadow-xs">
                <span>📅 Last 30 Days</span>
                <span className="text-slate-400">▼</span>
              </div>
            </div>

            {/* 6 KPI Metric Cards with Sparkline Visuals */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {kpis.map((kpi, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-[11px] font-bold text-text-light mb-1 truncate">{kpi.label}</div>
                  <div className="text-xl sm:text-2xl font-extrabold text-secondary tracking-tight mb-2">
                    {kpi.value}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      {kpi.growth}
                    </span>
                    {/* Mini SVG Sparkline */}
                    <svg width="40" height="16" viewBox="0 0 40 16" fill="none">
                      <path d="M2 14L10 8L18 11L26 4L34 7L38 2" stroke={kpi.sparkColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>

            {/* 2-Column Deep Dive Dashboard */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Live Leads Activity Feed (7 cols) */}
              <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-secondary m-0">Live Lead Activity</h3>
                  <span className="text-xs font-bold text-primary cursor-pointer hover:underline">View All Leads →</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                        <th className="pb-3 font-semibold">Lead</th>
                        <th className="pb-3 font-semibold">Company</th>
                        <th className="pb-3 font-semibold">Status</th>
                        <th className="pb-3 font-semibold">Next Step</th>
                        <th className="pb-3 font-semibold text-right">Activity</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {leadActivities.map((lead, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 pr-2">
                            <div className="flex items-center gap-2.5">
                              <img src={lead.avatar} alt={lead.name} className="w-7 h-7 rounded-full object-cover" />
                              <span className="font-bold text-secondary">{lead.name}</span>
                            </div>
                          </td>
                          <td className="py-3.5 pr-2 font-medium text-slate-600">{lead.company}</td>
                          <td className="py-3.5 pr-2">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${lead.statusColor}`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="py-3.5 pr-2 text-slate-700 font-medium truncate">{lead.nextStep}</td>
                          <td className="py-3.5 text-right text-slate-400 font-medium">{lead.time}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Right Column: "Next Step for Every Lead" Donut Breakdown (5 cols) */}
              <div className="lg:col-span-5 bg-white rounded-3xl p-6 border border-slate-200/80 shadow-md flex flex-col justify-between">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-base font-bold text-secondary m-0">Next Step for Every Lead</h3>
                  <span className="text-xs font-bold text-slate-400">1,248 Total</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-6 my-2">
                  {/* Central Donut Graphic */}
                  <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                      <circle cx="18" cy="18" r="14" fill="transparent" stroke="#e2e8f0" strokeWidth="4"></circle>
                      <circle cx="18" cy="18" r="14" fill="transparent" stroke="#3b82f6" strokeWidth="4" strokeDasharray="35 100" strokeDashoffset="0"></circle>
                      <circle cx="18" cy="18" r="14" fill="transparent" stroke="#eab308" strokeWidth="4" strokeDasharray="25 100" strokeDashoffset="-35"></circle>
                      <circle cx="18" cy="18" r="14" fill="transparent" stroke="#10b981" strokeWidth="4" strokeDasharray="20 100" strokeDashoffset="-60"></circle>
                      <circle cx="18" cy="18" r="14" fill="transparent" stroke="#f97316" strokeWidth="4" strokeDasharray="10 100" strokeDashoffset="-80"></circle>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-lg font-extrabold text-secondary">1,248</span>
                      <span className="text-[10px] font-bold text-text-light">Leads</span>
                    </div>
                  </div>

                  {/* Legend Breakdown */}
                  <div className="space-y-2 text-xs w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                        <span className="font-medium text-slate-700">Send LinkedIn Message</span>
                      </div>
                      <span className="font-bold text-secondary">40%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                        <span className="font-medium text-slate-700">Follow-up Email</span>
                      </div>
                      <span className="font-bold text-secondary">25%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                        <span className="font-medium text-slate-700">Follow-up Message</span>
                      </div>
                      <span className="font-bold text-secondary">20%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                        <span className="font-medium text-slate-700">Connection Request</span>
                      </div>
                      <span className="font-bold text-secondary">10%</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-400"></span>
                        <span className="font-medium text-slate-700">Other</span>
                      </div>
                      <span className="font-bold text-secondary">5%</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= Master Common CTA Banner ================= */}
      <CTASection onNavigate={onNavigate} />

    </div>
  );
};

export default OmnichannelOutreachPage;
