import React, { useState } from 'react';
import { X, CheckCircle2, MessageSquare, ArrowRight, Phone, Send } from 'lucide-react';
import { Logo } from './Logo';
import { contactInfo } from '../../data/teamData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProject?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProject = ''
}) => {
  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState(initialProject || 'Full Villa / Residence');
  const [services, setServices] = useState<string[]>(['Interior Design', '3D Visualization']);
  const [budget, setBudget] = useState('AED 150k – 350k ($40k – $100k)');
  const [timeline, setTimeline] = useState('Within 1 – 3 Months');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const projectTypes = [
    'Full Villa / Residence',
    'Living Room & Majlis',
    'Master Bedroom & Suite',
    'Dressing Room & Wardrobe',
    'Custom TV Media Unit',
    'Kitchen & Dining Atelier',
    'Commercial / Executive Office'
  ];

  const serviceOptions = [
    'Interior Design & Space Planning',
    '3D Visualization & VR Walkthrough',
    'Fit-Out Works & Turnkey Execution',
    'Custom Furniture & Joinery',
    'Technical & Shop Drawings'
  ];

  const budgetOptions = [
    'AED 50k – 150k ($15k – $40k)',
    'AED 150k – 350k ($40k – $100k)',
    'AED 350k – 750k ($100k – $200k)',
    'AED 750k+ ($200k+ High-End)'
  ];

  const toggleService = (srv: string) => {
    if (services.includes(srv)) {
      setServices(services.filter(s => s !== srv));
    } else {
      setServices([...services, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppSend = () => {
    const text = encodeURIComponent(
      `Hello SCALE Design Studio,\n\nI would like to start a project inquiry:\n- Type: ${projectType}\n- Services: ${services.join(', ')}\n- Budget Range: ${budget}\n- Timeline: ${timeline}\n- Name: ${formData.name}\n- Phone: ${formData.phone}\n- Message: ${formData.message}`
    );
    window.open(`https://wa.me/971563131834?text=${text}`, '_blank');
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 overflow-y-auto bg-[#20221A]/80 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
    >
      <div className="relative w-full max-w-2xl bg-[#FCFAF5] border border-[#C6A15B]/30 rounded-[1px] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-[#20221A] text-[#F7F4EC] p-6 flex items-center justify-between border-b border-[#C6A15B]/20">
          <div className="flex items-center space-x-3">
            <Logo variant="light" size="sm" showSubtitle={false} />
            <div>
              <h2 className="font-display text-lg sm:text-xl text-[#F7F4EC] leading-tight font-light">
                Start Your Project / Request a Quote
              </h2>
              <p className="text-[10px] text-[#C6A15B] tracking-[0.25em] uppercase font-bold">
                Complimentary Initial Spatial Consultation
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#F7F4EC]/80 hover:text-[#F7F4EC] rounded-[1px] hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {submitted ? (
          <div className="p-8 sm:p-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-[1px] bg-[#3F4728]/10 text-[#3F4728] border border-[#C6A15B]/40 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8 text-[#C6A15B]" />
            </div>

            <div className="space-y-2">
              <h3 className="font-display text-2xl text-[#20221A] font-light">
                Inquiry Received with Thanks
              </h3>
              <p className="text-xs sm:text-sm text-[#626B3A] max-w-md mx-auto leading-relaxed font-light">
                Our principal design team will review your project brief and reach out within 24 business hours to schedule your preliminary concept discussion.
              </p>
            </div>

            <div className="p-4 bg-[#F7F4EC] rounded-[1px] border border-[#C6A15B]/20 max-w-md mx-auto text-left text-xs space-y-1.5 font-light">
              <div className="text-[#3F4728] font-bold uppercase tracking-wider text-[10px]">Summary:</div>
              <div>• Project Type: <span className="text-[#20221A] font-normal">{projectType}</span></div>
              <div>• Target Timeline: <span className="text-[#20221A] font-normal">{timeline}</span></div>
              <div>• Contact: <span className="text-[#20221A] font-normal">{formData.email || formData.phone}</span></div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppSend}
                className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] hover:bg-[#1eb956] transition-colors"
              >
                <MessageSquare className="w-3.5 h-3.5 mr-2" />
                Chat Now on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 border border-[#3F4728] text-[#3F4728] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] hover:bg-[#3F4728] hover:text-[#F7F4EC] transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
            {/* Step 1: Project Type & Scope */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-2.5">
                    1. Select Project Type
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        type="button"
                        key={type}
                        onClick={() => setProjectType(type)}
                        className={`text-left p-3 text-xs rounded-[1px] border transition-all ${
                          projectType === type
                            ? 'border-[#3F4728] bg-[#3F4728] text-[#F7F4EC] font-semibold shadow-xs'
                            : 'border-[#C6A15B]/30 bg-white text-[#20221A] hover:border-[#3F4728]'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-2.5">
                    2. Required Scope of Services
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {serviceOptions.map((srv) => {
                      const isSelected = services.includes(srv);
                      return (
                        <button
                          type="button"
                          key={srv}
                          onClick={() => toggleService(srv)}
                          className={`text-left p-2.5 text-xs rounded-[1px] border transition-all flex items-center justify-between ${
                            isSelected
                              ? 'border-[#3F4728] bg-[#3F4728]/10 text-[#3F4728] font-medium'
                              : 'border-[#C6A15B]/30 bg-white text-[#626B3A] hover:border-[#3F4728]'
                          }`}
                        >
                          <span>{srv}</span>
                          {isSelected && <span className="text-[#C6A15B] font-bold">✓</span>}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1.5">
                      Estimated Investment Budget
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                    >
                      {budgetOptions.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                    >
                      <option value="Immediate (1 – 4 Weeks)">Immediate (1 – 4 Weeks)</option>
                      <option value="Within 1 – 3 Months">Within 1 – 3 Months</option>
                      <option value="Within 3 – 6 Months">Within 3 – 6 Months</option>
                      <option value="Planning Phase / Later">Planning Phase / Later</option>
                    </select>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="inline-flex items-center border border-[#3F4728] px-6 py-2.5 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-colors"
                  >
                    <span>Next: Contact Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 text-[#C6A15B]" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Contact Details */}
            {step === 2 && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sultan Al-Mansoor"
                      className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@domain.com"
                      className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 000 0000"
                      className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                      Project Location / City
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      placeholder="e.g. Dubai, Abu Dhabi, London"
                      className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                    Project Notes & Vision
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the property size, rooms, desired mood, or specific requirements..."
                    className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                  />
                </div>

                <div className="pt-3 flex items-center justify-between border-t border-[#C6A15B]/20">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#626B3A] hover:text-[#3F4728]"
                  >
                    ← Back to Scope
                  </button>

                  <div className="flex space-x-2">
                    <button
                      type="button"
                      onClick={handleWhatsAppSend}
                      className="inline-flex items-center px-4 py-2.5 bg-[#25D366] text-white text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] hover:bg-[#1eb956] transition-colors"
                      title="Send directly to studio WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5 mr-1.5" />
                      WhatsApp
                    </button>
                    <button
                      type="submit"
                      className="inline-flex items-center border border-[#3F4728] px-5 py-2.5 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-colors"
                    >
                      <Send className="w-3.5 h-3.5 mr-1.5 text-[#C6A15B]" />
                      Submit Inquiry
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
