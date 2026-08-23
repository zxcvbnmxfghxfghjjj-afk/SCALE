import React, { useState } from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, MessageSquare, Instagram, Linkedin, ArrowRight, CheckCircle2 } from 'lucide-react';
import { contactInfo } from '../../data/teamData';

interface FooterProps {
  onNavigate: (page: string, projectSlug?: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 4000);
    }
  };

  return (
    <footer className="bg-[#20221A] text-[#F7F4EC] pt-20 pb-12 border-t border-[#C6A15B]/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#C6A15B]/10">
          {/* Col 1: Brand & Philosophy (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <button
              onClick={() => {
                onNavigate('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left focus:outline-none"
            >
              <Logo variant="light" size="lg" showSubtitle={true} />
            </button>

            <p className="text-xs text-[#F7F4EC]/70 leading-relaxed font-light pr-4 max-w-sm">
              Curating architectural spaces that balance structural precision with the warmth of human experience. Defined by olive-toned tranquility and gold accents.
            </p>

            <div className="pt-2">
              <div className="inline-block px-3.5 py-1 border border-[#C6A15B]/30 text-[#C6A15B] text-[10px] uppercase tracking-[0.25em] rounded-[1px]">
                Space, scaled with intent.
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C6A15B]">
              Navigation
            </h4>
            <ul className="space-y-3 text-xs">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Atelier' },
                { id: 'services', label: 'Core Services' },
                { id: 'projects', label: 'Selected Works' },
                { id: 'contact', label: 'Contact Studio' }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-[#F7F4EC]/70 hover:text-[#C6A15B] transition-colors flex items-center text-[11px] uppercase tracking-[0.15em]"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services Taxonomy (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C6A15B]">
              Disciplines
            </h4>
            <ul className="space-y-2.5 text-xs text-[#F7F4EC]/70">
              <li className="hover:text-[#C6A15B] cursor-pointer flex items-center justify-between border-b border-white/5 pb-1.5" onClick={() => onNavigate('services')}>
                <span>Interior Architecture</span>
                <span className="text-[10px] text-[#626B3A] italic">01</span>
              </li>
              <li className="hover:text-[#C6A15B] cursor-pointer flex items-center justify-between border-b border-white/5 pb-1.5" onClick={() => onNavigate('services')}>
                <span>Bespoke Curation</span>
                <span className="text-[10px] text-[#626B3A] italic">02</span>
              </li>
              <li className="hover:text-[#C6A15B] cursor-pointer flex items-center justify-between border-b border-white/5 pb-1.5" onClick={() => onNavigate('services')}>
                <span>3D Visualization</span>
                <span className="text-[10px] text-[#626B3A] italic">03</span>
              </li>
              <li className="hover:text-[#C6A15B] cursor-pointer flex items-center justify-between border-b border-white/5 pb-1.5" onClick={() => onNavigate('services')}>
                <span>Turnkey Fit-Out</span>
                <span className="text-[10px] text-[#626B3A] italic">04</span>
              </li>
              <li className="hover:text-[#C6A15B] cursor-pointer flex items-center justify-between border-b border-white/5 pb-1.5" onClick={() => onNavigate('services')}>
                <span>Acoustic Millwork</span>
                <span className="text-[10px] text-[#626B3A] italic">05</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-5">
            <h4 className="text-[10px] uppercase font-bold tracking-[0.3em] text-[#C6A15B]">
              Studio Inquiries
            </h4>

            <div className="space-y-2.5 text-xs text-[#F7F4EC]/80">
              <p className="flex items-center">
                <MapPin className="w-3.5 h-3.5 mr-2 text-[#C6A15B] shrink-0" />
                <span className="text-[11px] tracking-wide">Business Bay, Dubai, UAE</span>
              </p>
              <p className="flex items-center">
                <Phone className="w-3.5 h-3.5 mr-2 text-[#C6A15B] shrink-0" />
                <a href={`tel:${contactInfo.phone}`} className="text-[11px] hover:text-[#C6A15B] tracking-wide">{contactInfo.phone}</a>
              </p>
              <p className="flex items-center">
                <MessageSquare className="w-3.5 h-3.5 mr-2 text-[#C6A15B] shrink-0" />
                <a href={contactInfo.whatsappUrl} target="_blank" rel="noreferrer" className="text-[11px] hover:text-[#C6A15B] tracking-wide">WhatsApp Atelier</a>
              </p>
              <p className="flex items-center">
                <Mail className="w-3.5 h-3.5 mr-2 text-[#C6A15B] shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-[11px] hover:text-[#C6A15B] tracking-wide">{contactInfo.email}</a>
              </p>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <p className="text-[10px] text-[#C6A15B] uppercase tracking-[0.2em] mb-2 font-medium">
                Architectural Journal
              </p>
              {subscribed ? (
                <div className="flex items-center text-xs text-[#C6A15B] bg-[#3F4728]/40 p-2.5 rounded-[1px] border border-[#C6A15B]/30">
                  <CheckCircle2 className="w-4 h-4 mr-2" />
                  <span>Thank you for subscribing.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-3 py-2 text-xs bg-[#20221A] border border-[#C6A15B]/30 text-[#F7F4EC] placeholder-[#F7F4EC]/30 focus:outline-none focus:border-[#C6A15B] rounded-l-[1px]"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe"
                    className="bg-[#3F4728] border border-l-0 border-[#C6A15B]/30 hover:bg-[#C6A15B] text-[#F7F4EC] hover:text-[#20221A] px-3.5 flex items-center justify-center rounded-r-[1px] transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[9px] uppercase tracking-widest text-[#F7F4EC]/40 gap-4">
          <div className="flex gap-6">
            <span>&copy; {new Date().getFullYear()} SCALE INTERIORS</span>
            <span>Dubai &bull; Abu Dhabi &bull; London</span>
          </div>

          <div className="flex gap-6 text-[9px] uppercase tracking-widest text-[#C6A15B]">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#F7F4EC] transition-colors" aria-label="Instagram">
              Instagram
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#F7F4EC] transition-colors" aria-label="LinkedIn">
              LinkedIn
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noreferrer" className="hover:text-[#F7F4EC] transition-colors" aria-label="Pinterest">
              Pinterest
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
