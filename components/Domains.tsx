"use client";
import React from 'react';
import Section from './Section';
import Button from './Button';
import { 
  Code2, 
  Terminal, 
  CheckCircle2, 
  LayoutTemplate, 
  Globe, 
  Building2, 
  Users 
} from 'lucide-react';

// --- Micro-Illustrations (Kept from original) ---
const WebDevIllustration = () => (
  <svg className="w-full h-auto max-h-[140px] opacity-90" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="160" height="120" rx="8" fill="#E0F2FE" stroke="#3B82F6" strokeWidth="2"/>
    <rect x="20" y="20" width="160" height="24" rx="8" fill="#3B82F6"/>
    <rect x="36" y="60" width="60" height="8" rx="2" fill="#BFDBFE"/>
    <rect x="36" y="76" width="90" height="8" rx="2" fill="#BFDBFE"/>
    <rect x="110" y="60" width="50" height="50" rx="4" fill="#DBEAFE" stroke="#93C5FD"/>
  </svg>
);

const PythonAIIllustration = () => (
  <svg className="w-full h-auto max-h-[140px] opacity-90" viewBox="0 0 200 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="80" r="60" fill="#E0E7FF" stroke="#6366F1" strokeWidth="2"/>
    <circle cx="100" cy="80" r="12" fill="#C7D2FE"/>
    <path d="M70 80H130M100 50V110" stroke="#A5B4FC" strokeWidth="2"/>
    <circle cx="70" cy="80" r="6" fill="#6366F1"/>
    <circle cx="130" cy="80" r="6" fill="#6366F1"/>
  </svg>
);

// --- Updated Domain Card with Mode Badges ---
interface DomainCardProps {
  title: string;
  subtitle: string;
  projects: string[];
  colorTheme: 'blue' | 'indigo';
  MainIcon: React.ElementType;
  Illustration: React.ElementType;
  modes: ('online' | 'offline')[];
}

const DomainCard = ({ title, subtitle, projects, colorTheme, MainIcon, Illustration, modes }: DomainCardProps) => {
  const theme = {
    blue: {
      headerBg: 'bg-gradient-to-br from-blue-600 to-blue-500',
      checkColor: 'text-blue-500',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      badgeBg: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    indigo: {
      headerBg: 'bg-gradient-to-br from-indigo-600 to-indigo-500',
      checkColor: 'text-indigo-500',
      buttonColor: 'bg-indigo-600 hover:bg-indigo-700',
      badgeBg: 'bg-indigo-50 text-indigo-700 border-indigo-100',
    }
  }[colorTheme];

  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform hover:-translate-y-2 transition-all duration-300 flex flex-col h-full border border-gray-100">
      <div className={`p-6 ${theme.headerBg} text-white relative overflow-hidden`}>
        <div className="flex items-center space-x-4">
            <div className="p-3 rounded-xl bg-white/20 backdrop-blur-sm">
                <MainIcon size={28} />
            </div>
            <div>
                <h3 className="text-2xl font-bold">{title}</h3>
                <div className="flex gap-2 mt-2">
                   {modes.map(mode => (
                     <span key={mode} className="text-[10px] uppercase tracking-widest font-bold bg-white/20 px-2 py-0.5 rounded-md flex items-center gap-1">
                        {mode === 'online' ? <Globe size={10}/> : <Building2 size={10}/>}
                        {mode}
                     </span>
                   ))}
                </div>
            </div>
        </div>
      </div>
      
      <div className="p-8 flex-grow">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h4 className="font-bold text-gray-400 mb-4 uppercase text-xs tracking-widest flex items-center">
              <LayoutTemplate size={14} className="mr-2" />
              Curriculum Highlights
            </h4>
            <ul className="space-y-3">
              {projects.map((project, idx) => (
                <li key={idx} className="flex items-start text-gray-600 text-sm font-medium">
                  <CheckCircle2 className={`w-4 h-4 ${theme.checkColor} mr-2 mt-0.5 flex-shrink-0`} />
                  {project}
                </li>
              ))}
            </ul>
          </div>
          <div className="hidden lg:block flex-1 opacity-80">
            <Illustration />
          </div>
        </div>
      </div>
      
      <div className="p-8 pt-0">
         <Button href="/register" fullWidth className={`${theme.buttonColor} text-white py-4 rounded-2xl font-bold shadow-lg transition-transform active:scale-95`}>
            Apply for {title}
         </Button>
      </div>
    </div>
  );
};

const Domains = () => {
  return (
    <Section id="domains" className="bg-slate-50">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-slate-900 mb-4">Internship Domains</h2>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Upskill with India's most flexible internship program. Available in both 
          <span className="font-bold text-blue-600"> Virtual </span> and 
          <span className="font-bold text-indigo-600"> In-Office </span> modes.
        </p>
      </div>

      {/* --- Mode Selection Overview --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16">
        <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-blue-200 flex items-center gap-4">
            <div className="bg-blue-100 p-3 rounded-full text-blue-600">
                <Globe size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-800">Online / Virtual</h4>
                <p className="text-sm text-slate-500">Flexible hours, self-paced, work from anywhere globally.</p>
            </div>
        </div>
        <div className="bg-white p-6 rounded-2xl border-2 border-dashed border-indigo-200 flex items-center gap-4">
            <div className="bg-indigo-100 p-3 rounded-full text-indigo-600">
                <Building2 size={24} />
            </div>
            <div>
                <h4 className="font-bold text-slate-800">Offline / In-Office</h4>
                <p className="text-sm text-slate-500">Center-based training, team collaboration, and physical mentorship.</p>
            </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <DomainCard 
          title="Web Development" 
          subtitle="Fullstack & Responsive Design"
          colorTheme="blue"
          modes={['online', 'offline']}
          MainIcon={Code2}
          Illustration={WebDevIllustration}
          projects={[
            "Personal Portfolio Website",
            "E-commerce Frontend Dev",
            "React.js Interactive Apps",
            "Responsive Modern Landing Pages"
          ]}
        />
        
        <DomainCard 
          title="Python for AI" 
          subtitle="Data Science & ML Basics"
          colorTheme="indigo"
          modes={['online', 'offline']}
          MainIcon={Terminal}
          Illustration={PythonAIIllustration}
          projects={[
            "Data Analysis & Visualization",
            "AI Chatbot Development",
            "Automation using Python",
            "Machine Learning Algorithms"
          ]}
        />
      </div>

      {/* --- Credibility Footer --- */}
      <div className="mt-16 text-center bg-blue-900 text-white p-8 rounded-3xl shadow-2xl overflow-hidden relative">
         <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left">
                <h3 className="text-2xl font-bold">Ready to kickstart your career?</h3>
                <p className="text-blue-200">Official MSME (Govt. of India) Validated Certification upon completion.</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="text-right hidden sm:block">
                    <p className="text-xs uppercase tracking-widest font-bold opacity-60">Regulated By</p>
                    <p className="font-bold">MSME (Govt. of India)</p>
                </div>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-900 font-black">🇮🇳</div>
            </div>
         </div>
         {/* Decorative Background circles */}
         <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20"></div>
      </div>
    </Section>
  );
};

export default Domains;