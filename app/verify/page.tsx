"use client";
import React, { useState } from 'react';
import { Search, CheckCircle, XCircle, Award, ShieldCheck } from 'lucide-react';

// --- HARDCODED DATA ---
// Add your student records here directly. 
// This prevents "File Not Found" errors during GitHub/Vercel builds.
const VALID_CERTIFICATES = [
  {
    id: "SK-2025-001",
    name: "John Doe",
    domain: "Web Development",
    date: "October 2025",
    grade: "A+"
  },
  {
    id: "SK-2025-002",
    name: "Jane Smith",
    domain: "Python for AI",
    date: "November 2025",
    grade: "O"
  }
];

interface Certificate {
  id: string;
  name: string;
  domain: string;
  date: string;
  grade: string;
}

export default function VerifyPage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<Certificate | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleVerify = (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;
    
    setHasSearched(true);
    // Searching the hardcoded array
    const found = VALID_CERTIFICATES.find(
      c => c.id.toLowerCase() === certId.toLowerCase().trim()
    );
    setResult(found || null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-40 pb-20 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-3 bg-blue-100 text-blue-600 rounded-2xl mb-4">
            <ShieldCheck size={32} />
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            Verify Certificate
          </h1>
          <p className="text-gray-600">Enter your unique ID to verify SkillEdge credentials.</p>
        </div>

        {/* Search Box */}
        <div className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 mb-8">
          <form onSubmit={handleVerify} className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text"
                placeholder="Ex: SK-2025-001"
                className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 outline-none transition-all font-mono"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
              />
            </div>
            <button 
              type="submit"
              className="px-8 py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-200"
            >
              Verify Now
            </button>
          </form>
        </div>

        {/* Result Section */}
        {hasSearched && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            {result ? (
              <div className="bg-white overflow-hidden rounded-3xl shadow-2xl border-2 border-green-100">
                <div className="bg-green-600 p-4 text-white flex items-center justify-center gap-2">
                  <CheckCircle size={20} />
                  <span className="font-bold uppercase tracking-wider text-sm">Valid Credential</span>
                </div>
                <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-600 border border-yellow-100">
                    <Award size={48} />
                  </div>
                  <div className="flex-grow text-center md:text-left">
                    <h2 className="text-3xl font-black text-gray-900 mb-1">{result.name}</h2>
                    <p className="text-blue-600 font-bold mb-4">{result.domain} Intern</p>
                    
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <p className="text-gray-400 uppercase font-bold text-[10px]">Issue Date</p>
                        <p className="text-gray-900 font-semibold">{result.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 uppercase font-bold text-[10px]">Grade</p>
                        <p className="text-gray-900 font-semibold">{result.grade}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-12 rounded-3xl shadow-xl text-center border border-red-100">
                <XCircle size={48} className="mx-auto text-red-400 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">No Record Found</h3>
                <p className="text-gray-500">The certificate ID entered does not match our records.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}