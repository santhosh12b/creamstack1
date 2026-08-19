import React from 'react';
import dashboardImg from '../assets/12.png';

const HeroSection = ({ onNavigate }) => {
  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-b from-[#f472b6]/10 via-[#3b82f6]/5 to-transparent overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Centered Hero Content */}
        <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wider text-primary uppercase">
            100% DONE-FOR-YOU OUTBOUND
          </div>

          {/* Heading */}
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-[3.6rem] text-secondary tracking-tight leading-[1.12] m-0">
            <span className="inline md:whitespace-nowrap">Find. Personalize. Automate. Close.</span>
            <br />
            <span className="text-gradient">All in One Place.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto mb-0 leading-relaxed">
            Creamstack helps you find high-intent leads, personalize at scale, automate outreach, and manage every conversation from one unified inbox.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <a 
              href="https://demo.creamstack.io/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary shadow-lg shadow-primary/25"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch 2 Min Demo
            </a>
            <button 
              onClick={() => onNavigate ? onNavigate('pricing') : window.location.hash = 'pricing'}
              className="btn btn-outline bg-white hover:bg-slate-50 cursor-pointer"
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

        {/* Centered Showcase Image */}
        <div className="relative mt-14 md:mt-16 max-w-5xl mx-auto">
          {/* Ambient Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-2xl -z-10 opacity-70"></div>
          
          <div className="rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-slate-200/80 bg-white/40 backdrop-blur-sm p-2 sm:p-3 transition-transform duration-500 hover:scale-[1.01]">
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

