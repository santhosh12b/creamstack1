import React, { useState } from 'react';
import CTASection from './CTASection';

const featureCategories = [
  {
    id: 'core-limits',
    category: 'Core Channels & Volume Limits',
    badge: 'Limits',
    badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    features: [
      {
        name: 'LinkedIn Accounts',
        desc: 'Dedicated sender profile per seat',
        starter: '1 Account',
        growth: '1 Account',
        trial5: '1 Account',
        trial10: '1 Account',
        isKey: true,
        isHighlight: false,
        icon: <LinkedInIcon />
      },
      {
        name: 'Email Accounts',
        desc: 'Multi-inbox rotation & automated warmup',
        starter: '5 Inboxes',
        growth: '10 Inboxes',
        trial5: '5 Inboxes',
        trial10: '10 Inboxes',
        isKey: true,
        isHighlight: true,
        tag: 'Differentiator',
        icon: <EmailIcon />
      },
      {
        name: 'Credits Included',
        desc: 'Lead enrichment & phone/email verification',
        starter: '2,000 / month',
        growth: '2,000 / month',
        trial5: '150 Credits',
        trial10: '150 Credits',
        isKey: true,
        isHighlight: true,
        tag: 'Top Value',
        icon: <CreditIcon />
      },
      {
        name: 'Plan Duration',
        desc: 'Billing cycle & validity window',
        starter: 'Billed monthly',
        growth: 'Billed monthly',
        trial5: '5 Days',
        trial10: '5 Days',
        isKey: true,
        isHighlight: false,
        icon: <ClockIcon />
      }
    ]
  },
  {
    id: 'ai-features',
    category: 'AI & Smart Personalization',
    badge: 'AI Engine',
    badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
    features: [
      {
        name: 'AI Message Personalization',
        desc: '1:1 tailored icebreakers and hyper-personalized message hooks',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: true,
        tag: 'Popular'
      },
      {
        name: 'AI Rewrite & Improve',
        desc: 'Instant tone adjustment, spam-word sanitizer & hook optimizer',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      },
      {
        name: 'Human-like Delays & Smart Cadence',
        desc: 'Protects sender domain reputation and mimics natural human behavior',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: true,
        tag: 'Safety'
      }
    ]
  },
  {
    id: 'automation-workflows',
    category: 'Multi-Channel Automation & Sequences',
    badge: 'Workflows',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <rect x="3" y="3" width="7" height="7" rx="1.5"></rect>
        <rect x="14" y="3" width="7" height="7" rx="1.5"></rect>
        <rect x="14" y="14" width="7" height="7" rx="1.5"></rect>
        <rect x="3" y="14" width="7" height="7" rx="1.5"></rect>
      </svg>
    ),
    features: [
      {
        name: 'Visual Campaign Builder',
        desc: 'Intuitive node-based drag-and-drop canvas for complex outreach paths',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: true,
        tag: 'Core'
      },
      {
        name: 'LinkedIn Automation',
        desc: 'Auto connection requests, profile visits, endorsement & follow-ups',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      },
      {
        name: 'Email Automation & Drip Sequences',
        desc: 'Dynamic multi-touch cold email sequences with fallback triggers',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      },
      {
        name: 'Conditional Workflow Builder',
        desc: 'Branch logic based on opens, clicks, replies or silence',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      },
      {
        name: 'Pre-built Templates Library',
        desc: 'Battle-tested high reply rate sequences ready to clone',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      }
    ]
  },
  {
    id: 'crm-inbox',
    category: 'CRM & Lead Management',
    badge: 'Inbox & CRM',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    ),
    features: [
      {
        name: 'Unified Multi-Channel Inbox',
        desc: 'Centralize replies across LinkedIn and all email inboxes with 1-click reply',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: true,
        tag: 'Crucial'
      },
      {
        name: 'Lead Management & Tags',
        desc: 'Status pipelines, custom variables, prospect notes & qualification stages',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      },
      {
        name: 'Export & Import (CSV / CRM)',
        desc: 'Fast bulk import and instant CSV / webhook sync with your CRM',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      }
    ]
  },
  {
    id: 'analytics-support',
    category: 'Analytics, Health & Enterprise Support',
    badge: 'Insights',
    badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
        <line x1="18" y1="20" x2="18" y2="10"></line>
        <line x1="12" y1="20" x2="12" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="14"></line>
      </svg>
    ),
    features: [
      {
        name: 'Analytics & Live Conversion Reports',
        desc: 'Granular open, click, reply and lead booking conversion metrics',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: true
      },
      {
        name: 'Email Tracking & Pixel Health',
        desc: 'Spam trigger detection, domain health scores and bounce shield',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      },
      {
        name: 'Campaign Reports Export',
        desc: 'Shareable executive summary reports for clients & team leads',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      },
      {
        name: 'Future Feature Updates',
        desc: 'Immediate access to all newly released v3 features & tools',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: false
      },
      {
        name: 'Priority Support',
        desc: 'Dedicated fast-response assistance & live onboarding guidance',
        starter: true,
        growth: true,
        trial5: true,
        trial10: true,
        isKey: true,
        tag: '24/7'
      }
    ]
  }
];

const PricingSection = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState('trial'); // 'trial' | 'monthly' (Trials prioritized first)
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all'); // 'all' | category id
  const [selectedMobilePlan, setSelectedMobilePlan] = useState('trial5'); // 'trial5' | 'trial10' | 'starter' | 'growth'
  const [mobileExpandedCat, setMobileExpandedCat] = useState('core-limits');
  const [loadingPlan, setLoadingPlan] = useState(null);
  const [actionNotice, setActionNotice] = useState(null);

  // Calculate total feature count
  const totalFeatures = featureCategories.reduce((acc, cat) => acc + cat.features.length, 0);

  // Sync mobile selected plan when activeTab switches
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    if (tab === 'trial') {
      if (selectedMobilePlan === 'starter' || selectedMobilePlan === 'growth') {
        setSelectedMobilePlan('trial5');
      }
    } else {
      if (selectedMobilePlan === 'trial5' || selectedMobilePlan === 'trial10') {
        setSelectedMobilePlan('growth');
      }
    }
  };

  const handlePlanAction = (planId, planName) => {
    setLoadingPlan(planId);
    setTimeout(() => {
      setLoadingPlan(null);
      setActionNotice(`Selected ${planName}! Redirecting...`);
      setTimeout(() => {
        setActionNotice(null);
        if (onNavigate) {
          onNavigate('contact');
        }
      }, 1200);
    }, 500);
  };

  const mobilePlans = {
    trial5: {
      id: 'trial5',
      name: 'Trial 5',
      tab: 'trial',
      subtitle: '5 inboxes for 5 days',
      price: '₹500',
      period: 'One-time payment',
      badge: 'Risk-Free',
      badgeStyle: 'bg-purple-100 text-purple-700 border-purple-200',
      btnText: 'Start Trial 5',
      btnStyle: 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 hover:bg-purple-700',
      limits: [
        { label: 'Email Inboxes', val: '5 Inboxes', note: '5 days access' },
        { label: 'LinkedIn Account', val: '1 Account', note: 'Full automation' },
        { label: 'Credits Included', val: '150 Credits', note: 'Enrichment test' },
        { label: 'Plan Duration', val: '5 Days', note: 'One-time payment' }
      ],
      highlights: [
        'Full platform access for 5 days',
        'Launch multi-channel test campaign',
        'Unified inbox & AI personalization',
        'Test email warmup & deliverability',
        'Zero recurring commitment'
      ]
    },
    trial10: {
      id: 'trial10',
      name: 'Trial 10',
      tab: 'trial',
      subtitle: '10 inboxes for 5 days',
      price: '₹750',
      period: 'One-time payment',
      badge: 'Max Power Trial',
      badgeStyle: 'bg-pink-100 text-pink-700 border-pink-200',
      btnText: 'Start Trial 10',
      btnStyle: 'bg-purple-600 text-white shadow-lg shadow-purple-500/25 hover:bg-purple-700',
      limits: [
        { label: 'Email Inboxes', val: '10 Inboxes', note: '5 days high volume' },
        { label: 'LinkedIn Account', val: '1 Account', note: 'Full automation' },
        { label: 'Credits Included', val: '150 Credits', note: 'Enrichment test' },
        { label: 'Plan Duration', val: '5 Days', note: 'One-time payment' }
      ],
      highlights: [
        'Full 10-inbox capacity for 5 days',
        'Test high-volume multi-channel outreach',
        'Unified inbox & AI personalization',
        'Deliverability & spam-shield check',
        'Zero recurring commitment'
      ]
    },
    starter: {
      id: 'starter',
      name: 'Starter',
      tab: 'monthly',
      subtitle: 'For solopreneurs & founders',
      price: '₹8,000',
      period: '+ GST / month',
      badge: 'Solopreneur',
      badgeStyle: 'bg-slate-100 text-slate-700 border-slate-200',
      btnText: 'Choose Starter',
      btnStyle: 'bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white',
      limits: [
        { label: 'Email Inboxes', val: '5 Inboxes', note: 'Rotation & warmup' },
        { label: 'LinkedIn Account', val: '1 Account', note: 'Dedicated profile' },
        { label: 'Credits Included', val: '2,000 / mo', note: 'Lead enrichment' },
        { label: 'Plan Duration', val: 'Monthly', note: 'Billed monthly' }
      ],
      highlights: [
        'Visual multi-channel campaign builder',
        'AI message personalization & rewriting',
        'Unified multi-channel CRM inbox',
        'Human-like sending cadence & safety',
        'Analytics & live conversion reports'
      ]
    },
    growth: {
      id: 'growth',
      name: 'Growth',
      tab: 'monthly',
      subtitle: 'For scaling teams & agencies',
      price: '₹10,000',
      period: '+ GST / month',
      badge: '★ Most Popular',
      badgeStyle: 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-xs',
      btnText: 'Choose Growth',
      btnStyle: 'bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover',
      limits: [
        { label: 'Email Inboxes', val: '10 Inboxes', note: 'Double inbox rotation' },
        { label: 'LinkedIn Account', val: '1 Account', note: 'Dedicated profile' },
        { label: 'Credits Included', val: '2,000 / mo', note: 'Lead enrichment' },
        { label: 'Plan Duration', val: 'Monthly', note: 'Billed monthly' }
      ],
      highlights: [
        'Everything in Starter with 10 inboxes',
        'Double daily email sending throughput',
        'AI hyper-personalized hooks & icebreakers',
        'Conditional workflow branching logic',
        'Priority 24/7 support & onboarding'
      ]
    }
  };

  const currentMobilePlan = mobilePlans[selectedMobilePlan];

  return (
    <section id="pricing" className="py-10 sm:py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden text-slate-800">
      {/* Ambient background glow - soft light indigo */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[450px] bg-gradient-to-tr from-primary/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none -z-10"></div>

      {/* Global Toast Notification Banner */}
      {actionNotice && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 bg-slate-900 text-white px-5 py-3 rounded-2xl shadow-2xl border border-slate-700 text-xs sm:text-sm font-bold flex items-center gap-2.5 animate-in fade-in slide-in-from-top-4 duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>{actionNotice}</span>
        </div>
      )}

      <div className="container mx-auto px-4 sm:px-6">
        
        {/* ========================================================================= */}
        {/* ================= HEADER & SEGMENTED SWITCHER ========================== */}
        {/* ========================================================================= */}
        <div className="relative text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          {/* Floating Decorative Chips (Desktop) */}
          <div className="hidden lg:flex absolute -left-20 top-0 items-center justify-center w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 shadow-md shadow-purple-500/10 -rotate-12 border border-purple-100">
            <SendIcon />
          </div>
          <div className="hidden lg:flex absolute -left-12 bottom-6 items-center justify-center w-11 h-11 rounded-2xl bg-emerald-50 text-emerald-600 shadow-md shadow-emerald-500/10 rotate-6 border border-emerald-100">
            <BarChartIcon />
          </div>
          <div className="hidden lg:flex absolute -right-20 top-2 items-center justify-center w-12 h-12 rounded-2xl bg-purple-50 text-primary shadow-md shadow-purple-500/10 rotate-12 font-bold text-sm border border-purple-100">
            <span className="font-extrabold text-base">AI</span>
          </div>
          <div className="hidden lg:flex absolute -right-12 bottom-4 items-center justify-center w-11 h-11 rounded-2xl bg-amber-50 text-amber-600 shadow-md shadow-amber-500/10 -rotate-6 border border-amber-100">
            <MailIcon />
          </div>

          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-200 px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold tracking-wider text-purple-700 uppercase mb-3 sm:mb-4 shadow-2xs">
            START RISK-FREE TODAY
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-3 leading-tight">
            Simple, <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-indigo-600 to-primary">transparent</span> pricing.
          </h2>

          {/* Subtitle */}
          <p className="text-xs sm:text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-6 sm:mb-8 font-medium leading-relaxed">
            Test Creamstack with a risk-free 5-day trial or upgrade to a full monthly recurring plan. Zero hidden limits.
          </p>

          {/* Segmented Control Switcher (5-Day Trials FIRST, Monthly SECOND) */}
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200/90 shadow-inner w-full max-w-xs sm:w-auto">
            <button
              onClick={() => handleTabChange('trial')}
              className={`flex-1 sm:flex-none px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px] cursor-pointer ${
                activeTab === 'trial'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>🎯 5-Day Trials</span>
            </button>
            <button
              onClick={() => handleTabChange('monthly')}
              className={`flex-1 sm:flex-none px-5 py-3 rounded-xl text-xs sm:text-sm font-extrabold transition-all duration-200 flex items-center justify-center gap-2 min-h-[44px] cursor-pointer ${
                activeTab === 'monthly'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200/60'
                  : 'text-slate-500 hover:text-slate-900'
              }`}
            >
              <span>⚡ Monthly Plans</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ================= MOBILE EXPERIENCE (<md): NATIVE PRODUCT EXPERIENCE ===== */}
        {/* ========================================================================= */}
        <div className="block md:hidden w-full max-w-md mx-auto">
          
          {/* Mobile Plan Selector Tabs */}
          <div className="flex rounded-2xl bg-slate-100 p-1.5 mb-5 border border-slate-200/90 shadow-2xs gap-1">
            {activeTab === 'trial' ? (
              <>
                <button
                  onClick={() => setSelectedMobilePlan('trial5')}
                  className={`flex-1 py-3 px-3 rounded-xl text-xs font-bold transition-all min-h-[44px] flex flex-col items-center justify-center cursor-pointer active:scale-98 ${
                    selectedMobilePlan === 'trial5'
                      ? 'bg-white text-purple-700 shadow-sm border border-purple-200 ring-2 ring-purple-500/10'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="font-extrabold text-xs">Trial 5</span>
                  <span className="text-[10px] text-purple-600 font-semibold mt-0.5">₹500 (5 days)</span>
                </button>
                <button
                  onClick={() => setSelectedMobilePlan('trial10')}
                  className={`flex-1 py-3 px-3 rounded-xl text-xs font-bold transition-all min-h-[44px] flex flex-col items-center justify-center cursor-pointer active:scale-98 ${
                    selectedMobilePlan === 'trial10'
                      ? 'bg-white text-purple-700 shadow-sm border border-purple-200 ring-2 ring-purple-500/10'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="font-extrabold text-xs">Trial 10</span>
                  <span className="text-[10px] text-purple-600 font-semibold mt-0.5">₹750 (5 days)</span>
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setSelectedMobilePlan('starter')}
                  className={`flex-1 py-3 px-3 rounded-xl text-xs font-bold transition-all min-h-[44px] flex flex-col items-center justify-center cursor-pointer active:scale-98 ${
                    selectedMobilePlan === 'starter'
                      ? 'bg-white text-slate-900 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="font-extrabold text-xs">Starter</span>
                  <span className="text-[10px] text-slate-500 font-semibold mt-0.5">₹8,000 / mo</span>
                </button>
                <button
                  onClick={() => setSelectedMobilePlan('growth')}
                  className={`flex-1 py-3 px-3 rounded-xl text-xs font-bold transition-all min-h-[44px] relative flex flex-col items-center justify-center cursor-pointer active:scale-98 ${
                    selectedMobilePlan === 'growth'
                      ? 'bg-white text-primary shadow-sm border border-primary/30 ring-2 ring-primary/10'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="absolute -top-2.5 right-2 bg-gradient-to-r from-pink-500 to-primary text-white text-[8px] font-extrabold px-2 py-0.5 rounded-full uppercase shadow-xs">
                    Popular
                  </span>
                  <span className="font-extrabold text-xs">Growth ★</span>
                  <span className="text-[10px] text-primary/90 font-semibold mt-0.5">₹10,000 / mo</span>
                </button>
              </>
            )}
          </div>

          {/* Active Plan Mobile Spotlight Card */}
          <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-5 sm:p-6 transition-all duration-300 relative">
            
            {/* Top Accent bar */}
            {(selectedMobilePlan === 'trial5' || selectedMobilePlan === 'trial10') && (
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-600"></div>
            )}
            {selectedMobilePlan === 'growth' && (
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-primary via-indigo-600 to-purple-600"></div>
            )}

            {/* Plan Card Header */}
            <div className="flex items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-2xl font-extrabold text-slate-900 tracking-tight m-0">
                    {currentMobilePlan.name}
                  </h3>
                  <span className={`text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border ${currentMobilePlan.badgeStyle}`}>
                    {currentMobilePlan.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-medium mt-1 m-0">
                  {currentMobilePlan.subtitle}
                </p>
              </div>

              {/* Price Tag */}
              <div className="text-right shrink-0">
                <div className="text-2xl font-black text-slate-900 tracking-tight leading-none">
                  {currentMobilePlan.price}
                </div>
                <div className="text-[10px] text-slate-500 font-medium mt-1">
                  {currentMobilePlan.period}
                </div>
              </div>
            </div>

            {/* Quota Chips Grid */}
            <div className="grid grid-cols-2 gap-2.5 my-5">
              {currentMobilePlan.limits.map((l, idx) => (
                <div key={idx} className="bg-slate-50 border border-slate-100 rounded-2xl p-3 flex flex-col justify-center">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-slate-400">
                    {l.label}
                  </span>
                  <span className="font-extrabold text-xs sm:text-sm text-slate-900 mt-0.5">
                    {l.val}
                  </span>
                  <span className="text-[9px] text-purple-600 font-semibold mt-0.5">
                    {l.note}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Action Button */}
            <button
              onClick={() => handlePlanAction(currentMobilePlan.id, currentMobilePlan.name)}
              disabled={loadingPlan === currentMobilePlan.id}
              className={`w-full py-3.5 px-5 rounded-2xl font-extrabold text-sm transition-all duration-200 min-h-[48px] flex items-center justify-center gap-2 cursor-pointer shadow-md active:scale-[0.98] ${currentMobilePlan.btnStyle} ${loadingPlan === currentMobilePlan.id ? 'opacity-80 cursor-wait' : ''}`}
            >
              {loadingPlan === currentMobilePlan.id ? (
                <>
                  <svg className="animate-spin h-4 w-4 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>{currentMobilePlan.btnText}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </>
              )}
            </button>

            {/* Included Features Checklist */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-3">
                Key Benefits Included:
              </span>
              <div className="space-y-2.5">
                {currentMobilePlan.highlights.map((h, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                    <div className="shrink-0 mt-0.5">
                      <CheckCircle />
                    </div>
                    <span className="font-medium leading-snug">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Collapsible Mobile Feature Specs Breakdown */}
            <div className="mt-6 pt-4 border-t border-slate-100">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block mb-2.5">
                Detailed Feature Specifications ({totalFeatures}+)
              </span>

              {/* Accordion Categories */}
              <div className="space-y-2">
                {featureCategories.map((cat) => {
                  const isCatOpen = mobileExpandedCat === cat.id;
                  return (
                    <div key={cat.id} className="border border-slate-200/80 rounded-2xl overflow-hidden bg-white">
                      <button
                        onClick={() => setMobileExpandedCat(isCatOpen ? null : cat.id)}
                        className="w-full p-3.5 bg-slate-50/80 hover:bg-slate-100 min-h-[44px] flex items-center justify-between text-left text-xs font-bold text-slate-900 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-purple-600 text-[11px] shrink-0 shadow-2xs">
                            {cat.icon}
                          </span>
                          <span className="truncate font-extrabold text-xs">{cat.category}</span>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-2">
                          <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-full border ${cat.badgeColor}`}>
                            {cat.badge}
                          </span>
                          <svg 
                            width="14" 
                            height="14" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2.5" 
                            className={`transition-transform duration-200 ${isCatOpen ? 'rotate-180 text-purple-600' : 'text-slate-400'}`}
                          >
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </div>
                      </button>

                      {/* Feature rows inside open accordion */}
                      {isCatOpen && (
                        <div className="p-3.5 divide-y divide-slate-100 bg-white">
                          {cat.features.map((feat, fIdx) => {
                            const planVal = feat[selectedMobilePlan];
                            const isText = typeof planVal === 'string';

                            return (
                              <div key={fIdx} className="py-2.5 flex items-start justify-between gap-3">
                                <div className="flex-1 pr-2">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className="font-bold text-xs text-slate-800">{feat.name}</span>
                                    {feat.tag && (
                                      <span className="text-[8px] font-extrabold uppercase px-1.5 py-0.2 rounded bg-purple-50 text-purple-700 border border-purple-100">
                                        {feat.tag}
                                      </span>
                                    )}
                                  </div>
                                  <p className="text-[10px] text-slate-500 m-0 mt-0.5 line-clamp-2 leading-relaxed">{feat.desc}</p>
                                </div>
                                <div className="shrink-0 text-right font-bold text-xs">
                                  {isText ? (
                                    <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 text-[11px] font-extrabold border border-purple-100">
                                      {planVal}
                                    </span>
                                  ) : planVal ? (
                                    <CheckCircle />
                                  ) : (
                                    <span className="text-slate-300 font-bold">—</span>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Quick Support / Need Help pill */}
          <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-purple-50/80 via-slate-50 to-indigo-50/80 border border-purple-100/80 flex items-center justify-between gap-3 text-xs shadow-2xs">
            <div>
              <span className="font-bold text-slate-900 block mb-0.5">Need custom volume limits?</span>
              <span className="text-slate-500 text-[11px]">Talk to our team for enterprise tier options.</span>
            </div>
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="px-3.5 py-2 rounded-xl bg-white border border-purple-200 text-purple-700 font-extrabold text-xs shadow-2xs hover:bg-purple-600 hover:text-white transition-all shrink-0 cursor-pointer min-h-[40px]"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ================= DESKTOP EXPERIENCE (md+): ELEGANT COMPARISON GRID ==== */}
        {/* ========================================================================= */}
        <div className="hidden md:block max-w-[1140px] mx-auto overflow-x-auto pb-4 [scrollbar-width:thin]">
          <div className="min-w-[880px] bg-white rounded-3xl border border-slate-200/90 shadow-2xl overflow-hidden transition-all duration-300">
            
            {/* Master Grid Table Header (Trials FIRST in Col 2 & 3, Monthly SECOND in Col 4 & 5) */}
            <div className="grid grid-cols-5 border-b border-slate-200 bg-white sticky top-0 z-20">
              {/* Top Left Header Card (Col 1) */}
              <div className="p-6 flex flex-col justify-between border-r border-slate-200 bg-slate-50/70">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center">
                      <StarIcon />
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-purple-700">PLAN COMPARISON</span>
                  </div>
                  <p className="text-xs text-slate-600 m-0 leading-relaxed font-medium">
                    Transparent features with no hidden limits.
                  </p>
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    {totalFeatures} Capabilities
                  </span>
                </div>
              </div>

              {/* 5-Day Trials Header FIRST (Col 2 & 3) */}
              <div className={`col-span-2 grid grid-cols-2 border-r border-slate-200 ${activeTab === 'monthly' ? 'opacity-60 grayscale-[20%]' : ''}`}>
                <div className="col-span-2 bg-gradient-to-r from-purple-50 via-pink-50/80 to-purple-50 text-purple-700 py-2 text-center text-xs font-extrabold tracking-wider uppercase border-b border-purple-100 flex items-center justify-center gap-1.5">
                  <span>5-DAY RISK-FREE TRIALS</span>
                </div>

                {/* Trial 5 Header */}
                <div className="p-6 text-center border-r border-slate-200 flex flex-col justify-between hover:bg-slate-50/50 transition-colors">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Trial 5</h3>
                    <p className="text-[11px] text-slate-500 font-medium m-0 mb-3">5 inboxes for 5 days</p>
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">₹500</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">One-time payment</div>
                  </div>
                  <button 
                    onClick={() => handlePlanAction('trial5', 'Trial 5')}
                    disabled={loadingPlan === 'trial5'}
                    className="mt-6 w-full py-2.5 px-4 rounded-xl border-2 border-purple-200 text-purple-700 font-extrabold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200 text-sm min-h-[44px] cursor-pointer"
                  >
                    {loadingPlan === 'trial5' ? 'Processing...' : 'Start Trial 5'}
                  </button>
                </div>

                {/* Trial 10 Header */}
                <div className="p-6 text-center flex flex-col justify-between hover:bg-slate-50/50 transition-colors">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Trial 10</h3>
                    <p className="text-[11px] text-slate-500 font-medium m-0 mb-3">10 inboxes for 5 days</p>
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">₹750</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">One-time payment</div>
                  </div>
                  <button 
                    onClick={() => handlePlanAction('trial10', 'Trial 10')}
                    disabled={loadingPlan === 'trial10'}
                    className="mt-6 w-full py-2.5 px-4 rounded-xl border-2 border-purple-200 text-purple-700 font-extrabold hover:bg-purple-600 hover:text-white hover:border-purple-600 transition-all duration-200 text-sm min-h-[44px] cursor-pointer"
                  >
                    {loadingPlan === 'trial10' ? 'Processing...' : 'Start Trial 10'}
                  </button>
                </div>
              </div>

              {/* Monthly Header SECOND (Col 4 & 5) */}
              <div className={`col-span-2 grid grid-cols-2 ${activeTab === 'trial' ? 'opacity-60 grayscale-[20%]' : ''}`}>
                <div className="col-span-2 bg-gradient-to-r from-primary/10 via-indigo-50/80 to-primary/10 text-primary py-2 text-center text-xs font-extrabold tracking-wider uppercase border-b border-primary/20 flex items-center justify-center gap-1.5">
                  <span>MONTHLY RECURRING PLANS</span>
                </div>

                {/* Starter Plan Header */}
                <div className="p-6 text-center border-r border-slate-200 flex flex-col justify-between hover:bg-slate-50/50 transition-colors">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Starter</h3>
                    <p className="text-[11px] text-slate-500 font-medium m-0 mb-3">For solopreneurs & founders</p>
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">₹8,000</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">+ GST / month</div>
                  </div>
                  <button 
                    onClick={() => handlePlanAction('starter', 'Starter')}
                    disabled={loadingPlan === 'starter'}
                    className="mt-6 w-full py-2.5 px-4 rounded-xl border-2 border-primary/40 text-primary font-extrabold hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 text-sm min-h-[44px] cursor-pointer"
                  >
                    {loadingPlan === 'starter' ? 'Processing...' : 'Choose Starter'}
                  </button>
                </div>

                {/* Growth Plan Header */}
                <div className="p-6 text-center relative bg-gradient-to-b from-primary/[0.04] to-transparent flex flex-col justify-between border-l border-slate-200 shadow-inner">
                  <div>
                    <span className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[10px] font-extrabold tracking-wider uppercase px-3 py-0.5 rounded-full shadow-xs mb-2">
                      ★ Most Popular
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mb-1">Growth</h3>
                    <p className="text-[11px] text-primary font-semibold m-0 mb-3">For scaling teams & agencies</p>
                    <div className="text-3xl font-extrabold text-slate-900 tracking-tight">₹10,000</div>
                    <div className="text-xs text-slate-500 font-medium mt-1">+ GST / month</div>
                  </div>
                  <button 
                    onClick={() => handlePlanAction('growth', 'Growth')}
                    disabled={loadingPlan === 'growth'}
                    className="mt-6 w-full py-2.5 px-4 rounded-xl bg-primary text-white font-extrabold shadow-lg shadow-primary/25 hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-200 text-sm min-h-[44px] cursor-pointer"
                  >
                    {loadingPlan === 'growth' ? 'Processing...' : 'Choose Growth'}
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Category Filter Bar when expanded */}
            {isExpanded && (
              <div className="bg-slate-50 border-b border-slate-200 px-6 py-3 flex flex-wrap items-center justify-between gap-3 animate-in fade-in duration-200">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-900">
                  <span className="text-slate-400">Filter by category:</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <button
                    onClick={() => setActiveCategoryFilter('all')}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      activeCategoryFilter === 'all'
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    All Categories ({featureCategories.length})
                  </button>
                  {featureCategories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategoryFilter(cat.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeCategoryFilter === cat.id
                          ? 'bg-purple-600 text-white shadow-xs'
                          : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{cat.badge}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Feature List Rendering (Desktop Grid Table with Trials FIRST) */}
            <div className="divide-y divide-slate-100">
              {!isExpanded ? (
                // COLLAPSED VIEW: Key Highlights
                <div>
                  {/* Category 1 Header */}
                  <div className="bg-slate-100/80 px-6 py-3 border-y border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center text-purple-600 text-xs">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                        </svg>
                      </span>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Core Limits & Channels
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-indigo-50 text-indigo-700 border-indigo-200">
                      Limits
                    </span>
                  </div>

                  {featureCategories[0].features.map((item, itemIdx) => (
                    <div 
                      key={itemIdx} 
                      className="grid grid-cols-5 items-center hover:bg-slate-50/90 transition-all duration-150 py-3.5 px-6 group"
                    >
                      {/* Col 1: Feature Title */}
                      <div className="pr-4">
                        <div className="flex items-center gap-2 flex-wrap">
                          {item.icon && <span className="shrink-0">{item.icon}</span>}
                          <span className="font-bold text-sm text-slate-900 group-hover:text-purple-600 transition-colors">
                            {item.name}
                          </span>
                          {item.tag && (
                            <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md bg-purple-100 text-purple-700 border border-purple-200">
                              {item.tag}
                            </span>
                          )}
                        </div>
                        {item.desc && (
                          <p className="text-[11px] text-slate-500 m-0 mt-0.5 font-medium leading-snug line-clamp-1 group-hover:text-slate-600">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      {/* Col 2: Trial 5 */}
                      <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-purple-700' : 'text-slate-700'}`}>
                        <span className="font-semibold">{item.trial5}</span>
                      </div>

                      {/* Col 3: Trial 10 */}
                      <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-purple-700' : 'text-slate-700'}`}>
                        <span className="font-semibold">{item.trial10}</span>
                      </div>

                      {/* Col 4: Starter */}
                      <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-primary' : 'text-slate-700'}`}>
                        <span className="font-semibold">{item.starter}</span>
                      </div>

                      {/* Col 5: Growth */}
                      <div className={`text-center text-sm bg-primary/[0.03] border-x border-primary/10 py-2 ${item.isHighlight ? 'font-bold text-primary' : 'text-slate-800 font-semibold'}`}>
                        <span className="font-bold text-primary">{item.growth}</span>
                      </div>
                    </div>
                  ))}

                  {/* Category 2 Header */}
                  <div className="bg-slate-100/80 px-6 py-3 border-y border-slate-200/80 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center text-amber-500 text-xs">
                        <StarIcon />
                      </span>
                      <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                        Key Capabilities & Differentiators
                      </span>
                    </div>
                    <span className="text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border bg-amber-50 text-amber-700 border-amber-200">
                      Spotlight
                    </span>
                  </div>

                  {featureCategories
                    .slice(1)
                    .flatMap(c => c.features)
                    .filter(f => f.isKey)
                    .map((item, itemIdx) => (
                      <div 
                        key={itemIdx} 
                        className="grid grid-cols-5 items-center hover:bg-slate-50/90 transition-all duration-150 py-3.5 px-6 group"
                      >
                        <div className="pr-4">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-sm text-slate-900 group-hover:text-purple-600 transition-colors">
                              {item.name}
                            </span>
                            {item.tag && (
                              <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${
                                item.tag === 'Popular' 
                                  ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                                  : item.tag === 'Top Value' || item.tag === 'Crucial'
                                  ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                  : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                              }`}>
                                {item.tag}
                              </span>
                            )}
                          </div>
                          {item.desc && (
                            <p className="text-[11px] text-slate-500 m-0 mt-0.5 font-medium leading-snug line-clamp-1 group-hover:text-slate-600">
                              {item.desc}
                            </p>
                          )}
                        </div>

                        {/* Col 2: Trial 5 */}
                        <div className="flex justify-center"><CheckCircle /></div>

                        {/* Col 3: Trial 10 */}
                        <div className="flex justify-center"><CheckCircle /></div>

                        {/* Col 4: Starter */}
                        <div className="flex justify-center"><CheckCircle /></div>

                        {/* Col 5: Growth */}
                        <div className="flex justify-center bg-primary/[0.03] border-x border-primary/10 py-2"><GrowthCheckCircle /></div>
                      </div>
                    ))}
                </div>
              ) : (
                // EXPANDED VIEW: Full Categorized Deep-Dive
                featureCategories
                  .filter(cat => activeCategoryFilter === 'all' || activeCategoryFilter === cat.id)
                  .map((cat) => (
                    <div key={cat.id} className="relative">
                      {/* Section Category Header */}
                      <div className="bg-slate-100/80 px-6 py-3 border-y border-slate-200/80 flex items-center justify-between sticky z-10">
                        <div className="flex items-center gap-2.5">
                          <span className="w-6 h-6 rounded-lg bg-white shadow-xs border border-slate-200 flex items-center justify-center text-purple-600 text-xs">
                            {cat.icon}
                          </span>
                          <span className="text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                            {cat.category}
                          </span>
                        </div>
                        <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full border ${cat.badgeColor || 'bg-slate-100 text-slate-600 border-slate-200'}`}>
                          {cat.badge}
                        </span>
                      </div>

                      {/* Feature Rows */}
                      <div className="divide-y divide-slate-100">
                        {cat.features.map((item, itemIdx) => {
                          const isTextValue = typeof item.trial5 === 'string';

                          return (
                            <div 
                              key={itemIdx} 
                              className="grid grid-cols-5 items-center hover:bg-slate-50/90 transition-all duration-150 py-3.5 px-6 group"
                            >
                              {/* Feature Title + Description + Tag */}
                              <div className="pr-4">
                                <div className="flex items-center gap-2 flex-wrap">
                                  {item.icon && <span className="shrink-0">{item.icon}</span>}
                                  <span className="font-bold text-sm text-slate-900 group-hover:text-purple-600 transition-colors">
                                    {item.name}
                                  </span>
                                  {item.tag && (
                                    <span className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded-md ${
                                      item.tag === 'Popular' 
                                        ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                                        : item.tag === 'Top Value' || item.tag === 'Crucial'
                                        ? 'bg-purple-100 text-purple-700 border border-purple-200'
                                        : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                                    }`}>
                                      {item.tag}
                                    </span>
                                  )}
                                </div>
                                {item.desc && (
                                  <p className="text-[11px] text-slate-500 m-0 mt-0.5 font-medium leading-snug line-clamp-1 group-hover:text-slate-600">
                                    {item.desc}
                                  </p>
                                )}
                              </div>

                              {/* Col 2: Trial 5 Column */}
                              <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-purple-700' : 'text-slate-700'}`}>
                                {isTextValue ? (
                                  <span className="font-semibold">{item.trial5}</span>
                                ) : item.trial5 ? (
                                  <div className="flex justify-center"><CheckCircle /></div>
                                ) : (
                                  <span className="text-slate-300 font-bold">—</span>
                                )}
                              </div>

                              {/* Col 3: Trial 10 Column */}
                              <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-purple-700' : 'text-slate-700'}`}>
                                {isTextValue ? (
                                  <span className="font-semibold">{item.trial10}</span>
                                ) : item.trial10 ? (
                                  <div className="flex justify-center"><CheckCircle /></div>
                                ) : (
                                  <span className="text-slate-300 font-bold">—</span>
                                )}
                              </div>

                              {/* Col 4: Starter Column */}
                              <div className={`text-center text-sm ${item.isHighlight ? 'font-bold text-primary' : 'text-slate-700'}`}>
                                {isTextValue ? (
                                  <span className="font-semibold">{item.starter}</span>
                                ) : item.starter ? (
                                  <div className="flex justify-center"><CheckCircle /></div>
                                ) : (
                                  <span className="text-slate-300 font-bold">—</span>
                                )}
                              </div>

                              {/* Col 5: Growth Column */}
                              <div className={`text-center text-sm bg-primary/[0.03] border-x border-primary/10 py-2 ${item.isHighlight ? 'font-bold text-primary' : 'text-slate-800 font-semibold'}`}>
                                {isTextValue ? (
                                  <span className="font-bold text-primary">{item.growth}</span>
                                ) : item.growth ? (
                                  <div className="flex justify-center"><GrowthCheckCircle /></div>
                                ) : (
                                  <span className="text-slate-300 font-bold">—</span>
                                )}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  ))
              )}
            </div>

            {/* Interactive Expander Bar */}
            <div className="relative border-t border-slate-200 bg-gradient-to-b from-slate-50/40 via-slate-50 to-slate-100/80 p-6 text-center">
              {!isExpanded ? (
                <div className="flex flex-col items-center justify-center gap-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span>Showing top important features. Compare all {totalFeatures}+ granular capabilities below.</span>
                  </div>

                  <button
                    onClick={() => setIsExpanded(true)}
                    className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-2xl bg-white border-2 border-purple-200 text-slate-900 hover:text-purple-700 hover:border-purple-300 font-extrabold text-sm shadow-md shadow-slate-200/60 hover:shadow-lg hover:shadow-purple-500/15 transition-all duration-200 group transform hover:-translate-y-0.5 cursor-pointer min-h-[44px]"
                  >
                    <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-colors text-xs font-extrabold">
                      +
                    </span>
                    <span>View All {totalFeatures}+ Features & Specifications</span>
                    <svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="text-purple-600 group-hover:translate-y-0.5 transition-transform"
                    >
                      <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setIsExpanded(false);
                      setActiveCategoryFilter('all');
                    }}
                    className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-2xl bg-white border border-slate-300 text-slate-700 hover:text-slate-900 font-extrabold text-xs shadow-xs hover:shadow-sm transition-all group cursor-pointer min-h-[44px]"
                  >
                    <svg 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      className="group-hover:-translate-y-0.5 transition-transform"
                    >
                      <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                    <span>Show Key Highlights Only</span>
                  </button>
                </div>
              )}
            </div>

            {/* Bottom Sticky Action Bar (Trials FIRST) */}
            <div className="grid grid-cols-5 items-center bg-slate-50 p-6 border-t border-slate-200">
              <div className="text-xs text-slate-600">
                <span className="font-extrabold text-slate-900 block mb-0.5">Need a custom plan?</span>
                Talk to our team for high-volume enterprise limits.
              </div>
              <div className="px-2">
                <button 
                  onClick={() => handlePlanAction('trial5', 'Trial 5')}
                  disabled={loadingPlan === 'trial5'}
                  className="w-full py-2.5 px-3 rounded-xl border border-purple-300 text-purple-700 hover:bg-purple-600 hover:text-white font-extrabold text-xs transition-colors min-h-[40px] cursor-pointer"
                >
                  Get Trial 5
                </button>
              </div>
              <div className="px-2">
                <button 
                  onClick={() => handlePlanAction('trial10', 'Trial 10')}
                  disabled={loadingPlan === 'trial10'}
                  className="w-full py-2.5 px-3 rounded-xl border border-purple-300 text-purple-700 hover:bg-purple-600 hover:text-white font-extrabold text-xs transition-colors min-h-[40px] cursor-pointer"
                >
                  Get Trial 10
                </button>
              </div>
              <div className="px-2">
                <button 
                  onClick={() => handlePlanAction('starter', 'Starter')}
                  disabled={loadingPlan === 'starter'}
                  className="w-full py-2.5 px-3 rounded-xl border border-primary/40 text-primary hover:bg-primary hover:text-white font-extrabold text-xs transition-colors min-h-[40px] cursor-pointer"
                >
                  Get Starter
                </button>
              </div>
              <div className="px-2">
                <button 
                  onClick={() => handlePlanAction('growth', 'Growth')}
                  disabled={loadingPlan === 'growth'}
                  className="w-full py-2.5 px-3 rounded-xl bg-primary text-white font-extrabold text-xs shadow-md shadow-primary/20 hover:bg-primary-hover transition-colors min-h-[40px] cursor-pointer"
                >
                  Get Growth
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* ================= ADD-ON BANNER: HERO 80 CREDITS TOP-UP ================= */}
        {/* ========================================================================= */}
        <div className="max-w-[1140px] mx-auto mt-12 sm:mt-16">
          <div className="relative rounded-[28px] sm:rounded-[36px] bg-gradient-to-br from-white via-indigo-50/30 to-purple-50/40 border border-slate-200/90 shadow-2xl overflow-hidden p-6 sm:p-10 lg:p-12">
            
            {/* Ambient background glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[400px] bg-gradient-to-bl from-primary/10 via-purple-500/10 to-transparent rounded-full blur-3xl pointer-events-none -z-0"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
              
              {/* Left / Main Content Area (7 cols) */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 px-3.5 py-1.5 rounded-full text-[11px] font-extrabold uppercase tracking-wider text-primary shadow-2xs mb-3">
                    <span>⚡ INSTANT CREDIT TOP-UP</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight m-0">
                    Buy credits when you need them.
                  </h3>
                  <p className="text-xs sm:text-base text-slate-600 m-0 mt-2 font-medium leading-relaxed">
                    Top up instantly and keep your outreach campaigns running without upgrading your monthly plan.
                  </p>
                </div>

                {/* HERO FEATURED CARD: 80 CREDITS FOR ₹800 */}
                <div className="relative rounded-3xl bg-white border-2 border-primary/40 shadow-xl p-6 sm:p-7 transition-all duration-300 hover:shadow-2xl hover:border-primary">
                  
                  {/* Top Badge */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-primary to-purple-600 text-white text-[10px] sm:text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                      ★ BEST VALUE TOP-UP PACK
                    </span>
                    <span className="text-[11px] font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-lg border border-slate-200">
                      One-Time Payment
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-4 border-b border-slate-100">
                    <div>
                      <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                        80 Credits
                      </div>
                      <div className="text-xs text-slate-500 font-medium mt-0.5">
                        Full lead enrichment & contact verification
                      </div>
                    </div>

                    <div className="text-left sm:text-right">
                      <div className="flex items-baseline gap-1 sm:justify-end">
                        <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">₹800</span>
                        <span className="text-xs font-bold text-slate-400">/ pack</span>
                      </div>
                      <span className="text-[10px] font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 inline-block mt-0.5">
                        ₹10 per credit • Never Expires
                      </span>
                    </div>
                  </div>

                  {/* Micro Value Proposition Checklist */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 my-5">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle />
                      <span>Instant credit deposit</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle />
                      <span>Email & phone verified</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle />
                      <span>Zero expiration limit</span>
                    </div>
                  </div>

                  {/* Primary Action CTA Button (48px height) */}
                  <button
                    onClick={() => handlePlanAction('credits-80', '80 Credits Pack')}
                    disabled={loadingPlan === 'credits-80'}
                    className="w-full py-3.5 px-6 rounded-2xl bg-primary hover:bg-primary-hover text-white font-extrabold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-200 min-h-[48px] cursor-pointer active:scale-[0.98]"
                  >
                    {loadingPlan === 'credits-80' ? (
                      <span>Processing Order...</span>
                    ) : (
                      <>
                        <span>Buy 80 Credits Now (₹800)</span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </>
                    )}
                  </button>
                </div>

                {/* Secondary Bulk Volume Option: Request a Discount */}
                <div className="rounded-2xl bg-white/80 border border-slate-200/80 p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-2xs hover:bg-white transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-extrabold text-base shrink-0 border border-purple-200">
                      %
                    </div>
                    <div>
                      <span className="font-extrabold text-slate-900 text-xs sm:text-sm block">Need high-volume credits (500+)?</span>
                      <span className="text-slate-500 text-[11px] sm:text-xs">Request up to <strong className="text-purple-700 font-extrabold">35% bulk discount</strong> for custom volumes.</span>
                    </div>
                  </div>
                  <button
                    onClick={() => onNavigate && onNavigate('contact')}
                    className="px-4 py-2.5 rounded-xl border border-purple-200 text-purple-700 hover:bg-purple-600 hover:text-white font-extrabold text-xs flex items-center gap-1.5 transition-all shrink-0 cursor-pointer min-h-[40px]"
                  >
                    <span>Request Bulk Discount</span>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>

              </div>

              {/* Right Column / Showcase Graphic (5 cols) */}
              <div className="lg:col-span-5 flex items-center justify-center relative py-6 sm:py-8 lg:py-0">
                
                {/* Ambient background glow behind card stack */}
                <div className="absolute w-[280px] h-[280px] bg-gradient-to-tr from-primary/20 via-purple-500/20 to-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

                {/* Top-Right Radiating Sparkle Rays */}
                <div className="absolute -top-1 -right-1 text-primary pointer-events-none z-20">
                  <svg width="42" height="42" viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <line x1="20" y1="4" x2="20" y2="10" />
                    <line x1="32" y1="9" x2="27" y2="14" />
                    <line x1="36" y1="20" x2="30" y2="20" />
                  </svg>
                </div>

                {/* Bottom-Left Floating Micro Badge */}
                <div className="hidden sm:flex absolute -bottom-3 -left-4 z-30 items-center gap-1.5 bg-white border border-slate-200/90 shadow-lg px-3 py-1.5 rounded-2xl text-[10px] font-extrabold text-slate-800 -rotate-3 transition-transform hover:scale-105">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Instant Delivery</span>
                </div>

                {/* Stacked 3D Showcase Cards Container */}
                <div className="relative w-[250px] h-[270px] flex items-center justify-center group">
                  {/* Back Card 1 (Soft Indigo/Purple Gradient) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-[36px] transform -rotate-6 scale-[0.98] opacity-75 shadow-lg border border-purple-200/60 transition-transform duration-300 group-hover:-rotate-8"></div>
                  
                  {/* Middle Card 2 (Soft Blue/Pink Gradient) */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-pink-200 rounded-[36px] transform rotate-6 scale-[0.99] opacity-85 shadow-md border border-blue-200/60 transition-transform duration-300 group-hover:rotate-8"></div>
                  
                  {/* Front Hero Card */}
                  <div className="relative bg-white rounded-[32px] p-6 sm:p-7 shadow-2xl border border-slate-200/90 text-center flex flex-col items-center justify-between w-full h-full transform -rotate-1 group-hover:rotate-0 transition-all duration-300 z-10">
                    
                    {/* Pill Badge */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/80 text-primary text-[10px] font-extrabold tracking-widest uppercase shadow-2xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      <span>⚡ 80 CREDITS</span>
                    </div>

                    {/* Logo Box */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-b from-slate-50 to-slate-100/90 border border-slate-200/80 flex items-center justify-center shadow-md shadow-slate-200/50 my-1 group-hover:scale-105 transition-transform duration-300">
                      <img 
                        src="/33.png" 
                        alt="CreamStack Logo" 
                        className="w-10 h-10 object-contain drop-shadow-xs" 
                      />
                    </div>

                    {/* Text Title */}
                    <div>
                      <h4 className="text-base sm:text-lg font-black text-slate-900 tracking-tight leading-tight m-0">
                        Instant Top-Up.<br />
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-indigo-600 to-purple-600">80 Leads Ready.</span>
                      </h4>
                    </div>

                    {/* Micro Stat Footer Tag */}
                    <div className="inline-flex items-center gap-1 text-[10px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/80">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>100% Verified Data</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* CTA Section */}
      <CTASection onNavigate={onNavigate} />
    </section>
  );
};

export default PricingSection;

// SVGs and Icons
function CheckCircle() {
  return (
    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border border-emerald-200/80 shadow-2xs shrink-0">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}

function GrowthCheckCircle() {
  return (
    <div className="w-5 h-5 rounded-full bg-primary/15 text-primary flex items-center justify-center border border-primary/30 shadow-2xs shrink-0">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>
    </div>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-[#0077B5]/10 text-[#0077B5] flex items-center justify-center shrink-0">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.68 1.68 0 1 0-.02-3.36 1.68 1.68 0 0 0 .02 3.36M5.07 18.5h2.79v-8.37H5.07v8.37z"></path>
      </svg>
    </div>
  );
}

function EmailIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-purple-100 text-primary flex items-center justify-center shrink-0">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
        <polyline points="22,6 12,13 2,6"></polyline>
      </svg>
    </div>
  );
}

function CreditIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="8"></circle>
        <line x1="12" y1="8" x2="12" y2="16"></line>
        <line x1="8" y1="12" x2="16" y2="12"></line>
      </svg>
    </div>
  );
}

function ClockIcon() {
  return (
    <div className="w-6 h-6 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center shrink-0">
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
      </svg>
    </div>
  );
}

function SendIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="22" y1="2" x2="11" y2="13"></line>
      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    </svg>
  );
}

function BarChartIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="18" y1="20" x2="18" y2="10"></line>
      <line x1="12" y1="20" x2="12" y2="4"></line>
      <line x1="6" y1="20" x2="6" y2="14"></line>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="4" width="20" height="16" rx="2"></rect>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
    </svg>
  );
}
