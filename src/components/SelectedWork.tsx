import React, { useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { WORK_ITEMS, WorkItem } from '../data/content';

interface SelectedWorkProps {
  onOpenModal: (item: WorkItem) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onOpenModal }) => {
  const [activeFilter, setActiveFilter] = useState<'All Work' | 'UGC Videos' | 'Product Visuals' | 'Ad Creatives'>('All Work');

  const filters = ['All Work', 'UGC Videos', 'Product Visuals', 'Ad Creatives'] as const;

  const headphoneItem = WORK_ITEMS.find(i => i.id === 'headphone')!;
  const jewelleryItem = WORK_ITEMS.find(i => i.id === 'jewellery')!;
  const fashionItem = WORK_ITEMS.find(i => i.id === 'fashion')!;
  const fragranceItem = WORK_ITEMS.find(i => i.id === 'fragrance')!;
  const skincareItem = WORK_ITEMS.find(i => i.id === 'skincare')!;

  // Check if item should be visible given filter
  const isVisible = (category: string) => {
    return activeFilter === 'All Work' || activeFilter === category;
  };

  return (
    <section id="work" className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#B9FD23]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-[#B9FD23] text-xs font-mono tracking-widest uppercase">
              <span className="w-4 h-[2px] bg-[#B9FD23]" />
              <span>SELECTED WORK</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
              <span className="text-white block">MADE TO MAKE</span>
              <span className="text-[#B9FD23] block drop-shadow-[0_0_25px_rgba(185,253,35,0.3)]">
                PEOPLE LOOK TWICE.
              </span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wider transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#B9FD23] text-black shadow-[0_0_20px_rgba(185,253,35,0.35)]'
                      : 'bg-[#121511] text-zinc-400 hover:text-white hover:bg-[#1a1f18] border border-white/5'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        {/* Work Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          
          {/* Card 01: Headphone Lifestyle Ad */}
          {isVisible(headphoneItem.category) && (
            <div 
              onClick={() => onOpenModal(headphoneItem)}
              className="lg:col-span-4 bg-[#0d100d] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between group cursor-pointer hover:border-[#B9FD23]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              {/* Card Meta Top */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-zinc-400 group-hover:text-[#B9FD23] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B9FD23]" />
                  <span>{headphoneItem.categoryLabel}</span>
                </span>
                <span className="font-mono text-xs text-zinc-500">01</span>
              </div>

              {/* Image Preview with Play Overlay */}
              <div className="relative aspect-[4/4] rounded-xl overflow-hidden bg-black/50 mb-5">
                <img
                  src={headphoneItem.image}
                  alt={headphoneItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#B9FD23] group-hover:text-black group-hover:border-transparent group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Title & Badge */}
              <div className="pt-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#B9FD23] transition-colors">
                  {headphoneItem.title}
                </h3>
                <div className="mt-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wider text-zinc-400 bg-white/5 border border-white/10">
                    {headphoneItem.badge}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 02: Jewellery Campaign */}
          {isVisible(jewelleryItem.category) && (
            <div 
              onClick={() => onOpenModal(jewelleryItem)}
              className="lg:col-span-4 bg-[#0d100d] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between group cursor-pointer hover:border-[#B9FD23]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-zinc-400 group-hover:text-[#B9FD23] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B9FD23]" />
                  <span>{jewelleryItem.categoryLabel}</span>
                </span>
                <span className="font-mono text-xs text-zinc-500">02</span>
              </div>

              <div className="relative aspect-[4/4] rounded-xl overflow-hidden bg-black/50 mb-5">
                <img
                  src={jewelleryItem.image}
                  alt={jewelleryItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
              </div>

              <div className="pt-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#B9FD23] transition-colors">
                  {jewelleryItem.title}
                </h3>
                <div className="mt-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wider text-zinc-400 bg-white/5 border border-white/10">
                    {jewelleryItem.badge}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 03: Fashion Product Video */}
          {isVisible(fashionItem.category) && (
            <div 
              onClick={() => onOpenModal(fashionItem)}
              className="lg:col-span-4 bg-[#0d100d] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between group cursor-pointer hover:border-[#B9FD23]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-zinc-400 group-hover:text-[#B9FD23] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B9FD23]" />
                  <span>{fashionItem.categoryLabel}</span>
                </span>
                <span className="font-mono text-xs text-zinc-500">03</span>
              </div>

              <div className="relative aspect-[4/4] rounded-xl overflow-hidden bg-black/50 mb-5">
                <img
                  src={fashionItem.image}
                  alt={fashionItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-md border border-white/30 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-[#B9FD23] group-hover:text-black group-hover:border-transparent group-hover:scale-110">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="pt-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#B9FD23] transition-colors">
                  {fashionItem.title}
                </h3>
                <div className="mt-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wider text-zinc-400 bg-white/5 border border-white/10">
                    {fashionItem.badge}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 04: Fragrance Visuals (5 cols or responsive) */}
          {isVisible(fragranceItem.category) && (
            <div 
              onClick={() => onOpenModal(fragranceItem)}
              className="lg:col-span-5 bg-[#0d100d] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between group cursor-pointer hover:border-[#B9FD23]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-zinc-400 group-hover:text-[#B9FD23] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B9FD23]" />
                  <span>{fragranceItem.categoryLabel}</span>
                </span>
                <span className="font-mono text-xs text-zinc-500">04</span>
              </div>

              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-black/50 mb-5">
                <img
                  src={fragranceItem.image}
                  alt={fragranceItem.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                <div className="absolute bottom-3 right-3">
                  <span className="text-[10px] font-mono text-zinc-400 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    SPEC CONCEPT
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#B9FD23] transition-colors">
                  {fragranceItem.title}
                </h3>
                <div className="mt-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wider text-zinc-400 bg-white/5 border border-white/10">
                    {fragranceItem.badge}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Card 05: Skincare Campaign (7 cols - Split Visual) */}
          {isVisible(skincareItem.category) && (
            <div 
              onClick={() => onOpenModal(skincareItem)}
              className="lg:col-span-7 bg-[#0d100d] border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-col justify-between group cursor-pointer hover:border-[#B9FD23]/50 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono tracking-wider text-zinc-400 group-hover:text-[#B9FD23] transition-colors">
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#B9FD23]" />
                  <span>{skincareItem.categoryLabel}</span>
                </span>
                <span className="font-mono text-xs text-zinc-500">05</span>
              </div>

              {/* Split image preview */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-black/60 mb-5 grid grid-cols-2">
                {/* Left side: Cosmetic tube + text tag */}
                <div className="relative h-full border-r border-black/40 overflow-hidden">
                  <img
                    src="/images/skincare-sora.jpg"
                    alt="Sora Skincare"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/35 pointer-events-none" />
                  
                  {/* Text Badge on image */}
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-tight text-[#B9FD23] leading-tight block">
                      CLEAN<br />NATURAL<br />EFFECTIVE
                    </span>
                  </div>
                </div>

                {/* Right side: Skincare model */}
                <div className="relative h-full overflow-hidden">
                  <img
                    src="/images/skincare-model.jpg"
                    alt="Skincare Model"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/15 group-hover:bg-transparent transition-colors" />
                </div>

                <div className="absolute bottom-3 right-3 z-10">
                  <span className="text-[10px] font-mono text-zinc-400 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded border border-white/10">
                    SPEC CONCEPT
                  </span>
                </div>
              </div>

              <div className="pt-1">
                <h3 className="text-lg font-bold text-white group-hover:text-[#B9FD23] transition-colors">
                  {skincareItem.title}
                </h3>
                <div className="mt-2.5">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono font-medium tracking-wider text-zinc-400 bg-white/5 border border-white/10">
                    {skincareItem.badge}
                  </span>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
