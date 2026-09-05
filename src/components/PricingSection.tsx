import React, { useState } from 'react';
import { Check, X, Sparkles, ArrowRight, Zap, ShieldCheck } from 'lucide-react';
import { PRICING_PLANS } from '../data/agencyData';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#090d16] border-t border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-blue-600/10 via-purple-600/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-4">
            <Zap className="w-3.5 h-3.5" /> Transparent Partnerships
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Transparent Pricing.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Scalable Performance.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8">
            Choose the growth blueprint that matches your company's scaling phase. No long-term lock-ins, no hidden onboarding fees, and 100% transparent reporting.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-3 p-1.5 rounded-full bg-slate-900 border border-white/10 shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-full text-xs font-semibold transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Monthly Retainer
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                billingCycle === 'annual'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <span>Annual Partnership</span>
              <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualMonthlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isPopular
                    ? 'glass-card border-2 border-blue-500/60 bg-gradient-to-b from-slate-900/90 to-blue-950/30 shadow-2xl shadow-blue-600/20 lg:-translate-y-3'
                    : 'glass-card border border-white/10 bg-slate-900/40 hover:border-white/20'
                }`}
              >
                {/* Popular Pill */}
                {plan.isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs font-bold tracking-wider uppercase shadow-lg shadow-blue-500/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  {/* Top Name & Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-['Outfit'] text-2xl font-bold text-white">
                      {plan.name}
                    </h3>
                    {!plan.isPopular && plan.badge && (
                      <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold border border-white/5">
                        {plan.badge}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-slate-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline gap-1">
                      <span className="font-['Outfit'] text-4xl sm:text-5xl font-extrabold text-white">
                        ${price.toLocaleString()}
                      </span>
                      <span className="text-slate-400 text-sm font-medium">/ month</span>
                    </div>
                    {billingCycle === 'annual' && (
                      <div className="text-[11px] text-emerald-400 font-medium mt-1">
                        Billed annually (Includes 20% commitment discount)
                      </div>
                    )}
                    <div className="text-xs text-blue-300/80 font-medium mt-2">
                      Best for: {plan.bestFor}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      What's Included:
                    </div>
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}

                    {plan.notIncluded && plan.notIncluded.length > 0 && (
                      <div className="pt-2 mt-2 space-y-2">
                        {plan.notIncluded.map((notFeat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-500">
                            <X className="w-4 h-4 text-slate-600 shrink-0 mt-0.5" />
                            <span>{notFeat}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <div>
                  <button
                    onClick={() => onSelectPlan(plan.name)}
                    className={`w-full py-3.5 px-6 rounded-xl font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:scale-[1.02]'
                        : 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="text-center text-[11px] text-slate-500 mt-2.5">
                    Month-to-month flexibility • 30-day notice
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-slate-900/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Need a Bespoke Scope or Performance-Share Model?</div>
              <div className="text-xs text-slate-400">We structure custom agreements for multi-brand groups, enterprise platforms, and hyper-growth venture rounds.</div>
            </div>
          </div>
          <button
            onClick={() => onSelectPlan('Custom Scope')}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold border border-white/10 transition-colors"
          >
            Request Custom Scope
          </button>
        </div>
      </div>
    </section>
  );
};
