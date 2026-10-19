import React from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import { PRICING_PLANS } from '../data/content';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="relative py-28 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[550px] bg-[#B9FD23]/5 rounded-full blur-[170px] pointer-events-none" />

      {/* Decorative Technical Margin Markings */}
      <div className="hidden xl:flex absolute top-20 left-8 flex-col text-[10px] font-mono tracking-widest text-zinc-600 gap-1 select-none">
        <span>CREATIVE</span>
        <span>IDEAS</span>
        <span>VISUALS</span>
        <span>IMPACT</span>
        <span className="w-4 h-[1px] bg-zinc-700 mt-1" />
      </div>

      <div className="hidden xl:flex absolute top-20 right-8 flex-col text-right text-[10px] font-mono tracking-widest text-zinc-600 gap-1 select-none">
        <span>UGC</span>
        <span>PRODUCT</span>
        <span>SOCIAL</span>
        <span>BRANDS</span>
        <span className="w-4 h-[1px] bg-zinc-700 mt-1 ml-auto" />
      </div>

      {/* Crosshairs */}
      <span className="crosshair-mark top-16 left-12 hidden sm:block">+</span>
      <span className="crosshair-mark top-16 right-12 hidden sm:block">+</span>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 mb-3 text-zinc-400 text-xs font-mono tracking-widest uppercase">
            <span className="w-4 h-[1px] bg-zinc-600" />
            <span className="text-[#B9FD23]">SIMPLE, TRANSPARENT PRICING</span>
            <span className="w-4 h-[1px] bg-zinc-600" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight mb-4">
            <span className="text-white block">THE RIGHT CREATIVE.</span>
            <span className="text-[#B9FD23] block drop-shadow-[0_0_25px_rgba(185,253,35,0.3)]">
              THE RIGHT PACKAGE.
            </span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Choose a starting point for your next creative campaign.
            Need something different? Let's build a custom package.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {PRICING_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-[#0d100d] rounded-3xl p-6 sm:p-7 flex flex-col justify-between border transition-all duration-300 group hover:shadow-2xl hover:shadow-[#B9FD23]/10 ${
                plan.popular 
                  ? 'border-[#B9FD23]/60 shadow-[0_0_30px_rgba(185,253,35,0.08)]' 
                  : 'border-white/10 hover:border-[#B9FD23]/40'
              }`}
            >
              {/* Popular Tag Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 right-6 z-20">
                  <span className="px-3 py-1 rounded-full bg-[#B9FD23] text-black text-[10px] font-mono font-bold tracking-wider uppercase shadow-md shadow-[#B9FD23]/30">
                    POPULAR
                  </span>
                </div>
              )}

              {/* Top Card Section: Number & Header */}
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest block mb-1">
                      {plan.number}
                    </span>
                    <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Thumbnail / Custom Preview Graphic */}
                  {plan.id === 'starter' ? (
                    <div className="w-14 sm:w-16 h-20 sm:h-24 rounded-xl overflow-hidden border-2 border-zinc-700 bg-black p-0.5 shadow-lg shadow-black/80 shrink-0 relative group-hover:border-[#B9FD23]/60 transition-colors">
                      {/* Speaker notch */}
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-zinc-600 rounded-full z-10" />
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/15" />
                    </div>
                  ) : (
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border border-white/10 bg-black/50 shrink-0 group-hover:border-[#B9FD23]/40 transition-colors">
                      <img
                        src={plan.image}
                        alt={plan.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  )}
                </div>

                {/* Subtitle description */}
                <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
                  {plan.subtitle}
                </p>

                {/* Price Display */}
                <div className="mb-8 pb-6 border-b border-white/10">
                  <div className="flex items-baseline text-white">
                    <span className="text-4xl sm:text-5xl font-black tracking-tight font-sans">
                      {plan.price}
                    </span>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-300">
                      <span className="w-4 h-4 rounded-full bg-[#B9FD23]/20 text-[#B9FD23] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Button */}
              <div>
                <button
                  onClick={() => onSelectPlan(plan.name)}
                  className="w-full group/btn flex items-center justify-center gap-2 py-3.5 px-5 rounded-full bg-[#B9FD23] text-black font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:bg-[#d0ff3d] hover:shadow-[0_0_25px_rgba(185,253,35,0.4)] active:scale-[0.98] cursor-pointer"
                >
                  <span>{plan.buttonText}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Pricing Footnote & Custom Package Link */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <p className="text-zinc-500 text-xs leading-relaxed">
            Introductory pricing for AI-assisted UGC-style video creatives. Final scope, turnaround, usage rights, and additional revisions are agreed before production.
          </p>
          <div>
            <a
              href="#contact"
              onClick={() => onSelectPlan('Custom Package')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#B9FD23] hover:underline underline-offset-4 tracking-wider uppercase transition-colors"
            >
              <span>Need a custom package? Let's talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
