import React, { useState } from 'react';

const products = [
  {
    id: 'lead-enrichment',
    name: 'Lead Enrichment',
    badge: 'Popular',
    desc: 'Find & verify prospects from LinkedIn, websites & buying signals.',
    badgeStyle: 'bg-blue-50 text-blue-700 border-blue-200/80',
    iconBg: 'bg-blue-50/80 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
      </svg>
    ),
    isActive: true
  },
  {
    id: 'omnichannel-outreach',
    name: 'Omnichannel Outreach',
    badge: 'New',
    desc: 'Reach prospects across LinkedIn & Email from one visual workflow.',
    badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    iconBg: 'bg-purple-50/80 text-purple-600 border-purple-100 group-hover:bg-purple-600 group-hover:text-white',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
      </svg>
    ),
    isActive: true
  },
  {
    id: 'lead-management',
    name: 'Lead Management',
    badge: 'New',
    desc: 'Manage, organize, filter, and update every lead from one unified table.',
    badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    iconBg: 'bg-indigo-50/80 text-indigo-600 border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <line x1="3" y1="9" x2="21" y2="9"></line>
        <line x1="9" y1="21" x2="9" y2="9"></line>
      </svg>
    ),
    isActive: true
  },
  {
    id: 'unified-inbox',
    name: 'Unified Inbox',
    badge: 'New',
    desc: 'Manage all prospect conversations in one smart inbox.',
    badgeStyle: 'bg-emerald-50 text-emerald-700 border-emerald-200/80',
    iconBg: 'bg-blue-50/80 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
      </svg>
    ),
    isActive: true
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
              className={`flex items-center gap-1.5 text-[0.95rem] font-medium transition-colors py-2 outline-none cursor-pointer ${
                currentPage === 'lead-enrichment' || currentPage === 'omnichannel-outreach' || currentPage === 'lead-management' || currentPage === 'unified-inbox' ? 'text-primary font-bold' : 'text-text-main hover:text-primary'
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-96 bg-white rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="flex items-center justify-between px-3 py-1.5 mb-1 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span>Core Platform</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary">4 Products</span>
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
                      className={`p-2.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer group border ${
                        currentPage === item.id 
                          ? 'bg-blue-50/70 border-blue-200/90 shadow-2xs' 
                          : 'border-transparent hover:bg-slate-50 hover:border-slate-200/80'
                      }`}
                    >
                      <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs ${item.iconBg}`}>
                        {item.icon}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <span className={`font-bold text-xs transition-colors ${
                            currentPage === item.id ? 'text-primary' : 'text-slate-800 group-hover:text-primary'
                          }`}>
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${item.badgeStyle}`}>
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-500 m-0 mt-0.5 leading-snug font-normal line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Footer link to demo */}
                <div className="mt-2 pt-2 border-t border-slate-100 px-2">
                  <a
                    href="https://demo.creamstack.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl bg-slate-50 hover:bg-blue-50/80 text-[11px] font-bold text-slate-700 hover:text-primary transition-all group"
                  >
                    <span className="flex items-center gap-1.5">
                      <span>✨</span>
                      <span>Watch Live Interactive Demo</span>
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">➔</span>
                  </a>
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


