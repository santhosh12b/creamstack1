import React, { useState, useEffect } from 'react';

const DemoGate = ({ onClose, onUnlock }) => {
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [expectedOtp, setExpectedOtp] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ⚠️ PASTE YOUR GOOGLE SCRIPT WEB APP URL HERE ⚠️
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyMvqP2W-1vHw7JyQ403eCfAB72wCeSh3XsM25kxWAafmV4D3eqT1DaL2h1cH-5c-_DcA/exec";

  const handlePhoneSubmit = async (e) => {
    e.preventDefault();
    if (!phone.trim()) {
      setError('Please enter a valid WhatsApp number');
      return;
    }
    
    setError('');
    setIsLoading(true);

    try {
      if (GOOGLE_SCRIPT_URL === "YOUR_WEB_APP_URL_HERE") {
        // Fallback to mock API if URL not set
        setTimeout(() => {
          setIsLoading(false);
          if (phone === '5555555555') unlockDemo();
          else setStep(2);
        }, 1000);
        return;
      }

      // API: Check if phone exists in Google Sheet
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'check', phone })
      });
      
      const result = await response.json();
      setIsLoading(false);
      
      if (result.exists) {
        unlockDemo();
      } else {
        // Generate random 4-digit OTP
        const generatedOtp = Math.floor(1000 + Math.random() * 9000).toString();
        setExpectedOtp(generatedOtp);

        // Send OTP via WhatsApp (through Google Apps Script)
        const sendResponse = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ action: 'send_otp', phone, otp: generatedOtp })
        });
        
        const sendResult = await sendResponse.json();
        
        if (sendResult.success) {
          setStep(2);
        } else {
          setError('WhatsApp Error: ' + (sendResult.error || 'Could not send message.'));
        }
      }
    } catch (err) {
      console.error(err);
      setError('Connection error. Please try again.');
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();
    
    // Strictly verify against the real generated OTP
    if (otp !== expectedOtp) {
      setError('Invalid verification code. Please try again.');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setStep(3);
    }, 800);
  };

  const handleDetailsSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError('Please fill out all fields');
      return;
    }

    setError('');
    setIsLoading(true);

    try {
      if (GOOGLE_SCRIPT_URL === "YOUR_WEB_APP_URL_HERE") {
        setTimeout(() => { setIsLoading(false); unlockDemo(); }, 1000);
        return;
      }

      // API: Save Lead to Google Sheet
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ action: 'save', phone, name, email, otp })
      });
      
      setIsLoading(false);
      unlockDemo();
    } catch (err) {
      console.error(err);
      setError('Failed to save details. Try again.');
      setIsLoading(false);
    }
  };

  const unlockDemo = () => {
    onUnlock();
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
        
        {step === 1 && (
          <div className="w-full">
            <div className="flex justify-center mb-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-primary shadow-sm border border-blue-100">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
            </div>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-2 text-center">Watch the Demo</h4>
            <p className="text-sm text-slate-500 mb-8 font-medium text-center">Enter your WhatsApp number to get instant access.</p>
            
            <form onSubmit={handlePhoneSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">WhatsApp Number</label>
                <input 
                  type="tel" 
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+1 (555) 000-0000"
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
                  'Continue →'
                )}
              </button>
            </form>
            <p className="text-[10px] text-slate-400 text-center mt-6 font-medium">
              (Use 5555555555 to test an existing user)
            </p>
          </div>
        )}

        {step === 2 && (
          <div className="w-full">
            <button type="button" onClick={() => setStep(1)} className="text-xs font-bold text-slate-400 hover:text-slate-600 mb-6 flex items-center gap-1">
              ← Back
            </button>
            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Check WhatsApp</h4>
            <p className="text-sm text-slate-500 mb-8 font-medium">We've sent a 4-digit code to <span className="font-bold text-slate-700">{phone}</span>.</p>
            
            <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1.5">Verification Code</label>
                <input 
                  type="text" 
                  maxLength={4}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="----"
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-bold text-xl text-slate-900 placeholder:text-slate-300 text-center tracking-[0.5em]"
                  required
                />
              </div>
              
              {error && <p className="text-xs font-bold text-red-500 m-0 text-center">{error}</p>}
              
              <button 
                disabled={isLoading || otp.length < 4}
                type="submit" 
                className="w-full mt-2 py-3 rounded-xl bg-slate-900 hover:bg-black text-white font-bold shadow-sm transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                ) : (
                  'Verify Code'
                )}
              </button>
            </form>
          </div>
        )}

        {step === 3 && (
          <div className="w-full">
            <h4 className="text-2xl font-extrabold text-slate-900 mb-2">Almost there!</h4>
            <p className="text-sm text-slate-500 mb-8 font-medium">Please enter your details to access the demo.</p>
            
            <form onSubmit={handleDetailsSubmit} className="flex flex-col gap-4">
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
              
              {error && <p className="text-xs font-bold text-red-500 m-0 text-center">{error}</p>}
              
              <button 
                disabled={isLoading}
                type="submit" 
                className="w-full mt-2 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-sm transition-all disabled:opacity-70 flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin"></span>
                ) : (
                  'Unlock Demo ✨'
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};

export default DemoGate;
