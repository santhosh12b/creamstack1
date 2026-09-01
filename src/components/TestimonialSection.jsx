import React from 'react';

const testimonials = [
  {
    text: "You’ve already got something that’s working. I think that’s fantastic.",
    name: "Tracy DuRandt",
    role: "Senior Talent Partner",
    avatar: "/tracy.png"
  },
  {
    text: "We tried your idea, & post comment enrichment is working for us!",
    name: "Porter Bertanyi",
    role: "Senior Account Executive",
    avatar: "/porter.png"
  },
  {
    text: "For the price, it’s hard to find something this complete.",
    name: "Hari Krishnan",
    role: "Business Development Manager",
    avatar: "/hari.png"
  },
  {
    text: "The Autopilot Replies feature is pretty handy. It just takes care of it.",
    name: "Rahavendran",
    role: "3D Animation Artist",
    avatar: "/Rahavendran.png"
  }
];

const stats = [
  { value: "200+", label: "Loved by Active Teams and growing", icon: <TeamIcon />, color: "#3b82f6" },
  { value: "3X+", label: "Faster Lead Research", icon: <UserSearchIcon />, color: "#8b5cf6" },
  { value: "95%+", label: "Verified Emails guaranteed", icon: <ShieldIcon />, color: "#10b981" },
  { value: "4-8X", label: "Average Reply Rate Increase", icon: <TrendingUpIcon />, color: "#f97316" }
];

const TestimonialSection = () => {
  return (
    <section className="py-14 sm:py-20 md:py-24 section-dark">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-[10px] sm:text-xs font-bold tracking-widest uppercase mb-3 sm:mb-4 text-white/60 border border-white/10 px-3.5 py-1 rounded-full inline-block">
            TRUSTED BY OUTBOUND PROFESSIONALS
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 sm:mb-4">
            Loved by teams that <span className="text-primary">live and breathe</span> outbound.
          </h2>
          <p className="text-white/80 text-sm sm:text-lg mt-2 sm:mt-4 mb-8 sm:mb-12 font-medium">
            Join 200+ businesses exploring smarter outreach with Creamstack.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 sm:gap-6 mb-10 sm:mb-16">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-white/5 border border-white/5 rounded-2xl p-5 sm:p-7 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-primary/50">
              <div className="text-4xl sm:text-5xl text-primary leading-none font-serif opacity-50 -mb-2 sm:-mb-4">"</div>
              <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 flex-grow">{t.text}</p>
              <div className="flex items-center gap-3 sm:gap-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-800 bg-cover shrink-0" 
                  style={{ backgroundImage: `url('${t.avatar}')` }}
                ></div>
                <div className="flex flex-col">
                  <h5 className="text-sm sm:text-[0.95rem] m-0 text-white font-bold">{t.name}</h5>
                  <p className="text-xs text-white/50 m-0 mb-1">{t.role}</p>
                  <div className="flex gap-0.5">
                    {[1,2,3,4,5].map(i => <StarIcon key={i} />)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/5 border border-white/5 rounded-2xl p-6 sm:p-7 md:p-8 flex justify-center">
          <div className="flex flex-col sm:flex-row flex-wrap justify-center items-start sm:items-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" 
                  style={{ backgroundColor: `${stat.color}20`, color: stat.color }}
                >
                  {stat.icon}
                </div>
                <div className="flex flex-col">
                  <h3 className="text-2xl m-0 text-white font-bold">{stat.value}</h3>
                  <p className="text-xs text-white/50 m-0 leading-tight">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;

function TeamIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>; }
function UserSearchIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><circle cx="18" cy="11" r="3"></circle><line x1="20.12" y1="13.12" x2="22.5" y2="15.5"></line></svg>; }
function ShieldIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>; }
function MailIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>; }
function TrendingUpIcon() { return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>; }
function StarIcon() { return <svg width="12" height="12" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>; }
