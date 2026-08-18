import React from 'react';

const CTASection = () => {
  return (
    <section id="demo" className="py-24 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="bg-bg-dark rounded-[24px] p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-center overflow-hidden relative">
          <div className="flex-1 lg:max-w-[50%] relative z-10 text-center lg:text-left mb-12 lg:mb-0">
            <h2 className="text-4xl text-white mb-4 font-bold">Ready to simplify your outreach?</h2>
            <p className="text-lg text-white/70 mb-8">
              Creamstack is currently in beta.<br/>
              Get your invite code today and try risk-free.
            </p>
            <div className="flex justify-center lg:justify-start gap-4">
              <button className="btn btn-primary">Get Invite Code</button>
              <button className="btn btn-outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
          
          <div className="flex-1 relative h-[300px] w-full flex items-center justify-center">
            {/* Decorative elements representing features */}
            <div className="absolute top-[10%] left-[20%] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.2)] animate-float-chip" style={{ animationDelay: '0s' }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#10b981]"><CheckIcon /></span> Find Prospects
            </div>
            <div className="absolute top-[20%] right-[10%] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.2)] animate-float-chip" style={{ animationDelay: '1s' }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#f97316]"><CheckIcon /></span> Automate
            </div>
            <div className="absolute bottom-[20%] left-[10%] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.2)] animate-float-chip" style={{ animationDelay: '2s' }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#8b5cf6]"><CheckIcon /></span> Personalize
            </div>
            <div className="absolute top-[60%] right-[20%] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.2)] animate-float-chip" style={{ animationDelay: '3s' }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#3b82f6]"><CheckIcon /></span> Reply
            </div>
            <div className="absolute bottom-[10%] right-[30%] bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-white text-sm font-medium flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.2)] animate-float-chip" style={{ animationDelay: '4s' }}>
              <span className="w-5 h-5 rounded-full flex items-center justify-center bg-[#ef4444]"><CheckIcon /></span> Launch
            </div>
            
            <div className="w-[120px] h-[120px] bg-gradient-to-br from-[#5E2BFF] to-[#FF5A5F] rounded-3xl shadow-[0_0_40px_rgba(94,43,255,0.5)] flex items-center justify-center animate-float">
              <div className="w-[100px] h-[100px] bg-white/20 rounded-2xl border border-white/50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

function CheckIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>; }
