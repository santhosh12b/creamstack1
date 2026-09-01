import React, { useState } from 'react';
import CTASection from './CTASection';

const ContactPage = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Payload for Google Apps Script
    const payload = {
      action: "contact_form",
      ...formData
    };

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbz6zi3dcghNBmsYOquGqYurHumaUuSx_lHG-ilQS33F764-jgE9W-uyPvIm-rW4BvGNCw/exec", {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      
      if (result.success) {
        setSubmitted(true);
        // Clear form for next time
        setFormData({ name: '', email: '', company: '', subject: '', message: '' });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("There was an error submitting the form.");
    }
  };

  return (
    <div className="bg-white min-h-screen pt-12 sm:pt-20 pb-0">
      <div className="container mx-auto px-4 sm:px-6 max-w-7xl mb-16 sm:mb-24">
        
        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Let's Start a Conversation */}
          <div className="flex flex-col justify-start max-w-lg lg:ml-auto">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-5">
              Let's Start a Conversation
            </h2>
            <p className="text-base text-slate-500 leading-relaxed font-normal mb-10 sm:mb-12">
              Whether you have questions about our platform, need technical support, or want to explore partnership opportunities, we're here to help. Reach out to us through any of the channels below.
            </p>

            {/* Channels List */}
            <div className="flex flex-col gap-6">
              
              {/* Channel 1: Email Us */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-0.5">Email Us</h4>
                  <p className="text-sm text-slate-500 m-0 mb-1.5">For general inquiries and support</p>
                  <a 
                    href="mailto:support@creamstack.io" 
                    className="text-sm font-semibold text-blue-600 hover:underline transition-colors"
                  >
                    support@creamstack.io
                  </a>
                </div>
              </div>

              {/* Channel 2: Schedule a Call */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-0.5">Schedule a Call</h4>
                  <p className="text-sm text-slate-500 m-0 mb-1.5">Book a demo or consultation</p>
                  <a 
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0yXiaeX8LEWXUKXoUyhXyBeg1Uz3Y7PlTVIKK1o1jo8QB6X6Qdbo7lUH_rdKaOavwIU9wGIYbJ" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-blue-600 hover:underline transition-colors"
                  >
                    Book a Demo Call
                  </a>
                </div>
              </div>

              {/* Channel 3: Our Location */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-0.5">Our Location</h4>
                  <p className="text-sm text-slate-500 m-0 leading-relaxed max-w-xs">
                    GRG Gen Nxt Foundation Incubator, Coimbatore, India
                  </p>
                </div>
              </div>

              {/* Channel 4: Response Time */}
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-500 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-0.5">Response Time</h4>
                  <p className="text-sm text-slate-500 m-0 leading-relaxed max-w-xs">
                    We typically respond within 24–48 hours during working days
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Send us a Message Card */}
          <div className="max-w-lg lg:mr-auto w-full">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-xl shadow-slate-900/5">
              <h3 className="text-2xl font-extrabold text-slate-900 mb-8">
                Send us a Message
              </h3>

              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">Message Received!</h4>
                  <p className="text-xs text-slate-500 max-w-sm mx-auto mb-6">
                    Thank you for contacting Creamstack. Our team will review your message and respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Name <span className="text-blue-500">*</span>
                      </label>
                      <input 
                        type="text" 
                        required 
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email <span className="text-blue-500">*</span>
                      </label>
                      <input 
                        type="email" 
                        required 
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Company Field */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Company
                    </label>
                    <input 
                      type="text" 
                      placeholder="Your company name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  {/* Subject Dropdown */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Subject <span className="text-blue-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200/90 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all appearance-none bg-white text-slate-700 pr-10 cursor-pointer"
                      >
                        <option value="" disabled>Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="support">Technical Support</option>
                        <option value="sales">Sales & Product Demo</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message <span className="text-blue-500">*</span>
                    </label>
                    <textarea 
                      rows="4" 
                      required 
                      placeholder="Tell us how we can help you..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200/90 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 resize-y"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="mt-4 w-full py-3.5 px-6 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-bold text-base shadow-md shadow-blue-500/20 active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <span>Send Message</span>
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* CTA Section on all pages */}
      <CTASection onNavigate={onNavigate} />
    </div>
  );
};

export default ContactPage;
