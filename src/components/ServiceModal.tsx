import React from 'react';
import { 
  X, 
  CheckCircle2, 
  Calendar, 
  TrendingUp, 
  ArrowRight, 
  Sparkles,
  Search,
  Share2,
  Target,
  FileText,
  Mail,
  Layout,
  BarChart3
} from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBookService: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  const renderIcon = (name: string) => {
    const props = { className: 'w-7 h-7 text-blue-400' };
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal dialog */}
      <div className="relative w-full max-w-2xl bg-[#090d16] border border-white/15 rounded-3xl shadow-2xl shadow-blue-950/60 overflow-hidden z-10 animate-in zoom-in-95 duration-200">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-600/20 via-purple-600/20 to-transparent blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="relative p-6 sm:p-8 pb-4 border-b border-white/10 flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center shadow-lg shadow-blue-500/10">
              {renderIcon(service.iconName)}
            </div>
            <div>
              {service.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-semibold mb-1 border border-blue-500/30">
                  {service.badge}
                </span>
              )}
              <h3 className="font-['Outfit'] text-2xl font-bold text-white">
                {service.title}
              </h3>
              <p className="text-sm text-blue-300/90 font-medium mt-0.5">
                {service.tagline}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-2">Overview</h4>
            <p className="text-slate-300 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Metric Highlight */}
          <div className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <div className="text-xs text-slate-400">Target Benchmark</div>
                <div className="text-sm font-semibold text-white">{service.metrics}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xs text-slate-400 flex items-center gap-1 justify-end">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> Deployment
              </div>
              <div className="text-xs font-medium text-slate-300">{service.timeline}</div>
            </div>
          </div>

          {/* Core Capabilities */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">Key Strategic Focus</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 p-2.5 rounded-xl bg-slate-900/40 border border-white/5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Deliverables */}
          <div>
            <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold mb-3">What You Receive</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-slate-300 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-950/80 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            Included in tailored <span className="text-white font-medium">Growth</span> & <span className="text-white font-medium">Scale</span> plans.
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-900 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.title);
              }}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-xs shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
