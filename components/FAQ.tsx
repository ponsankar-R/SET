"use client";
import React, { useState } from 'react';
import Section from './Section';

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        className="flex justify-between items-center w-full py-4 px-2 text-left hover:bg-gray-50 transition-colors focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg 
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="p-4 pt-0 text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      question: "Why is this a paid internship?",
      answer: "The fee covers the cost of our project infrastructure, dedicated mentorship, and the secure certificate verification system."
    },
    {
      question: "How do I get the 6-month internship?",
      answer: "Students who show exceptional dedication and technical skill in the 1-month program are handpicked for the 6-month advanced role."
    },
    {
      question: "How does the referral commission work?",
      answer: "Once you register as a CA, you get a unique referral code. Every time someone uses your code to join, the commission is credited to your dashboard (managed via email for now)."
    },
    {
        question: "What is the qualification to get 1-month certificate?",
        answer: "You need to maintain a minimum of 10% attendance to be eligible for the internship completion certificate."
    },
    {
        question: "For project completion certificate, what is required?",
        answer: "To receive the Project Completion Certificate, you should show at least 25% progress on your assigned project."
    },
    {
        question: "Who can join? Is prior learning needed?",
        answer: "Anyone can join! No prior learning is needed as we guide you from the basics."
    }
  ];

  return (
    <Section id="faq" background="white">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Everything you need to know about SkillEdge Internships.
        </p>
      </div>
      
      <div className="max-w-3xl mx-auto border border-gray-200 rounded-xl overflow-hidden shadow-sm bg-white">
        {faqs.map((faq, index) => (
          <FAQItem key={index} {...faq} />
        ))}
      </div>
    </Section>
  );
};

export default FAQ;
