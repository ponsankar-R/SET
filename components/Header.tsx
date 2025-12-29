"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Why Us', href: '/#why-us' },
    { name: 'Domains', href: '/#domains' },
    { name: 'Campus Ambassador', href: '/#ambassador' },
  ];

  return (
    <>
      {/* --- TOP TRUST BAR --- */}
      <div className="fixed top-0 w-full z-[60] bg-[#002147] text-white py-1.5 px-4 text-center border-b border-white/10">
        <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
          MSME Registered Company • Regulated under MSME (Govt. of India)
        </p>
      </div>

      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled 
            ? 'top-8 bg-white/90 backdrop-blur-md shadow-lg py-2' 
            : 'top-8 bg-white/60 backdrop-blur-sm py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            
            {/* Logo Section */}
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg group-hover:shadow-blue-500/30 transition-all">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-blue-900 to-indigo-800 leading-none">
                    SkillEdge
                  </span>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-tighter">Technologies</span>
                </div>
              </Link>

              {/* Vertical Divider & MSME Logo (Desktop) */}
              <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-gray-200">
                <img 
                  src="https://images.seeklogo.com/logo-png/48/1/msme-logo-png_seeklogo-480293.png" 
                  alt="MSME Registered" 
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                    <span className="text-[9px] font-bold text-blue-900 uppercase">Registered</span>
                    <span className="text-[9px] font-medium text-gray-500">Govt. of India</span>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                >
                  {link.name}
                </Link>
              ))}
              
              {/* Updated href to page route */}
              <Link 
                href="/verify"
                className="ml-4 px-6 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-full shadow-md hover:bg-blue-700 hover:shadow-blue-500/40 transition-all"
              >
                Verify Certificate
              </Link>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 text-gray-700 bg-gray-100 rounded-lg"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-5 flex flex-col justify-between items-center">
                <span className={`block w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[70] bg-white transition-transform duration-500 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
                <span className="font-bold text-blue-900 uppercase tracking-widest">SKILLEDGE</span>
                <button onClick={() => setIsMenuOpen(false)} className="text-gray-500 text-3xl font-light">&times;</button>
            </div>

            <div className="flex flex-col space-y-6 items-center text-center">
                {/* Mobile MSME Recognition */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 w-full flex flex-col items-center">
                    <img 
                        src="https://images.seeklogo.com/logo-png/48/1/msme-logo-png_seeklogo-480293.png" 
                        alt="MSME Logo" 
                        className="h-16 w-auto mb-3"
                    />
                    <p className="text-sm font-bold text-blue-900 uppercase">Registered MSME Company</p>
                    <p className="text-[10px] text-gray-500 italic">Recognized by the Ministry of MSME, Govt. of India</p>
                </div>

                {navLinks.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        className="text-2xl font-bold text-gray-800"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.name}
                    </Link>
                ))}
                
                {/* Updated href to page route for mobile as well */}
                <Link 
                    href="/verify"
                    onClick={() => setIsMenuOpen(false)}
                    className="w-full py-4 text-center text-lg font-bold text-white bg-blue-600 rounded-xl shadow-xl shadow-blue-200"
                >
                    Verify Certificate
                </Link>
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;