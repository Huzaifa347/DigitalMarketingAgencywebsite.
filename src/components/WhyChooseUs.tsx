import React from 'react';
import { 
  Database, 
  Users, 
  Eye, 
  Sliders, 
  TrendingUp, 
  Zap, 
  CheckCircle2, 
  XCircle,
  ShieldAlert,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { WHY_CHOOSE_US_DATA } from '../data/agencyData';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-blue-400' };
    switch (name) {
      case 'Database': return <Database {...props} />;
      case 'Users': return <Users {...props} />;
      case 'Eye': return <Eye {...props} />;
      case 'Sliders': return <Sliders {...props} />;
      case 'TrendingUp': return <TrendingUp {...props} />;
      case 'Zap': return <Zap {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="why-us" className="relative py-24 sm:py-32 bg-[#090d16] border-t border-white/5">
      {/* Background Accent */}
      <div className="absolute top-10 right-1/4 w-80 h-80 bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400 tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" /> The GrowthSpark Standard
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Why Forward-Thinking Brands{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Choose Us Over Traditional Agencies
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Most digital agencies sell confusing retainer retainers and celebrate vanity impressions. We operate as an embedded growth partner accountable to real profit, pipeline velocity, and measurable ROI.
          </p>
        </div>

        {/* 6 Key Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WHY_CHOOSE_US_DATA.map((item) => (
            <div
              key={item.id}
              className="glass-card glass-card-hover rounded-2xl p-7 border border-white/10 hover:border-blue-500/40 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/15 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
                    {getIcon(item.iconName)}
                  </div>
                  <div className="text-right">
                    <span className="font-['Outfit'] font-bold text-xl text-white block">
                      {item.stat}
                    </span>
                    <span className="text-[11px] text-slate-400 uppercase tracking-wider font-semibold">
                      {item.statLabel}
                    </span>
                  </div>
                </div>

                <h3 className="font-['Outfit'] text-xl font-bold text-white mb-2.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-xs text-blue-300/90 font-medium">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>{item.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Head-to-Head Comparison Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-white/15 shadow-2xl bg-gradient-to-b from-slate-900/70 to-slate-950/90">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="font-['Outfit'] text-2xl font-bold text-white mb-2">
              The Reality Check: Traditional Agency vs. GrowthSpark
            </h3>
            <p className="text-sm text-slate-400">
              Clear expectations, zero fluff, and radical accountability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Agency */}
            <div className="p-6 rounded-2xl bg-rose-950/15 border border-rose-500/20">
              <div className="flex items-center gap-2.5 text-rose-400 font-bold text-base mb-4 font-['Outfit']">
                <XCircle className="w-5 h-5 shrink-0" />
                <span>Traditional & Legacy Agencies</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Junior account managers assigned right after sales close</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Vanity metric PDFs showing millions of empty impressions</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Slow 48-72 hour email ticketing response times</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold">✕</span>
                  <span>Rigid 12-month lock-in contracts with zero performance guarantees</span>
                </li>
              </ul>
            </div>

            {/* GrowthSpark Digital */}
            <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-500/30 relative overflow-hidden shadow-lg shadow-blue-950/30">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-2xl rounded-full pointer-events-none" />
              <div className="flex items-center gap-2.5 text-blue-400 font-bold text-base mb-4 font-['Outfit']">
                <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                <span>The GrowthSpark Advantage</span>
              </div>
              <ul className="space-y-3 text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Direct collaboration with senior growth strategists and media buyers</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Real-time Looker Studio dashboard tracking bottom-line ROI and CAC</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Dedicated private Slack channel with guaranteed &lt; 2-hour turnaround</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>Agile sprint-based engagements focused squarely on revenue growth</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
