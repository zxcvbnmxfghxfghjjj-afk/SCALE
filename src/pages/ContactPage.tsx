import React, { useState } from 'react';
import { contactInfo, faqsData } from '../data/teamData';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  Send,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: string, projectSlug?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Full Villa / Residence',
    budget: 'AED 150k – 350k ($40k – $100k)',
    preferredContact: 'WhatsApp',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello SCALE Team, I am reaching out from your website contact page.\n- Name: ${formData.name || 'Client'}\n- Project: ${formData.projectType}\n- Message: ${formData.message || 'I would like to inquire about design services.'}`
    );
    window.open(`https://wa.me/971563131834?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F7F4EC] pt-24 pb-20">
      {/* 1. HEADER */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 pb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-3 text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-3">
            <span className="w-8 h-[1px] bg-[#C6A15B]" />
            <span>Connect with SCALE</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-[#20221A] leading-[1.1] font-light mb-4">
            Let's Start Your <br />
            <span className="italic text-[#3F4728]">Next Project</span>
          </h1>

          <p className="text-base sm:text-lg text-[#626B3A] leading-relaxed font-light">
            We’d love to hear about your space. Reach out to schedule a preliminary architectural consultation at our Business Bay studio or virtually.
          </p>
        </div>
      </section>

      {/* 2. MAIN CONTACT GRID */}
      <section className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info & Location (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 bg-[#20221A] text-[#F7F4EC] rounded-[1px] border border-[#C6A15B]/20 space-y-6">
              <h3 className="font-display text-2xl text-[#F7F4EC] font-light">
                Studio Channels
              </h3>
              <p className="text-xs text-[#F7F4EC]/80 leading-relaxed font-light">
                Direct communication pathways to our client management and senior architects.
              </p>

              <div className="space-y-4 pt-2 text-xs text-[#F7F4EC]/90 font-light">
                <div className="flex items-start space-x-3">
                  <Phone className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C6A15B] block font-semibold uppercase tracking-[0.2em] text-[9px]">Direct Phone</span>
                    <a href={`tel:${contactInfo.phone}`} className="text-sm font-normal hover:text-[#C6A15B] transition-colors">{contactInfo.phone}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MessageSquare className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C6A15B] block font-semibold uppercase tracking-[0.2em] text-[9px]">WhatsApp Dedicated</span>
                    <a href={contactInfo.whatsappUrl} target="_blank" rel="noreferrer" className="text-sm font-normal hover:text-[#C6A15B] transition-colors">{contactInfo.whatsapp}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C6A15B] block font-semibold uppercase tracking-[0.2em] text-[9px]">Email Inquiries</span>
                    <a href={`mailto:${contactInfo.email}`} className="text-sm font-normal hover:text-[#C6A15B] transition-colors">{contactInfo.email}</a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C6A15B] block font-semibold uppercase tracking-[0.2em] text-[9px]">Design Studio</span>
                    <p className="text-xs leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-[#C6A15B] block font-semibold uppercase tracking-[0.2em] text-[9px]">Working Hours</span>
                    <p className="text-xs">{contactInfo.hours}</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={handleWhatsAppDirect}
                  className="w-full py-3 bg-[#25D366] hover:bg-[#1eb956] text-white text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] flex items-center justify-center transition-colors shadow-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 mr-2" />
                  Instant WhatsApp Consultation
                </button>
              </div>
            </div>

            {/* Studio Map Representation */}
            <div className="p-6 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 space-y-3">
              <div className="flex items-center justify-between text-[10px] font-bold text-[#3F4728] uppercase tracking-[0.2em]">
                <span>Dubai Design District / Business Bay</span>
                <span className="text-[#C6A15B]">HQ Office</span>
              </div>
              <div className="relative aspect-[16/9] bg-[#3F4728]/10 rounded-[1px] overflow-hidden border border-[#C6A15B]/20">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=85"
                  alt="Dubai Skyline Business Bay"
                  className="w-full h-full object-cover filter brightness-[0.95]"
                />
                <div className="absolute inset-0 bg-[#20221A]/30 flex items-center justify-center">
                  <div className="p-3 bg-[#3F4728] text-[#F7F4EC] rounded-[1px] shadow-lg text-[10px] uppercase tracking-wider font-semibold flex items-center space-x-2 border border-[#C6A15B]/40">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>SCALE Design Studio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 shadow-sm">
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 rounded-[1px] bg-[#3F4728]/10 border border-[#C6A15B]/40 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-[#C6A15B]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl text-[#20221A] font-light">
                      Thank you for contacting SCALE
                    </h3>
                    <p className="text-xs sm:text-sm text-[#626B3A] max-w-md mx-auto leading-relaxed font-light">
                      Your project inquiry has been logged. Our design director will review your brief and contact you within 24 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        projectType: 'Full Villa / Residence',
                        budget: 'AED 150k – 350k ($40k – $100k)',
                        preferredContact: 'WhatsApp',
                        message: ''
                      });
                    }}
                    className="border border-[#3F4728] px-6 py-2.5 bg-[#3F4728] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px]"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-display text-2xl text-[#20221A] mb-1 font-light">
                      Project Inquiry Form
                    </h3>
                    <p className="text-xs text-[#626B3A] font-light">
                      Fill out the fields below and our team will prepare a structured initial proposal.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tariq Al-Hashimi"
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
                        placeholder="client@domain.com"
                        className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+971 50 123 4567"
                        className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                        Project Category
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                      >
                        <option value="Full Villa / Residence">Full Villa / Residence</option>
                        <option value="Living Room & Majlis">Living Room & Majlis</option>
                        <option value="Master Bedroom Suite">Master Bedroom Suite</option>
                        <option value="Dressing Room & Wardrobe">Dressing Room & Wardrobe</option>
                        <option value="Custom TV Unit & Joinery">Custom TV Unit & Joinery</option>
                        <option value="Kitchen & Dining Atelier">Kitchen & Dining Atelier</option>
                        <option value="Commercial / Executive Office">Commercial / Executive Office</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                        Estimated Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                      >
                        <option value="AED 50k – 150k">AED 50k – 150k ($15k – $40k)</option>
                        <option value="AED 150k – 350k">AED 150k – 350k ($40k – $100k)</option>
                        <option value="AED 350k – 750k">AED 350k – 750k ($100k – $200k)</option>
                        <option value="AED 750k+">AED 750k+ ($200k+ High-End)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                        Preferred Contact
                      </label>
                      <div className="flex space-x-2 pt-1">
                        {['WhatsApp', 'Phone Call', 'Email'].map((method) => (
                          <button
                            key={method}
                            type="button"
                            onClick={() => setFormData({ ...formData, preferredContact: method })}
                            className={`flex-1 py-2 text-[10px] uppercase tracking-wider rounded-[1px] border transition-all ${
                              formData.preferredContact === method
                                ? 'bg-[#3F4728] text-[#F7F4EC] border-[#3F4728] font-semibold'
                                : 'bg-white text-[#626B3A] border-[#C6A15B]/30'
                            }`}
                          >
                            {method}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] uppercase font-bold tracking-[0.2em] text-[#3F4728] mb-1">
                      Project Details & Vision
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share information about your property location, room dimensions, required timeline, or design preferences..."
                      className="w-full p-2.5 text-xs bg-white border border-[#C6A15B]/30 rounded-[1px] text-[#20221A] focus:outline-none focus:border-[#3F4728]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full border border-[#3F4728] py-3.5 bg-[#3F4728] hover:bg-[#30371F] text-[#F7F4EC] text-[10px] uppercase tracking-[0.2em] font-semibold rounded-[1px] transition-all flex items-center justify-center space-x-2 shadow-sm"
                    >
                      <Send className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>Send Project Inquiry</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. FREQUENTLY ASKED QUESTIONS */}
      <section className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-12 py-16 border-t border-[#C6A15B]/20 mt-12">
        <div className="text-center mb-10">
          <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-[#C6A15B] mb-1">
            Questions & Answers
          </div>
          <h2 className="font-display text-3xl text-[#20221A] font-light">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqsData.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-[#FCFAF5] rounded-[1px] border border-[#C6A15B]/20 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between font-display text-base text-[#20221A] hover:text-[#3F4728] transition-colors font-normal"
                >
                  <span className="pr-4">{faq.question}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-[#C6A15B] shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-[#626B3A] shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#626B3A] leading-relaxed border-t border-[#3F4728]/10 pt-3 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
