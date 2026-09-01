import React, { useState } from 'react';
import leadsMockup13 from '../assets/13.webp';
import CTASection from './CTASection';

const LeadManagementPage = ({ onNavigate }) => {
  const [activeTabDetail, setActiveTabDetail] = useState('Overview');
  const [selectedColumnFilter, setSelectedColumnFilter] = useState('Name');
  const [selectedTag, setSelectedTag] = useState('Hot Lead');

  const columnFilters = [
    { label: 'Name', icon: '👤' },
    { label: 'Company', icon: '🏢' },
    { label: 'Email', icon: '✉️' },
    { label: 'Designation', icon: '💼' },
    { label: 'Industry', icon: '🌐' },
    { label: 'Team Size', icon: '👥' },
    { label: 'Location', icon: '📍' }
  ];

  const sampleLeads = [
    {
      name: 'Sarah Johnson',
      company: 'Notion',
      logo: 'https://logo.clearbit.com/notion.so',
      email: 'sarah@notion.so',
      designation: 'Marketing Manager',
      industry: 'Software',
      teamSize: '201–500',
      location: 'San Francisco, US',
      avatar: 'https://i.pravatar.cc/100?img=32'
    },
    {
      name: 'Alex Morgan',
      company: 'Ramp',
      logo: 'https://logo.clearbit.com/ramp.com',
      email: 'alex@ramp.com',
      designation: 'Head of Growth',
      industry: 'Fintech',
      teamSize: '501–1000',
      location: 'New York, US',
      avatar: 'https://i.pravatar.cc/100?img=12'
    },
    {
      name: 'David Lee',
      company: 'Loom',
      logo: 'https://logo.clearbit.com/loom.com',
      email: 'david@loom.com',
      designation: 'Founder',
      industry: 'Software',
      teamSize: '51–200',
      location: 'Vancouver, CA',
      avatar: 'https://i.pravatar.cc/100?img=60'
    },
    {
      name: 'Emma Williams',
      company: 'Webflow',
      logo: 'https://logo.clearbit.com/webflow.com',
      email: 'emma@webflow.com',
      designation: 'Growth Lead',
      industry: 'SaaS',
      teamSize: '201–500',
      location: 'San Francisco, US',
      avatar: 'https://i.pravatar.cc/100?img=47'
    },
    {
      name: 'James Carter',
      company: 'HubSpot',
      logo: 'https://logo.clearbit.com/hubspot.com',
      email: 'james@hubspot.com',
      designation: 'CMO',
      industry: 'Software',
      teamSize: '1001+',
      location: 'Cambridge, US',
      avatar: 'https://i.pravatar.cc/100?img=53'
    }
  ];

  const statusListLeft = [
    { label: 'New Lead', icon: '🔘', color: 'text-slate-600 bg-slate-100 border-slate-200' },
    { label: 'In Campaign', icon: '🔵', color: 'text-blue-700 bg-blue-50 border-blue-200' },
    { label: 'Profile Viewed', icon: '👁️', color: 'text-indigo-700 bg-indigo-50 border-indigo-200' },
    { label: 'Connection Sent', icon: '👤', color: 'text-purple-700 bg-purple-50 border-purple-200' },
    { label: 'Connection Accepted', icon: '🤝', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' },
    { label: 'LinkedIn Message Sent', icon: '💬', color: 'text-blue-700 bg-blue-50 border-blue-200' }
  ];

  const statusListRight = [
    { label: 'Email Sent', icon: '✉️', color: 'text-amber-700 bg-amber-50 border-amber-200' },
    { label: 'Replied', icon: '🟢', color: 'text-emerald-700 bg-emerald-50 border-emerald-200 font-bold' },
    { label: 'Interested', icon: '💡', color: 'text-teal-700 bg-teal-50 border-teal-200 font-bold' },
    { label: 'Not Interested', icon: '🛑', color: 'text-rose-700 bg-rose-50 border-rose-200' },
    { label: 'Out of Office', icon: '⏳', color: 'text-orange-700 bg-orange-50 border-orange-200' },
    { label: 'Bounced', icon: '⚠️', color: 'text-red-700 bg-red-50 border-red-200' }
  ];

  const popularTags = [
    { name: 'Hot Lead 🔥', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    { name: 'High Intent ⚡', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { name: 'SaaS', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { name: 'US Market', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { name: 'Decision Maker', color: 'bg-amber-50 text-amber-700 border-amber-200' },
    { name: 'Existing Customer', color: 'bg-teal-50 text-teal-700 border-teal-200' },
    { name: 'Q2 Campaign', color: 'bg-pink-50 text-pink-700 border-pink-200' },
    { name: 'Partner', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' }
  ];

  const taggedLeads = [
    {
      name: 'Sarah Johnson',
      company: 'Notion',
      avatar: 'https://i.pravatar.cc/100?img=32',
      tags: ['Hot Lead 🔥', 'SaaS', 'US Market'],
      status: 'Replied',
      statusColor: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      name: 'Alex Morgan',
      company: 'Ramp',
      avatar: 'https://i.pravatar.cc/100?img=12',
      tags: ['High Intent ⚡', 'Decision Maker'],
      status: 'In Campaign',
      statusColor: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      name: 'David Lee',
      company: 'Loom',
      avatar: 'https://i.pravatar.cc/100?img=60',
      tags: ['SaaS', 'Q2 Campaign'],
      status: 'Email Sent',
      statusColor: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      name: 'Emma Williams',
      company: 'Webflow',
      avatar: 'https://i.pravatar.cc/100?img=47',
      tags: ['Existing Customer', 'US Market'],
      status: 'Connection Sent',
      statusColor: 'bg-purple-50 text-purple-700 border-purple-200'
    }
  ];

  return (
    <div className="bg-bg-light text-text-main">
      
      {/* ================= SECTION 1: HERO ================= */}
      <section className="pt-20 pb-24 bg-gradient-to-b from-[#3b82f6]/10 via-[#f472b6]/5 to-transparent relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-primary/15 via-[#f472b6]/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-center gap-6 max-w-5xl mx-auto text-center">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-1.5 rounded-full text-xs font-extrabold tracking-wider text-primary uppercase shadow-xs">
              Lead Management
            </div>

            {/* Headline */}
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-secondary tracking-tight leading-[1.12] m-0">
              Manage All Enriched Leads <br className="hidden sm:block" />
              From <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-[#a855f7] to-[#f472b6]">One Workspace</span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-light leading-relaxed max-w-2xl mx-auto m-0 font-medium">
              Manage, organize, filter, and update every enriched lead from one unified workspace. Keep your data structured, accessible, and ready for outreach—all in one place.
            </p>


          </div>

          {/* Hero Image Mockup (13.png) */}
          <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto text-left">
            {/* Ambient Glow */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10 opacity-70"></div>

            <div className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl bg-white border border-slate-200/90 overflow-hidden relative transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src={leadsMockup13} 
                alt="CreamStack Unified Leads Management Table" 
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: ROW 1 (POWERFUL LEAD TABLE + FILTERS & SEARCH) ================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: Powerful Lead Table */}
            <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary m-0">Powerful Lead Table</h3>
                    <p className="text-xs sm:text-sm text-text-light m-0 mt-0.5 font-medium">View everything in one place.</p>
                  </div>
                </div>

                {/* Column Selection Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {columnFilters.map((col, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColumnFilter(col.label)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        selectedColumnFilter === col.label
                          ? 'bg-primary text-white shadow-xs'
                          : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200/80'
                      }`}
                    >
                      <span>{col.icon}</span>
                      <span>{col.label}</span>
                    </button>
                  ))}
                </div>

                {/* Mini Interactive Table (Mobile Card List on <sm, Table on sm+) */}
                <div className="rounded-2xl border border-slate-200/80 bg-slate-50/40 overflow-hidden">
                  
                  {/* MOBILE VIEW (<sm): Native Lead Cards */}
                  <div className="block sm:hidden divide-y divide-slate-100 bg-white p-2">
                    {sampleLeads.slice(0, 3).map((lead, idx) => (
                      <div key={idx} className="p-3 flex flex-col gap-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <img src={lead.avatar} alt={lead.name} className="w-8 h-8 rounded-full object-cover border border-slate-200" />
                            <div>
                              <h5 className="text-xs font-extrabold text-secondary m-0">{lead.name}</h5>
                              <span className="text-[10px] text-slate-500 font-medium">{lead.designation}</span>
                            </div>
                          </div>
                          <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded-md border border-blue-100">
                            {lead.company}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-500 font-mono pt-1">
                          <span className="truncate max-w-[180px]">{lead.email}</span>
                          <span className="text-slate-400 text-[10px]">{lead.location}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* DESKTOP VIEW (sm+): Full Lead Table */}
                  <div className="hidden sm:block overflow-x-auto">
                    <table className="w-full text-left text-xs min-w-[500px]">
                      <thead>
                        <tr className="border-b border-slate-200/80 bg-slate-100/70 text-slate-500 font-bold uppercase tracking-wider text-[10px]">
                          <th className="p-3 font-semibold">Name</th>
                          <th className="p-3 font-semibold">Company</th>
                          <th className="p-3 font-semibold">Email</th>
                          <th className="p-3 font-semibold">Designation</th>
                          <th className="p-3 font-semibold">Location</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {sampleLeads.slice(0, 4).map((lead, idx) => (
                          <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                            <td className="p-3 font-bold text-secondary flex items-center gap-2">
                              <img src={lead.avatar} alt={lead.name} className="w-6 h-6 rounded-full object-cover" />
                              <span className="truncate">{lead.name}</span>
                            </td>
                            <td className="p-3 font-medium text-slate-600">{lead.company}</td>
                            <td className="p-3 text-slate-500 font-mono text-[11px] truncate">{lead.email}</td>
                            <td className="p-3 text-slate-600 truncate">{lead.designation}</td>
                            <td className="p-3 text-slate-500 text-[11px] truncate">{lead.location}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Displaying 8 columns simultaneously</span>
                <span className="text-primary font-bold">Customizable Layout ✨</span>
              </div>
            </div>

            {/* Card 2: Filters & Search */}
            <div className="bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary m-0">Filters & Search</h3>
                    <p className="text-xs sm:text-sm text-text-light m-0 mt-0.5 font-medium">Instantly filter and find the right leads.</p>
                  </div>
                </div>

                {/* Filter Dropdowns Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 truncate">Workflow</div>
                    <div className="text-xs font-bold text-secondary flex items-center justify-between gap-1">
                      <span className="truncate">All Workflows</span>
                      <span className="text-slate-400 text-[10px] shrink-0">▼</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 truncate">Campaign</div>
                    <div className="text-xs font-bold text-secondary flex items-center justify-between gap-1">
                      <span className="truncate">All Campaigns</span>
                      <span className="text-slate-400 text-[10px] shrink-0">▼</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 truncate">Status</div>
                    <div className="text-xs font-bold text-secondary flex items-center justify-between gap-1">
                      <span className="truncate">All Statuses</span>
                      <span className="text-slate-400 text-[10px] shrink-0">▼</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 truncate">Tags</div>
                    <div className="text-xs font-bold text-secondary flex items-center justify-between gap-1">
                      <span className="truncate">All Tags</span>
                      <span className="text-slate-400 text-[10px] shrink-0">▼</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 truncate">Date Added</div>
                    <div className="text-xs font-bold text-secondary flex items-center justify-between gap-1">
                      <span className="truncate">All Time</span>
                      <span className="text-slate-400 text-[10px] shrink-0">▼</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 truncate">Industry</div>
                    <div className="text-xs font-bold text-secondary flex items-center justify-between gap-1">
                      <span className="truncate">All Industries</span>
                      <span className="text-slate-400 text-[10px] shrink-0">▼</span>
                    </div>
                  </div>

                  <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-200/80 col-span-2 sm:col-span-3 flex flex-col justify-center">
                    <div className="text-[10px] font-bold text-slate-400 uppercase mb-1 truncate">Company Size</div>
                    <div className="text-xs font-bold text-secondary flex items-center justify-between gap-1">
                      <span className="truncate">All Sizes</span>
                      <span className="text-slate-400 text-[10px] shrink-0">▼</span>
                    </div>
                  </div>
                </div>

                {/* Filter Action Buttons */}
                <div className="flex items-center gap-3 mb-5">
                  <button className="px-5 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-sm shadow-primary/25 hover:bg-primary-hover transition-all">
                    Apply Filters
                  </button>
                  <button className="px-4 py-2 rounded-xl border border-slate-200 text-slate-600 text-xs font-semibold hover:bg-slate-50 transition-all">
                    Clear All
                  </button>
                </div>

                {/* Search Bar Input */}
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
                  <input 
                    type="text" 
                    placeholder="Search by name, company, email, designation and more..." 
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200/90 rounded-2xl text-xs text-slate-700 outline-none focus:border-primary focus:bg-white transition-all font-medium"
                    readOnly
                  />
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Instant boolean & multi-criteria queries</span>
                <span className="text-emerald-600 font-bold">Real-time matching ⚡</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ROW 2 (LEAD DETAILS & AUTOMATIC STATUS TRACKING) ================= */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Card 3: Lead Details (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary m-0">Lead Details</h3>
                    <p className="text-xs sm:text-sm text-text-light m-0 mt-0.5 font-medium">Open any lead to access complete information and insights.</p>
                  </div>
                </div>

                {/* Lead Profile Drawer Simulator */}
                <div className="rounded-2xl border border-slate-200 bg-[#fafbfe] p-5">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
                    
                    {/* Left Mini Profile (5 cols) */}
                    <div className="md:col-span-5 flex flex-col gap-3 pr-0 md:pr-4 md:border-r md:border-slate-200">
                      <div className="flex items-center gap-3">
                        <img 
                          src="https://i.pravatar.cc/100?img=32" 
                          alt="Sarah Johnson" 
                          className="w-12 h-12 rounded-2xl object-cover border border-slate-200 shadow-xs"
                        />
                        <div>
                          <h4 className="text-sm font-bold text-secondary m-0">Sarah Johnson</h4>
                          <div className="text-xs text-text-light">Marketing Manager</div>
                          <div className="text-xs font-bold text-slate-700">Notion</div>
                        </div>
                      </div>

                      <span className="w-fit px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-100 text-emerald-700 border border-emerald-200">
                        Replied
                      </span>

                      <div className="space-y-2 text-xs text-slate-600 pt-2 border-t border-slate-200/70">
                        <div className="flex items-center justify-between">
                          <span className="truncate">✉️ sarah@notion.so</span>
                        </div>
                        <div className="text-slate-500 text-[11px]">📍 San Francisco, CA, US</div>
                        <div className="text-blue-600 font-medium text-[11px] truncate">🔗 linkedin.com/in/sarah-johnson</div>
                        <div className="flex items-center justify-between">
                          <span className="text-[11px]">📞 +1 (415) 555-0132</span>
                          <span className="text-[9px] bg-blue-50 text-blue-700 font-bold px-1.5 py-0.5 rounded border border-blue-200">Enriched</span>
                        </div>
                      </div>

                      <button className="mt-2 w-full py-1.5 px-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 flex items-center justify-center gap-1.5 shadow-xs">
                        <span>📝 Add Note</span>
                      </button>
                    </div>

                    {/* Right Tabbed Details (7 cols) */}
                    <div className="md:col-span-7 flex flex-col gap-3">
                      {/* Tabs */}
                      <div className="flex flex-wrap items-center gap-1.5 border-b border-slate-200 pb-2 text-[11px] font-bold">
                        {['Overview', 'Company', 'AI Ideas', 'Buying Intent', 'Activity'].map((tab) => (
                          <button
                            key={tab}
                            onClick={() => setActiveTabDetail(tab)}
                            className={`px-2 py-1 rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                              activeTabDetail === tab
                                ? 'bg-primary text-white shadow-xs'
                                : 'text-slate-500 hover:text-secondary'
                            }`}
                          >
                            {tab}
                          </button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      <div className="text-xs space-y-3">
                        <div>
                          <div className="text-[10px] font-bold text-slate-400 uppercase">About</div>
                          <p className="text-slate-700 leading-relaxed m-0 mt-0.5 text-[11px]">
                            Marketing Manager at Notion. Focused on growth marketing, content strategy, and demand generation.
                          </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] bg-white p-2.5 rounded-xl border border-slate-200/80">
                          <div><span className="text-slate-400 font-medium">Industry:</span> <span className="font-bold text-secondary">Software</span></div>
                          <div><span className="text-slate-400 font-medium">Team Size:</span> <span className="font-bold text-secondary">201–500</span></div>
                          <div><span className="text-slate-400 font-medium">Company Size:</span> <span className="font-bold text-secondary">Series C</span></div>
                          <div><span className="text-slate-400 font-medium">Website:</span> <span className="font-bold text-primary">notion.so</span></div>
                        </div>

                        {/* AI Ideas Box */}
                        <div className="bg-purple-50/70 rounded-xl p-2.5 border border-purple-100 text-[11px]">
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-extrabold text-purple-900 text-[10px] uppercase">Autopilot Ideas</span>
                            <span className="text-[9px] text-primary font-bold cursor-pointer">See all</span>
                          </div>
                          <p className="text-slate-700 italic m-0 mb-2">
                            "Loved how Notion simplifies team collaboration. I noticed your recent focus on content-driven signups..."
                          </p>
                          <button className="px-2.5 py-1 rounded-lg bg-primary text-white text-[10px] font-bold shadow-xs hover:bg-primary-hover">
                            Use in Campaign ✨
                          </button>
                        </div>

                        {/* Buying Intent */}
                        <div className="flex items-center justify-between bg-emerald-50/70 p-2 rounded-xl border border-emerald-100 text-[11px]">
                          <div>
                            <span className="font-bold text-emerald-900">Buying Intent: </span>
                            <span className="text-slate-600">Actively hiring for growth roles</span>
                          </div>
                          <span className="text-xs font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                            High 
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Unified 360° lead intelligence</span>
                <span className="text-primary font-bold">Live Synced 🔄</span>
              </div>
            </div>

            {/* Card 4: Automatic Status Tracking (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div className="flex-1 flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary m-0">Automatic Status Tracking</h3>
                    <p className="text-xs sm:text-sm text-text-light m-0 mt-0.5 font-medium">Creamstack automatically updates lead stages as campaigns progress.</p>
                  </div>
                </div>

                {/* Dynamic Status Cloud */}
                <div className="flex-1 flex items-center justify-center min-h-[250px] mb-6">
                  <div className="flex flex-wrap items-center justify-center gap-3">
                    {[...statusListLeft, ...statusListRight].map((st, idx) => (
                      <div 
                        key={idx} 
                        className={`px-3.5 py-2 rounded-xl border text-xs font-bold flex items-center gap-2 shadow-sm transition-transform duration-300 hover:scale-105 cursor-default ${st.color}`}
                      >
                        <span className="text-sm">{st.icon}</span>
                        <span>{st.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* No Manual Updates Callout */}
              <div className="bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100 flex items-center gap-3 text-xs text-slate-700 font-medium">
                <span className="text-xl">🛡️</span>
                <div>
                  <div className="font-bold text-emerald-900">No manual updates required.</div>
                  <div className="text-slate-600">Focus on closing conversations, not data entry.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: ROW 3 (TAGS & TAGGED LEADS TABLE) ================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Left Column: Tags Header & Popular Tags (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-extrabold text-sm shadow-xs">
                    5
                  </div>
                  <h3 className="text-2xl font-bold text-secondary m-0">Tags</h3>
                </div>
                <p className="text-sm text-text-light mb-6 font-medium leading-relaxed">
                  Use automatic and custom tags to organize your pipeline and quickly find the right prospects for future campaigns.
                </p>

                {/* Popular Tags List */}
                <div className="text-xs font-bold text-slate-400 uppercase mb-3">Popular Tags</div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {popularTags.map((tag, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedTag(tag.name)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all border cursor-pointer ${tag.color} ${
                        selectedTag === tag.name ? 'ring-2 ring-primary ring-offset-1 scale-105' : 'hover:opacity-90'
                      }`}
                    >
                      {tag.name}
                    </button>
                  ))}
                  <button className="px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 hover:bg-slate-200 text-slate-600 border border-slate-200 cursor-pointer">
                    + New Tag
                  </button>
                </div>
              </div>

              <div className="bg-blue-50/70 p-4 rounded-2xl border border-blue-100 text-xs text-slate-700 font-medium">
                💡 <strong className="text-secondary font-bold">Auto-Tagging:</strong> Tags apply automatically when leads match criteria or engage with sequences.
              </div>
            </div>

            {/* Right Column: Tagged Leads Table (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-secondary m-0">Tagged Leads</h3>
                  <span className="text-xs font-bold text-primary cursor-pointer hover:underline">Manage All Tags →</span>
                </div>

                {/* Mobile View: Stacked List */}
                <div className="block lg:hidden divide-y divide-slate-100">
                  {taggedLeads.map((lead, idx) => (
                    <div key={idx} className="py-4 flex flex-col gap-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-3">
                          <img src={lead.avatar} alt={lead.name} className="w-9 h-9 rounded-full object-cover shadow-sm" />
                          <div className="flex flex-col">
                            <span className="font-bold text-secondary text-sm">{lead.name}</span>
                            <span className="text-xs text-slate-500 font-medium">{lead.company}</span>
                          </div>
                        </div>
                        <span className={`px-2.5 py-1 rounded-full text-[10px] font-extrabold border whitespace-nowrap ${lead.statusColor}`}>
                          {lead.status}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 pl-[48px]">
                        {lead.tags.map((t, tIdx) => (
                          <span key={tIdx} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Desktop View: Table */}
                <div className="hidden lg:block overflow-x-auto pb-2">
                  <table className="w-full min-w-max text-left text-xs whitespace-nowrap">
                    <thead>
                      <tr className="border-b border-slate-100 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                        <th className="pb-3 font-semibold">Name</th>
                        <th className="pb-3 font-semibold">Company</th>
                        <th className="pb-3 font-semibold">Tags</th>
                        <th className="pb-3 font-semibold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {taggedLeads.map((lead, idx) => (
                        <tr key={idx} className="hover:bg-slate-50/70 transition-colors">
                          <td className="py-3.5 pr-2">
                            <div className="flex items-center gap-2.5">
                              <img src={lead.avatar} alt={lead.name} className="w-7 h-7 rounded-full object-cover" />
                              <span className="font-bold text-secondary">{lead.name}</span>
                            </div>
                          </td>
                          <td className="py-3.5 pr-2 font-medium text-slate-600">{lead.company}</td>
                          <td className="py-3.5 pr-2">
                            <div className="flex flex-wrap gap-1">
                              {lead.tags.map((t, tIdx) => (
                                <span key={tIdx} className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </td>
                          <td className="py-3.5 text-right">
                            <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold border ${lead.statusColor}`}>
                              {lead.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Multi-tag filtering enabled</span>
                <span className="text-emerald-600 font-bold">Smart Segments 🎯</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 5: MASTER COMMON CTA BANNER ================= */}
      <CTASection onNavigate={onNavigate} />

    </div>
  );
};

export default LeadManagementPage;
