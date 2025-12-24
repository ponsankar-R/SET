import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import WhyUs from '@/components/WhyUs';
import Process from '@/components/Process';
import Domains from '@/components/Domains';
import Ambassador from '@/components/Ambassador';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col font-sans">
      <Header />
      <div className="pt-20"> {/* Add padding for fixed header */}
        <Hero />
        <WhyUs />
        <Process />
        <Domains />
        <Ambassador />
        <FAQ />
      </div>
      <Footer />
    </main>
  );
}
