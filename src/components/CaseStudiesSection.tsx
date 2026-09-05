import React, { useState } from 'react';
import { 
  TrendingUp, 
  ArrowUpRight, 
  Sparkles, 
  BarChart2, 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  ArrowRight,
  ShieldAlert,
  Info
} from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/agencyData';

interface CaseStudiesSectionProps {
  onOpenContact: (prefillService?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenContact }) => {
  const [selectedId, setSelectedId] = useState<string>(CASE_STUDIES_DATA[0].id);

  const activeCase = CASE_STUDIES_DATA.find((c) => c.id === selectedId) || CASE_STUDIES_DATA[0];

  return (
    <section id="results" className="relative py-24 sm:py-32 bg-[#07090e] border-t border-white/5">
      {/* Glow Orbs */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-4">
            <BarChart2 className="w-3.5 h-3.5" /> Proven Track Record & Performance
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Real Metrics.{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Compounding Bottom-Line ROI.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Explore how our integrated omni-channel campaigns unlock rapid customer acquisition and sustainable unit economics across diverse industries.
          </p>

          {/* Explicit Demo Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 font-medium">
            <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Fictional sample client studies for demonstration of agency methodology & metrics structure.</span>
          </div>
        </div>

        {/* Case Study Tab Switcher */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          {CASE_STUDIES_DATA.map((cs) => {
            const isActive = cs.id === selectedId;
            return (
              <button
                key={cs.id}
                onClick={() => setSelectedId(cs.id)}
                className={`px-5 py-3 rounded-2xl text-sm font-semibold transition-all duration-200 flex items-center gap-2.5 border cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white border-blue-400 shadow-lg shadow-blue-600/30 scale-[1.02]'
                    : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-white/20 hover:text-white'
                }`}
              >
                <span>{cs.clientType}</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-black/30 font-mono opacity-80">
                  {cs.metrics.roas}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Case Study Detail Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl bg-slate-900/50 relative overflow-hidden">
          {/* Subtle Glow Background */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-3xl rounded-full pointer-events-none" />

          {/* Top metadata strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400 mb-1">
                <span>{activeCase.industry}</span>
                <span>•</span>
                <span className="text-purple-400">{activeCase.clientType}</span>
              </div>
              <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-bold text-white">
                {activeCase.title}
              </h3>
            </div>
            <div className="px-3.5 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Verified Case Outcome (Demo)</span>
            </div>
          </div>

          {/* Main 4 Metric Cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8">
            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-blue-500/40 transition-all">
              <div className="text-xs font-medium text-slate-400 mb-1">Traffic Growth</div>
              <div className="font-['Outfit'] text-3xl font-extrabold text-blue-400">
                {activeCase.metrics.trafficGrowth}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" /> High-intent buyer visits
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-blue-500/40 transition-all">
              <div className="text-xs font-medium text-slate-400 mb-1">Leads / Acquisition</div>
              <div className="font-['Outfit'] text-3xl font-extrabold text-white">
                {activeCase.metrics.leadsGenerated}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" /> Qualified inquiries
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-blue-500/40 transition-all">
              <div className="text-xs font-medium text-slate-400 mb-1">Conversion Rate</div>
              <div className="font-['Outfit'] text-3xl font-extrabold text-purple-400">
                {activeCase.metrics.conversionRate}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" /> On-site checkout velocity
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-slate-950/70 border border-white/10 hover:border-blue-500/40 transition-all">
              <div className="text-xs font-medium text-slate-400 mb-1">Return On Ad Spend</div>
              <div className="font-['Outfit'] text-3xl font-extrabold text-emerald-400">
                {activeCase.metrics.roas}
              </div>
              <div className="text-[11px] text-slate-400 mt-1 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" /> Net profit expansion
              </div>
            </div>
          </div>

          {/* Deep-Dive Grid: Challenge & Solution vs Chart */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Challenge, Solution, Tactics */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4" /> The Bottleneck
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCase.challenge}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-slate-950/50 border border-white/5 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" /> The GrowthSpark Strategy
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {activeCase.solution}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Core Implementation Tactics
                </h4>
                <div className="space-y-2">
                  {activeCase.keyTactics.map((tactic, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-xl bg-slate-900/60 border border-white/5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{tactic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Comparative Chart Visual */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/80 border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-['Outfit'] font-bold text-base text-white">Monthly Scaling Trajectory</h4>
                    <p className="text-xs text-slate-400">Baseline vs. GrowthSpark Campaign</p>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full bg-blue-600/20 text-blue-300 border border-blue-500/30 font-mono">
                    9-Month Window
                  </span>
                </div>

                {/* Visual Bar Comparison */}
                <div className="space-y-4 my-6">
                  {activeCase.chartData.map((dataPoint, idx) => {
                    const maxVal = Math.max(...activeCase.chartData.map(d => d.after));
                    const afterPercent = Math.min(100, Math.round((dataPoint.after / maxVal) * 100));
                    const beforePercent = Math.min(100, Math.round((dataPoint.before / maxVal) * 100));

                    return (
                      <div key={idx} className="space-y-1.5">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-300 font-medium">{dataPoint.month}</span>
                          <span className="text-xs font-mono text-slate-400">
                            Pre: <span className="text-slate-400">{dataPoint.before}k</span> → With GrowthSpark:{' '}
                            <strong className="text-emerald-400">{dataPoint.after}k</strong>
                          </span>
                        </div>
                        <div className="flex gap-1 h-3 rounded-full bg-slate-900 overflow-hidden p-0.5 border border-white/5">
                          <div
                            className="h-full bg-slate-700 rounded-full transition-all duration-500"
                            style={{ width: `${beforePercent}%` }}
                            title={`Before: ${dataPoint.before}`}
                          />
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-500"
                            style={{ width: `${afterPercent}%` }}
                            title={`GrowthSpark: ${dataPoint.after}`}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-white/5">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-slate-600" />
                    <span>Historical Run Rate</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400" />
                    <span className="text-white font-medium">GrowthSpark Optimized</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4">
                <button
                  onClick={() => onOpenContact(`Inquire: ${activeCase.clientType}`)}
                  className="w-full py-3 px-4 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <span>Replicate These Results For Your Brand</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
