import React, { useState } from 'react';
import uniboxMockup from '../assets/unibox.webp';
import CTASection from './CTASection';

const UnifiedInboxPage = ({ onNavigate }) => {
  const [activeTabComposer, setActiveTabComposer] = useState('reply'); // 'reply' | 'note'
  const [replyMessage, setReplyMessage] = useState(
    "Hi Sarah! Thanks for reaching out. I'd love to show you a quick 2-minute walkthrough of our multi-channel sequences. Does tomorrow afternoon work for you?"
  );
  const [selectedTag, setSelectedTag] = useState('Interested');

  const categories = [
    { label: 'Interested', count: '142', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
    { label: 'Not Interested', count: '38', color: 'bg-rose-50 text-rose-700 border-rose-200' },
    { label: 'Unsubscribe', count: '12', color: 'bg-purple-50 text-purple-700 border-purple-200' },
    { label: 'Out of Office', count: '29', color: 'bg-blue-50 text-blue-700 border-blue-200' },
    { label: 'Bounced', count: '8', color: 'bg-slate-100 text-slate-700 border-slate-200' }
  ];

  const timelineHistory = [
    {
      date: 'May 10',
      channel: 'in',
      channelName: 'LinkedIn',
      action: 'Connection Accepted',
      desc: 'Sarah accepted your connection request',
      badgeColor: 'bg-[#0077B5] text-white',
      dotColor: 'bg-blue-500'
    },
    {
      date: 'May 11',
      channel: 'in',
      channelName: 'LinkedIn',
      action: 'LinkedIn Message Sent',
      desc: '"Hey Sarah! Loved your recent post on growth marketing..."',
      badgeColor: 'bg-[#0077B5] text-white',
      dotColor: 'bg-blue-500'
    },
    {
      date: 'May 12',
      channel: '✉️',
      channelName: 'Email',
      action: 'Email Sent',
      desc: 'Subject: Quick question about Notion demand gen',
      badgeColor: 'bg-purple-600 text-white',
      dotColor: 'bg-purple-500'
    },
    {
      date: 'May 12',
      channel: '🟢',
      channelName: 'LinkedIn',
      action: 'Reply Received',
      desc: '"Thanks for reaching out! I\'d love to learn more about it."',
      badgeColor: 'bg-emerald-600 text-white',
      dotColor: 'bg-emerald-500'
    }
  ];

  const teamFeatures = [
    {
      icon: '🏷️',
      title: 'All interactions in one place',
      desc: 'Stop logging into 10 different email accounts and LinkedIn tabs.'
    },
    {
      icon: '🔄',
      title: 'Synced to lead profiles',
      desc: 'Every message, stage update, and tag syncs to your master workspace.'
    },
    {
      icon: '👥',
      title: 'Custom Notes & collaboration',
      desc: 'Assign conversations, leave internal notes, and prevent collision.'
    },
    {
      icon: '🎯',
      title: 'Never miss an important reply',
      desc: 'Smart notifications and auto-prioritization for warm leads.'
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
              Unified Inbox
            </div>

            {/* Headline strictly in 2 lines */}
            <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-[3.8rem] text-secondary tracking-tight leading-[1.12] m-0">
              <span className="inline md:whitespace-nowrap">
                Manage All <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-[#a855f7]">Channel</span>
              </span>
              <br />
              <span className="inline md:whitespace-nowrap">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#a855f7] to-[#f472b6]">Conversations</span> From One Inbox
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-text-light leading-relaxed max-w-2xl mx-auto m-0 font-medium">
              Manage, organize, and respond to every conversation across LinkedIn and multiple email inboxes from one unified workspace. Stay on top of replies, and eliminate the need to switch between different platforms.
            </p>


          </div>

          {/* Hero Image Mockup (unibox.png) */}
          <div className="relative mt-12 sm:mt-16 max-w-5xl mx-auto text-left">
            {/* Ambient Glow */}
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10 opacity-70"></div>

            <div className="rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl bg-white border border-slate-200/90 overflow-hidden relative transition-transform duration-500 hover:scale-[1.01]">
              <img 
                src={uniboxMockup} 
                alt="CreamStack Unified Smart Inbox Mockup" 
                className="w-full h-auto object-contain block"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: ROW 1 (3 EQUAL FEATURE CARDS) ================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            
            {/* Card 1: One Inbox */}
            <div className="bg-white rounded-[32px] p-7 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center text-xl mb-4 border border-blue-100 shadow-xs">
                  📥
                </div>
                <h3 className="text-xl font-bold text-secondary m-0 mb-2">One Inbox</h3>
                <p className="text-xs sm:text-sm text-text-light m-0 mb-6 leading-relaxed font-medium">
                  View replies from LinkedIn and all connected inboxes without opening multiple tabs.
                </p>

                {/* Connection Hub Visual */}
                <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200/80 flex items-center justify-between gap-3">
                  <div className="space-y-2.5 flex-1">
                    <div className="bg-white px-3 py-2 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs font-bold text-secondary shadow-2xs">
                      <span className="flex items-center gap-1.5"><span className="text-[#0077B5]">in</span> LinkedIn</span>
                      <span className="text-[10px] bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded-full">12</span>
                    </div>
                    <div className="bg-white px-3 py-2 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs font-bold text-secondary shadow-2xs">
                      <span className="flex items-center gap-1.5"><span>✉️</span> Email Accounts</span>
                      <span className="text-[10px] bg-purple-50 text-primary px-1.5 py-0.5 rounded-full">12</span>
                    </div>
                  </div>

                  <span className="text-slate-300 font-bold">➔</span>

                  <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center text-xl shadow-md shadow-primary/30 shrink-0">
                    📬
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center justify-between">
                <span>Multi-account aggregation</span>
                <span className="text-primary font-bold">Zero Tab Switching ✨</span>
              </div>
            </div>

            {/* Card 2: Reply without leaving Creamstack */}
            <div className="bg-white rounded-[32px] p-7 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-primary flex items-center justify-center text-xl mb-4 border border-blue-100 shadow-xs">
                  🚀
                </div>
                <h3 className="text-xl font-bold text-secondary m-0 mb-2">Reply without leaving Creamstack</h3>
                <p className="text-xs sm:text-sm text-text-light m-0 mb-6 leading-relaxed font-medium">
                  Respond directly from the inbox. No switching between platforms.
                </p>

                {/* Reply Composer Box */}
                <div className="bg-slate-50 rounded-2xl p-3.5 border border-slate-200/80">
                  <div className="flex items-center gap-2 mb-2">
                    <button 
                      onClick={() => setActiveTabComposer('reply')}
                      className={`px-3 py-2 min-h-[44px] rounded-lg text-xs font-bold transition-all ${
                        activeTabComposer === 'reply' ? 'bg-primary text-white shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      Reply
                    </button>
                    <button 
                      onClick={() => setActiveTabComposer('note')}
                      className={`px-3 py-2 min-h-[44px] rounded-lg text-xs font-bold transition-all ${
                        activeTabComposer === 'note' ? 'bg-primary text-white shadow-xs' : 'text-slate-500'
                      }`}
                    >
                      Internal Note
                    </button>
                  </div>

                  <textarea 
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    className="w-full bg-white rounded-xl p-2.5 border border-slate-200 text-[11px] text-slate-700 outline-none focus:border-primary transition-colors resize-none"
                    rows="3"
                  />

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1 text-slate-400 text-xs">
                      <span className="p-1 hover:text-secondary cursor-pointer">✨</span>
                      <span className="p-1 hover:text-secondary cursor-pointer">📎</span>
                      <span className="p-1 hover:text-secondary cursor-pointer">😊</span>
                    </div>
                    <button className="px-4 py-2 min-h-[44px] rounded-xl bg-primary text-white text-xs font-bold shadow-xs hover:bg-primary-hover flex items-center gap-1">
                      <span>Send</span>
                      <span className="text-[10px]">▼</span>
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center justify-between">
                <span>Direct 2-way sync</span>
                <span className="text-emerald-600 font-bold">Instant Delivery ⚡</span>
              </div>
            </div>

            {/* Card 3: AI Reply Assistant */}
            <div className="bg-white rounded-[32px] p-7 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between hover:shadow-xl transition-shadow">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-4 border border-purple-100 shadow-xs">
                  ✨
                </div>
                <h3 className="text-xl font-bold text-secondary m-0 mb-2">Autopilot Reply</h3>
                <p className="text-xs sm:text-sm text-text-light m-0 mb-6 leading-relaxed font-medium">
                  Generate reply suggestions instantly. Refine, rewrite, shorten, or expand before sending.
                </p>

                {/* AI Capability List */}
                <div className="space-y-2">
                  <div className="bg-[#fcfaff] p-2.5 rounded-xl border border-purple-100 flex items-center justify-between text-xs font-bold text-purple-900">
                    <span className="flex items-center gap-2"><span>✨</span> Generate Reply</span>
                    <span className="text-[10px] text-primary bg-purple-100 px-2 py-0.5 rounded-md">Auto-draft</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs font-medium text-slate-700">
                    <span className="flex items-center gap-2"><span>✍️</span> Improve Grammar</span>
                    <span className="text-[10px] text-slate-400">1-click</span>
                  </div>
                  <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80 flex items-center justify-between text-xs font-medium text-slate-700">
                    <span className="flex items-center gap-2"><span>🔄</span> Rewrite Tone</span>
                    <span className="text-[10px] text-slate-400">Casual / Pro</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80 text-xs font-medium text-slate-700 flex items-center gap-1.5">
                      <span>⚡</span> Shorten
                    </div>
                    <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80 text-xs font-medium text-slate-700 flex items-center gap-1.5">
                      <span>↔️</span> Expand
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center justify-between">
                <span>Context-aware intelligence</span>
                <span className="text-purple-600 font-bold">GPT-4o Engine 🤖</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 3: ROW 2 (AUTOMATIC CATEGORIZATION + CONVERSATION HISTORY) ================= */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            
            {/* Left Card: Automatic Categorization (5 cols) */}
            <div className="lg:col-span-5 bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-primary flex items-center justify-center font-bold text-lg border border-purple-100">
                    🏷️
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary m-0">Automatic Categorization</h3>
                    <p className="text-xs sm:text-sm text-text-light m-0 mt-0.5 font-medium">Email replies are automatically tagged.</p>
                  </div>
                </div>

                {/* Auto Categories */}
                <div className="space-y-2 mb-6">
                  {categories.map((cat, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setSelectedTag(cat.label)}
                      className={`p-3 min-h-[44px] rounded-2xl border flex items-center justify-between text-xs font-bold transition-all cursor-pointer ${cat.color} ${
                        selectedTag === cat.label ? 'ring-2 ring-primary ring-offset-1 scale-[1.01]' : 'hover:opacity-90'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-current"></span>
                        {cat.label}
                      </span>
                      <span className="text-[11px] opacity-80">{cat.count} replies</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 text-xs text-slate-700">
                <div className="font-bold text-secondary mb-1">Manual Tagging for LinkedIn</div>
                <p className="text-slate-500 m-0 mb-3 text-[11px] leading-relaxed">
                  LinkedIn conversations can also be tagged manually for easy team organization.
                </p>
                <button className="w-full py-3 min-h-[44px] rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors shadow-2xs">
                  Add / Edit Tags
                </button>
              </div>
            </div>

            {/* Right Card: Complete Conversation History (7 cols) */}
            <div className="lg:col-span-7 bg-white rounded-[32px] p-7 sm:p-9 border border-slate-200/80 shadow-lg shadow-slate-100/80 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg border border-blue-100">
                    🔄
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-secondary m-0">Complete Conversation History</h3>
                    <p className="text-xs sm:text-sm text-text-light m-0 mt-0.5 font-medium">Keep every channel connected for each lead.</p>
                  </div>
                </div>

                {/* Lead Profile Header */}
                <div className="bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80 flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://i.pravatar.cc/100?img=32" 
                      alt="Sarah Johnson" 
                      className="w-10 h-10 rounded-xl object-cover border border-slate-200 shadow-2xs"
                    />
                    <div>
                      <div className="text-xs font-bold text-secondary">Sarah Johnson</div>
                      <div className="text-[11px] text-text-light">Marketing Manager at Notion</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-6 h-6 rounded-lg bg-[#0077B5] text-white flex items-center justify-center text-[10px] font-bold">in</span>
                    <span className="w-6 h-6 rounded-lg bg-purple-600 text-white flex items-center justify-center text-[10px]">✉️</span>
                  </div>
                </div>

                {/* Unified Timeline Stream */}
                <div className="relative pl-6 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
                  {timelineHistory.map((item, idx) => (
                    <div key={idx} className="relative flex items-start justify-between gap-3 text-xs">
                      {/* Timeline Dot */}
                      <div className={`absolute -left-6 top-1 w-3 h-3 rounded-full border-2 border-white ${item.dotColor} shadow-xs`}></div>
                      
                      <div>
                        <div className="flex items-center gap-2">
                          <span className={`px-1.5 py-0.2 rounded text-[9px] font-bold ${item.badgeColor}`}>
                            {item.channel}
                          </span>
                          <span className="font-bold text-secondary">{item.action}</span>
                          <span className="text-[10px] text-slate-400 font-medium">({item.channelName})</span>
                        </div>
                        <p className="text-slate-600 m-0 mt-0.5 text-[11px] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>

                      <span className="text-[10px] font-bold text-slate-400 shrink-0">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 text-xs text-slate-500 font-medium flex items-center justify-between">
                <span>Multi-touchpoint thread consolidation</span>
                <span className="text-primary font-bold">Single Screen Timeline 📜</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 4: BUILT FOR TEAMS (4 PILLARS) ================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 border border-blue-100">
                👥 Built for Teams
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary tracking-tight m-0 mb-3">
                Never lose track of a conversation again.
              </h2>
              <p className="text-base text-text-light leading-relaxed m-0 font-medium">
                Every interaction, status update, and reply is synced back to the lead profile, keeping your entire outreach workflow organized.
              </p>
            </div>

            {/* 4 Feature Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamFeatures.map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-slate-50/70 hover:bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-xl mb-4 group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-base font-bold text-secondary m-0 mb-2">{item.title}</h4>
                    <p className="text-xs text-text-light m-0 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>



      {/* ================= SECTION 6: MASTER COMMON CTA BANNER ================= */}
      <CTASection onNavigate={onNavigate} />

    </div>
  );
};

export default UnifiedInboxPage;
