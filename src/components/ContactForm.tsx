import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Video, Camera, Sparkles, CheckCircle2 } from 'lucide-react';

interface ContactFormProps {
  selectedServicePreset?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedServicePreset }) => {
  const [formData, setFormData] = useState({
    name: '',
    brandName: '',
    contactInfo: '',
    service: 'UGC-Style Video Ads',
    projectDetails: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (selectedServicePreset) {
      if (selectedServicePreset.toLowerCase().includes('starter') || selectedServicePreset.toLowerCase().includes('ugc')) {
        setFormData(prev => ({ ...prev, service: 'UGC-Style Video Ads' }));
      } else if (selectedServicePreset.toLowerCase().includes('growth') || selectedServicePreset.toLowerCase().includes('product')) {
        setFormData(prev => ({ ...prev, service: 'Product Visuals' }));
      } else if (selectedServicePreset.toLowerCase().includes('brand') || selectedServicePreset.toLowerCase().includes('social')) {
        setFormData(prev => ({ ...prev, service: 'Social & Ad Creatives' }));
      } else if (selectedServicePreset.toLowerCase().includes('custom')) {
        setFormData(prev => ({ ...prev, service: 'Custom Package / Full Campaign' }));
      }
    }
  }, [selectedServicePreset]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="relative py-28 border-t border-white/5 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-[#B9FD23]/5 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14">
          
          {/* Left Column: Info & Service Badges */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3 text-[#B9FD23] text-xs font-mono tracking-widest uppercase">
                <span className="w-4 h-[2px] bg-[#B9FD23]" />
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                Start Your Project
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed mb-8">
                Share a few details about your project and we'll get back to you soon.
              </p>
            </div>

            {/* 3 Service Badges */}
            <div className="space-y-3.5 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3 text-xs font-mono text-zinc-300">
                <div className="w-7 h-7 rounded-lg bg-[#B9FD23]/10 border border-[#B9FD23]/25 flex items-center justify-center text-[#B9FD23]">
                  <Video className="w-3.5 h-3.5" />
                </div>
                <span className="uppercase tracking-wider">UGC-STYLE VIDEO ADS</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-zinc-300">
                <div className="w-7 h-7 rounded-lg bg-[#B9FD23]/10 border border-[#B9FD23]/25 flex items-center justify-center text-[#B9FD23]">
                  <Camera className="w-3.5 h-3.5" />
                </div>
                <span className="uppercase tracking-wider">PRODUCT VISUALS</span>
              </div>

              <div className="flex items-center gap-3 text-xs font-mono text-zinc-300">
                <div className="w-7 h-7 rounded-lg bg-[#B9FD23]/10 border border-[#B9FD23]/25 flex items-center justify-center text-[#B9FD23]">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <span className="uppercase tracking-wider">SOCIAL & AD CREATIVES</span>
              </div>
            </div>

          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-8">
            <div className="bg-[#0b0e0a] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-black/80">
              
              {submitted ? (
                <div className="py-12 text-center flex flex-col items-center justify-center animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-[#B9FD23]/20 border border-[#B9FD23] flex items-center justify-center text-[#B9FD23] mb-5 shadow-[0_0_25px_rgba(185,253,35,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">
                    Request Received!
                  </h3>
                  <p className="text-zinc-400 text-sm max-w-md mx-auto mb-6">
                    Thanks for reaching out! Our creative director will review your project requirements and message you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        brandName: '',
                        contactInfo: '',
                        service: 'UGC-Style Video Ads',
                        projectDetails: ''
                      });
                    }}
                    className="px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Submit Another Brief
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Row 1: Name, Brand Name, Contact Info */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        Name <span className="text-[#B9FD23]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#121511] border border-white/10 focus:border-[#B9FD23] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        Brand / Business Name <span className="text-[#B9FD23]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your brand name"
                        value={formData.brandName}
                        onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                        className="w-full bg-[#121511] border border-white/10 focus:border-[#B9FD23] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                        Email or WhatsApp <span className="text-[#B9FD23]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="you@domain.com or WhatsApp"
                        value={formData.contactInfo}
                        onChange={(e) => setFormData({ ...formData, contactInfo: e.target.value })}
                        className="w-full bg-[#121511] border border-white/10 focus:border-[#B9FD23] rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Row 2: Service Required */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Service Required <span className="text-[#B9FD23]">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#121511] border border-white/10 focus:border-[#B9FD23] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors cursor-pointer"
                    >
                      <option value="UGC-Style Video Ads">UGC-Style Video Ads (Starter / Growth / Brand)</option>
                      <option value="Product Visuals">Product Visuals (Photography & 3D Still Concepts)</option>
                      <option value="Social & Ad Creatives">Social & Ad Creatives (Multi-format campaign ads)</option>
                      <option value="Custom Package / Full Campaign">Custom Package / Full Creative Direction</option>
                    </select>
                  </div>

                  {/* Row 3: Project Details */}
                  <div>
                    <label className="block text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
                      Project Details <span className="text-[#B9FD23]">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Tell us about your product, goals, and any specific requirements..."
                      value={formData.projectDetails}
                      onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                      className="w-full bg-[#121511] border border-white/10 focus:border-[#B9FD23] rounded-xl p-4 text-sm text-white placeholder-zinc-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full group/btn flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-[#B9FD23] text-black font-extrabold text-sm uppercase tracking-wider transition-all duration-300 hover:bg-[#d0ff3d] hover:shadow-[0_0_35px_rgba(185,253,35,0.45)] active:scale-[0.99] cursor-pointer disabled:opacity-70"
                    >
                      <span>{isSubmitting ? 'Sending Request...' : 'SUBMIT REQUEST'}</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
