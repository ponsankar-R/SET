import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  background?: 'white' | 'gray' | 'dark';
}

const Section: React.FC<SectionProps> = ({ 
  children, 
  id, 
  className = '', 
  background = 'white' 
}) => {
  const bgStyles = {
    white: "bg-white text-gray-800",
    gray: "bg-gray-50 text-gray-800",
    dark: "bg-slate-900 text-white"
  };

  return (
    <section id={id} className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};

export default Section;
