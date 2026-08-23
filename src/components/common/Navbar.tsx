import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, projectSlug?: string) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenQuote
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  const isHome = currentPage === 'home';
  // If at top of home, can be translucent; otherwise ivory surface
  const isSolid = isScrolled || !isHome;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isSolid
            ? 'bg-[#F7F4EC]/95 backdrop-blur-md border-b border-[#C6A15B]/20 py-4 sm:py-5'
            : 'bg-[#F7F4EC]/80 backdrop-blur-sm border-b border-[#C6A15B]/10 py-5 sm:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => {
              onNavigate('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-[#C6A15B]"
            aria-label="SCALE Interior Design Home"
          >
            <Logo
              variant="dark"
              size="md"
              showSubtitle={true}
            />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] uppercase tracking-[0.15em] font-medium">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`transition-colors duration-200 py-1 relative ${
                    isActive
                      ? 'text-[#3F4728] font-semibold border-b border-[#3F4728]'
                      : 'text-[#20221A]/80 hover:text-[#C6A15B]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:+97143829100"
              className="flex items-center text-[11px] tracking-[0.12em] text-[#626B3A] hover:text-[#3F4728] transition-colors"
              title="Call studio"
            >
              <Phone className="w-3 h-3 mr-1.5 text-[#C6A15B]" />
              <span className="font-normal">+971 4 382 9100</span>
            </a>

            <button
              onClick={onOpenQuote}
              className="inline-flex items-center justify-center border border-[#3F4728] px-6 py-2.5 text-[10px] uppercase tracking-[0.2em] font-semibold text-[#3F4728] hover:bg-[#3F4728] hover:text-[#F7F4EC] transition-all duration-200 rounded-[1px] group"
            >
              <span>Get a Quote</span>
              <ArrowUpRight className="w-3 h-3 ml-1.5 text-[#C6A15B] group-hover:text-[#F7F4EC] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={onOpenQuote}
              className="border border-[#3F4728] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.16em] font-semibold text-[#3F4728] hover:bg-[#3F4728] hover:text-[#F7F4EC] rounded-[1px]"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#20221A] hover:text-[#3F4728] focus:outline-none rounded-[1px]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-out Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-[#20221A]/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-[#FCFAF5] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E7E0D0]">
                <Logo variant="dark" size="sm" />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#20221A] hover:text-[#3F4728]"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="py-6 flex flex-col space-y-3">
                {navLinks.map((link) => {
                  const isActive = currentPage === link.id;
                  return (
                    <button
                      key={link.id}
                      onClick={() => {
                        onNavigate(link.id);
                        setMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className={`text-left py-3 px-3 rounded-[2px] text-sm uppercase tracking-[0.16em] font-medium transition-colors flex items-center justify-between ${
                        isActive
                          ? 'bg-[#3F4728] text-[#F7F4EC] font-semibold'
                          : 'text-[#20221A] hover:bg-[#E7E0D0]/50'
                      }`}
                    >
                      <span>{link.label}</span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-[#C6A15B]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-6 border-t border-[#E7E0D0] space-y-4">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 text-center text-xs uppercase tracking-[0.16em] font-semibold text-[#F7F4EC] bg-[#3F4728] hover:bg-[#30371F] rounded-[2px]"
              >
                Start Your Project / Get Quote
              </button>

              <div className="flex items-center justify-center space-x-6 text-xs text-[#626B3A]">
                <a
                  href="https://wa.me/971563131834"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center hover:text-[#3F4728]"
                >
                  <MessageSquare className="w-4 h-4 mr-1 text-[#C6A15B]" />
                  WhatsApp
                </a>
                <span className="text-[#E7E0D0]">|</span>
                <a href="tel:+97143829100" className="flex items-center hover:text-[#3F4728]">
                  <Phone className="w-4 h-4 mr-1 text-[#C6A15B]" />
                  +971 4 382 9100
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
