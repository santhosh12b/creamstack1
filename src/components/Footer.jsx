import React from 'react';

const Footer = ({ currentPage = 'home', onNavigate }) => {
  const handleNavClick = (e, page, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else {
      window.location.hash = sectionId || page;
    }
  };

  return (
    <footer className="pt-16 pb-8 bg-bg-light border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-8">
          <div className="flex flex-col gap-4 md:col-span-2 lg:col-span-1">
            <div 
              onClick={(e) => handleNavClick(e, 'home', 'home')}
              className="flex items-center gap-2 font-bold text-xl text-secondary cursor-pointer"
            >
              <img src="/12.png" alt="CreamStack Logo" className="h-6 object-contain" />
            </div>
            <p className="text-sm text-text-main m-0 max-w-[250px]">
              All-in-one outreach platform for agencies, founders & growth teams.
            </p>
            <p className="text-xs text-text-light mt-auto">&copy; 2026 Creamstack. All rights reserved.</p>
          </div>

          <div>
            <h5 className="text-[0.95rem] m-0 mb-4 text-secondary font-bold">Product</h5>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><a href="#lead-enrichment" onClick={(e) => handleNavClick(e, 'lead-enrichment')} className="text-sm text-text-light hover:text-primary transition-colors">Lead Enrichment</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-sm text-text-light hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="https://demo.creamstack.io/" target="_blank" rel="noopener noreferrer" className="text-sm text-text-light hover:text-primary transition-colors">Demo</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.95rem] m-0 mb-4 text-secondary font-bold">Resources</h5>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-text-light hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-text-light hover:text-primary transition-colors">Guides</a></li>
              <li><a href="#" className="text-sm text-text-light hover:text-primary transition-colors">Templates</a></li>
              <li><a href="#" className="text-sm text-text-light hover:text-primary transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.95rem] m-0 mb-4 text-secondary font-bold">Company</h5>
            <ul className="flex flex-col gap-3 list-none p-0 m-0">
              <li><a href="#" className="text-sm text-text-light hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-text-light hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-text-light hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-text-light hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h5 className="text-[0.95rem] m-0 mb-4 text-secondary font-bold">Stay in the loop</h5>
            <p className="text-sm text-text-light mb-4">Get product updates, launches & more.</p>
            <form className="flex gap-2 mb-6" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 border border-border rounded-lg text-sm outline-none focus:border-primary transition-colors" />
              <button type="submit" className="bg-primary hover:bg-primary-hover text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors shrink-0">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </form>
            <div className="flex gap-4">
              <a href="#" className="text-text-light hover:text-primary transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a href="#" className="text-text-light hover:text-primary transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg></a>
              <a href="#" className="text-text-light hover:text-primary transition-colors"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

