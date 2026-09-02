import React from 'react';

const logos = [
  { src: 'stream.png', alt: 'StreamQ', badgeColor: 'hover:border-slate-300 hover:shadow-slate-500/10' },
  { src: 'xacc.png', alt: 'Xacco', badgeColor: 'hover:border-slate-300 hover:shadow-slate-500/10' },
  { src: 'digi.png', alt: 'Digiholic', badgeColor: 'hover:border-slate-300 hover:shadow-slate-500/10' },
  { src: 'zitrino.png', alt: 'Zitrino', badgeColor: 'hover:border-slate-300 hover:shadow-slate-500/10' },
  { src: 'Audit.png', alt: 'Auditcare', badgeColor: 'hover:border-slate-300 hover:shadow-slate-500/10' },
  { src: 'why.png', alt: 'WNY Holidays', badgeColor: 'hover:border-slate-300 hover:shadow-slate-500/10' },
  { src: 'mom.png', alt: 'Mommente', badgeColor: 'hover:border-slate-300 hover:shadow-slate-500/10' },
];

const LogoCloud = () => {
  return (
    <section className="py-10 sm:py-14 border-y border-slate-100 bg-white/50 backdrop-blur-xs">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 mb-6 sm:mb-9 uppercase">
          TRUSTED BY OUTREACH PROFESSIONALS AT HIGH-GROWTH COMPANIES
        </p>
        <div className="overflow-hidden relative w-full flex">
          <div className="flex animate-marquee whitespace-nowrap min-w-max hover:[animation-play-state:paused]">
            {/* First Set */}
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 pr-8 sm:pr-12 md:pr-16 lg:pr-20">
              {logos.map((logo, idx) => (
                <div 
                  key={idx} 
                  className="group flex items-center justify-center px-2 py-2 min-h-[44px] transition-all duration-300 cursor-pointer"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-7 sm:h-9 w-auto max-w-[120px] sm:max-w-[160px] object-contain opacity-50 brightness-0 group-hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
            {/* Duplicated Set for infinite scroll */}
            <div className="flex items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 pr-8 sm:pr-12 md:pr-16 lg:pr-20" aria-hidden="true">
              {logos.map((logo, idx) => (
                <div 
                  key={`dup-${idx}`} 
                  className="group flex items-center justify-center px-2 py-2 min-h-[44px] transition-all duration-300 cursor-pointer"
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-7 sm:h-9 w-auto max-w-[120px] sm:max-w-[160px] object-contain opacity-50 brightness-0 group-hover:opacity-100 transition-all duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;
