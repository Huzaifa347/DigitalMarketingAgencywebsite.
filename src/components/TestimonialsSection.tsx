import React from 'react';
import { Star, Quote, Sparkles, ShieldCheck, Info } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/agencyData';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#07090e] border-t border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-purple-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-4">
            <Star className="w-3.5 h-3.5 fill-blue-400 text-blue-400" /> Client Partnership Experiences
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Trusted by Founders, CMOs, &{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Growth Leaders
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            Hear how our full-funnel digital marketing strategies helped business leaders solve ad fatigue, capture market share, and scale revenue with predictable unit economics.
          </p>

          {/* Explicit Demo Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Illustrative sample testimonials for demonstration of agency client feedback structure.</span>
          </div>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-white/10 hover:border-blue-500/40 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between relative group"
            >
              {/* Quote icon watermark */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-blue-500/10 transition-colors pointer-events-none" />

              <div>
                {/* Rating Stars & Metric Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {testimonial.verifiedMetric}
                  </span>
                </div>

                {/* Quote Text */}
                <p className="text-sm text-slate-300 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3.5">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500/40 shrink-0 shadow-md"
                  loading="lazy"
                />
                <div>
                  <div className="font-['Outfit'] font-bold text-white text-base">
                    {testimonial.name}
                  </div>
                  <div className="text-xs text-blue-400 font-medium">
                    {testimonial.role}
                  </div>
                  <div className="text-[11px] text-slate-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
