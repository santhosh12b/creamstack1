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
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current && window.innerWidth <= 768) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        
        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        } else {
          scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
        }
      }
    }, 15000);

    return () => clearInterval(interval);
  }, []);

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
    <section id="product" className="py-20 bg-bg-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">COMPLETE OUTREACH WORKFLOW</p>
          <h2 className="text-4xl font-bold text-secondary mb-4">Everything you need, in the right order.</h2>
        </div>

        <div className="relative">
          {/* Dotted Line & Arrowhead (Desktop Only) */}
          <div className="hidden lg:block absolute top-[64px] left-[5%] right-[5%] h-[2px] z-0" style={{ backgroundImage: 'linear-gradient(to right, #cbd5e1 50%, rgba(255, 255, 255, 0) 0%)', backgroundPosition: 'bottom', backgroundSize: '10px 2px', backgroundRepeat: 'repeat-x' }}></div>
          <div className="hidden lg:block absolute top-[59px] right-[5%] w-[12px] h-[12px] border-t-2 border-r-2 border-slate-300 rotate-45 z-0"></div>

          <div 
            className={`flex flex-nowrap lg:grid lg:grid-cols-5 items-stretch justify-start gap-4 lg:gap-5 relative overflow-x-auto lg:overflow-visible pb-8 lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${isDragging ? 'scroll-auto snap-none cursor-grabbing [&>div]:pointer-events-none [&>div]:select-none' : 'scroll-smooth snap-x snap-mandatory cursor-grab lg:cursor-auto'}`} 
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            {steps.map((step) => (
              <div 
                key={step.id} 
                className="flex-1 min-w-[85vw] md:min-w-[240px] lg:min-w-0 w-full h-full min-h-[280px] flex flex-col items-center text-center p-7 bg-white border border-slate-100 rounded-3xl relative z-10 transition-all duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-[0_25px_30px_-12px_rgba(0,0,0,0.08),0_18px_16px_-10px_rgba(0,0,0,0.04)] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02),0_2px_4px_-1px_rgba(0,0,0,0.02)] snap-center justify-start"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shrink-0 shadow-2xs" 
                  style={{ backgroundColor: step.color, color: step.iconColor }}
                >
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-secondary mb-2.5">{step.title}</h3>
                <p className="text-xs sm:text-sm text-text-light leading-relaxed m-0 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
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
