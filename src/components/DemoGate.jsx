import React, { useState, useEffect } from 'react';

const DemoGate = ({ onClose, onUnlock }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ⚠️ PASTE YOUR GOOGLE SCRIPT WEB APP URL HERE ⚠️
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMvqP2W-1vHw7JyQ403eCfAB72wCeSh3XsM25kxWAafmV4D3eqT1DaL2h1cH-5c-_DcA/exec";

  useEffect(() => {
    // 1. Check if already verified in cookies/cache (localStorage)
    if (localStorage.getItem('demo_verified') === 'true') {
      onUnlock();
    }
  }, [onUnlock]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      setError('Please fill out all fields');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_WEB_APP_URL_HERE") {
        // API: Save Lead to Google Sheet (Fire and forget)
        fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'save', phone, name, email, otp: 'skipped' })
        }).catch(console.error);
      }
      
      setTimeout(() => {
        setIsLoading(false);
        onUnlock();
      }, 800);

    } catch (err) {
      console.error(err);
      setError('Failed to save details. Try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 backdrop-blur-sm">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-8 sm:p-10 flex flex-col justify-center animate-in fade-in zoom-in duration-300 relative">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-2 bg-slate-50 rounded-full hover:bg-slate-100">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="w-full">
          <div className="flex justify-center mb-6">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shadow-sm border border-blue-100">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
          <h4 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">Watch the Demo</h4>
          <p className="text-sm text-slate-500 mb-8 font-medium text-center">Please enter your details to access the video.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Work Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
                required
              />
            </div>
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">WhatsApp Number</label>
              <input 
                type="tel" 
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+91 xxxxxxxxxx"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400"
                required
              />
            </div>
            
            {error && <p className="text-xs font-bold text-red-500 m-0 text-center">{error}</p>}
            
            <button 
              disabled={isLoading}
              type="submit" 
              className="w-full mt-2 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-sm transition-all disabled:opacity-70 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
              ) : (
                'Unlock Demo ✨'
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default DemoGate;
