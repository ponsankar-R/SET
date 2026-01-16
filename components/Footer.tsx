'use client'
import React, { useState } from 'react';
import { Mail, Send, Linkedin, Twitter } from 'lucide-react'; // Using Lucide for cleaner icons
import Link from 'next/link';

const Footer = () => {
  const [message, setMessage] = useState("");

  const handleEmailRedirect = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Direct mailto link construction
    const subject = encodeURIComponent("Inquiry from SkillEdge Website");
    const body = encodeURIComponent(message);
    window.location.href = `mailto:skilledgetechnologies@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <Link href="/" className="text-2xl font-bold text-white mb-4 block">
              SkillEdge Technologies
            </Link>
            <p className="max-w-xs text-gray-400 mb-6 leading-relaxed">
              Empowering the next generation of developers through hands-on learning and real-world experience.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center hover:bg-blue-400 hover:text-white transition-all">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="hover:text-blue-400 transition-colors">Home</Link></li>
              <li><Link href="#why-us" className="hover:text-blue-400 transition-colors">Why Us</Link></li>
              <li><Link href="#domains" className="hover:text-blue-400 transition-colors">Internship Domains</Link></li>
              <li><Link href="#verify" className="hover:text-blue-400 transition-colors">Verify Certificate</Link></li>
            </ul>
          </div>
          
          {/* Contact & Message Column */}
          <div className="md:col-span-2 lg:col-span-2">
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <div className="flex items-center gap-3 text-gray-400 mb-6 group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-all">
                <Mail size={18} />
              </div>
              <span className="font-medium group-hover:text-white transition-colors">skilledgetechnologies@gmail.com</span>
            </div>

            {/* Direct Email Input Box */}
            <form onSubmit={handleEmailRedirect} className="relative">
              <textarea
                placeholder="Type your message here..."
                className="w-full bg-gray-800 border border-gray-700 rounded-2xl p-4 pr-16 text-sm text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none h-24"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button 
                type="submit"
                className="absolute bottom-4 right-4 p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-500 transition-all shadow-lg active:scale-90"
                title="Send via Email"
              >
                <Send size={18} />
              </button>
            </form>
            <p className="text-[10px] text-gray-500 mt-2 ml-2 italic">
              * This will open your default email app to send the message.
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} SkillEdge Technologies. All rights reserved.</p>
          <p className="mt-2 md:mt-0 font-medium">Made for the future builders.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;