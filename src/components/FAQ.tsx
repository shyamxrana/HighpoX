import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '../data/content';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-28 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[500px] bg-[#B9FD23]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-[#B9FD23] text-xs font-mono tracking-widest uppercase">
            <span className="w-4 h-[2px] bg-[#B9FD23]" />
            <span>GOT QUESTIONS?</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            <span className="text-white block">BEFORE WE</span>
            <span className="text-[#B9FD23] block drop-shadow-[0_0_25px_rgba(185,253,35,0.3)]">
              MAKE IT HAPPEN.
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Here are a few things you might want to know before starting a project with HighpoX.
          </p>
        </div>

        {/* Content Layout: Left Image + Right Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Camera Monitor Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl shadow-black/80 group">
              <img
                src="/images/camera-monitor.jpg"
                alt="Cinema Camera Monitor"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

              {/* Bottom tag */}
              <div className="absolute bottom-6 left-6 text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                <div>IDEAS</div>
                <div>VISUALS</div>
                <div>IMPACT</div>
              </div>

              {/* Monitor live frame badge */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full text-[10px] font-mono text-[#B9FD23] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                <span>REC // 4K LOG</span>
              </div>
            </div>
          </div>

          {/* Right Column: 7 Accordions */}
          <div className="lg:col-span-7 flex flex-col divide-y divide-white/10">
            {FAQS.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.number} className="py-5 transition-colors">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between text-left gap-4 group cursor-pointer focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      <span className="text-xs sm:text-sm font-mono text-zinc-500 group-hover:text-[#B9FD23] transition-colors">
                        {faq.number}
                      </span>
                      <span className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isOpen ? 'text-white' : 'text-zinc-300 group-hover:text-white'
                      }`}>
                        {faq.question}
                      </span>
                    </div>

                    {/* Toggle Circle Button */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen 
                        ? 'bg-[#B9FD23] text-black rotate-0 shadow-[0_0_15px_rgba(185,253,35,0.4)]' 
                        : 'border border-white/20 text-zinc-400 group-hover:border-[#B9FD23] group-hover:text-[#B9FD23]'
                    }`}>
                      {isOpen ? (
                        <Minus className="w-4 h-4 stroke-[2.5]" />
                      ) : (
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                      )}
                    </div>
                  </button>

                  {/* Accordion Content */}
                  {isOpen && (
                    <div className="pt-4 pl-8 sm:pl-12 pr-4 text-zinc-400 text-xs sm:text-sm leading-relaxed animate-in fade-in duration-300">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
