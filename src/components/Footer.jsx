import React, { useState, useRef } from 'react';

const Footer = ({ currentPage = 'home', onNavigate }) => {
  const handleNavClick = (e, page, sectionId) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page, sectionId);
    } else {
      window.location.hash = sectionId || page;
    }
  };

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'already_subscribed'
  const isSubmittingRef = useRef(false);

  // Retrieve list of already submitted emails from localStorage
  const getSubscribedEmails = () => {
    try {
      const stored = localStorage.getItem('creamstack_subscribed_emails');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();
    if (!cleanEmail) return;

    // Prevent concurrent submission
    if (isSubmittingRef.current || status !== 'idle') return;

    // 1. Check if email was ALREADY stored previously
    const existingEmails = getSubscribedEmails();
    if (existingEmails.includes(cleanEmail)) {
      // Do NOT send another request to Google Sheets!
      setStatus('already_subscribed');
      setEmail('');
      setTimeout(() => {
        setStatus('idle');
      }, 4000);
      return;
    }

    // 2. New Unique Email: Save immediately to prevent any re-submission
    isSubmittingRef.current = true;
    setStatus('success');
    setEmail('');

    try {
      localStorage.setItem('creamstack_subscribed_emails', JSON.stringify([...existingEmails, cleanEmail]));
    } catch (err) {
      console.error("Storage error:", err);
    }

    // 3. Send single non-duplicate request to Google Sheets
    try {
      fetch("https://script.google.com/macros/s/AKfycbxag1gdlugmKq1x9F89KRvsL8juknMuViQUKfSZFA_ATSAbTI48h2hGxpgsmm8_Bsf0Ow/exec", {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          action: 'contact_form',
          type: "newsletter",
          email: cleanEmail,
          subject: "New Newsletter Subscriber"
        }),
        mode: "no-cors",
        keepalive: true,
      }).catch(err => {
        console.error("Subscription background sync error:", err);
      });

      // Reset after 4 seconds
      setTimeout(() => {
        setStatus('idle');
        isSubmittingRef.current = false;
      }, 4000);
    } catch (error) {
      console.error(error);
      setStatus('idle');
      isSubmittingRef.current = false;
    }
  };

  return (
    <footer className="pt-10 sm:pt-16 pb-8 bg-bg-light border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr_2fr] gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4 sm:col-span-2 lg:col-span-1">
            <div 
              onClick={(e) => handleNavClick(e, 'home', 'home')}
              className="flex items-center gap-2 font-bold text-xl text-secondary cursor-pointer select-none"
            >
              <img src="12.png" alt="CreamStack Logo" className="h-6 w-auto object-contain" />
            </div>
            <p className="text-sm text-text-main m-0 max-w-[250px] font-medium">
              All-in-one outreach platform for agencies, founders & growth teams.
            </p>
          </div>

          <div>
            <h5 className="text-[0.95rem] m-0 mb-3 sm:mb-4 text-secondary font-bold">Product</h5>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li><a href="#lead-enrichment" onClick={(e) => handleNavClick(e, 'lead-enrichment')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Lead Enrichment</a></li>
              <li><a href="#omnichannel-outreach" onClick={(e) => handleNavClick(e, 'omnichannel-outreach')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Omnichannel Outreach</a></li>
              <li><a href="#lead-management" onClick={(e) => handleNavClick(e, 'lead-management')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Lead Management</a></li>
              <li><a href="#unified-inbox" onClick={(e) => handleNavClick(e, 'unified-inbox')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Unified Inbox</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.95rem] m-0 mb-4 text-secondary font-bold">Quick Links</h5>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li><a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">About Us</a></li>
              <li><a href="#contact" onClick={(e) => handleNavClick(e, 'contact')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Contact</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavClick(e, 'pricing')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-[0.95rem] m-0 mb-4 text-secondary font-bold">Legal</h5>
            <ul className="flex flex-col gap-2 list-none p-0 m-0">
              <li><a href="#privacy" onClick={(e) => handleNavClick(e, 'privacy')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => handleNavClick(e, 'terms')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Terms of Service</a></li>
              <li><a href="#cookie" onClick={(e) => handleNavClick(e, 'cookie')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Cookie Policy</a></li>
              <li><a href="#security" onClick={(e) => handleNavClick(e, 'security')} className="text-sm text-text-light hover:text-primary transition-colors flex items-center py-1">Security</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 lg:col-span-1">
            <h5 className="text-[0.95rem] m-0 mb-4 text-secondary font-bold">Stay in the loop</h5>
            <p className="text-sm text-text-light mb-4">Get product updates, launches & more.</p>
            <form className="flex gap-2 mb-6" onSubmit={handleSubscribe}>
              <input 
                type="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder={
                  status === 'success' 
                    ? "Subscribed Successfully!" 
                    : status === 'already_subscribed' 
                    ? "You're already subscribed!" 
                    : "Enter your email"
                } 
                className={`flex-1 px-4 py-2 border rounded-lg text-sm outline-none transition-all duration-200 ${
                  status === 'success' 
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-700 placeholder:text-emerald-600 font-semibold shadow-xs' 
                    : status === 'already_subscribed'
                    ? 'border-blue-400 bg-blue-50 text-blue-700 placeholder:text-blue-600 font-semibold shadow-xs'
                    : 'border-border focus:border-primary'
                }`} 
                disabled={status !== 'idle'}
                required
              />
              <button 
                type="submit" 
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 shrink-0 ${
                  status === 'success' 
                    ? 'bg-emerald-500 text-white cursor-default scale-105 pointer-events-none' 
                    : status === 'already_subscribed'
                    ? 'bg-blue-500 text-white cursor-default scale-105 pointer-events-none'
                    : 'bg-primary hover:bg-primary-hover text-white active:scale-95 cursor-pointer'
                }`}
                disabled={status !== 'idle'}
                title={status === 'success' ? "Subscribed!" : status === 'already_subscribed' ? "Already on list" : "Subscribe"}
              >
                {status === 'success' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
                ) : status === 'already_subscribed' ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                )}
              </button>
            </form>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/pixoda/" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px]" aria-label="LinkedIn"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a href="https://www.instagram.com/pixoda.co?igsi=ZDhjZzEzc3J1YzUz" target="_blank" rel="noopener noreferrer" className="text-text-light hover:text-primary transition-colors flex items-center justify-center w-11 h-11 min-h-[44px] min-w-[44px]" aria-label="Instagram"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 pt-8 border-t border-border text-center">
          <p className="text-xs text-text-light m-0">&copy; 2026 Creamstack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

