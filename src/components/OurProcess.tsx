import React from 'react';
import { PROCESS_STEPS } from '../data/content';

export const OurProcess: React.FC = () => {
  return (
    <section className="relative py-28 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[500px] bg-[#B9FD23]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* Decorative Technical Margin Markings */}
      <div className="hidden xl:flex absolute top-16 left-8 flex-col text-[10px] font-mono tracking-widest text-zinc-600 gap-1 select-none">
        <span>IDEAS</span>
        <span>VISUALS</span>
        <span>IMPACT</span>
        <span className="w-4 h-[1px] bg-zinc-700 mt-1" />
      </div>

      <div className="hidden xl:flex absolute top-16 right-8 flex-col text-right text-[10px] font-mono tracking-widest text-zinc-600 gap-1 select-none">
        <span>CREATIVE</span>
        <span>PRODUCTION</span>
        <span>RESULTS</span>
        <span className="w-4 h-[1px] bg-zinc-700 mt-1 ml-auto" />
      </div>

      {/* Decorative Crosshairs */}
      <span className="crosshair-mark top-12 left-1/4 hidden sm:block">+</span>
      <span className="crosshair-mark top-12 right-1/4 hidden sm:block">+</span>
      <span className="crosshair-mark bottom-12 left-1/3 hidden sm:block">+</span>
      <span className="crosshair-mark bottom-12 right-1/3 hidden sm:block">+</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-3 text-zinc-400 text-xs font-mono tracking-widest uppercase">
            <span className="w-4 h-[1px] bg-zinc-600" />
            <span className="text-[#B9FD23]">OUR PROCESS</span>
            <span className="w-4 h-[1px] bg-zinc-600" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            <span className="text-white block">FROM FIRST IDEA</span>
            <span className="text-[#B9FD23] block drop-shadow-[0_0_25px_rgba(185,253,35,0.3)]">
              TO FINAL FRAME.
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            A clear and collaborative process to turn ideas into impactful visuals that help your brand grow.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          
          {/* Desktop Connecting Glowing Line */}
          <div className="hidden md:block absolute top-[52px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#B9FD23]/20 via-[#B9FD23]/60 to-[#B9FD23]/20 border-t border-dashed border-[#B9FD23]/40 z-0" />

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 relative z-10">
            {PROCESS_STEPS.map((item) => (
              <div 
                key={item.step} 
                className="flex flex-col items-center text-center group"
              >
                {/* Step Circle Image Container */}
                <div className="relative mb-6">
                  {/* Outer Glowing Ring */}
                  <div className="w-[104px] h-[104px] rounded-full p-1 bg-[#0b0e0a] border border-[#B9FD23]/40 group-hover:border-[#B9FD23] group-hover:shadow-[0_0_25px_rgba(185,253,35,0.4)] transition-all duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden bg-black relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-115 group-hover:rotate-1"
                      />
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-transparent transition-colors" />
                    </div>
                  </div>

                  {/* Tiny neon accent dot on the ring */}
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#B9FD23] shadow-[0_0_8px_#B9FD23]" />
                </div>

                {/* Step Number */}
                <span className="text-2xl sm:text-3xl font-black font-mono text-[#B9FD23] mb-1 tracking-tight">
                  {item.step}
                </span>

                {/* Step Title */}
                <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wider mb-2">
                  {item.title}
                </h3>

                {/* Step Description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed max-w-[220px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
