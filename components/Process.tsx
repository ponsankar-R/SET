import React from 'react';
import Section from './Section';

const ProcessStep = ({ number, title, description, isLast }: { number: number, title: string, description: string, isLast?: boolean }) => (
  <div className="relative flex flex-col items-center group w-full md:w-1/5 z-10">
    
    {/* CONNECTING LINE (Desktop) - Adjusted for Light Background */}
    {!isLast && (
      <div className="hidden md:block absolute top-8 left-1/2 w-full h-[3px] bg-emerald-50 -z-10">
        {/* Animated Gradient Overlay on Hover */}
        <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-amber-500 to-emerald-600 transition-all duration-700 ease-out opacity-100"></div>
      </div>
    )}

    {/* CONNECTING LINE (Mobile) */}
    {!isLast && (
      <div className="md:hidden absolute left-1/2 top-16 bottom-[-2rem] w-[3px] bg-emerald-50 -z-10 transform -translate-x-1/2"></div>
    )}

    {/* NUMBER NODE */}
    <div className="relative mb-6 transition-transform duration-300 group-hover:scale-110">
      {/* Outer Glow (Subtle Green glow on hover) */}
      <div className="absolute -inset-4 bg-emerald-500/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* The Circle - Dark Green Background with Gold Text */}
      <div className="w-16 h-16 rounded-full bg-emerald-900 border-2 border-amber-500/30 group-hover:border-amber-500 flex items-center justify-center text-xl font-bold text-amber-400 shadow-xl shadow-emerald-900/20 relative z-10 group-hover:text-emerald-900 group-hover:bg-amber-400 transition-colors duration-300">
        {number}
      </div>
    </div>

    {/* TEXT CARD */}
    <div className="text-center px-2 md:px-4 transform transition-transform duration-300 group-hover:-translate-y-1">
      {/* Title - Dark Green */}
      <h3 className="text-lg font-bold text-emerald-950 mb-2 group-hover:text-amber-600 transition-colors">
        {title}
      </h3>
      {/* Description - Dark Gray/Green */}
      <p className="text-sm text-gray-600 leading-relaxed font-medium group-hover:text-emerald-900 transition-colors">
        {description}
      </p>
    </div>
  </div>
);

const Process = () => {
  const steps = [
    {
      title: "Enroll & Pay",
      description: "Complete your registration and secure your seat with a nominal fee."
    },
    {
      title: "Instant Confirmation",
      description: "Get an immediate 'Success' email with your unique Internship ID."
    },
    {
      title: "Join The Community",
      description: "You'll be added to the exclusive WhatsApp cohort group within 24 hours."
    },
    {
      title: "Learn & Build",
      description: "Attend live expert sessions and build your Capstone Project."
    },
    {
      title: "Get Certified",
      description: "Submit your project, get reviewed, and earn your Verified Certificate."
    }
  ];

  return (
    // Background is now WHITE (or transparent to fit your site). 
    // Text colors are set to Dark Green.
    <Section id="process" className="bg-white py-24 relative overflow-hidden select-none">
      
      {/* Ambient Background Effects (Very subtle light green blobs) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-50/50 rounded-full blur-[80px] pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-amber-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">
            The Roadmap
          </span>
          {/* Main Title - Dark Green */}
          <h2 className="text-3xl md:text-5xl font-bold text-emerald-950 mb-6">
            Your Journey to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-700">Excellence</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
            We have simplified the process so you can focus on what matters: <br className="hidden md:block"/>
            <span className="text-emerald-900 font-semibold">Learning, Building, and Growing.</span>
          </p>
        </div>
        
        {/* Steps Container */}
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-4 space-y-12 md:space-y-0 px-4">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index} 
              number={index + 1} 
              {...step} 
              isLast={index === steps.length - 1} 
            />
          ))}
        </div>

        {/* Bottom CTA (Updated for Light Theme) */}
        <div className="mt-24 text-center">
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-amber-500/60 to-transparent">
                <div className="bg-white rounded-full px-8 py-3 border border-emerald-100 shadow-lg shadow-emerald-900/5 hover:shadow-emerald-900/10 transition-all cursor-pointer">
                    <p className="text-emerald-900 text-sm font-medium tracking-wide">
                        Next Batch starts soon. <span className="text-amber-600 font-bold ml-1 ">Secure your spot now.</span>
                    </p>
                </div>
            </div>
        </div>

      </div>
    </Section>
  );
};

export default Process;