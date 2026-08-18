import React from 'react';
import dashboardImg from '../assets/12.png';

const HeroSection = () => {
  return (
    <section id="home" className="pt-20 pb-20 bg-gradient-to-b from-[#f472b6]/10 via-[#3b82f6]/5 to-transparent overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        {/* Centered Hero Content */}
        <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-sm font-semibold w-fit">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
              <polyline points="14 2 14 8 20 8"></polyline>
              <line x1="16" y1="13" x2="8" y2="13"></line>
              <line x1="16" y1="17" x2="8" y2="17"></line>
              <polyline points="10 9 9 9 8 9"></polyline>
            </svg>
            <span className="text-primary">All-in-one Outreach Platform</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-secondary leading-tight mb-0">
            Find. Personalize. Automate. Close.<br />
            <span className="text-gradient">All in One Place.</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-text-light max-w-2xl mx-auto mb-0 leading-relaxed">
            Creamstack helps you find high-intent leads, personalize at scale, automate outreach, and manage every conversation from one unified inbox.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <button className="btn btn-primary shadow-lg shadow-primary/25">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
              Watch 2 Min Demo
            </button>
            <button className="btn btn-outline bg-white hover:bg-slate-50">Get Invite Code</button>
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

