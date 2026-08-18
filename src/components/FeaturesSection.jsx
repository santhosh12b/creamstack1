import React from 'react';

const features = [
  {
    title: '6 Ways to Find Prospects',
    desc: 'Direct Search, Domain Enrichment, Data, LinkedIn, CSV Import, and more.',
    icon: <UsersIcon />
  },
  {
    title: 'LinkedIn + Email Automation',
    desc: 'Run multi-step campaigns on LinkedIn and Email with smart delays, follow-ups and safety.',
    icon: <PaperPlaneIcon />
  },
  {
    title: 'AI Personalization',
    desc: 'Generate personalized icebreakers and full messages that feel 1:1, not templated.',
    icon: <RobotIcon />
  },
  {
    title: 'Unified Inbox',
    desc: 'Reply to all your conversations, across LinkedIn & Email, in one smart inbox.',
    icon: <ChatIcon />
  },
  {
    title: 'Lead Management',
    desc: 'Organize your leads, track status, score intent, and automate your next steps.',
    icon: <FolderIcon />
  },
  {
    title: 'Analytics & Reports',
    desc: 'Track opens, replies, positive replies, campaign performance, and what\'s working.',
    icon: <BarChartIcon />
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-bg-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">POWERFUL FEATURES</p>
          <h2 className="text-4xl font-bold text-secondary mb-4">Built for serious outreach.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-[1000px] mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="flex gap-6">
              <div className="w-14 h-14 rounded-xl bg-white text-primary flex items-center justify-center shrink-0 shadow-sm border border-border">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold text-secondary mb-2">{feature.title}</h3>
                <p className="text-[0.95rem] text-text-light leading-relaxed m-0">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

function UsersIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>; }
function PaperPlaneIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>; }
function RobotIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>; }
function ChatIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>; }
function FolderIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>; }
function BarChartIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>; }
