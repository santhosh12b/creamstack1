import React from 'react';

const CTASection = ({ onNavigate }) => {
  return (
    <section id="demo" className="py-14 sm:py-20 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Main CTA Canvas */}
        <div className="relative rounded-2xl sm:rounded-[32px] md:rounded-[40px] bg-gradient-to-br from-[#0c0f1d] via-[#11162b] to-[#0a0d18] border border-white/10 shadow-[0_30px_100px_-20px_rgba(94,43,255,0.35)] overflow-hidden p-6 sm:p-10 md:p-12 lg:p-16">
          
          {/* Ambient Glowing Neon Orbs & Grid Mesh */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary/30 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#f472b6]/25 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

          {/* Background Grid Lines Texture */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
              backgroundSize: '40px 40px'
            }}
          ></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
              {/* Floating Badge */}
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider text-purple-200 uppercase mb-4 sm:mb-6 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>LIMITED BETA ACCESS</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-3 sm:mb-4">
                Ready to simplify your outreach?{' '}
                <span className="block mt-1 bg-clip-text text-transparent bg-gradient-to-r from-[#f472b6] via-[#c084fc] to-[#60a5fa]">
                  Get full access in minutes.
                </span>
              </h2>

              {/* Subtitle in 1 clean line */}
              <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-xl mb-6 sm:mb-8 leading-relaxed font-medium whitespace-normal lg:whitespace-nowrap">
                Creamstack is currently in beta. Get your invite code and start risk-free.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8 w-full sm:w-auto">
                <button 
                  onClick={() => onNavigate ? onNavigate('pricing') : window.location.hash = 'pricing'}
                  className="w-full sm:w-auto px-7 py-3.5 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl bg-gradient-to-r from-primary via-[#7c3aed] to-[#9333ea] text-white font-extrabold text-sm sm:text-base shadow-xl shadow-primary/40 hover:shadow-primary/60 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer group"
                >
                  <span>Get Invite Code</span>
                  <svg 
                    width="18" 
                    height="18" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="group-hover:translate-x-1 transition-transform"
                  >
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>

                <a 
                  href="https://demo.creamstack.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 sm:px-7 sm:py-4 rounded-xl sm:rounded-2xl border border-white/20 bg-white/10 hover:bg-white/20 text-white font-bold text-sm sm:text-base shadow-sm backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5 hover:border-white/40 cursor-pointer group"
                >
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5 3 19 12 5 21 5 3"></polygon>
                    </svg>
                  </div>
                  <span>Watch 20 Min Demo</span>
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs font-semibold text-slate-400">
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> No credit card required
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> 5-minute setup
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-emerald-400">✓</span> 20+ verified data sources
                </div>
              </div>
            </div>

            {/* Right Interactive Command Center Showcase (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              
              {/* Glassmorphic Command Center Card */}
              <div className="w-full max-w-[420px] bg-white/[0.07] backdrop-blur-xl border border-white/15 rounded-3xl p-6 shadow-2xl relative transition-transform duration-300 hover:scale-[1.02]">
                
                {/* Header of Command Center */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse"></div>
                    <span className="text-xs font-extrabold text-white uppercase tracking-wider">Outreach Autopilot</span>
                  </div>
                  <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-primary/30 text-purple-200 border border-primary/40">
                    Live Active
                  </span>
                </div>

                {/* Live Sequence Activity Feed */}
                <div className="space-y-2.5 mb-4">
                  {/* Step 1 */}
                  <div className="bg-white/10 rounded-2xl p-3 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-blue-500/20 border border-blue-400/30 text-blue-300 flex items-center justify-center font-bold text-xs">
                        in
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Prospect Enrichment</div>
                        <div className="text-[10px] text-slate-300">1,248 Verified Leads Found</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                      100%
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="bg-white/10 rounded-2xl p-3 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-purple-500/20 border border-purple-400/30 text-purple-300 flex items-center justify-center font-bold text-xs">
                        ⚡
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">AI 1:1 Personalization</div>
                        <div className="text-[10px] text-slate-300">Hyper-tailored Icebreakers</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-purple-300 bg-purple-500/20 px-2 py-0.5 rounded-full">
                      Optimal
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="bg-white/10 rounded-2xl p-3 border border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 flex items-center justify-center font-bold text-xs">
                        📥
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Unified Smart Inbox</div>
                        <div className="text-[10px] text-slate-300">42 Warm Replies Waiting</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded-full">
                      +42 New
                    </span>
                  </div>
                </div>

                {/* Bottom Metric Footer */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-medium">Average Reply Rate</span>
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 text-sm">
                    42.8% (+14.2% ↑)
                  </span>
                </div>
              </div>

              {/* Floating Floating Chips around Card */}
              <div className="hidden sm:flex absolute -top-4 -right-4 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-xl items-center gap-1.5 animate-bounce" style={{ animationDuration: '3s' }}>
                <span>🔥</span> 3.4x Pipeline Growth
              </div>

              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/15 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-white text-xs font-bold shadow-xl items-center gap-1.5 animate-bounce" style={{ animationDuration: '3.5s', animationDelay: '1s' }}>
                <span>✨</span> Verified & Ready
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
