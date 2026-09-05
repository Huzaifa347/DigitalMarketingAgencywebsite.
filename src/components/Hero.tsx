import React, { useState } from 'react';
import { 
  ArrowRight, 
  Sparkles, 
  TrendingUp, 
  CheckCircle2, 
  Users, 
  Target, 
  Layers, 
  Zap, 
  Play, 
  BarChart3,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { TRUST_METRICS, CLIENT_LOGOS } from '../data/agencyData';

interface HeroProps {
  onOpenContact: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact, onExploreServices }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'ads' | 'seo' | 'cro'>('all');

  const channelStats = {
    all: {
      revenue: '$248,500',
      growth: '+38.4%',
      roas: '4.6X',
      cvr: '4.8%',
      leads: '1,420',
      channels: [
        { name: 'Google Ads', spend: '$14,200', returnVal: '$65,320', roas: '4.6X', percent: 84 },
        { name: 'Meta Ads', spend: '$12,800', returnVal: '$56,320', roas: '4.4X', percent: 78 },
        { name: 'Organic SEO', spend: '$4,500', returnVal: '$89,400', roas: '19.8X', percent: 96 },
        { name: 'Email Flows', spend: '$1,200', returnVal: '$37,460', roas: '31.2X', percent: 90 },
      ]
    },
    ads: {
      revenue: '$121,640',
      growth: '+42.1%',
      roas: '4.5X',
      cvr: '5.2%',
      leads: '890',
      channels: [
        { name: 'Performance Max', spend: '$8,400', returnVal: '$41,160', roas: '4.9X', percent: 88 },
        { name: 'Meta Dynamic Retargeting', spend: '$7,200', returnVal: '$34,560', roas: '4.8X', percent: 82 },
        { name: 'YouTube Video Action', spend: '$4,100', returnVal: '$16,400', roas: '4.0X', percent: 70 },
        { name: 'Google Search High-Intent', spend: '$7,300', returnVal: '$29,520', roas: '4.0X', percent: 74 },
      ]
    },
    seo: {
      revenue: '$89,400',
      growth: '+56.8%',
      roas: '19.8X',
      cvr: '3.9%',
      leads: '640',
      channels: [
        { name: 'Commercial Keyword Hubs', spend: '$2,000', returnVal: '$44,000', roas: '22X', percent: 94 },
        { name: 'Technical Site Audit & Speed', spend: '$1,200', returnVal: '$21,400', roas: '17.8X', percent: 86 },
        { name: 'Digital PR & Authority Backlinks', spend: '$1,300', returnVal: '$24,000', roas: '18.4X', percent: 90 },
      ]
    },
    cro: {
      revenue: '$37,460',
      growth: '+64.2%',
      roas: '31.2X',
      cvr: '6.8%',
      leads: '420',
      channels: [
        { name: 'Checkout Drop-off Optimization', spend: '$800', returnVal: '$18,900', roas: '23.6X', percent: 92 },
        { name: 'Mobile Hero A/B Split Test', spend: '$500', returnVal: '$11,200', roas: '22.4X', percent: 85 },
        { name: 'Automated Post-Purchase Nurture', spend: '$400', returnVal: '$7,360', roas: '18.4X', percent: 80 },
      ]
    }
  };

  const currentStats = channelStats[activeTab];

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-radial-grid">
      {/* Background Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-600/15 via-indigo-600/15 to-purple-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-500/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-blue-500/30 text-xs font-medium text-slate-200 shadow-lg shadow-blue-950/40 backdrop-blur-md">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            <span className="text-blue-400 font-semibold uppercase tracking-wider text-[11px]">Q3 Growth Cohort</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">Accepting 2 new client brands this month</span>
            <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
          </div>
        </div>

        {/* Hero Title & Subheading */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-['Outfit'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-6">
            We Turn Digital Presence{' '}
            <span className="block mt-1 sm:mt-2 bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent drop-shadow-sm">
              Into Real Growth.
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mb-10">
            GrowthSpark Digital helps ambitious businesses scale predictably through high-impact{' '}
            <span className="text-white font-medium">SEO</span>,{' '}
            <span className="text-white font-medium">social media</span>,{' '}
            <span className="text-white font-medium">paid advertising</span>,{' '}
            <span className="text-white font-medium">content marketing</span>, and{' '}
            <span className="text-white font-medium">conversion optimization</span>.
          </p>

          {/* Call-to-Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 text-white font-semibold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 hover:scale-[1.02] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-3 group border border-white/20 cursor-pointer"
            >
              <span>Get a Free Strategy Call</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={onExploreServices}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900/80 hover:bg-slate-800/90 text-slate-200 hover:text-white font-semibold text-base border border-white/10 hover:border-blue-500/40 shadow-lg shadow-black/30 transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
            >
              <span>Explore Our Services</span>
              <Layers className="w-4 h-4 text-blue-400" />
            </button>
          </div>

          {/* Quick Trust Badges */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto mb-16">
            {TRUST_METRICS.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-4 text-center border border-white/10 hover:border-blue-500/30 transition-colors"
              >
                <div className="font-['Outfit'] text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-white mt-0.5">{item.label}</div>
                <div className="text-[11px] text-slate-400 mt-1 hidden sm:block leading-tight">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Digital Marketing Visual / Interactive Growth Dashboard */}
        <div className="relative max-w-5xl mx-auto">
          {/* Decorative frame gradient */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl blur-md opacity-35" />

          <div className="relative glass-card rounded-2xl border border-white/15 shadow-2xl shadow-blue-950/50 overflow-hidden">
            {/* Window bar */}
            <div className="px-6 py-4 bg-slate-900/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-1" />
                <div className="flex items-center gap-2 text-xs font-medium text-slate-300">
                  <BarChart3 className="w-4 h-4 text-blue-400" />
                  <span>GrowthSpark Command Center</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-mono">
                    LIVE ATTRIBUTION
                  </span>
                </div>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center gap-1 p-1 bg-slate-950/80 rounded-lg border border-white/10 text-xs">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'all'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Omni-Channel
                </button>
                <button
                  onClick={() => setActiveTab('ads')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'ads'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Paid Ads
                </button>
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'seo'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  SEO Organic
                </button>
                <button
                  onClick={() => setActiveTab('cro')}
                  className={`px-3 py-1 rounded-md font-medium transition-all ${
                    activeTab === 'cro'
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  CRO & Funnels
                </button>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-6 sm:p-8 bg-[#0b101c]/90">
              {/* Top Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Generated Pipeline</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" /> {currentStats.growth}
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-['Outfit'] text-white">
                    {currentStats.revenue}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">vs. previous 30-day cohort</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Blended ROAS</span>
                    <span className="px-1.5 py-0.5 rounded bg-blue-500/20 text-blue-300 text-[10px] font-mono">TARGET 3.5X</span>
                  </div>
                  <div className="text-2xl font-bold font-['Outfit'] text-blue-400">
                    {currentStats.roas}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Return on every $1 spent</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>Funnel Conversion</span>
                    <span className="text-emerald-400 font-medium flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" /> +1.4%
                    </span>
                  </div>
                  <div className="text-2xl font-bold font-['Outfit'] text-purple-400">
                    {currentStats.cvr}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Visitor-to-lead velocity</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/60 border border-white/10 hover:border-blue-500/30 transition-all">
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                    <span>High-Intent Leads</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  </div>
                  <div className="text-2xl font-bold font-['Outfit'] text-white">
                    {currentStats.leads}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">Verified sales inquiries</div>
                </div>
              </div>

              {/* Graphical Chart & Channel Breakdown */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* SVG Curve Line Chart */}
                <div className="lg:col-span-7 p-5 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-white">Monthly Scaling Velocity</div>
                      <div className="text-xs text-slate-400">Revenue & Attributed Growth Trajectory</div>
                    </div>
                    <div className="flex items-center gap-3 text-xs">
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                        <span>Actual Revenue</span>
                      </div>
                      <div className="flex items-center gap-1.5 text-slate-400">
                        <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                        <span>Target Goal</span>
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart Graphic */}
                  <div className="relative h-44 w-full">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 500 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                        </linearGradient>
                        <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
                          <stop offset="0%" stopColor="#38bdf8" />
                          <stop offset="50%" stopColor="#6366f1" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>

                      {/* Grid Lines */}
                      <line x1="0" y1="40" x2="500" y2="40" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.75" />
                      <line x1="0" y1="80" x2="500" y2="80" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.75" />
                      <line x1="0" y1="120" x2="500" y2="120" stroke="#334155" strokeDasharray="4 4" strokeWidth="0.75" />

                      {/* Target line */}
                      <path
                        d="M0,130 C120,110 250,85 500,45"
                        fill="none"
                        stroke="#8b5cf6"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        opacity="0.6"
                      />

                      {/* Fill area */}
                      <path
                        d="M0,140 C100,120 180,95 280,70 C380,45 440,30 500,15 L500,160 L0,160 Z"
                        fill="url(#chartGradient)"
                      />

                      {/* Actual Revenue Curve */}
                      <path
                        d="M0,140 C100,120 180,95 280,70 C380,45 440,30 500,15"
                        fill="none"
                        stroke="url(#strokeGradient)"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />

                      {/* Data dots */}
                      <circle cx="0" cy="140" r="4" fill="#38bdf8" />
                      <circle cx="140" cy="108" r="4" fill="#60a5fa" />
                      <circle cx="280" cy="70" r="4" fill="#6366f1" />
                      <circle cx="400" cy="38" r="4" fill="#818cf8" />
                      <circle cx="500" cy="15" r="5" fill="#a855f7" className="animate-ping" />
                      <circle cx="500" cy="15" r="5" fill="#a855f7" />
                    </svg>

                    {/* Chart X Labels */}
                    <div className="flex justify-between text-[10px] text-slate-500 mt-2 font-mono">
                      <span>W1 Baseline</span>
                      <span>W2 Testing</span>
                      <span>W3 Creative Iteration</span>
                      <span>W4 Scale</span>
                      <span className="text-blue-400 font-semibold">Current (Record High)</span>
                    </div>
                  </div>
                </div>

                {/* Channel Allocation Breakdown */}
                <div className="lg:col-span-5 p-5 rounded-xl bg-slate-950/60 border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-white">Active Channel Allocation</span>
                    <span className="text-xs text-blue-400 font-medium">Auto-Optimized</span>
                  </div>

                  <div className="space-y-3.5">
                    {currentStats.channels.map((chan, i) => (
                      <div key={i} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="text-slate-300 font-medium">{chan.name}</span>
                          <span className="font-mono text-slate-400">
                            Spend: <strong className="text-slate-200">{chan.spend}</strong> → Ret:{' '}
                            <strong className="text-emerald-400">{chan.returnVal}</strong> ({chan.roas})
                          </span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-500"
                            style={{ width: `${chan.percent}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      <span>Server-side CAPI verified</span>
                    </span>
                    <span className="text-slate-500">Updated 4m ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos / Trust Bar */}
        <div className="mt-20 pt-10 border-t border-white/10 text-center">
          <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold mb-6">
            Trusted by Ambitious Brands, Funded Startups, and Industry Leaders
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 opacity-70 hover:opacity-100 transition-opacity">
            {CLIENT_LOGOS.map((client, idx) => (
              <div key={idx} className="flex items-center gap-2 text-slate-300 group">
                <div className="w-8 h-8 rounded-lg bg-slate-900 border border-white/10 flex items-center justify-center font-bold text-blue-400 text-sm group-hover:border-blue-500/50 transition-colors">
                  {client.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold tracking-wide text-white group-hover:text-blue-300 transition-colors">
                    {client.name}
                  </div>
                  <div className="text-[10px] text-slate-500">{client.industry}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
