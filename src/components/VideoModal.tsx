import React, { useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { WorkItem } from '../data/content';

interface VideoModalProps {
  item: WorkItem | null;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ item, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(38);

  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-3xl bg-[#0d100c] border border-[#B9FD23]/30 rounded-2xl overflow-hidden shadow-2xl shadow-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#080a08]/90">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#B9FD23] animate-pulse" />
            <span className="text-xs font-mono font-semibold tracking-wider text-[#B9FD23] uppercase">
              {item.categoryLabel} • {item.number}
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Media Player Area */}
        <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img 
            src={item.image} 
            alt={item.title}
            className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Ambient overlay glow */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Play/Pause Center Button */}
          <button 
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-16 h-16 rounded-full bg-[#B9FD23] text-black flex items-center justify-center shadow-lg shadow-[#B9FD23]/30 hover:scale-110 active:scale-95 transition-all cursor-pointer"
          >
            {isPlaying ? (
              <Pause className="w-7 h-7 fill-current" />
            ) : (
              <Play className="w-7 h-7 fill-current ml-1" />
            )}
          </button>

          {/* Video Status Badge */}
          <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/15 px-3 py-1 rounded-full text-[11px] font-mono text-zinc-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span>4K CINEMATIC PREVIEW • 60 FPS</span>
          </div>

          {/* Controls Bar at bottom */}
          <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-black/95 to-transparent flex flex-col gap-2">
            {/* Timeline Bar */}
            <div 
              className="w-full h-1.5 bg-white/20 rounded-full overflow-hidden cursor-pointer"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const pos = (e.clientX - rect.left) / rect.width;
                setProgress(Math.round(pos * 100));
              }}
            >
              <div 
                className="h-full bg-[#B9FD23] rounded-full relative" 
                style={{ width: `${progress}%` }}
              >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow" />
              </div>
            </div>

            {/* Controls Row */}
            <div className="flex items-center justify-between text-xs text-zinc-300 pt-1">
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-[#B9FD23] transition-colors"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </button>
                <button 
                  onClick={() => setIsMuted(!isMuted)}
                  className="hover:text-[#B9FD23] transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="font-mono text-[11px] text-zinc-400">
                  {item.duration || '0:15'} / {item.duration || '0:15'}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-[#B9FD23]/20 text-[#B9FD23] text-[10px] font-mono font-bold">
                  {item.badge}
                </span>
                <button className="hover:text-white">
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Info Footer */}
        <div className="p-6 bg-[#090c09] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white tracking-wide">{item.title}</h3>
            <p className="text-sm text-zinc-400 mt-1 max-w-md">
              {item.description || 'Crafted for high retention and social engagement with high-end color grading and crisp typography.'}
            </p>
          </div>

          <a 
            href="#contact"
            onClick={onClose}
            className="whitespace-nowrap px-5 py-2.5 rounded-full bg-[#B9FD23] text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-1.5 hover:bg-[#d0ff3d] hover:shadow-lg hover:shadow-[#B9FD23]/30 transition-all"
          >
            Request Similar Visual
          </a>
        </div>
      </div>
    </div>
  );
};
