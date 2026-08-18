import React from 'react';

const tools = [
  { name: "Apollo.io", desc: "Find Prospects", cost: "$49/mo", icon: <img src="/Apollo.io.png" alt="Apollo.io" /> },
  { name: "Clay", desc: "Enrich Data", cost: "$149/mo", icon: <img src="/Clay.png" alt="Clay" style={{ transform: 'scale(2)' }} /> },
  { name: "Instantly", desc: "Email Outreach", cost: "$37/mo", icon: <img src="/Instantly.png" alt="Instantly" /> },
  { name: "HeyReach", desc: "LinkedIn Outreach", cost: "$49/mo", icon: <img src="/HeyReach.png" alt="HeyReach" /> },
  { name: "HubSpot", desc: "CRM", cost: "$15/mo+", icon: <img src="/HubSpot.png" alt="HubSpot" /> },
  { name: "And more...", desc: "Forms, Warmup, Analytics...", cost: "$$$", icon: <MoreIcon /> },
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-bg-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">THE PROBLEM</p>
          <h2 className="text-4xl font-bold text-secondary mb-4">Too many tools. Too much switching. Too much <span className="text-primary">wasted time.</span></h2>
          <p className="text-lg text-text-main">Outreach pros juggle multiple tools just to run one campaign.</p>
        </div>

        <div className="flex justify-center mt-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1000px]">
            {tools.map((tool, idx) => (
              <div key={idx} className="border border-slate-100 rounded-2xl p-6 lg:p-10 text-center bg-slate-50 flex flex-col items-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.05),0_10px_10px_-5px_rgba(0,0,0,0.02)]">
                <div className="w-14 h-14 rounded-2xl bg-white mb-5 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] flex items-center justify-center [&>img]:w-8 [&>img]:h-8 [&>img]:object-contain [&>svg]:w-8 [&>svg]:h-8 [&>svg]:object-contain">
                  {tool.icon}
                </div>
                <h5 className="text-lg font-bold text-secondary mb-2">{tool.name}</h5>
                <p className="text-sm text-slate-400 mb-4">{tool.desc}</p>
                <p className="text-sm font-bold text-slate-600 m-0">{tool.cost}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-6 md:gap-12 mt-12 px-8">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-100 text-red-500"><DollarIcon /></div>
            <div className="text-left">
              <h4 className="text-xl font-bold m-0 mb-1 text-secondary">$300+/month</h4>
              <p className="text-sm text-text-light m-0">In Tools & Subscriptions</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-orange-100 text-orange-500"><ClockIcon /></div>
            <div className="text-left">
              <h4 className="text-xl font-bold m-0 mb-1 text-secondary">10+ Hours/Week</h4>
              <p className="text-sm text-text-light m-0">Spent Switching</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full flex items-center justify-center bg-red-100 text-red-500"><CrossIcon /></div>
            <div className="text-left">
              <h4 className="text-xl font-bold m-0 mb-1 text-secondary">Lost Opportunities</h4>
              <p className="text-sm text-text-light m-0">From Disconnected Data</p>
            </div>
          </div>
        </div>

        <div className="bg-bg-dark rounded-2xl p-8 mt-16 flex flex-col lg:flex-row items-center justify-between gap-8 text-white text-center lg:text-left">
          <div className="flex flex-col lg:flex-row items-center gap-6">
            <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
            </div>
            <div>
              <h3 className="text-white text-2xl font-bold mb-2">There has to be a better way.</h3>
              <p className="text-white/70 text-[0.95rem] m-0">Creamstack brings everything together in one place so you can focus on what matters - building relationships and closing deals.</p>
            </div>
          </div>
          <button className="btn btn-primary whitespace-nowrap">See how it Works &rarr;</button>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;

function DollarIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>; }
function ClockIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>; }
function CrossIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>; }

/* Tool Logos */
function MoreIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>; }
