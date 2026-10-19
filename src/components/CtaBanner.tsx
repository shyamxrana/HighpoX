import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 w-[650px] h-[500px] bg-[#B9FD23]/8 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="relative rounded-3xl bg-[#0d100d] border border-white/10 p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Subtle side annotations */}
          <div className="hidden xl:flex absolute top-10 right-8 flex-col text-right text-[10px] font-mono tracking-widest text-zinc-600 gap-1 select-none">
            <span>IDEAS</span>
            <span>VISUALS</span>
            <span>IMPACT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Heading & CTAs */}
            <div className="lg:col-span-7 flex flex-col items-start">
              
              <div className="inline-flex items-center gap-2 mb-4 text-[#B9FD23] text-xs font-mono tracking-widest uppercase">
                <span className="w-4 h-[2px] bg-[#B9FD23]" />
                <span>LET'S CREATE TOGETHER</span>
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight leading-[1.05] mb-6">
                <span className="text-white block">GOT A PRODUCT?</span>
                <span className="text-white block">LET'S MAKE IT</span>
                <span className="text-[#B9FD23] block drop-shadow-[0_0_25px_rgba(185,253,35,0.35)]">
                  STAND OUT.
                </span>
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base max-w-lg mb-8 leading-relaxed">
                Tell us what you're building. We'll help you explore the right creative direction.
              </p>

              <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#B9FD23] text-black font-bold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:bg-[#d0ff3d] hover:shadow-[0_0_30px_rgba(185,253,35,0.4)] hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                <a
                  href="https://instagram.com/highpox.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-white/5 border border-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:border-[#B9FD23] hover:text-[#B9FD23] active:scale-[0.98] w-full sm:w-auto"
                >
                  <svg className="w-4 h-4 text-zinc-300 group-hover:text-[#B9FD23] transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                  </svg>
                  <span>DM US ON INSTAGRAM</span>
                </a>
              </div>

            </div>

            {/* Right Column: Hero Perfume Visual */}
            <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black group">
                <img
                  src="/images/fragrance-cta.jpg"
                  alt="Aurélis Luxury Fragrance"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />

                <div className="absolute top-3 right-3 font-mono text-[10px] text-zinc-400 bg-black/60 px-2 py-0.5 rounded">
                  01
                </div>

                <div className="absolute bottom-3 left-3 text-[9px] font-mono tracking-widest text-[#B9FD23] uppercase">
                  CREATIVE PRODUCTION RESULTS
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
