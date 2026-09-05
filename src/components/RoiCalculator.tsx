import React, { useState } from 'react';
import { Calculator, TrendingUp, Sparkles, ArrowRight, DollarSign } from 'lucide-react';

interface RoiCalculatorProps {
  onOpenContact: (notes?: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenContact }) => {
  const [budget, setBudget] = useState<number>(7500);
  const [industryMultiplier, setIndustryMultiplier] = useState<number>(3.8);
  const [industryName, setIndustryName] = useState<string>('E-commerce & D2C');

  // Calculations
  const estimatedRevenue = Math.round(budget * industryMultiplier);
  const estimatedNetProfit = Math.round(estimatedRevenue - budget);
  const estimatedLeads = Math.round((budget / 45) * 1.4);

  const industries = [
    { name: 'E-commerce & D2C', multiplier: 4.2 },
    { name: 'B2B & SaaS', multiplier: 3.6 },
    { name: 'Local & Healthcare', multiplier: 4.8 },
    { name: 'Professional Services', multiplier: 3.4 },
  ];

  return (
    <section className="py-20 bg-[#07090e] border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-blue-500/30 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-blue-950/30 shadow-2xl relative overflow-hidden">
          {/* Subtle Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-b from-blue-600/15 to-purple-600/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Inputs */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 uppercase tracking-wider">
                <Calculator className="w-3.5 h-3.5" /> Interactive ROI Simulator
              </div>

              <h3 className="font-['Outfit'] text-2xl sm:text-3xl font-extrabold text-white">
                Estimate Your Growth Potential
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Adjust your monthly marketing budget and industry sector to see historical return projections based on GrowthSpark client benchmarks.
              </p>

              {/* Industry selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Select Your Industry Category
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {industries.map((ind) => (
                    <button
                      key={ind.name}
                      onClick={() => {
                        setIndustryMultiplier(ind.multiplier);
                        setIndustryName(ind.name);
                      }}
                      className={`px-3 py-2 rounded-xl text-xs font-medium border text-left transition-all ${
                        industryName === ind.name
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/20'
                          : 'bg-slate-900/60 text-slate-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      {ind.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    Planned Monthly Ad Spend
                  </label>
                  <span className="font-mono text-base font-bold text-blue-400">
                    ${budget.toLocaleString()} / mo
                  </span>
                </div>
                <input
                  type="range"
                  min="2000"
                  max="50000"
                  step="500"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                  <span>$2,000/mo</span>
                  <span>$25,000/mo</span>
                  <span>$50,000+/mo</span>
                </div>
              </div>
            </div>

            {/* Right Output Projections */}
            <div className="lg:col-span-6 p-6 sm:p-8 rounded-2xl bg-slate-950/80 border border-white/10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                  Projected 90-Day Returns ({industryName})
                </div>

                <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/20">
                  <div className="text-xs text-slate-400 mb-0.5">Estimated Gross Pipeline / Revenue</div>
                  <div className="font-['Outfit'] text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                    ${estimatedRevenue.toLocaleString()}
                  </div>
                  <div className="text-[11px] text-emerald-400 mt-1 flex items-center gap-1 font-medium">
                    <TrendingUp className="w-3 h-3" /> Projected {industryMultiplier}X return on ad spend
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="text-[11px] text-slate-400">Estimated Net Lift</div>
                    <div className="text-xl font-bold text-white font-['Outfit']">
                      +${estimatedNetProfit.toLocaleString()}
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-900/60 border border-white/5">
                    <div className="text-[11px] text-slate-400">High-Intent Inquiries</div>
                    <div className="text-xl font-bold text-white font-['Outfit']">
                      ~{estimatedLeads} Leads
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <button
                  onClick={() => onOpenContact(`Projected: $${budget}/mo ad spend in ${industryName}`)}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs sm:text-sm shadow-xl shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <span>Lock In This Strategy Plan</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <div className="text-[10px] text-center text-slate-500 mt-2">
                  *Projections are historical estimates based on GrowthSpark client benchmarks.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
