import React, { useEffect, useState } from 'react';
const faqs = [
  {
    q: "Do I need to connect my LinkedIn account to enrich leads?",
    a: "No. You only need to connect your LinkedIn account if you want to use Creamstack for LinkedIn outreach automation. Lead enrichment works independently, so you can find and enrich prospects without connecting LinkedIn."
  },
  {
    q: "Does outreach use my enrichment credits?",
    a: "No. Credits are charged only for lead enrichment. Your outreach activity does not consume enrichment credits."
  },
  {
    q: "Do my unused credits carry forward?",
    a: "Unused subscription credits expire with the subscription cycle. Additional credits purchased separately have their own 30-day validity period."
  },
  {
    q: "What happens after the 5-day trial?",
    a: "You get a 3-day grace period after the trial to decide whether you'd like to continue with the full subscription."
  },
  {
    q: "Can I use my own outreach messages?",
    a: "Yes. You can create and customize your own templates, use variables such as name and company, or use Creamstack's AI assistance to help write your messages."
  },
  {
    q: "Can I customize the outreach sequence?",
    a: "Yes. You can add, remove, rearrange, and customize the steps in your campaign sequence."
  },
  {
    q: "What if I run out of credits?",
    a: "No problem. You can purchase additional credits directly inside Creamstack and continue enriching your leads without changing your subscription."
  },
  {
    q: "How are enrichment credits charged?",
    a: (
      <>
        <p className="mb-2">Credits are used based on the type of information you want to enrich:</p>
        <ul className="list-disc pl-5 mb-2 space-y-1">
          <li>1 credit — Find and verify an email address</li>
          <li>1 credit — Enrich the person's and company's profile</li>
          <li>1 credit — Analyze the prospect and generate a personalized outreach suggestion</li>
          <li>4 credits — Enrich a phone number</li>
        </ul>
        <p>In most cases, a complete profile costs 3 credits. If an email address cannot be found, you’ll only be charged 2 credits for the profile enrichment.</p>
      </>
    )
  }
];

const DemoPage = () => {
  const [openFaq, setOpenFaq] = useState(null);
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
          Watch how one tool simplifies your entire <span className="text-blue-600">LinkedIn and email outreach.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg text-slate-500 font-medium text-center max-w-2xl mb-12 sm:mb-16 leading-relaxed">
          Save time and money by replacing multiple tools with a single platform so that you can focus on closing deals instead of repetitive tasks.
        </p>

        {/* Video Player Container */}
        <div className="w-full max-w-[960px] aspect-video relative bg-slate-900 rounded-2xl overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-200">
          <iframe 
            className="absolute inset-0 w-full h-full"
            src="https://player.vimeo.com/video/YOUR_VIMEO_ID?title=0&byline=0&portrait=0&dnt=1" 
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl mt-24 sm:mt-32">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-500 font-medium text-base">Everything you need to know about the product and billing.</p>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div 
                  key={index}
                  className={`border transition-all duration-200 rounded-2xl overflow-hidden ${
                    isOpen ? 'border-blue-200 bg-white shadow-md' : 'border-slate-200 bg-white/50 hover:bg-white hover:border-slate-300'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className={`font-bold text-lg pr-4 ${isOpen ? 'text-blue-600' : 'text-slate-900'}`}>
                      {faq.q}
                    </span>
                    <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'bg-blue-50 text-blue-600 rotate-180' : 'bg-slate-100 text-slate-500'
                    }`}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </span>
                  </button>
                  <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 pb-0 opacity-0'
                    }`}
                  >
                    <div className="text-slate-600 text-[0.95rem] leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

export default DemoPage;
