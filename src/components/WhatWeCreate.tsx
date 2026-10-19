import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { WHAT_WE_CREATE } from '../data/content';

interface WhatWeCreateProps {
  onSelectCategory?: (categoryName: string) => void;
}

export const WhatWeCreate: React.FC<WhatWeCreateProps> = ({ onSelectCategory }) => {
  return (
    <section id="services" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#B9FD23]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-end mb-16">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 mb-3 text-[#B9FD23] text-xs font-mono tracking-widest uppercase">
              <span className="w-4 h-[2px] bg-[#B9FD23]" />
              <span>WHAT WE CREATE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
              <span className="text-white block">CREATIVE THAT</span>
              <span className="text-[#B9FD23] block drop-shadow-[0_0_25px_rgba(185,253,35,0.3)]">
                EARNS ATTENTION.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-4 border-l border-white/10 lg:pl-6">
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              From the first hook to the final frame, we create assets designed for modern digital platforms.
            </p>
          </div>
        </div>

        {/* 3 Large Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {WHAT_WE_CREATE.map((service) => (
            <div
              key={service.number}
              onClick={() => onSelectCategory && onSelectCategory(service.title)}
              className="group bg-[#0d100d] border border-white/10 hover:border-[#B9FD23]/60 rounded-3xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#B9FD23]/10 flex flex-col justify-between cursor-pointer"
            >
              {/* Card Image Area */}
              <div className="relative aspect-[4/3] sm:aspect-[1/1] overflow-hidden bg-black/60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0d100d] via-transparent to-transparent opacity-80" />

                <div className="absolute top-4 left-4">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono uppercase bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300">
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Card Bottom Content */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 relative">
                <div>
                  {/* Number & Title Box */}
                  <div className="flex items-center gap-3 mb-4 p-3 rounded-xl border border-white/10 bg-black/40 group-hover:border-[#B9FD23]/40 transition-colors">
                    <span className="text-3xl sm:text-4xl font-black font-mono text-zinc-500 group-hover:text-[#B9FD23] transition-colors shrink-0">
                      {service.number}
                    </span>
                    <div className="w-[1px] h-8 bg-white/10 group-hover:bg-[#B9FD23]/30 transition-colors" />
                    <h3 className="text-base sm:text-lg font-black uppercase text-white tracking-tight leading-tight group-hover:text-[#B9FD23] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Row with Arrow Button */}
                <div className="flex items-center justify-end pt-2">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-white/20 bg-white/5 flex items-center justify-center text-white group-hover:bg-[#B9FD23] group-hover:text-black group-hover:border-transparent transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
