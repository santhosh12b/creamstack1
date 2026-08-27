import React, { useState } from 'react';

const products = [
  {
    id: 'lead-enrichment',
    name: 'Lead Enrichment',
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
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(true);
  const [mobileCompanyOpen, setMobileCompanyOpen] = useState(false);

  const handleNavClick = (e, page, sectionId) => {
    e.preventDefault();
    setProductOpen(false);
    setCompanyOpen(false);
    setMobileMenuOpen(false);
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else {
      window.location.hash = sectionId || page;
    }
  };

  return (
    <header className="sticky top-0 z-[100] w-full py-3 sm:py-3.5 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-2xs transition-all duration-200">
      <div className="container flex items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <div 
          onClick={(e) => handleNavClick(e, 'home', 'home')} 
          className="flex items-center gap-2 font-bold text-secondary cursor-pointer select-none"
        >
          <img 
            src="/12.png" 
            alt="CreamStack Logo" 
            className="h-6 sm:h-7 md:h-8 w-auto object-contain" 
          />
        </div>

        {/* Desktop Navigation Links */}
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

          {/* Product Dropdown (Desktop) */}
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
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-96 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200 p-3">
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
                    href="#demo"
                    onClick={(e) => handleNavClick(e, 'demo')}
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
              </div>
            )}
          </div>

          {/* Company Dropdown (Desktop) */}
          <div 
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button 
              onClick={() => setCompanyOpen(!companyOpen)}
              className={`flex items-center gap-1.5 text-[0.95rem] font-medium transition-colors py-2 outline-none cursor-pointer ${
                companyOpen || currentPage === 'about' || currentPage === 'contact' ? 'text-primary font-bold' : 'text-text-main hover:text-primary'
              }`}
            >
              <span>Company</span>
              <svg 
                width="14" 
                height="14" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round"
                className={`transition-transform duration-200 ${companyOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>

            {/* Dropdown Menu */}
            {companyOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-80 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/15 border border-slate-200 p-3">
                  <div className="flex items-center justify-between px-3 py-1.5 mb-1 border-b border-slate-100 pb-2">
                  <div className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    <span>Company & Support</span>
                  </div>
                  <span className="text-[10px] font-bold text-primary">CreamStack</span>
                </div>

                <div className="flex flex-col gap-1">
                  {/* About Item */}
                  <div
                    onClick={(e) => handleNavClick(e, 'about')}
                    className={`p-2.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer group border ${
                      currentPage === 'about' 
                        ? 'bg-blue-50/70 border-blue-200/90 shadow-2xs' 
                        : 'border-transparent hover:bg-slate-50 hover:border-slate-200/80'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs ${
                      currentPage === 'about' 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-blue-50/80 text-blue-600 border-blue-100 group-hover:bg-blue-600 group-hover:text-white'
                    }`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <path d="M9 22v-4h6v4"></path>
                        <path d="M8 6h.01"></path>
                        <path d="M16 6h.01"></path>
                        <path d="M12 6h.01"></path>
                        <path d="M12 10h.01"></path>
                        <path d="M12 14h.01"></path>
                        <path d="M16 10h.01"></path>
                        <path d="M16 14h.01"></path>
                        <path d="M8 10h.01"></path>
                        <path d="M8 14h.01"></path>
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`font-bold text-xs transition-colors ${
                          currentPage === 'about' ? 'text-primary' : 'text-slate-800 group-hover:text-primary'
                        }`}>
                          About
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 m-0 mt-0.5 leading-snug font-normal line-clamp-2">
                        Our story, mission & outreach agency background
                      </p>
                    </div>
                  </div>

                  {/* Contact Item */}
                  <div
                    onClick={(e) => handleNavClick(e, 'contact')}
                    className={`p-2.5 rounded-xl flex items-start gap-3 transition-all cursor-pointer group border ${
                      currentPage === 'contact' 
                        ? 'bg-blue-50/70 border-blue-200/90 shadow-2xs' 
                        : 'border-transparent hover:bg-slate-50 hover:border-slate-200/80'
                    }`}
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-200 shadow-2xs ${
                      currentPage === 'contact' 
                        ? 'bg-blue-600 text-white border-blue-600' 
                        : 'bg-emerald-50/80 text-emerald-600 border-emerald-100 group-hover:bg-emerald-600 group-hover:text-white'
                    }`}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className={`font-bold text-xs transition-colors ${
                          currentPage === 'contact' ? 'text-primary' : 'text-slate-800 group-hover:text-primary'
                        }`}>
                          Contact
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 m-0 mt-0.5 leading-snug font-normal line-clamp-2">
                        Get in touch with support & partnership opportunities
                      </p>
                    </div>
                  </div>

                </div>
                </div>
              </div>
            )}
          </div>
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
            href="#demo" 
            onClick={(e) => handleNavClick(e, 'demo')}
            className={`flex items-center gap-1 text-[0.95rem] font-medium transition-colors ${
              currentPage === 'demo' ? 'text-primary font-bold' : 'text-text-main hover:text-primary'
            }`}
          >
            Demo
          </a>
        </nav>

        {/* Right Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a 
            href="https://app.creamstack.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent text-secondary hover:text-primary border border-gray-300 px-5 py-2 rounded-lg hover:bg-gray-50 transition-colors font-semibold text-sm inline-block"
          >
            Log In
          </a>
          <a 
            href="https://app.creamstack.io/signup"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary hover:bg-primary-hover text-white px-5 py-2 rounded-lg transition-colors font-semibold text-sm shadow-sm inline-block"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="w-9 h-9 rounded-xl border border-slate-200 bg-white flex items-center justify-center text-secondary hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
          >
            {mobileMenuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 px-4 py-5 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-4">
            
            {/* Top Navigation Links */}
            <div className="flex flex-col gap-1 border-b border-slate-100 pb-3">
              <a 
                href="#home"
                onClick={(e) => handleNavClick(e, 'home', 'home')}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors ${
                  currentPage === 'home' ? 'bg-primary/10 text-primary' : 'text-secondary hover:bg-slate-50'
                }`}
              >
                Home
              </a>

              {/* Mobile Products Accordion */}
              <div>
                <button
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="w-full px-3 py-2 rounded-xl text-sm font-bold text-secondary flex items-center justify-between hover:bg-slate-50 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span>Products</span>
                    <span className="text-[10px] bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full font-extrabold">4 Core</span>
                  </span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {mobileProductsOpen && (
                  <div className="pl-2 pr-1 pt-1.5 pb-2 flex flex-col gap-1.5">
                    {products.map((item) => (
                      <div
                        key={item.id}
                        onClick={(e) => handleNavClick(e, item.id)}
                        className={`p-2.5 rounded-xl flex items-start gap-3 border transition-all cursor-pointer ${
                          currentPage === item.id 
                            ? 'bg-blue-50/80 border-blue-200 text-primary' 
                            : 'bg-slate-50/60 border-slate-100 text-secondary hover:bg-slate-100'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${item.iconBg}`}>
                          {item.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xs">{item.name}</span>
                            {item.badge && (
                              <span className={`text-[9px] font-extrabold px-1.5 py-0.2 rounded-full border ${item.badgeStyle}`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[10px] text-slate-500 m-0 mt-0.5 line-clamp-1">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Company Accordion */}
              <div>
                <button
                  onClick={() => setMobileCompanyOpen(!mobileCompanyOpen)}
                  className="w-full px-3 py-2 rounded-xl text-sm font-bold text-secondary flex items-center justify-between hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <span>Company</span>
                  </span>
                  <svg 
                    width="14" 
                    height="14" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className={`transition-transform duration-200 ${mobileCompanyOpen ? 'rotate-180 text-primary' : 'text-slate-400'}`}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {mobileCompanyOpen && (
                  <div className="pl-2 pr-1 pt-1.5 pb-2 flex flex-col gap-1.5">
                    <div
                      onClick={(e) => handleNavClick(e, 'about')}
                      className={`p-2.5 rounded-xl flex items-start gap-3 border transition-all cursor-pointer ${
                        currentPage === 'about' 
                          ? 'bg-blue-50/80 border-blue-200 text-primary font-bold shadow-2xs' 
                          : 'bg-slate-50/60 border-slate-100 text-secondary hover:bg-slate-100'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg border border-blue-100 bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                          <path d="M9 22v-4h6v4"></path>
                          <path d="M8 6h.01"></path>
                          <path d="M16 6h.01"></path>
                          <path d="M12 6h.01"></path>
                          <path d="M12 10h.01"></path>
                          <path d="M12 14h.01"></path>
                          <path d="M16 10h.01"></path>
                          <path d="M16 14h.01"></path>
                          <path d="M8 10h.01"></path>
                          <path d="M8 14h.01"></path>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-xs">About</span>
                        <p className="text-[10px] text-slate-500 m-0 mt-0.5 line-clamp-1">Our story, mission & agency background</p>
                      </div>
                    </div>

                    <div
                      onClick={(e) => handleNavClick(e, 'contact')}
                      className={`p-2.5 rounded-xl flex items-start gap-3 border transition-all cursor-pointer ${
                        currentPage === 'contact' 
                          ? 'bg-blue-50/80 border-blue-200 text-primary font-bold shadow-2xs' 
                          : 'bg-slate-50/60 border-slate-100 text-secondary hover:bg-slate-100'
                      }`}
                    >
                      <div className="w-8 h-8 rounded-lg border border-emerald-100 bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="font-bold text-xs">Contact</span>
                        <p className="text-[10px] text-slate-500 m-0 mt-0.5 line-clamp-1">Get in touch with support & sales</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <a 
                href="#pricing"
                onClick={(e) => handleNavClick(e, 'pricing')}
                className={`px-3 py-2 rounded-xl text-sm font-bold transition-colors ${
                  currentPage === 'pricing' ? 'bg-primary/10 text-primary' : 'text-secondary hover:bg-slate-50'
                }`}
              >
                Pricing
              </a>

              <a
                href="#demo"
                onClick={(e) => handleNavClick(e, 'demo')}
                className="px-3 py-2 rounded-xl text-sm font-bold text-secondary hover:bg-slate-50 transition-colors flex items-center justify-between"
              >
                <span>Interactive Demo</span>
                <span className="text-xs text-primary font-bold">Live ➔</span>
              </a>
            </div>

            {/* Bottom Mobile Action Buttons: Sign Up & Log In */}
            <div className="flex flex-col gap-2 pt-1">
              <a 
                href="https://app.creamstack.io/signup"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-2xl bg-primary hover:bg-primary-hover text-white font-extrabold text-sm shadow-md shadow-primary/20 transition-all text-center active:scale-98 inline-block"
              >
                Sign Up
              </a>
              <a 
                href="https://app.creamstack.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-2xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-bold text-xs transition-all text-center inline-block"
              >
                Sign In to Platform
              </a>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


