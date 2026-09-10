import React, { useState, useEffect } from 'react';

const countries = [
  { code: 'IN', name: 'India', flag: '🇮🇳', dial: '+91' },
  { code: 'US', name: 'United States', flag: '🇺🇸', dial: '+1' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧', dial: '+44' },
  { code: 'AE', name: 'United Arab Emirates', flag: '🇦🇪', dial: '+971' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦', dial: '+1' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺', dial: '+61' },
  { code: 'SG', name: 'Singapore', flag: '🇸🇬', dial: '+65' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪', dial: '+49' },
  { code: 'FR', name: 'France', flag: '🇫🇷', dial: '+33' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵', dial: '+81' },
  { code: 'CN', name: 'China', flag: '🇨🇳', dial: '+86' },
  { code: 'PK', name: 'Pakistan', flag: '🇵🇰', dial: '+92' },
  { code: 'BD', name: 'Bangladesh', flag: '🇧🇩', dial: '+880' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩', dial: '+62' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷', dial: '+55' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽', dial: '+52' },
  { code: 'ZA', name: 'South Africa', flag: '🇿🇦', dial: '+27' },
  { code: 'NG', name: 'Nigeria', flag: '🇳🇬', dial: '+234' },
  { code: 'SA', name: 'Saudi Arabia', flag: '🇸🇦', dial: '+966' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱', dial: '+31' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸', dial: '+34' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹', dial: '+39' },
  { code: 'RU', name: 'Russia', flag: '🇷🇺', dial: '+7' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷', dial: '+82' },
  { code: 'MY', name: 'Malaysia', flag: '🇲🇾', dial: '+60' },
  { code: 'PH', name: 'Philippines', flag: '🇵🇭', dial: '+63' },
  { code: 'VN', name: 'Vietnam', flag: '🇻🇳', dial: '+84' },
  { code: 'TH', name: 'Thailand', flag: '🇹🇭', dial: '+66' },
  { code: 'NZ', name: 'New Zealand', flag: '🇳🇿', dial: '+64' },
  { code: 'IE', name: 'Ireland', flag: '🇮🇪', dial: '+353' },
  { code: 'CH', name: 'Switzerland', flag: '🇨🇭', dial: '+41' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪', dial: '+46' },
  { code: 'NO', name: 'Norway', flag: '🇳🇴', dial: '+47' },
  { code: 'DK', name: 'Denmark', flag: '🇩🇰', dial: '+45' },
  { code: 'FI', name: 'Finland', flag: '🇫🇮', dial: '+358' },
  { code: 'PL', name: 'Poland', flag: '🇵🇱', dial: '+48' },
  { code: 'AT', name: 'Austria', flag: '🇦🇹', dial: '+43' },
  { code: 'BE', name: 'Belgium', flag: '🇧🇪', dial: '+32' },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹', dial: '+351' },
  { code: 'GR', name: 'Greece', flag: '🇬🇷', dial: '+30' },
  { code: 'TR', name: 'Turkey', flag: '🇹🇷', dial: '+90' },
  { code: 'EG', name: 'Egypt', flag: '🇪🇬', dial: '+20' },
  { code: 'IL', name: 'Israel', flag: '🇮🇱', dial: '+972' },
  { code: 'QA', name: 'Qatar', flag: '🇶🇦', dial: '+974' },
  { code: 'KW', name: 'Kuwait', flag: '🇰🇼', dial: '+965' },
  { code: 'OM', name: 'Oman', flag: '🇴🇲', dial: '+968' },
  { code: 'BH', name: 'Bahrain', flag: '🇧🇭', dial: '+973' },
  { code: 'LK', name: 'Sri Lanka', flag: '🇱🇰', dial: '+94' },
  { code: 'NP', name: 'Nepal', flag: '🇳🇵', dial: '+977' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪', dial: '+254' },
];

const DemoGate = ({ onClose, onUnlock }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(countries[0]); // Default India +91
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState('');
  const [phone, setPhone] = useState('');
  const [designation, setDesignation] = useState('');
  const [website, setWebsite] = useState('');
  
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // ⚠️ PASTE YOUR GOOGLE SCRIPT WEB APP URL HERE ⚠️
  const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwnFdB2G_qWUsoxSnfKZIBPUs5FjnKWnFtJ-Ih9L04JM3fHy4mC2cI5fub7yy47gQ6ZIg/exec";

  useEffect(() => {
    // 1. Check if already verified in cookies/cache (localStorage)
    if (localStorage.getItem('demo_verified') === 'true') {
      onUnlock();
    }
  }, [onUnlock]);

  const handleNameChange = (e) => {
    // Restrict name input to letters and spaces only
    const val = e.target.value.replace(/[^a-zA-Z\s]/g, '');
    setName(val);
  };

  const handlePhoneChange = (e) => {
    // Restrict phone input to numbers only
    const val = e.target.value.replace(/\D/g, '');
    setPhone(val);
  };

  const handleWebsiteChange = (e) => {
    // Strip leading http:// or https:// if user pastes full URL
    const val = e.target.value.replace(/^https?:\/\//i, '');
    setWebsite(val);
  };

  const filteredCountries = countries.filter(c => 
    c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
    c.dial.includes(countrySearch) ||
    c.code.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !designation.trim() || !website.trim()) {
      setError('Please fill out all fields');
      return;
    }

    setError('');
    setIsLoading(true);

    const fullPhone = `${selectedCountry.dial} ${phone.trim()}`;
    const fullWebsite = website.trim().startsWith('http') ? website.trim() : `https://${website.trim()}`;

    try {
      if (GOOGLE_SCRIPT_URL && GOOGLE_SCRIPT_URL !== "YOUR_WEB_APP_URL_HERE") {
        // API: Save Lead to Google Sheet (Fire and forget)
        fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain;charset=utf-8' },
          body: JSON.stringify({ 
            action: 'save', 
            phone: fullPhone, 
            name: name.trim(), 
            email: email.trim(), 
            designation: designation.trim(), 
            website: fullWebsite, 
            otp: 'skipped' 
          })
        }).catch(console.error);
      }
      
      setTimeout(() => {
        setIsLoading(false);
        if (window.fbq) {
          window.fbq('track', 'Lead');
        }
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
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-100 p-6 sm:p-8 flex flex-col justify-center animate-in fade-in zoom-in duration-300 relative max-h-[92vh] overflow-y-auto custom-scrollbar">
        
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors p-2 bg-slate-50 rounded-full hover:bg-slate-100">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div className="w-full">
          <div className="flex justify-center mb-4">
            <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center text-primary shadow-sm border border-blue-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="5 3 19 12 5 21 5 3"></polygon>
              </svg>
            </div>
          </div>
          <h4 className="text-2xl font-extrabold text-slate-900 mb-1.5 text-center">Watch the Demo</h4>
          <p className="text-sm text-slate-500 mb-6 font-medium text-center">Please enter your details to access the video.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-3.5">
            {/* Full Name */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Full Name</label>
              <input 
                type="text" 
                value={name}
                onChange={handleNameChange}
                placeholder="John Doe"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 text-sm"
                required
              />
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Work Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@company.com"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 text-sm"
                required
              />
            </div>

            {/* WhatsApp Number with Custom Searchable Country Selector */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">WhatsApp Number</label>
              <div className="flex gap-2 relative">
                
                {/* Searchable Country Picker Dropdown */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800 font-bold text-xs outline-none focus:border-primary transition-all cursor-pointer h-full shrink-0"
                  >
                    <span className="text-base leading-none">{selectedCountry.flag}</span>
                    <span>{selectedCountry.dial}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={`transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}>
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>

                  {isDropdownOpen && (
                    <>
                      {/* Overlay to close on outside click */}
                      <div 
                        className="fixed inset-0 z-40" 
                        onClick={() => setIsDropdownOpen(false)}
                      />
                      
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 top-full mt-1.5 w-64 bg-white rounded-xl shadow-xl border border-slate-200 z-50 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-150">
                        {/* Search Input Box */}
                        <div className="p-2 border-b border-slate-100 bg-slate-50">
                          <div className="relative flex items-center">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="absolute left-2.5 text-slate-400">
                              <circle cx="11" cy="11" r="8"></circle>
                              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                            <input
                              type="text"
                              value={countrySearch}
                              onChange={(e) => setCountrySearch(e.target.value)}
                              placeholder="Search country or code..."
                              className="w-full pl-8 pr-3 py-1.5 text-xs bg-white border border-slate-200 rounded-lg outline-none focus:border-primary font-medium"
                              autoFocus
                            />
                          </div>
                        </div>

                        {/* Country List (Scrollable) */}
                        <div className="max-h-48 overflow-y-auto custom-scrollbar p-1 flex flex-col gap-0.5">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((c) => (
                              <button
                                key={c.code}
                                type="button"
                                onClick={() => {
                                  setSelectedCountry(c);
                                  setIsDropdownOpen(false);
                                  setCountrySearch('');
                                }}
                                className={`flex items-center justify-between px-2.5 py-2 rounded-lg text-xs transition-colors text-left w-full cursor-pointer ${
                                  selectedCountry.code === c.code ? 'bg-blue-50 text-primary font-bold' : 'hover:bg-slate-50 text-slate-700 font-medium'
                                }`}
                              >
                                <div className="flex items-center gap-2 overflow-hidden mr-2">
                                  <span className="text-base leading-none">{c.flag}</span>
                                  <span className="truncate">{c.name}</span>
                                </div>
                                <span className="font-mono text-[11px] text-slate-400 shrink-0">{c.dial}</span>
                              </button>
                            ))
                          ) : (
                            <div className="p-3 text-center text-xs text-slate-400 font-medium">No countries found</div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                <input 
                  type="tel" 
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder=""
                  className="flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 text-sm"
                  required
                />
              </div>
            </div>

            {/* Designation */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Designation</label>
              <input 
                type="text" 
                value={designation}
                onChange={(e) => setDesignation(e.target.value)}
                placeholder="e.g. CEO, Marketing Director"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all font-medium text-slate-900 placeholder:text-slate-400 text-sm"
                required
              />
            </div>

            {/* Website with Prefix Addon */}
            <div>
              <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">Company Website</label>
              <div className="flex rounded-xl border border-slate-200 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 overflow-hidden transition-all">
                <span className="bg-slate-50 text-slate-500 font-semibold text-xs px-3 flex items-center border-r border-slate-200 select-none shrink-0">
                  https://
                </span>
                <input 
                  type="text" 
                  value={website}
                  onChange={handleWebsiteChange}
                  placeholder="example.com"
                  className="w-full px-3.5 py-2.5 outline-none font-medium text-slate-900 placeholder:text-slate-400 text-sm"
                  required
                />
              </div>
            </div>
            
            {error && <p className="text-xs font-bold text-red-500 m-0 text-center">{error}</p>}
            
            <button 
              disabled={isLoading}
              type="submit" 
              className="w-full mt-1 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-bold shadow-sm transition-all disabled:opacity-70 flex items-center justify-center gap-2 text-sm cursor-pointer"
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
