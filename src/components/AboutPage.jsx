import React from 'react';
import CTASection from './CTASection';

const AboutPage = ({ onNavigate }) => {
  return (
    <div className="bg-slate-50/60 min-h-screen pt-10 sm:pt-16 pb-0 relative overflow-hidden">
      
      {/* Background Ambient Mesh Orbs */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-96 right-0 w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl mb-16 sm:mb-24">
        
        {/* Breadcrumb & Floating Pill */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onNavigate && onNavigate('home')} 
              className="text-xs font-bold text-slate-500 hover:text-primary transition-colors cursor-pointer"
            >
              Home
            </button>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-bold text-slate-400">Company</span>
            <span className="text-slate-300 text-xs">/</span>
            <span className="text-xs font-bold text-primary">About</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-[11px] font-extrabold uppercase tracking-wider shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            <span>Built by Agency Experts</span>
          </div>
        </div>

        {/* Master Editorial Header */}
        <div className="max-w-4xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-extrabold uppercase tracking-wider mb-4">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
              <path d="M9 22v-4h6v4"></path>
              <path d="M8 6h.01"></path>
              <path d="M16 6h.01"></path>
              <path d="M12 6h.01"></path>
              <path d="M12 10h.01"></path>
              <path d="M12 14h.01"></path>
              <path d="M16 10h.01"></path>
              <path d="M16 14h.01"></path>
              <path d="M8 10h.01"></path>
              <path d="M8 14h.01"></path>
            </svg>
            <span>About CreamStack</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12] mb-6">
            Learn about our mission to revolutionize outreach and prospecting
          </h1>

          <p className="text-lg sm:text-2xl text-slate-600 font-medium leading-relaxed max-w-3xl m-0">
            From specialized outreach marketing agency to building the next generation of social-signal-driven AI prospecting.
          </p>
        </div>

        {/* 2-Column Asymmetric Storytelling Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-24">
          
          {/* Left Column (Sticky Key Narrative Card) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            
            {/* Core Observation Card */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-xl shadow-slate-900/5 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary via-purple-500 to-emerald-400"></div>
              
              <div className="text-xs font-extrabold uppercase tracking-wider text-primary mb-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-ping"></span>
                <span>The Origin & Observation</span>
              </div>

              <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed m-0 mb-6">
                Creamstack was born from a simple observation: traditional outreach methods were becoming less effective, while social signals were becoming more important than ever. We recognized the gap between the wealth of social data available and the tools to effectively leverage it.
              </p>

              {/* Live Metric Chips */}
              <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-3">
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-lg sm:text-xl font-black text-slate-900">3.8x</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Reply Rate Boost</div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="text-lg sm:text-xl font-black text-slate-900">100%</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">Social Signal Driven</div>
                </div>
              </div>
            </div>

            {/* Quick Navigation / Pixoda Light Pill */}
            <div className="mt-4 p-4 rounded-2xl bg-blue-50/80 border border-blue-100 text-slate-800 flex items-center justify-between shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white border border-blue-200 text-primary flex items-center justify-center font-black text-sm shadow-2xs">
                  P
                </div>
                <div>
                  <div className="text-xs font-extrabold text-slate-900">Built & Owned by Pixoda</div>
                  <div className="text-[10px] text-slate-500 font-medium">Outreach Marketing Agency</div>
                </div>
              </div>
              <span className="text-[10px] font-extrabold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                Verified
              </span>
            </div>

          </div>

          {/* Right Column (Chronological Journey & Pixoda Heritage) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Step 1: Building the Solution */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-black text-primary bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  01 / Evolution
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">
                  Building the Solution We Wished Existed
                </h3>
              </div>
              
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal m-0">
                After months of manually tracking social signals and crafting personalized outreach messages, we decided to build the solution we wished existed. What started as an internal tool quickly evolved into a comprehensive platform that combines AI-powered prospect identification, intelligent message crafting, and seamless workflow integration.
              </p>
            </div>

            {/* Step 2: Featured Pixoda Agency Heritage Light Card */}
            <div className="bg-gradient-to-br from-blue-50/80 via-white to-purple-50/60 rounded-3xl p-7 sm:p-9 shadow-sm hover:shadow-md transition-all duration-300 border border-blue-200/80 relative group">
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="text-xs font-black text-blue-700 bg-blue-100/80 border border-blue-200 px-3 py-1 rounded-full uppercase tracking-wider">
                  02 / Foundation
                </span>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 text-[10px] font-extrabold uppercase">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Pixoda Agency Roots</span>
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-3">
                Rooted in Agency Expertise
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal m-0">
                Creamstack, built and owned by Pixoda, was born from years of hands-on experience in outreach marketing. Pixoda started as a specialized outreach marketing agency, helping businesses craft personalized campaigns that drive real conversations and results. With insights gained from working closely with sales professionals, marketing teams, and business development experts worldwide, we created Creamstack to solve the exact challenges we faced in the field.
              </p>
            </div>

            {/* Step 3: Our Commitment */}
            <div className="bg-white rounded-3xl border border-slate-200/90 p-7 sm:p-9 shadow-sm hover:shadow-md transition-all duration-300 relative group">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-black text-emerald-600 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full uppercase tracking-wider">
                  03 / Commitment
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 m-0">
                  Our Unwavering Commitment
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal m-0">
                As we continue to grow, our commitment remains the same: to provide innovative, reliable, and effective tools that transform how businesses connect with their ideal customers.
              </p>
            </div>

          </div>

        </div>

        {/* Master Bento Grid (Light Theme Aesthetic) */}
        <div className="mb-12">
          <div className="text-center max-w-xl mx-auto mb-8 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Engineered for Modern Prospecting
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Built on battle-tested frameworks from thousands of live outreach campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
            
            {/* Bento Tile 1 (Span 7) */}
            <div className="md:col-span-7 bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden group">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 text-primary border border-blue-100 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </div>

              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Social Signal Prospecting</h4>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-6">
                  Capturing high-intent buying signals from LinkedIn profiles, company updates, and online engagement before your competitors even reach out.
                </p>

                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">LinkedIn Intent</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-blue-50 text-blue-600 border border-blue-100">Buying Signals</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100">Verified Email</span>
                </div>
              </div>
            </div>

            {/* Bento Tile 2 (Span 5 Light Theme) */}
            <div className="md:col-span-5 bg-gradient-to-br from-purple-50/70 via-white to-indigo-50/60 rounded-3xl p-7 shadow-sm hover:shadow-md transition-all border border-purple-200/80 flex flex-col justify-between relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 border border-purple-200 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>

              <div>
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-purple-700 mb-1">Pixoda Advantage</div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Agency-Grade Intelligence</h4>
                <p className="text-xs text-slate-600 leading-relaxed m-0">
                  Engineered by Pixoda based on real agency campaigns that have generated thousands of sales meetings worldwide.
                </p>
              </div>
            </div>

            {/* Bento Tile 3 (Span 12 / Full Width Light Theme) */}
            <div className="md:col-span-12 bg-white rounded-3xl border border-slate-200/90 p-7 shadow-sm hover:shadow-md transition-all flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">AI-Powered Omnichannel Workflow</h4>
                  <p className="text-xs text-slate-500 leading-relaxed max-w-2xl m-0">
                    Unified prospect identification, personal 1:1 icebreaker messaging, and omnichannel tracking inside one intelligent command center.
                  </p>
                </div>
              </div>

              <button 
                onClick={() => onNavigate && onNavigate('pricing')} 
                className="shrink-0 px-5 py-2.5 rounded-xl bg-primary hover:bg-primary-hover text-white text-xs font-bold transition-all shadow-md shadow-primary/20 cursor-pointer"
              >
                Explore Platform
              </button>
            </div>

          </div>
        </div>

      </div>

      {/* CTA Section on all pages */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};

export default AboutPage;
