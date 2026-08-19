import React from 'react';
import dashboardImg from '../assets/12.png';

const HeroSection = ({ onNavigate }) => {
  return (
    <section id="home" className="pt-10 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-[#f472b6]/10 via-[#3b82f6]/5 to-transparent overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        {/* Centered Hero Content */}
        <div className="flex flex-col items-center gap-5 sm:gap-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-bold tracking-wider text-primary uppercase shadow-2xs">
            100% DONE-FOR-YOU OUTBOUND
          </div>

          {/* Heading */}
          <h1 className="font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-[3.1rem] xl:text-[3.4rem] text-secondary tracking-tight leading-[1.2] sm:leading-[1.15] m-0">
            <span>The All-in-One Tool to Find Leads,</span>
            <br />
            <span>Research, Personalize, and Automate</span>
            <br />
            <span className="text-gradient">LinkedIn & Email Outreach.</span>
          </h1>

          {/* Description */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-light max-w-3xl mx-auto mb-0 leading-relaxed font-medium">
            Creamstack helps you find high-intent leads, personalize at scale, automate outreach, and manage every conversation from one unified inbox.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-2 w-full sm:w-auto">
            <a 
              href="https://demo.creamstack.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary shadow-lg shadow-primary/25 w-full sm:w-auto text-sm sm:text-base"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              <span>Watch 20 Min Demo</span>
            </a>
            <button 
              onClick={() => onNavigate ? onNavigate('pricing') : window.location.hash = 'pricing'}
              className="btn btn-outline bg-white hover:bg-slate-50 cursor-pointer w-full sm:w-auto text-sm sm:text-base"
            >
              Get Invite Code
            </button>
          </div>

          {/* Social Proof & Rating */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
            <div className="relative flex">
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 bg-[url('https://i.pravatar.cc/100?img=1')] bg-cover"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 bg-[url('https://i.pravatar.cc/100?img=2')] bg-cover -ml-3"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 bg-[url('https://i.pravatar.cc/100?img=3')] bg-cover -ml-3"></div>
              <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300 bg-[url('https://i.pravatar.cc/100?img=4')] bg-cover -ml-3"></div>
            </div>
            <div className="flex flex-col gap-0.5 text-left">
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(i => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <span className="font-bold text-sm text-secondary">4.9/5</span>
              </div>
              <p className="text-xs sm:text-sm text-text-light m-0">Loved by 1,000+ growth & agency teams</p>
            </div>
          </div>
        </div>

        {/* Showcase Interface Container */}
        <div className="relative mt-8 sm:mt-14 md:mt-16 max-w-5xl mx-auto">
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 opacity-70"></div>
          
          {/* MOBILE EXPERIENCE (<sm): Native Interactive Product Preview Card */}
          <div className="block sm:hidden text-left">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl border border-slate-200/90 shadow-2xl p-4.5 relative overflow-hidden">
              {/* Card Top Pill */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3.5">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-700">
                    Live Enriched Prospect
                  </span>
                </div>
                <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-200/80">
                  Ready to Send
                </span>
              </div>

              {/* Prospect Profile Row */}
              <div className="flex items-center gap-3 mb-3">
                <div className="relative shrink-0">
                  <img 
                    src="https://i.pravatar.cc/100?img=32" 
                    alt="Sarah Johnson" 
                    className="w-12 h-12 rounded-2xl object-cover border border-slate-200" 
                  />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-md bg-[#0077B5] text-white flex items-center justify-center text-[9px] font-black">
                    in
                  </span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-extrabold text-sm text-secondary m-0 truncate">Sarah Johnson</h4>
                    <span className="text-[10px] text-emerald-600 font-bold">✓ Verified</span>
                  </div>
                  <p className="text-xs text-text-light m-0 font-medium truncate">Head of Growth · Notion</p>
                  <p className="text-[11px] text-primary font-semibold m-0 truncate">sarah@notion.so</p>
                </div>
              </div>

              {/* Real-time Buying Signal Chip */}
              <div className="bg-amber-50/80 border border-amber-200/80 rounded-xl p-2.5 mb-3 flex items-start gap-2 text-[11px]">
                <span className="shrink-0 text-amber-600 font-bold">⚡ Signal:</span>
                <span className="text-slate-700 font-medium leading-tight">
                  Hiring 4 Growth SDRs & expanding outbound tech stack
                </span>
              </div>

              {/* AI Message Preview Bubble */}
              <div className="bg-slate-50 border border-slate-200/70 rounded-2xl p-3 mb-3">
                <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                  <span className="text-primary font-extrabold flex items-center gap-1">
                    <span>✨</span> AI Hyper-Personalized Hook
                  </span>
                  <span>LinkedIn + Email</span>
                </div>
                <p className="text-xs text-slate-700 font-normal m-0 leading-relaxed italic">
                  "Hi Sarah, noticed Notion is scaling out the Growth team. We help SDRs automate 1:1 multi-channel touches without manual data entry..."
                </p>
              </div>

              {/* Action Buttons in Thumb Zone */}
              <div className="flex items-center gap-2 pt-1">
                <button 
                  onClick={() => onNavigate ? onNavigate('pricing') : window.location.hash = 'pricing'}
                  className="flex-1 py-2.5 px-3 bg-primary text-white rounded-xl font-bold text-xs shadow-md shadow-primary/25 flex items-center justify-center gap-1.5"
                >
                  <span>Launch Sequence</span>
                  <span>➔</span>
                </button>
                <a 
                  href="https://demo.creamstack.io/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 bg-slate-100 text-slate-700 rounded-xl font-bold text-xs border border-slate-200 flex items-center justify-center gap-1"
                >
                  <span>Interactive Demo</span>
                </a>
              </div>
            </div>
          </div>

          {/* DESKTOP EXPERIENCE (sm+): High Resolution Full Interface */}
          <div className="hidden sm:block rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 bg-white/40 backdrop-blur-sm p-2 sm:p-3 transition-transform duration-500 hover:scale-[1.01]">
            <img 
              src={dashboardImg} 
              alt="Creamstack Dashboard Interface" 
              className="w-full h-auto rounded-xl sm:rounded-2xl block" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

