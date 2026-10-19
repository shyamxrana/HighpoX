import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#B9FD23]/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[#B9FD23]/10 rounded-full blur-[130px] pointer-events-none" />

      {/* Decorative Crosshair Marks */}
      <span className="crosshair-mark top-24 left-8 hidden sm:block">+</span>
      <span className="crosshair-mark top-24 right-12 hidden sm:block">+</span>
      <span className="crosshair-mark bottom-12 left-12 hidden sm:block">+</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Top Studio Subtitle Tag */}
            <div className="inline-flex items-center gap-2 mb-6 text-zinc-400 text-xs sm:text-sm font-mono tracking-wider">
              <span className="w-6 h-[1px] bg-zinc-600" />
              <span className="uppercase text-zinc-300">Independent Creative Studio • India</span>
              <span className="w-6 h-[1px] bg-zinc-600" />
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[76px] font-black leading-[1.05] tracking-tight uppercase mb-6 font-sans">
              <span className="text-white block">WE MAKE BRANDS</span>
              <span className="text-[#B9FD23] block drop-shadow-[0_0_35px_rgba(185,253,35,0.35)]">
                IMPOSSIBLE TO IGNORE.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-zinc-400 text-base sm:text-lg md:text-xl font-normal max-w-xl mb-10 leading-relaxed">
              UGC-style video ads, product visuals, and social creatives for modern brands.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#B9FD23] text-black font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#d0ff3d] hover:shadow-[0_0_30px_rgba(185,253,35,0.4)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Explore Our Work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-transparent border border-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:border-white/60 hover:bg-white/5 active:scale-[0.98] w-full sm:w-auto"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Ambient backlight glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#B9FD23]/25 via-[#B9FD23]/10 to-transparent rounded-3xl blur-2xl opacity-70 -z-10" />

            <div className="relative w-full max-w-[460px] aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 group">
              <img
                src="/images/hero-headphones.jpg"
                alt="HighpoX Hero Commercial Lifestyle"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Subtle edge overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/10 pointer-events-none" />

              {/* Minimal audio / spec mark in top corner */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full text-[11px] font-mono text-[#B9FD23] flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B9FD23] animate-ping" />
                <span>SPEC // 01</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
