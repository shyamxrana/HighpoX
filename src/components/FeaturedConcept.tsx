import React, { useState } from 'react';
import { Play, ArrowUpRight } from 'lucide-react';
import { WorkItem } from '../data/content';

interface FeaturedConceptProps {
  onOpenModal: (item: WorkItem) => void;
}

export const FeaturedConcept: React.FC<FeaturedConceptProps> = ({ onOpenModal }) => {
  const [selectedShotIndex, setSelectedShotIndex] = useState(0);

  const conceptShots = [
    {
      id: 'shot-1',
      title: 'Macro Filigree & Diamonds',
      image: '/images/jewellery-gold.jpg',
      label: 'Shot 01'
    },
    {
      id: 'shot-2',
      title: 'Dynamic Lighting Angle',
      image: '/images/jewellery-gold.jpg',
      label: 'Shot 02'
    },
    {
      id: 'shot-3',
      title: 'Atmospheric Texture',
      image: '/images/jewellery-gold.jpg',
      label: 'Shot 03'
    }
  ];

  const currentItem: WorkItem = {
    id: 'art-of-the-reveal',
    number: '01',
    category: 'Product Visuals',
    categoryLabel: 'PRODUCT CAMPAIGN',
    title: 'The Art of the Reveal',
    badge: 'SPEC CONCEPT',
    image: conceptShots[selectedShotIndex].image,
    isVideo: true,
    duration: '0:20',
    description: 'A visual direction exploring how lighting, framing, and storytelling can transform an ornate gold piece into an unforgettable luxury digital campaign.'
  };

  return (
    <section className="relative py-24 border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-10 w-[600px] h-[600px] bg-[#B9FD23]/8 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 mb-3 text-[#B9FD23] text-xs font-mono tracking-widest uppercase">
              <span className="w-4 h-[2px] bg-[#B9FD23]" />
              <span>FEATURED CREATIVE / SPEC CONCEPT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
              <span className="text-white block">ONE PRODUCT.</span>
              <span className="text-[#B9FD23] block drop-shadow-[0_0_25px_rgba(185,253,35,0.3)]">
                A WHOLE NEW WORLD.
              </span>
            </h2>
          </div>

          <div className="hidden md:block">
            <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest">01</span>
          </div>
        </div>

        {/* Featured Showcase Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual on Left (7 cols) */}
          <div className="lg:col-span-7">
            <div 
              onClick={() => onOpenModal(currentItem)}
              className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl sm:rounded-3xl overflow-hidden bg-black/60 border border-white/10 group cursor-pointer shadow-2xl shadow-black/80 hover:border-[#B9FD23]/60 transition-all duration-300"
            >
              <img
                src={conceptShots[selectedShotIndex].image}
                alt="The Art of the Reveal"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent pointer-events-none" />

              {/* Play Button Overlay */}
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-black/70 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-[#B9FD23] group-hover:text-black group-hover:border-transparent transition-all duration-300 group-hover:scale-110 shadow-lg">
                  <Play className="w-5 h-5 fill-current ml-0.5" />
                </div>
                <span className="text-xs font-mono tracking-wider text-zinc-300 group-hover:text-white uppercase">
                  Play Showcase
                </span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            {/* 3 Thumbnails Row */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {conceptShots.map((shot, idx) => (
                <button
                  key={shot.id}
                  onClick={() => setSelectedShotIndex(idx)}
                  className={`relative aspect-square rounded-xl overflow-hidden border transition-all duration-200 cursor-pointer ${
                    selectedShotIndex === idx
                      ? 'border-[#B9FD23] ring-2 ring-[#B9FD23]/30 scale-[1.02]'
                      : 'border-white/15 opacity-60 hover:opacity-100 hover:border-white/40'
                  }`}
                >
                  <img
                    src={shot.image}
                    alt={shot.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                </button>
              ))}
            </div>

            {/* Title & Content */}
            <div className="mb-8">
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
                The Art of <br />the Reveal
              </h3>
              
              <div className="inline-flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4">
                <span>PRODUCT CAMPAIGN</span>
                <span>•</span>
                <span className="text-[#B9FD23]">SPEC CONCEPT</span>
              </div>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                A visual direction exploring how lighting, framing, and storytelling can transform a product into a campaign.
              </p>
            </div>

            {/* Explore Button */}
            <div>
              <button
                onClick={() => onOpenModal(currentItem)}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:border-[#B9FD23] hover:text-[#B9FD23] hover:bg-white/5 cursor-pointer"
              >
                <span>Explore the Concept</span>
                <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
