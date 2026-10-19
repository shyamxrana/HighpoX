import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#060806] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#B9FD23]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-16 border-b border-white/10">
          
          {/* Brand Info (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <a href="#" className="inline-block mb-4">
                <span className="text-3xl font-extrabold tracking-tight text-white font-sans">
                  Highpo<span className="text-[#B9FD23]">X</span>
                </span>
              </a>

              <p className="text-zinc-400 text-sm leading-relaxed max-w-sm mb-6">
                Creative thinking. Modern production. Content built for digital brands.
              </p>
            </div>

            {/* Instagram handle */}
            <div className="pt-2">
              <a
                href="https://instagram.com/highpox.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-zinc-300 hover:text-[#B9FD23] transition-colors"
              >
                <svg className="w-4 h-4 text-zinc-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>@highpox.in</span>
              </a>
            </div>
          </div>

          {/* Links Columns (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Explore */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Explore
              </h4>
              <ul className="space-y-2.5">
                {[
                  { name: 'Work', href: '#work' },
                  { name: 'Services', href: '#services' },
                  { name: 'About', href: '#about' },
                  { name: 'Pricing', href: '#pricing' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-xs text-zinc-300 hover:text-[#B9FD23] transition-colors"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-[#B9FD23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Let's Connect */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Let's Connect
              </h4>
              <ul className="space-y-2.5">
                {[
                  { name: 'Contact', href: '#contact' },
                  { name: 'Instagram: @highpox.in', href: 'https://instagram.com/highpox.in' },
                  { name: 'Email: hello@highpox.in', href: 'mailto:hello@highpox.in' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-xs text-zinc-300 hover:text-[#B9FD23] transition-colors"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-[#B9FD23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Information */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-xs font-mono uppercase tracking-widest text-zinc-400 mb-4">
                Information
              </h4>
              <ul className="space-y-2.5">
                {[
                  { name: 'Privacy Policy', href: '#' },
                  { name: 'Terms of Service', href: '#' }
                ].map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="group inline-flex items-center gap-1 text-xs text-zinc-300 hover:text-[#B9FD23] transition-colors"
                    >
                      <span>{item.name}</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-600 group-hover:text-[#B9FD23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © 2026 HighpoX. All rights reserved.
          </div>
          <div className="tracking-widest uppercase text-zinc-400 text-[11px]">
            Independent Creative Studio • India
          </div>
        </div>

      </div>
    </footer>
  );
};
