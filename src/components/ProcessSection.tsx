import React, { useState } from 'react';
import { 
  Compass, 
  Layers, 
  Rocket, 
  Gauge, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ArrowRight 
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/agencyData';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6' };
    switch (name) {
      case 'Compass': return <Compass {...props} />;
      case 'Layers': return <Layers {...props} />;
      case 'Rocket': return <Rocket {...props} />;
      case 'Gauge': return <Gauge {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="process" className="relative py-24 sm:py-32 bg-[#090d16] border-t border-white/5">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-4">
            <Rocket className="w-3.5 h-3.5" /> Repeatable Growth Framework
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            How We Engineer Your{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Growth Engine
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Our battle-tested 4-step framework eliminates guesswork and transforms disjointed marketing attempts into a predictable, compounding revenue machine.
          </p>
        </div>

        {/* 4 Connected Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROCESS_STEPS.map((step) => {
            const isSelected = activeStep === step.step;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden group ${
                  isSelected
                    ? 'border-blue-500/60 bg-slate-900/80 shadow-xl shadow-blue-900/30 -translate-y-1.5'
                    : 'border-white/10 hover:border-white/20 bg-slate-900/40 hover:bg-slate-900/60'
                }`}
              >
                {/* Top Step Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                          : 'bg-slate-800 text-slate-400 group-hover:text-blue-400 group-hover:bg-slate-800/80'
                      }`}
                    >
                      {getIcon(step.iconName)}
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400 px-2 py-0.5 rounded-full bg-black/40 border border-white/5">
                        <Clock className="w-3 h-3 text-slate-400" /> {step.duration}
                      </span>
                      <span className="font-['Outfit'] text-2xl font-black text-white/30 group-hover:text-blue-400/50 transition-colors">
                        0{step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-['Outfit'] text-xl font-bold text-white mb-1">
                    {step.title}
                  </h3>
                  <div className="text-xs text-blue-400 font-semibold mb-3">
                    {step.subtitle}
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-white/5 space-y-2">
                  <div className="text-[11px] uppercase tracking-wider font-semibold text-slate-400 mb-2">
                    Phase Deliverables:
                  </div>
                  {step.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Timeline Bottom Note */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 px-5 py-2.5 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Sprints operate on bi-weekly agile cycles with real-time Looker Studio dashboard tracking.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
