import React from 'react';

const benefits = [
  {
    title: 'All-in-one platform',
    desc: 'No more juggling between 10 different tools.'
  },
  {
    title: 'Saves time & focus',
    desc: 'Do more in minutes, not hours.'
  },
  {
    title: 'Easy to use',
    desc: 'Simple UI. Powerful under the hood.'
  },
  {
    title: 'Built for results',
    desc: 'Designed to help you get more replies and meetings.'
  }
];

const BenefitsSection = () => {
  return (
    <section id="company" className="py-16 border-b border-border">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">WHY CREAMSTACK?</p>
          <h2 className="text-4xl font-bold text-secondary mb-4">One platform. Zero chaos.</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="flex items-start gap-4">
              <div className="text-primary shrink-0 mt-1">
                <CheckCircleIcon />
              </div>
              <div>
                <h4 className="text-base font-bold text-secondary mb-1">{benefit.title}</h4>
                <p className="text-sm text-text-light m-0">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;

function CheckCircleIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>; }
