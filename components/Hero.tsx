import React from 'react';
import Button from './Button';
import { Sparkles, Star, TrendingUp, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 overflow-hidden bg-[#020617] text-white">
      
      {/* --- 1. THE ATMOSPHERE (Royal Background) --- */}
      <div className="absolute inset-0 z-0">
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>
        
        {/* Royal Gold Glow (Top Center - The Halo) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/30 rounded-full blur-[100px] opacity-50 mix-blend-screen"></div>
        {/* Deep Indigo Depth (Bottom) */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-indigo-900/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        
        {/* --- 2. THE HOOK (Social Proof) --- */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 animate-fade-in-up shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-white/10 transition-colors cursor-default">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 border border-[#020617]" />
            ))}
          </div>
          <span className="text-sm font-medium text-blue-200">
            <span className="text-amber-400 font-bold">4.9/5</span> Student Rating
          </span>
          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
        </div>

        {/* --- 3. THE HEADLINE --- */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 leading-[1.15]">
          Bridge the Gap Between <br className="hidden md:block" />
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-b from-white to-blue-200">
              Learning
            </span>
            {/* Subtle underline decoration */}
            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500 opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
               <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
          <span className="mx-4 text-gray-500 font-serif italic font-light">&</span>
          <span className="relative inline-block">
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-yellow-400 drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              Earning
            </span>
          </span>
        </h1>
        
        <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          Don't just watch tutorials. <span className="text-white font-semibold">Build real products.</span> <br className="hidden sm:block" />
          Our hands-on internships are engineered to turn you into a <span className="text-blue-300 border-b border-blue-300/30 pb-0.5">top 1% developer</span>.
        </p>
        
        {/* --- 4. THE ACTION BUTTONS (High Contrast) --- */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 items-center">
          
          {/* Button 1: Primary (Blue - Learning) */}
          <Button 
            href="#domains" 
            className="group relative px-8 py-4 text-lg bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold shadow-[0_0_40px_rgba(37,99,235,0.4)] hover:shadow-[0_0_60px_rgba(37,99,235,0.6)] transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            <span className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-amber-300" />
              Explore Internships
            </span>
          </Button>

          {/* Button 2: Ambassador (Premium Gold/Black - Earning) */}
          {/* Note: using bg-slate-950 to ensure it is SOLID and blocks the blue background */}
          <Button 
            href="#ambassador" 
            className="px-8 py-4 text-lg bg-slate-950 text-amber-400 border border-amber-500/50 hover:bg-slate-900 hover:border-amber-400 hover:text-amber-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            Become an Ambassador
          </Button>
        </div>

        {/* --- 5. THE TRUST ANCHORS --- */}
        <div className="mt-20 pt-10 border-t border-white/5 grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-70">
          <div className="flex flex-col items-center gap-2">
             <div className="p-3 rounded-full bg-blue-500/10 text-blue-400 mb-1">
                <ShieldCheck size={24} />
             </div>
             <p className="font-semibold text-white">Verified Certificates</p>
             <p className="text-xs text-slate-400">Industry Recognized</p>
          </div>
          <div className="flex flex-col items-center gap-2">
             <div className="p-3 rounded-full bg-amber-500/10 text-amber-400 mb-1">
                <TrendingUp size={24} />
             </div>
             <p className="font-semibold text-white">Career Growth</p>
             <p className="text-xs text-slate-400">Real-world Projects</p>
          </div>
          <div className="col-span-2 md:col-span-1 flex flex-col items-center gap-2">
             <div className="p-3 rounded-full bg-purple-500/10 text-purple-400 mb-1">
                <Sparkles size={24} />
             </div>
             <p className="font-semibold text-white">100% Practical</p>
             <p className="text-xs text-slate-400">No Boring Theory</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;