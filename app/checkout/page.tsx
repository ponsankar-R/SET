"use client";
import React from 'react';
import Link from 'next/link';

const CheckoutPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans flex flex-col relative overflow-hidden">
      {/* Royal Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 p-6 flex justify-between items-center container mx-auto">
        <Link href="/" className="text-2xl font-bold tracking-tight">
          SkillEdge <span className="text-amber-400">Technologies</span>
        </Link>
        <Link href="/" className="text-amber-200/60 hover:text-amber-400 transition-colors text-sm font-medium tracking-wide">
          &larr; BACK TO HOME
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center p-4 relative z-10">
        <div className="w-full max-w-xl bg-slate-900/60 backdrop-blur-xl border border-amber-500/20 rounded-3xl p-8 shadow-2xl shadow-black/50">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">
              Select Your Plan
            </h1>
            <p className="text-slate-400 text-sm uppercase tracking-widest">Choose your payment method below</p>
          </div>

          {/* Payment Options Container */}
          <div className="space-y-6 mb-12">
            
            {/* Option 1: With Referral (Royal/Gold Highlight) */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-yellow-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <a 
                href="https://rzp.io/rzp/QquaPevQ"
                className="relative flex items-center justify-between bg-slate-900 border border-amber-500/50 rounded-xl p-6 hover:bg-slate-800 transition-all cursor-pointer"
              >
                <div className="flex flex-col">
                  <span className="text-amber-400 font-bold text-lg">I Have a Referral Code</span>
                  <span className="text-slate-400 text-xs">Apply discount instantly</span>
                </div>
                <div className="text-right">
                   <span className="block text-xs text-gray-500 line-through">₹999</span>
                   <span className="text-3xl font-bold text-amber-400">₹499</span>
                </div>
              </a>
              <div className="absolute -top-3 right-6 bg-gradient-to-r from-amber-500 to-yellow-600 text-slate-900 text-[10px] font-bold px-3 py-1 rounded-full shadow-lg">
                RECOMMENDED
              </div>
            </div>

            {/* Option 2: Standard (Subtle) */}
            <a 
              href="https://rzp.io/rzp/em90Q2r"
              className="flex items-center justify-between border border-slate-700 bg-slate-800/30 rounded-xl p-6 hover:border-slate-500 hover:bg-slate-800 transition-all cursor-pointer"
            >
              <div className="flex flex-col">
                <span className="text-white font-semibold text-lg">Standard Enrollment</span>
                <span className="text-slate-400 text-xs">Direct admission</span>
              </div>
              <div className="text-right">
                 <span className="text-3xl font-bold text-white">₹999</span>
              </div>
            </a>

            {/* --- NEW ADDITION: JOIN NOW PAY LATER --- */}
            <div className="relative pt-2">
               <a 
                href="https://chat.whatsapp.com/Cg772JoKnP7GzHnzQvwO66"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-2 border-dashed border-blue-500/40 bg-blue-500/5 rounded-xl p-6 hover:bg-blue-500/10 hover:border-blue-400 transition-all group"
              >
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors">Join Now & Pay Later</span>
                    <span className="flex h-2 w-2 rounded-full bg-blue-400 animate-ping"></span>
                  </div>
                  <span className="text-slate-400 text-xs text-left">Secure your spot via WhatsApp community</span>
                </div>
                <div className="bg-blue-500/20 px-4 py-2 rounded-lg border border-blue-500/30 group-hover:scale-105 transition-transform">
                  <span className="text-blue-400 font-bold text-sm uppercase tracking-tighter">Free Entry</span>
                </div>
              </a>
            </div>
            {/* --------------------------------------- */}

          </div>

          {/* Golden Roadmap Process */}
          <div className="mb-8 pt-6 border-t border-amber-500/10">
             <div className="flex justify-between items-center relative px-2">
                <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-900 via-amber-500 to-amber-900 -z-10 transform -translate-y-1/2 opacity-40"></div>
                
                <div className="flex flex-col items-center group">
                   <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-400 font-bold text-sm mb-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] z-10">
                     1
                   </div>
                   <span className="text-[10px] uppercase tracking-wider font-bold text-amber-500">Payment</span>
                </div>

                <div className="flex flex-col items-center group">
                   <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-400 font-bold text-sm mb-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] z-10">
                     2
                   </div>
                   <span className="text-[10px] uppercase tracking-wider font-bold text-amber-500">WhatsApp</span>
                </div>

                <div className="flex flex-col items-center group">
                   <div className="w-10 h-10 rounded-full bg-slate-900 border-2 border-amber-500 flex items-center justify-center text-amber-400 font-bold text-sm mb-2 shadow-[0_0_15px_rgba(245,158,11,0.3)] z-10">
                     3
                   </div>
                   <span className="text-[10px] uppercase tracking-wider font-bold text-amber-500">Launch</span>
                </div>
             </div>
             
             <div className="text-center mt-6">
                <p className="text-amber-500/60 text-xs tracking-wide">
                  Complete payment to receive your instant invite.
                </p>
             </div>
          </div>

          {/* Ambassador Footer */}
          <div className="text-center">
             <Link href="/#ambassador" className="inline-block">
               <span className="text-slate-400 text-xs hover:text-amber-400 transition-colors border-b border-transparent hover:border-amber-400 pb-0.5">
                 Don't have a code? Become a Campus Ambassador &rarr;
               </span>
             </Link>
          </div>

        </div>
      </main>
      
      <footer className="relative z-10 p-6 text-center text-slate-600 text-xs">
        &copy; {new Date().getFullYear()} SkillEdge Technologies. Secure Payment Gateway.
      </footer>
    </div>
  );
};

export default CheckoutPage;