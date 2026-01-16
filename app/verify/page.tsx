"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Search, CheckCircle, XCircle, Award, ShieldCheck, 
  Calendar, BookOpen, User, ArrowRight, Loader2, Home 
} from 'lucide-react';

interface Certificate {
  id: string;
  name: string;
  regNo: string;
  college: string;
  domain: string;
  period: string;
  issueDate: string;
  grade: string;
  type: string;
}

export default function VerifyPage() {
  const [certId, setCertId] = useState("");
  const [result, setResult] = useState<Certificate | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleVerify = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!certId.trim()) return;
    
    setLoading(true);
    setHasSearched(false);

    try {
      const response = await fetch('/certificates.json');
      if (!response.ok) throw new Error("Database not found");
      
      const certificateData: Certificate[] = await response.json();
      
      // Professional search delay
      setTimeout(() => {
        const found = certificateData.find(
          (c) => c.id.toLowerCase() === certId.toLowerCase().trim()
        );
        setResult(found || null);
        setLoading(false);
        setHasSearched(true);
      }, 800);
      
    } catch (error) {
      console.error("Error fetching certificates:", error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-orange-100 pb-10">
      {/* Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[5%] -right-[5%] w-[60%] md:w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -left-[5%] w-[50%] md:w-[30%] h-[30%] bg-orange-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto pt-10 md:pt-24 px-4 md:px-6">
        
        {/* Navigation / Back Button */}
        <div className="mb-8 md:mb-12">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-slate-400 hover:text-slate-900 transition-colors font-medium text-sm group"
          >
            <div className="p-2 bg-white rounded-lg shadow-sm border border-slate-100 group-hover:border-slate-200 transition-all">
              <Home size={18} />
            </div>
            Back to Home
          </Link>
        </div>

        {/* Header Section */}
        <div className="text-center mb-10 md:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-2">
            <ShieldCheck size={14} className="text-emerald-500 md:w-4 md:h-4" />
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] md:tracking-[0.2em] uppercase text-slate-500">Secure Verification Portal</span>
          </div>
          <h1 className="text-3xl md:text-6xl font-serif tracking-tight text-slate-900 leading-tight">
            Credential Lookup
          </h1>
          <p className="text-slate-500 text-sm md:text-lg max-w-lg mx-auto leading-relaxed px-4">
            Validate internship credentials and training certificates issued by SkillEdge Technologies.
          </p>
        </div>

        {/* Search Input Section */}
        <div className="max-w-2xl mx-auto mb-12 md:mb-16">
          <form onSubmit={handleVerify} className="group relative">
            <div className={`
              flex flex-col sm:flex-row items-stretch sm:items-center gap-3 p-2 bg-white rounded-2xl sm:rounded-[2rem] 
              shadow-[0_10px_30px_-10px_rgba(0,0,0,0.05)] border-2 transition-all duration-300
              ${loading ? 'border-orange-200' : 'border-transparent group-focus-within:border-slate-200'}
            `}>
              <div className="flex items-center flex-grow">
                <div className="pl-4 text-slate-400">
                  <Search size={20} />
                </div>
                <input 
                  type="text"
                  placeholder="ID (e.g. SE00X00)"
                  className="w-full bg-transparent border-none focus:ring-0 text-base md:text-lg py-3 md:py-4 placeholder:text-slate-300 font-medium"
                  value={certId}
                  onChange={(e) => setCertId(e.target.value)}
                />
              </div>
              <button 
                type="submit"
                disabled={loading}
                className="bg-slate-900 text-white px-6 py-3.5 sm:py-4 rounded-xl sm:rounded-[1.5rem] font-bold hover:bg-slate-800 transition-all active:scale-95 flex items-center justify-center gap-2 shadow-lg shadow-slate-200 disabled:opacity-50 sm:min-w-[140px]"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : 'Verify'}
                {!loading && <ArrowRight size={18} className="hidden sm:block" />}
              </button>
            </div>
          </form>
        </div>

        {/* Dynamic Results Rendering */}
        {hasSearched && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            {result ? (
              <div className="bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.06)] overflow-hidden">
                
                {/* Upper Status Bar */}
                <div className="bg-emerald-500/5 px-6 md:px-8 py-4 border-b border-emerald-100/50 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-emerald-600">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase tracking-widest">Valid Credential</span>
                  </div>
                  <span className="text-[9px] font-mono bg-white px-2 py-0.5 rounded border border-slate-100 shadow-sm uppercase">Auth_ID: {result.id}</span>
                </div>

                <div className="p-6 md:p-16">
                  <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start text-center md:text-left">
                    
                    {/* Badge Visual Section */}
                    <div className="flex flex-col items-center space-y-4 md:space-y-6 shrink-0">
                      <div className="relative group">
                        <div className="w-28 h-28 md:w-40 md:h-40 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-900 shadow-inner md:rotate-3 group-hover:rotate-0 transition-transform duration-500">
                          <Award size={50} className="md:w-20 md:h-20" strokeWidth={1} />
                        </div>
                        <div className="absolute -top-2 -right-2 md:-top-4 md:-right-4 bg-white p-2 md:p-3 rounded-xl md:rounded-2xl shadow-xl border border-slate-50">
                          <CheckCircle size={20} className="text-emerald-500 md:w-7 md:h-7" />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-[9px] md:text-[10px] font-bold text-slate-400 uppercase tracking-widest">Performance</p>
                        <p className="text-2xl md:text-3xl font-serif text-orange-500 font-bold">{result.grade}</p>
                      </div>
                    </div>

                    {/* Information Grid Section */}
                    <div className="flex-grow space-y-8 md:space-y-10 w-full">
                      <div className="space-y-2">
                        <h2 className="text-3xl md:text-5xl font-serif tracking-tight text-slate-900">{result.name}</h2>
                        <div className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                          <span className="hidden md:block w-8 h-[1px] bg-slate-200"></span>
                          <span className="text-[11px] md:text-sm font-bold tracking-widest uppercase">{result.domain} • {result.type} Record</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 md:gap-y-10 border-y border-slate-50 py-8 md:border-none md:py-0">
                        <ResultField icon={<User />} label="Registration No" value={result.regNo} />
                        <ResultField icon={<BookOpen />} label="Institution" value={result.college} />
                        <ResultField icon={<Calendar />} label="Internship Period" value={result.period} />
                        <ResultField icon={<ShieldCheck />} label="Verified Issue Date" value={result.issueDate} />
                      </div>

                      <div className="pt-6 md:pt-10 border-t md:border-slate-50 flex items-start gap-3">
                         <div className="w-1.5 h-1.5 bg-slate-200 rounded-full mt-1.5 shrink-0 hidden md:block"></div>
                        <p className="text-[10px] md:text-[11px] text-slate-400 leading-relaxed italic mx-auto md:mx-0 max-w-md">
                          Official digital record by SkillEdge Technologies. Confirms completion of the professional curriculum and evaluation.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-10 md:p-20 rounded-[2rem] md:rounded-[3rem] shadow-xl text-center border border-red-50 max-w-lg mx-auto">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-red-50 text-red-400 rounded-2xl md:rounded-[2rem] flex items-center justify-center mx-auto mb-6 md:mb-8 -rotate-6">
                  <XCircle size={32} className="md:w-12 md:h-12" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl md:text-3xl font-serif mb-2 md:mb-3 text-slate-900">Verification Failed</h3>
                <p className="text-sm md:text-base text-slate-500">
                  The ID <span className="font-mono font-bold text-slate-800 tracking-wider uppercase">{certId}</span> was not found in our registry.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ResultField({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="group space-y-1">
      <div className="flex items-center justify-center md:justify-start gap-2 text-slate-300 group-hover:text-orange-400 transition-colors duration-300">
        {React.cloneElement(icon, { size: 14, className: "md:w-4 md:h-4" })}
        <span className="text-[8px] md:text-[9px] font-black uppercase tracking-[0.15em] md:tracking-[0.2em]">{label}</span>
      </div>
      <p className="text-base md:text-lg text-slate-700 font-semibold leading-snug group-hover:text-slate-900 transition-colors">{value}</p>
    </div>
  );
}