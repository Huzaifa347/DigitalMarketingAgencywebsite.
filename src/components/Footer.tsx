import React, { useState } from 'react';
import { 
  Sparkles, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  CheckCircle2, 
  Send,
  Linkedin,
  Twitter,
  Instagram,
  Youtube
} from 'lucide-react';

interface FooterProps {
  onOpenContact: (prefill?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [newsletterError, setNewsletterError] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      setNewsletterError('Please enter a valid work email.');
      return;
    }
    setNewsletterError('');
    setNewsletterSubscribed(true);
  };

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#05070a] border-t border-white/10 text-slate-400 text-sm relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[250px] bg-gradient-to-t from-blue-900/10 via-purple-900/10 to-transparent blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-16">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20 border border-white/20">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="font-['Outfit'] font-bold text-xl tracking-tight text-white">
                GrowthSpark{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Digital
                </span>
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              GrowthSpark Digital is a performance-driven digital marketing agency. We engineer data-backed omni-channel acquisition engines across SEO, paid media, social, and conversion optimization to unlock compounding business growth.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-600/10 transition-colors"
                aria-label="X / Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-purple-500/50 hover:bg-purple-600/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-rose-500/50 hover:bg-rose-600/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Outfit'] font-bold text-white text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => handleNav('#home')} className="hover:text-blue-400 transition-colors">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#services')} className="hover:text-blue-400 transition-colors">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#why-us')} className="hover:text-blue-400 transition-colors">
                  Why Choose Us
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#results')} className="hover:text-blue-400 transition-colors">
                  Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#process')} className="hover:text-blue-400 transition-colors">
                  Our Process
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#pricing')} className="hover:text-blue-400 transition-colors">
                  Pricing Plans
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#faq')} className="hover:text-blue-400 transition-colors">
                  FAQ
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('#contact')} className="hover:text-blue-400 transition-colors">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Outfit'] font-bold text-white text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <button onClick={() => onOpenContact('SEO')} className="hover:text-blue-400 transition-colors text-left">
                  Search Engine Optimization (SEO)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Google & Meta Ads')} className="hover:text-blue-400 transition-colors text-left">
                  Google & Meta Ads
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Social Media')} className="hover:text-blue-400 transition-colors text-left">
                  Social Media Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Content Marketing')} className="hover:text-blue-400 transition-colors text-left">
                  Content Marketing
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Email Marketing')} className="hover:text-blue-400 transition-colors text-left">
                  Email & Lifecycle Journeys
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Landing Page CRO')} className="hover:text-blue-400 transition-colors text-left">
                  Landing Page Optimization (CRO)
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Brand Identity')} className="hover:text-blue-400 transition-colors text-left">
                  Brand Identity & Positioning
                </button>
              </li>
              <li>
                <button onClick={() => onOpenContact('Analytics & Attribution')} className="hover:text-blue-400 transition-colors text-left">
                  Full-Funnel Analytics & Tracking
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter Signup & Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-['Outfit'] font-bold text-white text-sm uppercase tracking-wider">
              The GrowthPulse Brief
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Join 12,000+ founders receiving bi-weekly tear-downs on high-converting ad angles, algorithmic shifts, and growth playbooks.
            </p>

            {newsletterSubscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed! Check your inbox for the Growth Playbook.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={(e) => {
                      setNewsletterEmail(e.target.value);
                      setNewsletterError('');
                    }}
                    placeholder="name@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shrink-0 transition-colors cursor-pointer"
                    aria-label="Subscribe to newsletter"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                {newsletterError && (
                  <span className="text-[11px] text-rose-400 block">{newsletterError}</span>
                )}
              </form>
            )}

            {/* Quick Contact info */}
            <div className="pt-3 border-t border-white/10 space-y-1.5 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>huzaifamurtaza7715@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-purple-400" />
                <span>+923490257715</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>San Francisco, CA • New York, NY</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & demo disclaimer notice */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} GrowthSpark Digital Agency. All rights reserved. Built with modern React & Tailwind CSS.
          </div>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Sample Demo Presentation</span>
            <span>•</span>
            <button onClick={() => onOpenContact('Terms & Privacy Inquiry')} className="hover:text-slate-300">
              Privacy Policy
            </button>
            <span>•</span>
            <button onClick={() => onOpenContact('Client Agreement')} className="hover:text-slate-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
