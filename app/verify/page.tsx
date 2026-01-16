"use client";
import React, { useState, useEffect } from 'react';
import { Search, CheckCircle, XCircle, Award, ShieldCheck, Calendar, BookOpen, User, ArrowRight, Loader2 } from 'lucide-react';

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
      // Fetching from the /public folder directly
      const response = await fetch('/certificates.json');
      if (!response.ok) throw new Error("Database not found");
      
      const certificateData: Certificate[] = await response.json();
      
      // Artificial delay to make it feel like a "Secure Search"
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
    <div className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-orange-100">
      {/* Visual Background Glows */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-blue-50/50 rounded-full blur-3xl"></div>
        <div className="absolute top-[20%] -left-[5%] w-[30%] h-[30%] bg-orange-50/40 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto pt-32 pb-20 px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-100 shadow-sm mb-4">
            <ShieldCheck size={16} className="text-emerald-500" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-500">Secure Verification Portal</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-serif tracking-tight text-slate-900">Credential Lookup</h1>
          <p className="text-slate-500 text-lg max-w-lg mx-auto leading-relaxed">
            Validate internship credentials and training certificates issued by SkillEdge Technologies.
          </p>
        </div>

        {/* Search Input Section */}
        <div className="max-w-2xl mx-auto mb-16">
          <form onSubmit={handleVerify} className="group relative">
            <div className={`
              flex items-center gap-3 p-2 bg-white rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] 
              border-2 transition-all duration-300
              ${loading ? 'border-orange-200' : 'border-transparent group-focus-within:border-slate-200'}
            `}>
              <div className="pl-4 text-slate-400">
                <Search size={22} />
              </div>
              <input 
                type="text"
                placeholder="Enter Certificate ID (e.g. SE32A45)"
                className="flex-grow bg-transparent border-none focus:ring-0 text-lg py-4 placeholder:text-slate-300 font-medium"
                value={certId}
                onChange={(e) => setCertId(e.target.value)}
              />
              <button 
                type="submit"
                disabled={loading}
                className="bg-slate-900 text-white px-8 py-4 rounded-[1.5rem] font-bold hover:bg-slate-800 transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-slate-200 disabled:opacity-50 min-w-[140px] justify-center"
              >
                {loading ? <Loader2 className="animate-spin" size={20} /> : 'Verify'}
                {!loading && <ArrowRight size={18} />}
              </button>
            </div>
          </form>
        </div>

        {/* Dynamic Results Rendering */}
        {hasSearched && (
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-700">
            {result ? (
              <div className="bg-white rounded-[3rem] border border-slate-100 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.06)] overflow-hidden">
                
                {/* Upper Status Bar */}
                <div className="bg-emerald-500/5 px-8 py-5 border-b border-emerald-100/50 flex items-center justify-between">
                  <div className="flex items-center gap-3 text-emerald-600">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-xs font-black uppercase tracking-widest">Valid Credential</span>
                  </div>
                  <span className="text-[10px] font-mono bg-white px-3 py-1 rounded-md border border-slate-100 shadow-sm uppercase">Auth_ID: {result.id}</span>
                </div>

                <div className="p-10 md:p-16">
                  <div className="flex flex-col md:flex-row gap-16">
                    {/* Badge Visual Section */}
                    <div className="flex flex-col items-center justify-center space-y-6">
                      <div className="relative group">
                        <div className="w-40 h-40 rounded-[2.5rem] bg-slate-50 border-2 border-slate-100 flex items-center justify-center text-slate-900 shadow-inner rotate-3 group-hover:rotate-0 transition-transform duration-500">
                          <Award size={80} strokeWidth={1} />
                        </div>
                        <div className="absolute -top-4 -right-4 bg-white p-3 rounded-2xl shadow-xl border border-slate-50">
                          <CheckCircle size={28} className="text-emerald-500" />
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Performance Grade</p>
                        <p className="text-3xl font-serif text-orange-500 font-bold">{result.grade}</p>
                      </div>
                    </div>

                    {/* Information Grid Section */}
                    <div className="flex-grow space-y-10">
                      <div>
                        <h2 className="text-5xl font-serif mb-2 tracking-tight text-slate-900">{result.name}</h2>
                        <div className="flex items-center gap-2 text-slate-400">
                          <span className="w-10 h-[1px] bg-slate-200"></span>
                          <span className="text-sm font-bold tracking-widest uppercase">{result.domain} • {result.type} Record</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                        <ResultField icon={<User />} label="Registration No" value={result.regNo} />
                        <ResultField icon={<BookOpen />} label="Institution" value={result.college} />
                        <ResultField icon={<Calendar />} label="Internship Period" value={result.period} />
                        <ResultField icon={<ShieldCheck />} label="Verified Issue Date" value={result.issueDate} />
                      </div>

                      <div className="pt-10 border-t border-slate-50 flex items-start gap-4">
                         <div className="w-1.5 h-1.5 bg-slate-200 rounded-full mt-1.5 shrink-0"></div>
                        <p className="text-[11px] text-slate-400 leading-relaxed italic">
                          This is an official digital record hosted by SkillEdge Technologies. This verification confirms that the participant has successfully completed the professional curriculum and evaluation associated with this Certificate ID.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-20 rounded-[3rem] shadow-xl text-center border border-red-50 max-w-lg mx-auto">
                <div className="w-24 h-24 bg-red-50 text-red-400 rounded-[2rem] flex items-center justify-center mx-auto mb-8 -rotate-6">
                  <XCircle size={48} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-serif mb-3 text-slate-900">Verification Failed</h3>
                <p className="text-slate-500">
                  The ID <span className="font-mono font-bold text-slate-800 tracking-wider">{certId}</span> was not found in our registry. Please ensure the ID is correct or contact SkillEdge support.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Sub-component for clean, consistent data fields
function ResultField({ icon, label, value }: { icon: any, label: string, value: string }) {
  return (
    <div className="group">
      <div className="flex items-center gap-2 text-slate-300 mb-2 group-hover:text-orange-400 transition-colors duration-300">
        {React.cloneElement(icon, { size: 16 })}
        <span className="text-[9px] font-black uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className="text-lg text-slate-700 font-semibold leading-tight group-hover:text-slate-900 transition-colors">{value}</p>
    </div>
  );
}