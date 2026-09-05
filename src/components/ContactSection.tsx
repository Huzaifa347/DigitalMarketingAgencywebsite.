import React, { useState, useEffect } from 'react';
import { 
  Send, 
  CheckCircle2, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  Calendar,
  AlertCircle,
  ArrowRight,
  RefreshCw
} from 'lucide-react';
import { ContactFormData, FormErrors } from '../types';

interface ContactSectionProps {
  prefillService?: string;
  onClearPrefill?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ 
  prefillService,
  onClearPrefill 
}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    company: '',
    website: '',
    serviceNeeded: '',
    budget: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  useEffect(() => {
    if (prefillService) {
      setFormData((prev) => ({
        ...prev,
        serviceNeeded: prefillService,
        message: prev.message || `I'm interested in discussing ${prefillService} and scaling our current acquisition channels.`
      }));
    }
  }, [prefillService]);

  const serviceOptions = [
    'Search Engine Optimization (SEO)',
    'Social Media Marketing',
    'Google & Meta Paid Ads',
    'Content Marketing',
    'Email Marketing & Lifecycle',
    'Website & Landing Page CRO',
    'Branding & Visual Identity',
    'Analytics & Attribution Setup',
    'Full-Service Growth (Scale Plan)',
    'Other / Custom Scope'
  ];

  const budgetOptions = [
    '$1,500 – $3,500 / mo',
    '$3,500 – $7,500 / mo',
    '$7,500 – $15,000 / mo',
    '$15,000 – $30,000 / mo',
    '$30,000+ / mo',
  ];

  const validate = (): boolean => {
    const errs: FormErrors = {};

    if (!formData.fullName.trim()) {
      errs.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Please provide your work email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }

    if (!formData.company.trim()) {
      errs.company = 'Please enter your company or brand name.';
    }

    if (!formData.website.trim()) {
      errs.website = 'Please provide your website URL.';
    }

    if (!formData.serviceNeeded) {
      errs.serviceNeeded = 'Please select a primary service.';
    }

    if (!formData.budget) {
      errs.budget = 'Please select your planned monthly marketing budget.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please share a brief note about your current goals (at least 10 characters).';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate verified processing
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setSubmittedData({ ...formData });
      if (onClearPrefill) onClearPrefill();
    }, 800);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      email: '',
      company: '',
      website: '',
      serviceNeeded: '',
      budget: '',
      message: '',
    });
    setErrors({});
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#090d16] border-t border-white/5">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-blue-600/15 via-purple-600/15 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Headline & Direct Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-4">
                <Calendar className="w-3.5 h-3.5" /> Book A Free Strategy Call
              </div>

              <h2 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                Ready to Grow{' '}
                <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
                  Your Business?
                </span>
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                Let's audit your current digital footprint, dissect competitor ad angles, and map a predictable path to 3X+ ROI. No sales pitches—just pure strategic clarity.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              <div className="glass-card rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Strategy Inbox</div>
                  <a href="mailto:hello@growthsparkdigital.com" className="text-sm sm:text-base font-semibold text-white hover:text-blue-300 transition-colors">
                    hello@growthsparkdigital.com
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Direct Inquiries Line</div>
                  <a href="tel:+18004798472" className="text-sm sm:text-base font-semibold text-white hover:text-purple-300 transition-colors">
                    +1 (800) 479-8472
                  </a>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-4 border border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Response Guarantee</div>
                  <div className="text-sm font-semibold text-white">Under 2 hours during active market hours</div>
                </div>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="p-4 rounded-2xl bg-slate-900/60 border border-white/10 flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div className="text-xs text-slate-300">
                <strong className="text-white">Strict Capacity:</strong> We onboard a maximum of 2 new clients per month to maintain senior-level execution.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Generation Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl bg-slate-900/70 relative">
              {isSubmitted ? (
                /* Success Message State */
                <div className="py-8 text-center space-y-6 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white mb-2">
                      Strategy Call Request Received!
                    </h3>
                    <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{submittedData?.fullName}</strong>. Our senior growth strategist will review <span className="text-blue-400">{submittedData?.website}</span> and send a personalized discovery calendar invite to <strong className="text-white">{submittedData?.email}</strong>.
                    </p>
                  </div>

                  {/* Summary of submitted request */}
                  <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 text-left text-xs space-y-2 max-w-md mx-auto">
                    <div className="flex justify-between pb-2 border-b border-white/5">
                      <span className="text-slate-400">Company:</span>
                      <span className="text-white font-medium">{submittedData?.company}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-white/5">
                      <span className="text-slate-400">Target Focus:</span>
                      <span className="text-blue-300 font-medium">{submittedData?.serviceNeeded}</span>
                    </div>
                    <div className="flex justify-between pb-2 border-b border-white/5">
                      <span className="text-slate-400">Monthly Budget:</span>
                      <span className="text-emerald-400 font-medium">{submittedData?.budget}</span>
                    </div>
                  </div>

                  {/* Demo Notification Note per requirements */}
                  <div className="p-3.5 rounded-xl bg-blue-950/40 border border-blue-500/30 text-xs text-blue-300 max-w-md mx-auto flex items-start gap-2 text-left">
                    <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                    <span>
                      <strong>Demo Notice:</strong> Form validated on the client side. No live emails are dispatched unless a backend/SMTP integration is provisioned.
                    </span>
                  </div>

                  <button
                    onClick={handleReset}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-white/10 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Submit Another Inquiry</span>
                  </button>
                </div>
              ) : (
                /* Form Inputs */
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-white/10 pb-4 mb-2">
                    <h3 className="font-['Outfit'] text-xl font-bold text-white">
                      Request Your Complimentary Strategy Roadmap
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Fill out your details below. We'll run an initial competitor audit before we speak.
                    </p>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => {
                          setFormData({ ...formData, fullName: e.target.value });
                          if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                        }}
                        placeholder="e.g. Alex Morgan"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all ${
                          errors.fullName
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }`}
                      />
                      {errors.fullName && (
                        <span className="text-[11px] text-rose-400 mt-1 block">{errors.fullName}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: undefined });
                        }}
                        placeholder="alex@yourcompany.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all ${
                          errors.email
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-rose-400 mt-1 block">{errors.email}</span>
                      )}
                    </div>
                  </div>

                  {/* Company & Website */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Company / Brand Name *
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => {
                          setFormData({ ...formData, company: e.target.value });
                          if (errors.company) setErrors({ ...errors, company: undefined });
                        }}
                        placeholder="e.g. Apex Apparel Inc."
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all ${
                          errors.company
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }`}
                      />
                      {errors.company && (
                        <span className="text-[11px] text-rose-400 mt-1 block">{errors.company}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Website URL *
                      </label>
                      <input
                        type="text"
                        value={formData.website}
                        onChange={(e) => {
                          setFormData({ ...formData, website: e.target.value });
                          if (errors.website) setErrors({ ...errors, website: undefined });
                        }}
                        placeholder="https://yourcompany.com"
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all ${
                          errors.website
                            ? 'border-rose-500/80 focus:border-rose-500'
                            : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                        }`}
                      />
                      {errors.website && (
                        <span className="text-[11px] text-rose-400 mt-1 block">{errors.website}</span>
                      )}
                    </div>
                  </div>

                  {/* Service Needed & Monthly Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Service Needed *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => {
                          setFormData({ ...formData, serviceNeeded: e.target.value });
                          if (errors.serviceNeeded) setErrors({ ...errors, serviceNeeded: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white focus:outline-none transition-all ${
                          errors.serviceNeeded
                            ? 'border-rose-500/80'
                            : 'border-white/10 focus:border-blue-500'
                        }`}
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-400">
                          Select Primary Service
                        </option>
                        {serviceOptions.map((srv, idx) => (
                          <option key={idx} value={srv} className="bg-slate-900 text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                      {errors.serviceNeeded && (
                        <span className="text-[11px] text-rose-400 mt-1 block">{errors.serviceNeeded}</span>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                        Monthly Marketing Budget *
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => {
                          setFormData({ ...formData, budget: e.target.value });
                          if (errors.budget) setErrors({ ...errors, budget: undefined });
                        }}
                        className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white focus:outline-none transition-all ${
                          errors.budget
                            ? 'border-rose-500/80'
                            : 'border-white/10 focus:border-blue-500'
                        }`}
                      >
                        <option value="" disabled className="bg-slate-900 text-slate-400">
                          Select Budget Tier
                        </option>
                        {budgetOptions.map((opt, idx) => (
                          <option key={idx} value={opt} className="bg-slate-900 text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.budget && (
                        <span className="text-[11px] text-rose-400 mt-1 block">{errors.budget}</span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                      Your Goals & Challenges *
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (errors.message) setErrors({ ...errors, message: undefined });
                      }}
                      placeholder="Briefly describe your current acquisition bottlenecks, target revenue milestones, or existing ad spend..."
                      className={`w-full px-4 py-3 rounded-xl bg-slate-950/80 border text-sm text-white placeholder:text-slate-500 focus:outline-none transition-all ${
                        errors.message
                          ? 'border-rose-500/80 focus:border-rose-500'
                          : 'border-white/10 focus:border-blue-500 focus:ring-1 focus:ring-blue-500'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-rose-400 mt-1 block">{errors.message}</span>
                    )}
                  </div>

                  {/* Submit CTA */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 flex items-center justify-center gap-2.5 transition-all duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <RefreshCw className="w-5 h-5 animate-spin" />
                          <span>Validating Strategy Request...</span>
                        </>
                      ) : (
                        <>
                          <span>Book My Free Strategy Call</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 mt-3 font-medium">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>100% Confidential • NDA protected • No sales pressure</span>
                    </div>
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
