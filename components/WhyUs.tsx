"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Section from './Section';

const WhyUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Data: Using Unsplash images with specific sizing parameters (w=1200, q=80) 
  // to ensure they look great but load fast.
  const slides = [
    {
      id: 1,
      title: "Real-World Project Experience",
      description: "Don't just watch tutorials. Build actual software. You will ship live projects to your GitHub that prove your skills to future employers.",
      // Image: Coding/Focus (Psychology: Competence)
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 2,
      title: "Instant Certificate Verification",
      description: "Trust is everything. Every certificate you earn gets a unique QR code. Recruiters can instantly validate your achievement on our official portal.",
      // Image: Holding a tablet/Digital verification (Psychology: Trust)
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 3,
      title: "Mentorship & Community",
      description: "Never code alone. Access our exclusive community and senior mentors to guide you through bugs, logic errors, and career choices.",
      // Image: Teamwork/Helping (Psychology: Support)
      image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    },
    {
      id: 4,
      title: "Career Pathway: The 6-Month Leap",
      description: "This isn't just a month. It's an interview. Top performers in the 1-month cohort are handpicked for our prestigious 6-month intensive role.",
      // Image: Professional Success/Walking forward (Psychology: Aspiration)
      image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-play logic
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // Changes every 5 seconds
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <Section id="why-us" className="p-0 overflow-hidden relative bg-black">
      {/* Main Slider Container - Aspect Ratio 16:9 on Desktop, Taller on Mobile */}
      <div className="relative w-full h-[600px] md:h-[500px]">
        
        {/* Slides */}
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            {/* Image Layer with Overlay */}
            <div className="absolute inset-0 bg-black">
               <img 
                 src={slide.image} 
                 alt={slide.title}
                 className="w-full h-full object-cover opacity-60" 
                 loading="lazy"
               />
               {/* Gradient Overlay for Text Readability */}
               <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
            </div>

            {/* Content Layer */}
            <div className="absolute inset-0 flex items-end md:items-center justify-start container mx-auto px-6 pb-20 md:pb-0">
              <div className={`max-w-2xl transform transition-all duration-1000 delay-300 ${
                  index === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}>
                
                {/* Decorative Line */}
                <div className="w-20 h-1 bg-amber-500 mb-6"></div>

                <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight shadow-sm">
                  {slide.title}
                </h2>
                
                <div className="bg-white/10 backdrop-blur-md border-l-4 border-amber-500 p-6 rounded-r-xl">
                  <p className="text-lg text-gray-100 leading-relaxed font-light">
                    {slide.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Controls */}
        <div className="absolute bottom-8 right-6 md:right-12 z-20 flex space-x-4">
          <button 
            onClick={prevSlide}
            className="w-12 h-12 rounded text-3xl border font-extrabold border-white/30 text-white flex  justify-center hover:bg-white/20 hover:border-white transition-all backdrop-blur-sm"
            aria-label="Previous Slide"
          >
            &#8592;
          </button>
          <button 
            onClick={nextSlide}
            className="w-12 h-12 rounded text-3xl bg-amber-500 text-black border border-amber-500 flex  justify-center hover:bg-amber-400 hover:scale-105 transition-all shadow-[0_0_15px_rgba(245,158,11,0.5)]"
            aria-label="Next Slide"
          >
            &#8594;
          </button>
        </div>

        {/* Progress Dots */}
        <div className="absolute bottom-8 left-6 md:left-1/2 md:-translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1 transition-all duration-500 rounded-full ${
                index === currentSlide ? 'w-8 bg-amber-500' : 'w-2 bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default WhyUs;