import React, { useState } from 'react';
import { 
  Search, 
  Share2, 
  Target, 
  FileText, 
  Mail, 
  Layout, 
  Sparkles, 
  BarChart3, 
  ArrowRight,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onOpenContactWithService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenContactWithService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    const props = { className: 'w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors' };
    switch (name) {
      case 'Search': return <Search {...props} />;
      case 'Share2': return <Share2 {...props} />;
      case 'Target': return <Target {...props} />;
      case 'FileText': return <FileText {...props} />;
      case 'Mail': return <Mail {...props} />;
      case 'Layout': return <Layout {...props} />;
      case 'Sparkles': return <Sparkles {...props} />;
      case 'BarChart3': return <BarChart3 {...props} />;
      default: return <Sparkles {...props} />;
    }
  };

  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#07090e] border-t border-white/5">
      {/* Background glow highlights */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 tracking-wider uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" /> Full-Spectrum Growth Services
          </div>
          <h2 className="font-['Outfit'] text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-5">
            Engineered For Explosive,{' '}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
              Compounding Revenue
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            We don't do disconnected one-off tactics. We deploy interconnected, data-backed marketing engines designed to attract, convert, and retain high-value customers at scale.
          </p>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="group relative glass-card glass-card-hover rounded-2xl p-6 flex flex-col justify-between border border-white/10 hover:border-blue-500/40 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300"
            >
              {/* Card Top */}
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:border-blue-500/40 transition-all duration-300 shadow-md shadow-black/40">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[10px] font-bold text-blue-300 uppercase tracking-wider">
                      {service.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-['Outfit'] text-xl font-bold text-white mb-2.5 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Card Bottom */}
              <div className="pt-4 border-t border-white/5 space-y-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                  <TrendingUp className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span className="text-[11px] text-slate-300">{service.metrics}</span>
                </div>

                <button
                  onClick={() => setSelectedService(service)}
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-800/60 hover:bg-blue-600 text-slate-200 hover:text-white text-xs font-semibold border border-white/10 hover:border-blue-500/50 flex items-center justify-center gap-2 transition-all duration-200 group-hover:shadow-lg group-hover:shadow-blue-600/20 cursor-pointer"
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-white font-['Outfit'] mb-1">
              Not sure which service fits your current stage?
            </h4>
            <p className="text-sm text-slate-300">
              Book a complimentary 30-minute growth audit. We'll inspect your unit economics and map out the highest-leverage acquisition channels.
            </p>
          </div>
          <button
            onClick={() => onOpenContactWithService('Full-Funnel Growth Strategy')}
            className="shrink-0 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-sm font-semibold shadow-lg shadow-blue-600/20 flex items-center gap-2 transition-all cursor-pointer"
          >
            <span>Request Free Audit</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(name) => {
          setSelectedService(null);
          onOpenContactWithService(name);
        }}
      />
    </section>
  );
};
