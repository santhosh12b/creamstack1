import React from 'react';

const logos = [
  { name: 'GrowthFlow', icon: <GrowthFlowIcon />, badgeColor: 'hover:border-indigo-200 hover:shadow-indigo-500/10' },
  { name: 'PixelCraft', icon: <PixelCraftIcon />, badgeColor: 'hover:border-pink-200 hover:shadow-pink-500/10' },
  { name: 'SaaSGenie', icon: <SaaSGenieIcon />, badgeColor: 'hover:border-blue-200 hover:shadow-blue-500/10' },
  { name: 'BrandFuel', icon: <BrandFuelIcon />, badgeColor: 'hover:border-amber-200 hover:shadow-amber-500/10' },
  { name: 'LeadWinds', icon: <LeadWindsIcon />, badgeColor: 'hover:border-emerald-200 hover:shadow-emerald-500/10' },
  { name: 'Convertify', icon: <ConvertifyIcon />, badgeColor: 'hover:border-purple-200 hover:shadow-purple-500/10' },
];

const LogoCloud = () => {
  return (
    <section className="py-10 sm:py-14 border-y border-slate-100 bg-white/50 backdrop-blur-xs">
      <div className="container mx-auto px-4 sm:px-6">
        <p className="text-center text-[10px] sm:text-xs font-bold tracking-widest text-slate-400 mb-6 sm:mb-9 uppercase">
          TRUSTED BY OUTREACH PROFESSIONALS AT HIGH-GROWTH COMPANIES
        </p>
        <div className="flex flex-wrap justify-center items-center gap-2.5 sm:gap-6 md:gap-8 lg:gap-10">
          {logos.map((logo, idx) => (
            <div 
              key={idx} 
              className={`group flex items-center justify-center gap-2 sm:gap-3 px-3 py-2 min-h-[44px] sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl bg-slate-50/70 border border-slate-200/60 shadow-2xs hover:shadow-md hover:bg-white transition-all duration-300 cursor-pointer ${logo.badgeColor}`}
            >
              {logo.icon}
              <span className="text-xs sm:text-base lg:text-lg font-bold tracking-tight text-slate-700 group-hover:text-slate-950 transition-colors">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloud;

function GrowthFlowIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm rounded-lg">
      <defs>
        <linearGradient id="gf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4F46E5" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#gf-grad)" />
      <path d="M8 21L13 14.5L17.5 19L24 10.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18.5 10.5H24V16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PixelCraftIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm rounded-lg">
      <defs>
        <linearGradient id="pc-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#EC4899" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#pc-grad)" />
      <rect x="8.5" y="8.5" width="6.5" height="6.5" rx="1.5" fill="white" fillOpacity="0.95" />
      <rect x="17" y="8.5" width="6.5" height="6.5" rx="1.5" fill="white" fillOpacity="0.65" />
      <rect x="8.5" y="17" width="6.5" height="6.5" rx="1.5" fill="white" fillOpacity="0.65" />
      <rect x="17" y="17" width="6.5" height="6.5" rx="1.5" fill="white" fillOpacity="0.95" />
    </svg>
  );
}

function SaaSGenieIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm rounded-lg">
      <defs>
        <linearGradient id="sg-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#sg-grad)" />
      <path d="M16 6C16 11.2 11.2 16 6 16C11.2 16 16 20.8 16 26C16 20.8 20.8 16 26 16C20.8 16 16 11.2 16 6Z" fill="white" />
      <circle cx="23.5" cy="8.5" r="1.75" fill="white" fillOpacity="0.85" />
    </svg>
  );
}

function BrandFuelIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm rounded-lg">
      <defs>
        <linearGradient id="bf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EF4444" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#bf-grad)" />
      <path d="M16 7C16 7 21 11.8 21 16.5C21 19.5 18.8 22 16 22C13.2 22 11 19.5 11 16.5C11 12.8 14 9.5 16 7Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 14C16 14 18 16.5 18 18C18 19.1 17.1 20 16 20C14.9 20 14 19.1 14 18C14 16.5 16 14 16 14Z" fill="white" />
    </svg>
  );
}

function LeadWindsIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm rounded-lg">
      <defs>
        <linearGradient id="lw-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#059669" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#lw-grad)" />
      <path d="M8 11.5H19C20.3807 11.5 21.5 10.3807 21.5 9C21.5 7.61929 20.3807 6.5 19 6.5C17.6193 6.5 16.5 7.61929 16.5 9" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M7 16H22.5C23.8807 16 25 17.1193 25 18.5C25 19.8807 23.8807 21 22.5 21C21.1193 21 20 19.8807 20 18.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M9 20.5H15C16.1046 20.5 17 21.3954 17 22.5C17 23.6046 16.1046 24.5 15 24.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ConvertifyIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" className="shrink-0 transition-transform duration-300 group-hover:scale-105 shadow-sm rounded-lg">
      <defs>
        <linearGradient id="cv-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#D946EF" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill="url(#cv-grad)" />
      <path d="M9.5 14C10 10.5 13 8 17 8C20.5 8 23.5 10.5 24.2 14" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <polyline points="6.5 13.5 9.5 14 10 10.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22.5 18C22 21.5 19 24 15 24C11.5 24 8.5 21.5 7.8 18" stroke="white" strokeWidth="2.2" strokeLinecap="round" />
      <polyline points="25.5 18.5 22.5 18 22 21.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

