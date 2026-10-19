import React from 'react';
import { Lightbulb, Target, TrendingUp } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'CREATIVE FIRST',
      desc: 'Ideas that make people pause.'
    },
    {
      icon: Target,
      title: 'DETAIL OBSESSED',
      desc: 'Every frame thoughtfully crafted.'
    },
    {
      icon: TrendingUp,
      title: 'BUILT FOR DIGITAL',
      desc: 'Made for the way people watch today.'
    }
  ];

  return (
    <section id="about" className="relative py-28 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-10 w-[550px] h-[550px] bg-[#B9FD23]/6 rounded-full blur-[170px] pointer-events-none" />

      {/* Decorative side annotations */}
      <div className="hidden xl:flex absolute top-24 right-8 flex-col text-right text-[10px] font-mono tracking-widest text-zinc-600 gap-1 select-none">
        <span>IDEAS</span>
        <span>VISUALS</span>
        <span>IMPACT</span>
      </div>

      <div className="hidden xl:flex absolute bottom-24 right-8 flex-col text-right text-[10px] font-mono tracking-widest text-zinc-600 gap-1 select-none">
        <span>SHORT</span>
        <span>FORM</span>
        <span>BIG</span>
        <span>IMPACT</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Tag */}
        <div className="inline-flex items-center gap-2 mb-8 text-[#B9FD23] text-xs font-mono tracking-widest uppercase">
          <span className="w-4 h-[2px] bg-[#B9FD23]" />
          <span>ABOUT HIGHPOX</span>
        </div>

        {/* Big Statement & Description Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          
          {/* Left Column: Massive Headline */}
          <div className="lg:col-span-7">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[1.05]">
              <span className="text-white block">GOOD CREATIVE</span>
              <span className="text-white block">ISN'T DECORATION.</span>
              <span className="text-white block">IT'S HOW YOU</span>
              <span className="text-[#B9FD23] block drop-shadow-[0_0_30px_rgba(185,253,35,0.35)]">
                GET NOTICED.
              </span>
            </h2>
          </div>

          {/* Right Column: Mission & 3 Pillars */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2">
            <p className="text-zinc-300 text-base sm:text-lg leading-relaxed mb-10">
              HighpoX combines creative thinking with modern production tools to help brands present their products through distinctive visuals and short-form video.
            </p>

            {/* 3 Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div key={pillar.title} className="flex flex-col">
                    <div className="w-9 h-9 rounded-lg bg-[#B9FD23]/10 border border-[#B9FD23]/30 flex items-center justify-center text-[#B9FD23] mb-3">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-1">
                      {pillar.title}
                    </h3>
                    <p className="text-zinc-400 text-xs leading-normal">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

        {/* Large Production BTS Banner */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-black/60 shadow-2xl shadow-black/80 aspect-[21/9] sm:aspect-[21/8] min-h-[220px]">
          <img
            src="/images/studio-bts.jpg"
            alt="HighpoX Production Studio"
            className="w-full h-full object-cover filter contrast-[1.08] brightness-[0.9]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 pointer-events-none" />

          {/* Corner frame overlays */}
          <div className="absolute top-4 left-4 font-mono text-[10px] text-zinc-400 bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/10 uppercase">
            HighpoX Studio Lab // BTS
          </div>
          <div className="absolute bottom-4 right-4 font-mono text-[10px] text-[#B9FD23] bg-black/70 backdrop-blur-md px-3 py-1 rounded border border-[#B9FD23]/30 uppercase flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B9FD23] animate-pulse" />
            <span>STUDIO READY</span>
          </div>
        </div>

      </div>
    </section>
  );
};
