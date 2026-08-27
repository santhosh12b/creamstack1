import React, { useEffect, useState } from 'react';

const DemoPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50/50 pt-24 sm:pt-32 pb-24 relative overflow-hidden flex flex-col">
      {/* Background Decor (Optional subtlety) */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-blue-50/50 to-transparent pointer-events-none"></div>

      <div className="container px-4 sm:px-6 relative z-10 max-w-5xl mx-auto flex-1 flex flex-col items-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 font-bold text-sm mb-6 sm:mb-8 border border-blue-100 shadow-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
          </svg>
          All-in-one Outreach Platform
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-[56px] font-black text-slate-900 tracking-tight text-center max-w-4xl leading-[1.1] mb-6">
          The All-in-One Tool to <span className="text-blue-600">Find Leads, Research,</span> Personalize, and <span className="text-blue-600">Automate LinkedIn & Email Outreach.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-500 font-medium text-center max-w-2xl mb-12 sm:mb-16 leading-relaxed">
          Save time and money by replacing multiple tools with a single platform so that you can focus on closing deals instead of repetitive tasks.
        </p>

        {/* Video Player Container */}
        <div className="w-full max-w-[960px] aspect-video bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.25)] overflow-hidden relative border border-slate-200/20">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/X_0iGzu-E3M?rel=0&modestbranding=1" 
            title="Creamstack Interactive Demo"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
};

export default DemoPage;
