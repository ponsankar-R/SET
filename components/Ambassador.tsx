import React from 'react';
import Section from './Section';
import Button from './Button';
// Ensure you have lucide-react installed: npm i lucide-react
import { Banknote, Award, Users, ArrowRight, Send } from 'lucide-react';

const NetworkIllustration = () => (
  <svg className="w-full h-auto max-h-[350px] drop-shadow-2xl" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background Glow */}
    <circle cx="200" cy="150" r="120" fill="url(#glowGradient)" opacity="0.2" />
    
    {/* Central Hub (SkillEdge) */}
    <circle cx="200" cy="150" r="30" fill="white" />
    <circle cx="200" cy="150" r="25" fill="#1E40AF" />
    <text x="200" y="155" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">S</text>

    {/* Connecting Lines */}
    <line x1="200" y1="150" x2="100" y2="80" stroke="white" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="5 5"/>
    <line x1="200" y1="150" x2="300" y2="80" stroke="white" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="5 5"/>
    <line x1="200" y1="150" x2="100" y2="220" stroke="white" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="5 5"/>
    <line x1="200" y1="150" x2="300" y2="220" stroke="white" strokeWidth="2" strokeOpacity="0.3" strokeDasharray="5 5"/>

    {/* Nodes (Students/Ambassadors) */}
    <circle cx="100" cy="80" r="20" fill="#3B82F6" stroke="white" strokeWidth="2"/>
    <circle cx="300" cy="80" r="20" fill="#8B5CF6" stroke="white" strokeWidth="2"/>
    <circle cx="100" cy="220" r="20" fill="#10B981" stroke="white" strokeWidth="2"/>
    <circle cx="300" cy="220" r="20" fill="#F43F5E" stroke="white" strokeWidth="2"/>

    {/* Earning Badges floating near nodes */}
    <rect x="70" y="40" width="60" height="24" rx="12" fill="white"/>
    <text x="100" y="57" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">₹ Earn</text>

    <rect x="270" y="240" width="60" height="24" rx="12" fill="white"/>
    <text x="300" y="257" textAnchor="middle" fill="#1E40AF" fontSize="10" fontWeight="bold">₹ Earn</text>

    {/* Definitions */}
    <defs>
      <radialGradient id="glowGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 150) rotate(90) scale(120)">
        <stop stopColor="#3B82F6" />
        <stop offset="1" stopColor="#1E40AF" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);

const Ambassador = () => {
  const mailSubject = encodeURIComponent("Application for Campus Ambassador Program");
  const mailBody = encodeURIComponent("Hi SkillEdge Team,\n\nI am interested in joining the Campus Ambassador program. Please let me know the next steps.\n\nName:\nCollege:\nContact Number:");
  const mailtoLink = `mailto:skilledgetechnologies@gmail.com?subject=${mailSubject}&body=${mailBody}`;

  return (
    <Section id="ambassador" background="dark" className="bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto px-4">
        
        {/* Left Column: Content */}
        <div>
          <div className="inline-block px-3 py-1 bg-blue-900/50 border border-blue-500/30 rounded-full text-blue-300 text-sm font-semibold mb-6">
            🚀 Join the Leadership Team
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Lead Your Campus. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Earn While You Learn.
            </span>
          </h2>
          
          <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-lg">
            Join our elite network of Campus Ambassadors. Represent SkillEdge in your college, build your resume, and earn commissions for every successful referral.
          </p>
          
          <div className="space-y-8 mb-10">
            {/* Feature 1 */}
            <div className="flex items-start">
               <div className="bg-green-500/10 p-3 rounded-xl mr-5 text-green-400 shrink-0">
                <Banknote size={28} />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-white mb-1">Generous Commission</h4>
                 <p className="text-slate-400 text-sm">Earn direct payouts for every student who enrolls through you.</p>
               </div>
            </div>
            
            {/* Feature 2 */}
            <div className="flex items-start">
               <div className="bg-purple-500/10 p-3 rounded-xl mr-5 text-purple-400 shrink-0">
                <Award size={28} />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-white mb-1">Excellence Certificate</h4>
                 <p className="text-slate-400 text-sm">Get officially certified for your leadership and marketing skills.</p>
               </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start">
               <div className="bg-blue-500/10 p-3 rounded-xl mr-5 text-blue-400 shrink-0">
                <Users size={28} />
               </div>
               <div>
                 <h4 className="text-xl font-bold text-white mb-1">Network & Grow</h4>
                 <p className="text-slate-400 text-sm">Connect with student leaders across India and mentor others.</p>
               </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="flex flex-col items-start gap-4">
            <Button 
              href={mailtoLink} 
              className="bg-green-600 text-blue-900 font-extrabold hover:bg-blue-50 hover:scale-105 transition-all duration-300 border-none px-8 py-4 rounded-full  text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
            >
              {/* <Send size={20} /> */}
              Apply for CA Program
            </Button>
            
            <p className="text-xs text-blue-200/70 italic flex items-center gap-1.5 bg-blue-900/20 px-3 py-1 rounded-md border border-blue-500/20">
              <span className="text-blue-400 font-bold">*</span> 
              All details shared in mail after you enrolled through button above
            </p>
          </div>
        </div>
        
        {/* Right Column: Illustration */}
        <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative w-full max-w-md bg-slate-800/50 backdrop-blur-sm rounded-3xl p-8 border border-white/10 shadow-2xl">
               <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
               <NetworkIllustration />
               <div className="mt-8 text-center">
                 <p className="text-white font-semibold">Limitless referrals</p>
                 <p className="text-slate-400 text-sm mt-1">Earnings will be directly credited to your bank account</p>
               </div>
            </div>
        </div>
      </div>
    </Section>
  );
};

export default Ambassador;