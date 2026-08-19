import React, { useState } from 'react';

const products = [
  {
    id: 'lead-enrichment',
    name: 'Lead Enrichment',
    badge: 'Popular',
    desc: 'Find & verify prospects from LinkedIn, websites & signals.',
    icon: '🔍',
    isActive: true
  },
  {
    id: 'ai-personalization',
    name: 'AI Personalization',
    badge: 'Coming Soon',
    desc: 'Generate 1:1 icebreakers & personalized message copies.',
    icon: '⚡',
    isActive: false
  },
  {
    id: 'outreach-automation',
    name: 'Multi-Channel Outreach',
    badge: 'Coming Soon',
    desc: 'Automate LinkedIn & cold email sequences on autopilot.',
    icon: '📬',
    isActive: false
  },
  {
    id: 'unified-inbox',
    name: 'Unified Inbox',
    badge: 'Coming Soon',
    desc: 'Manage all prospect conversations in one smart inbox.',
    icon: '📥',
    isActive: false
  }
];

const Navbar = ({ currentPage = 'home', onNavigate }) => {
  const [productOpen, setProductOpen] = useState(false);

  const handleNavClick = (e, page, sectionId) => {
    e.preventDefault();
    setProductOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else {
      window.location.hash = sectionId || page;
    }
  };

  return (
    <header className="py-4 bg-bg-light/95 backdrop-blur-md border-b border-border sticky top-0 z-[100]">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={(e) => handleNavClick(e, 'home', 'home')} 
          className="flex items-center gap-2 font-bold text-xl text-secondary cursor-pointer"
        >
          <img src="/12.png" alt="CreamStack Logo" style={{ height: '32px', objectFit: 'contain' }} />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, 'home', 'home')}
            className={`flex items-center gap-1 text-[0.95rem] font-medium transition-colors ${
              currentPage === 'home' ? 'text-primary font-bold' : 'text-text-main hover:text-primary'
            }`}
          >
            Home
          </a>

          {/* Product Dropdown (Downscroll) */}
          <div 
            className="relative"
            onMouseEnter={() => setProductOpen(true)}
            onMouseLeave={() => setProductOpen(false)}
          >
            <button 
              onClick={() => setProductOpen(!productOpen)}
              className={`flex items-center gap-1 text-[0.95rem] font-medium transition-colors py-2 ${
                currentPage === 'lead-enrichment' ? 'text-primary font-bold' : 'text-text-main hover:text-primary'
              }`}
            >
              <span>Product</span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${productOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {productOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-80 bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5 mb-1">
                  Products & Features
                </div>
                <div className="flex flex-col gap-1">
                  {products.map((item) => (
                    <div
                      key={item.id}
                      onClick={(e) => {
                        if (item.isActive) {
                          handleNavClick(e, item.id);
                        }
                      }}
                      className={`p-3 rounded-xl flex items-start gap-3 transition-all ${
                        item.isActive
                          ? 'hover:bg-primary/5 cursor-pointer group border border-transparent hover:border-primary/20'
                          : 'opacity-70 cursor-not-allowed bg-slate-50/50'
                      } ${currentPage === item.id ? 'bg-primary/10 border-primary/30' : ''}`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-slate-100 group-hover:bg-primary/10 flex items-center justify-center text-base shrink-0 transition-colors">
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs text-secondary group-hover:text-primary transition-colors">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className={`text-[9px] font-extrabold px-1.5 py-0.5 rounded-full ${
                              item.isActive 
                                ? 'bg-emerald-100 text-emerald-800' 
                                : 'bg-slate-100 text-slate-500'
                            }`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-text-light m-0 mt-0.5 leading-snug line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <a 
            href="#company" 
            onClick={(e) => handleNavClick(e, 'home', 'company')}
            className="flex items-center gap-1 text-[0.95rem] font-medium text-text-main hover:text-primary transition-colors"
          >
            Company
          </a>
          <a 
            href="#pricing" 
            onClick={(e) => handleNavClick(e, 'pricing')}
            className={`flex items-center gap-1 text-[0.95rem] font-medium transition-colors ${
              currentPage === 'pricing' ? 'text-primary font-bold' : 'text-text-main hover:text-primary'
            }`}
          >
            Pricing
          </a>
          <a 
            href="https://demo.creamstack.io/" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-[0.95rem] font-medium text-text-main hover:text-primary transition-colors"
          >
            Demo
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="bg-transparent text-secondary border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-sm">Login</button>
          <button 
            onClick={(e) => handleNavClick(e, 'pricing')}
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg transition-colors font-semibold text-sm shadow-sm"
          >
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;


