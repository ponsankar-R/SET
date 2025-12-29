import React from 'react';
import Section from './Section';
import Button from './Button';
// Added Globe and MapPin icons for Online/Offline indicators
import { Code2, Terminal, CheckCircle2, LayoutTemplate, Globe, MapPin } from 'lucide-react';

// --- Micro-Illustrations (Kept from original) ---
const WebDevIllustration = () => (
  <svg className="w-full h-auto max-h-[160px] opacity-90" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="160" height="120" rx="8" fill="#E0F2FE" stroke="#3B82F6" strokeWidth="2"/>
    <rect x="20" y="20" width="160" height="24" rx="8" fill="#3B82F6"/>
    <circle cx="32" cy="32" r="4" fill="white" opacity="0.7"/>
    <circle cx="46" cy="32" r="4" fill="white" opacity="0.7"/>
    <rect x="36" y="60" width="60" height="8" rx="2" fill="#BFDBFE"/>
    <rect x="36" y="76" width="90" height="8" rx="2" fill="#BFDBFE"/>
    <rect x="36" y="92" width="40" height="8" rx="2" fill="#BFDBFE"/>
    <rect x="110" y="60" width="50" height="50" rx="4" fill="#DBEAFE" stroke="#93C5FD"/>
    <path d="M135 85L125 95H145L135 85Z" fill="#3B82F6"/>
  </svg>
);

const PythonAIIllustration = () => (
  <svg className="w-full h-auto max-h-[160px] opacity-90" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="80" r="60" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
    <path d="M70 80H130M100 50V110" stroke="#A5B4FC" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="70" cy="80" r="8" fill="#6366F1"/>
    <circle cx="130" cy="80" r="8" fill="#6366F1"/>
    <circle cx="100" cy="50" r="8" fill="#6366F1"/>
    <circle cx="100" cy="110" r="8" fill="#6366F1"/>
    <path d="M100 80L120 60M100 80L80 100M100 80L120 100" stroke="#6366F1" strokeWidth="2"/>
    <circle cx="100" cy="80" r="12" fill="#C7D2FE"/>
  </svg>
);

interface DomainCardProps {
  title: string;
  subtitle: string;
  projects: string[];
  colorTheme: 'blue' | 'indigo';
  MainIcon: React.ElementType;
  Illustration: React.ElementType;
}

const DomainCard = ({ title, subtitle, projects, colorTheme, MainIcon, Illustration }: DomainCardProps) => {
  
  const themeStyles = {
    blue: {
      headerBg: 'bg-gradient-to-br from-blue-600 to-blue-500',
      iconColor: 'text-blue-100',
      checkColor: 'text-blue-500',
      buttonColor: 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    indigo: {
      headerBg: 'bg-gradient-to-br from-indigo-600 to-indigo-500',
      iconColor: 'text-indigo-100',
      checkColor: 'text-indigo-500',
      buttonColor: 'bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-700 hover:to-indigo-800',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    }
  };

  const theme = themeStyles[colorTheme];

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100 group">
      {/* Header with Icon */}
      <div className={`p-6 ${theme.headerBg} text-white flex items-start space-x-4 relative overflow-hidden`}>
        <div className={`p-3 rounded-xl bg-white/20 backdrop-blur-sm ${theme.iconColor}`}>
          <MainIcon size={28} strokeWidth={2} />
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-1">{title}</h3>
          <p className="text-white/90 font-medium text-sm md:text-base mb-3">{subtitle}</p>
          
          {/* --- NEW: Mode Badges --- */}
          <div className="flex gap-2">
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
              <Globe size={12} /> Online
            </span>
            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider">
              <MapPin size={12} /> Offline
            </span>
          </div>
        </div>
        <MainIcon className="absolute -right-6 -bottom-8 text-white/10 rotate-12 transform scale-150 pointer-events-none" size={120} />
      </div>
      
      {/* Body */}
      <div className="p-8 flex-grow flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1 w-full">
          <h4 className="font-bold text-gray-800 mb-6 uppercase text-xs tracking-widest flex items-center">
            <LayoutTemplate size={16} className="mr-2 text-gray-400" />
            Key Projects Curriculum
          </h4>
          <ul className="space-y-4">
            {projects.map((project, idx) => (
              <li key={idx} className="flex items-start text-gray-600 font-medium">
                <CheckCircle2 className={`w-5 h-5 ${theme.checkColor} mr-3 mt-0.5 flex-shrink-0`} />
                <span>{project}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex flex-1 w-full justify-center items-center p-4 transition-transform duration-500 group-hover:scale-105">
           <Illustration />
        </div>
      </div>
      
      <div className="p-8 pt-0 mt-auto">
         <Button href="/checkout" fullWidth className={`${theme.buttonColor} shadow-md hover:shadow-lg py-4 text-lg`}>
            Join Internship Today
         </Button>
      </div>
    </div>
  );
};

const Domains = () => {
  return (
    <Section id="domains" background="gray" className="bg-gray-50/50">
      <div className="text-center mb-16 relative z-10">
        {/* --- Updated Header Text --- */}
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest">
           Flexible Training Formats
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          Internship Domains
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Available in <span className="text-blue-600 font-bold">Online Remote</span> and <span className="text-indigo-600 font-bold">In-Office Offline</span> modes to match your convenience.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto relative z-10">
        <DomainCard 
          title="Web Development" 
          subtitle="Frontend, Backend & Responsive Design"
          colorTheme="blue"
          MainIcon={Code2}
          Illustration={WebDevIllustration}
          projects={[
            "Personal Portfolio Website",
            "E-commerce User Interface",
            "Responsive Landing Pages",
            "Interactive Web Applications"
          ]}
        />
        
        <DomainCard 
          title="Python for AI" 
          subtitle="Data Science, Automation & ML Fundamentals"
          colorTheme="indigo"
          MainIcon={Terminal}
          Illustration={PythonAIIllustration}
          projects={[
            "Data Analysis & Visualization",
            "Intelligent Chatbot Dev",
            "Process Automation Scripts",
            "Machine Learning Basics"
          ]}
        />
      </div>
    </Section>
  );
};

export default Domains;