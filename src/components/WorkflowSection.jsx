import React, { useRef, useEffect, useState } from 'react';

const steps = [
  {
    id: 1,
    title: '1. Find Prospects',
    desc: 'Find and enrich your ideal prospects using 20+ data providers and AI signals.',
    icon: <SearchIcon />,
    color: '#e0e7ff', // light indigo
    iconColor: '#4f46e5'
  },
  {
    id: 2,
    title: '2. Personalize',
    desc: 'Generate hyper-personalized messages using AI that actually get replies.',
    icon: <PenIcon />,
    color: '#dcfce7', // light green
    iconColor: '#16a34a'
  },
  {
    id: 3,
    title: '3. Automate',
    desc: 'Launch multi-channel campaigns on LinkedIn, Email & more. On autopilot.',
    icon: <SendIcon />,
    color: '#ffedd5', // light orange
    iconColor: '#ea580c'
  },
  {
    id: 4,
    title: '4. Reply from inbox',
    desc: 'Manage all conversations in one unified AI inbox. Reply or close.',
    icon: <MessageIcon />,
    color: '#dbeafe', // light blue
    iconColor: '#2563eb'
  },
  {
    id: 5,
    title: '5. Analyze Leads',
    desc: 'Optimize, learn, and scale. Track what works & double down.',
    icon: <ChartIcon />,
    color: '#fce7f3', // light pink
    iconColor: '#db2777'
  }
];

const WorkflowSection = () => {
  const scrollRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const scrollToStep = (idx) => {
    setActiveStep(idx);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
      scrollRef.current.scrollTo({
        left: idx * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current && window.innerWidth < 1024) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
      const currentIdx = Math.round(scrollRef.current.scrollLeft / cardWidth);
      if (currentIdx >= 0 && currentIdx < steps.length && currentIdx !== activeStep) {
        setActiveStep(currentIdx);
      }
    }
  };

  const handleMouseDown = (e) => {
    if (window.innerWidth > 1024) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section id="product" className="py-12 sm:py-16 md:py-20 bg-bg-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-primary mb-2 sm:mb-4">
            COMPLETE OUTREACH WORKFLOW
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-secondary mb-2 sm:mb-4">
            Everything you need, in the right order.
          </h2>
          <p className="text-xs sm:text-sm text-text-light max-w-xl mx-auto m-0 font-medium">
            From discovering unlisted prospects to automated follow-ups and AI-powered inbox closures.
          </p>
        </div>

        {/* Mobile Step Counter & Indicator Pills (<lg) */}
        <div className="lg:hidden flex items-center justify-between mb-4 px-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400">
              Workflow Step:
            </span>
            <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
              {activeStep + 1} of {steps.length}
            </span>
          </div>

          <div className="flex items-center gap-1">
            {steps.map((s, idx) => (
              <button
                key={s.id}
                onClick={() => scrollToStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeStep === idx
                    ? 'w-6 bg-primary'
                    : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="relative">
          {/* Dotted Line & Arrowhead (Desktop Only) */}
          <div className="hidden lg:block absolute top-[64px] left-[5%] right-[5%] h-[2px] z-0" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 50%, rgba(255, 255, 255, 0) 0%)', backgroundPosition: 'bottom', backgroundSize: '10px 2px', backgroundRepeat: 'repeat-x' }}></div>
          <div className="hidden lg:block absolute top-[59px] right-[5%] w-[12px] h-[12px] border-t-2 border-r-2 border-slate-300 rotate-45 z-0"></div>

          <div 
            className={`flex flex-nowrap lg:grid lg:grid-cols-5 items-stretch justify-start gap-3 sm:gap-4 lg:gap-5 relative overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? 'scroll-auto snap-none cursor-grabbing [&>div]:pointer-events-none [&>div]:select-none' : 'scroll-smooth snap-x snap-mandatory cursor-grab lg:cursor-auto'}`} 
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {steps.map((step, idx) => (
              <div 
                key={step.id} 
                className={`flex-1 min-w-[82vw] sm:min-w-[280px] lg:min-w-0 w-full h-full min-h-[260px] sm:min-h-[280px] flex flex-col items-center text-center p-6 sm:p-7 bg-white border rounded-3xl relative z-10 transition-all duration-300 snap-center justify-start ${
                  activeStep === idx ? 'border-primary/40 shadow-lg shadow-primary/5' : 'border-slate-100 shadow-sm'
                }`}
              >
                <div className="w-full flex items-center justify-between lg:justify-center mb-4 sm:mb-6">
                  <span className="lg:hidden text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                    Step {idx + 1}
                  </span>
                  <div 
                    className="w-13 h-13 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-2xs" 
                    style={{ backgroundColor: step.color, color: step.iconColor }}
                  >
                    {step.icon}
                  </div>
                  <span className="lg:hidden w-10"></span>
                </div>
                <h3 className="text-base font-bold text-secondary mb-2">{step.title}</h3>
                <p className="text-xs sm:text-sm text-text-light leading-relaxed m-0 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Swipe Navigation Controls (<lg) */}
        <div className="lg:hidden flex items-center justify-center gap-3 mt-3">
          <button
            onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
            disabled={activeStep === 0}
            className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
              activeStep === 0 ? 'opacity-40 border-slate-200 text-slate-400 cursor-not-allowed' : 'bg-white border-slate-200 text-secondary hover:bg-slate-50'
            }`}
          >
            <span>← Previous</span>
          </button>
          <button
            onClick={() => scrollToStep(Math.min(steps.length - 1, activeStep + 1))}
            disabled={activeStep === steps.length - 1}
            className={`px-3.5 py-1.5 rounded-xl border text-xs font-bold transition-all flex items-center gap-1 ${
              activeStep === steps.length - 1 ? 'opacity-40 border-slate-200 text-slate-400 cursor-not-allowed' : 'bg-primary text-white border-primary shadow-xs'
            }`}
          >
            <span>Next Step →</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;

function SearchIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>; }
function PenIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>; }
function SendIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>; }
function MessageIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>; }
function ChartIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>; }
