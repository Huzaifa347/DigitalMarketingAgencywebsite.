import { 
  ServiceItem, 
  WhyChooseUsItem, 
  CaseStudyItem, 
  ProcessStep, 
  TestimonialItem, 
  PricingPlan, 
  FAQItem 
} from '../types';

export const TRUST_METRICS = [
  { label: 'Campaigns Launched', value: '100+', detail: 'Multi-channel digital marketing campaigns' },
  { label: 'Happy Clients', value: '50+', detail: 'From seed-stage startups to enterprise brands' },
  { label: 'Average ROI', value: '3.4X', detail: 'Measured client return on ad spend & organic value' },
  { label: 'Managed Ad Spend', value: '$18M+', detail: 'Optimized across Google, Meta, & LinkedIn' },
];

export const CLIENT_LOGOS = [
  { name: 'ApexRetail', industry: 'E-commerce' },
  { name: 'SaaSFlow', industry: 'B2B Software' },
  { name: 'LuminaryHealth', industry: 'Healthcare' },
  { name: 'Veritas Capital', industry: 'Fintech' },
  { name: 'PulseCommerce', industry: 'D2C Retail' },
  { name: 'Novatech Labs', industry: 'AI & Cloud' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'seo',
    title: 'Search Engine Optimization (SEO)',
    tagline: 'Dominate organic search results and capture high-intent buyers.',
    description: 'Data-backed on-page, technical, and authority-building SEO strategies engineered to elevate organic keyword rankings, amplify sustainable organic traffic, and reduce cost-per-acquisition.',
    iconName: 'Search',
    metrics: '+185% Avg. Organic Traffic in 6 Months',
    badge: 'Core Growth Engine',
    features: [
      'Comprehensive Technical Website Audits & Core Web Vitals',
      'High-Intent Keyword Research & Semantic Topic Clusters',
      'Editorial White-Hat Backlink & Digital PR Outreach',
      'Competitor SERP Gap Analysis & Real-Time Rank Tracking'
    ],
    deliverables: [
      'Monthly Technical Health Audits',
      'Keyword Mapping & Content Briefs',
      'High-Authority Domain Placements',
      'Live Google Search Console Reporting'
    ],
    timeline: 'Ongoing (First velocity jumps in 60–90 days)'
  },
  {
    id: 'social-media',
    title: 'Social Media Marketing',
    tagline: 'Turn attention into community, engagement, and repeat revenue.',
    description: 'End-to-end organic and paid social media management. We architect compelling visual narratives, viral short-form video strategies, and community activation across LinkedIn, Instagram, TikTok, and X.',
    iconName: 'Share2',
    metrics: '3.8X Average Engagement Multiplier',
    features: [
      'Multi-Platform Content Strategy & Editorial Calendar',
      'Short-Form Video Production (Reels, TikToks, Shorts)',
      'Community Management, Influencer Seeding & Outreach',
      'Social Listening, Trend Hijacking & Brand Advocacy'
    ],
    deliverables: [
      '30-Day Content Production Calendar',
      'Custom Motion & Graphic Creative Packs',
      'Direct Message & Comment Nurturing',
      'Monthly Audience Sentiment & Reach Reports'
    ],
    timeline: 'Active weekly sprints with monthly reviews'
  },
  {
    id: 'paid-ads',
    title: 'Google & Meta Ads',
    tagline: 'High-converting performance marketing with hyper-targeted ad spend.',
    description: 'Precision-targeted paid search and paid social campaigns. We rigorously test ad creative variants, optimize audience bidding algorithms, and scale customer acquisition with positive unit economics.',
    iconName: 'Target',
    metrics: '4.2X Average Documented ROAS',
    badge: 'High Impact',
    features: [
      'Google Search, Performance Max & YouTube Video Ads',
      'Meta (Facebook & Instagram) Dynamic Creative Testing',
      'First-Party Pixel & Server-Side CAPI Tracking Setup',
      'Granular Retargeting Funnels & Negative Keyword Pruning'
    ],
    deliverables: [
      'Multi-Variate Ad Copy & Visual Creative Packs',
      'Custom High-Converting Landing Page Guidance',
      'Full Tracking Architecture (GA4, CAPI, UTMs)',
      'Weekly Bid & Budget Optimization Reviews'
    ],
    timeline: 'Rapid 7-day launch & continuous algorithmic tuning'
  },
  {
    id: 'content-marketing',
    title: 'Content Marketing',
    tagline: 'Authoritative storytelling that educates buyers and drives pipeline.',
    description: 'High-impact blogs, whitepapers, case studies, and editorial assets tailored to solve customer pain points, establish category thought leadership, and feed organic acquisition channels.',
    iconName: 'FileText',
    metrics: '+210% Pipeline Velocity Improvement',
    features: [
      'Topic Authority Clusters & Search-Engine Optimized Articles',
      'Gated Lead Magnets, Industry Whitepapers & Guides',
      'Content Repurposing into Carousels, Newsletters & Threads',
      'Customer Storytelling & Video Case Study Production'
    ],
    deliverables: [
      'SEO-Optimized Long-Form Articles',
      'Interactive Downloadable Lead Assets',
      'Weekly Multi-Channel Distribution Kits',
      'Quarterly Editorial Strategic Roadmaps'
    ],
    timeline: 'Bi-weekly editorial releases'
  },
  {
    id: 'email-marketing',
    title: 'Email Marketing',
    tagline: 'Automated lifecycle journeys that turn subscribers into lifetime buyers.',
    description: 'Intelligent lifecycle flows, customer retention funnels, and predictive segmentation designed to nurture leads, eliminate churn, and systematically maximize customer lifetime value (LTV).',
    iconName: 'Mail',
    metrics: '38% Average Open Rate & 28% Revenue Share',
    features: [
      'Behavior-Triggered Automated Workflows & Abandoned Cart Flows',
      'Audience Micro-Segmentation & Behavioral Tagging',
      'High-Converting Copywriting & Bespoke Responsive Templates',
      'Deliverability Audits, IP Warming & List Hygiene'
    ],
    deliverables: [
      '6 Automated Lifecycle Nurture Sequences',
      'Weekly Broadcast Campaigns & Newsletters',
      'A/B Subject Line & CTA Test Matrices',
      'Deliverability Monitoring & Spam Shielding'
    ],
    timeline: '14-day sequence deployment + weekly campaigns'
  },
  {
    id: 'web-optimization',
    title: 'Website & Landing Page Optimization',
    tagline: 'Blazing fast, conversion-engineered digital storefronts that sell.',
    description: 'We overhaul sluggish interfaces into high-converting conversion machines. Utilizing heatmaps, session recording analyses, and radical UX polish, we ensure every visitor has an effortless path to conversion.',
    iconName: 'Layout',
    metrics: '+62% Average Landing Page Conversion Rate',
    badge: 'Conversion Booster',
    features: [
      'High-Conversion Wireframing & Modern UI/UX Design',
      'Mobile-First Responsive Layouts & Sub-Second Load Speeds',
      'A/B Split Testing for Headlines, CTAs, and Lead Forms',
      'Frictionless Checkout & Form Abandonment Reduction'
    ],
    deliverables: [
      'Custom Dedicated Landing Page Builds',
      'Visual Heatmap & Drop-off Analysis',
      'Mobile Conversion Audit & Speed Optimization',
      'CRO Hypothesis Experiment Reports'
    ],
    timeline: '2–3 weeks from concept to live deployment'
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    tagline: 'Distinctive brand positioning that commands premium pricing.',
    description: 'Transformative visual identities, verbal messaging guidelines, and brand systems that evoke trust, establish category differentiation, and resonate deeply with modern digital buyers.',
    iconName: 'Sparkles',
    metrics: '94% Brand Recognition Lift in Category',
    features: [
      'Brand Strategy, Core Purpose & Value Proposition Architecture',
      'Logo Systems, Color Harmonies & Typography Hierarchy',
      'Tone of Voice Guidelines & Brand Messaging Matrix',
      'Digital Collateral, Pitch Decks & Social Media Kits'
    ],
    deliverables: [
      'Comprehensive Digital Brand Guideline Bible',
      'Full Vector Asset Suite (Web, App, Print)',
      'Core Pitch & Value Proposition Playbook',
      'Social & Advertising Brand Starter Pack'
    ],
    timeline: '4-week collaborative sprint'
  },
  {
    id: 'cro-analytics',
    title: 'Analytics & Conversion Optimization',
    tagline: 'Eliminate guesswork with full-funnel attribution and CRO.',
    description: 'Robust measurement frameworks, multi-touch attribution modeling, and rigorous conversion rate testing that uncover hidden revenue leaks and empower confident, data-driven decisions.',
    iconName: 'BarChart3',
    metrics: '100% Data Accuracy & Full Attribution Visibility',
    badge: 'Essential Infrastructure',
    features: [
      'Server-Side GA4, Google Tag Manager & DataLayer Implementation',
      'Multi-Touch Attribution Modeling & Custom Executive Dashboards',
      'Quantitative Heatmaps, Click Tracking & Form Field Drop-off',
      'Continuous Multivariate Experimentation & Statistical Auditing'
    ],
    deliverables: [
      'Centralized Real-Time Executive Looker Studio Dashboard',
      'Full Server-Side Tracking & Event Infrastructure',
      'Monthly CRO Hypothesis Testing Roadmap',
      'Attribution & CAC-to-LTV Cohort Analysis'
    ],
    timeline: 'Setup in 10 days, ongoing sprint testing'
  }
];

export const WHY_CHOOSE_US_DATA: WhyChooseUsItem[] = [
  {
    id: 'data-driven',
    title: 'Data-Driven Strategies',
    description: 'Every recommendation is grounded in rigorous quantitative analytics, consumer behavior data, and algorithmic trends—never hunches or guesswork.',
    iconName: 'Database',
    stat: '100%',
    statLabel: 'Data-Validated Hypotheses',
    highlight: 'Rigorous attribution modeling across every touchpoint.'
  },
  {
    id: 'experienced-team',
    title: 'Experienced Marketing Team',
    description: 'No junior handoffs. You work directly with veteran growth architects, certified media buyers, and conversion engineers with proven track records.',
    iconName: 'Users',
    stat: '8+ Yrs',
    statLabel: 'Avg. Senior Specialist Experience',
    highlight: 'Cross-disciplinary specialists dedicated to your account.'
  },
  {
    id: 'transparent-reporting',
    title: 'Transparent Reporting',
    description: '24/7 access to live interactive dashboards. Clear, unfiltered insights on your ad spend, CAC, conversion rates, and net bottom-line growth.',
    iconName: 'Eye',
    stat: '24/7',
    statLabel: 'Live Dashboard Access',
    highlight: 'Weekly video walkthroughs with actionable next steps.'
  },
  {
    id: 'customized-campaigns',
    title: 'Customized Campaigns',
    description: 'We reject cookie-cutter templates. Every campaign is bespoke, meticulously mapped to your specific unit economics, margins, and sales cycle.',
    iconName: 'Sliders',
    stat: 'Bespoke',
    statLabel: 'Tailored Unit Economics',
    highlight: 'Precision custom funnels engineered for your exact buyers.'
  },
  {
    id: 'measurable-roi',
    title: 'Focus on Measurable ROI',
    description: 'We do not celebrate vanity metrics like impressions or clicks. We focus squarely on revenue generated, booked sales calls, and compounding ROI.',
    iconName: 'TrendingUp',
    stat: '3.4X',
    statLabel: 'Average Client Net ROI',
    highlight: 'Accountability centered on bottom-line profit expansion.'
  },
  {
    id: 'fast-communication',
    title: 'Fast Communication',
    description: 'A dedicated Slack channel, rapid turnaround times, and direct access to your lead strategist ensure your business moves at modern speed.',
    iconName: 'Zap',
    stat: '< 2 Hrs',
    statLabel: 'Slack Response Guarantee',
    highlight: 'Zero ticketing delays or bureaucratic red tape.'
  }
];

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: 'ecommerce-growth',
    title: 'Veloce Streetwear: Scaling D2C Global Revenue',
    clientType: 'E-commerce Growth',
    industry: 'Direct-to-Consumer Fashion & Apparel',
    tagline: 'Scaled monthly revenue from $45k to $230k within 9 months via full-funnel Meta & Google Ads synergy.',
    challenge: 'Stagnant ad fatigue, rising Meta CPMs, and high cart abandonment rate (79%) eroding profit margins after iOS privacy updates.',
    solution: 'Engineered high-velocity UGC creative testing engine (15 creative hooks/week), migrated to server-side CAPI tracking, built automated SMS/email abandon flows, and restructured Google Performance Max campaigns.',
    resultsSummary: 'Achieved record month-over-month revenue growth while cutting customer acquisition cost by 38%.',
    metrics: {
      trafficGrowth: '+265%',
      leadsGenerated: '+1,450 Orders/mo',
      conversionRate: '+3.8% (from 1.4%)',
      roas: '4.6X Blended ROAS'
    },
    chartData: [
      { month: 'Month 1', before: 45, after: 52 },
      { month: 'Month 3', before: 50, after: 98 },
      { month: 'Month 6', before: 55, after: 165 },
      { month: 'Month 9', before: 60, after: 232 },
    ],
    keyTactics: [
      '15+ weekly creative variants tested on Meta & TikTok',
      'Dynamic product retargeting with tailored bundle discounts',
      'High-speed Headless Shopify checkout CRO overhaul'
    ],
    badgeColor: 'blue'
  },
  {
    id: 'local-business',
    title: 'Apex Dental Specialists: Dominating Metro Patient Acquisition',
    clientType: 'Local Business Lead Generation',
    industry: 'Specialized Healthcare & Dental Implants',
    tagline: 'Generated over 240 qualified patient inquiries per month while slashing cost-per-lead by 42%.',
    challenge: 'Heavy local competition in a saturated metropolitan market, low Google Maps visibility, and underperforming website causing wasted ad spend on unqualified clicks.',
    solution: 'Designed localized hyper-targeted Google Local Services Ads and Search campaigns for high-ticket dental procedures, overhauled Google Business Profile with review generation automation, and built a frictionless 60-second mobile booking quiz.',
    resultsSummary: 'Filled the practice booking calendar 6 weeks in advance and established regional category dominance.',
    metrics: {
      trafficGrowth: '+190%',
      leadsGenerated: '240+ Leads/mo',
      conversionRate: '8.4% Booking CVR',
      roas: '5.2X Value ROI'
    },
    chartData: [
      { month: 'Month 1', before: 40, after: 68 },
      { month: 'Month 3', before: 45, after: 135 },
      { month: 'Month 6', before: 50, after: 195 },
      { month: 'Month 9', before: 52, after: 242 },
    ],
    keyTactics: [
      'Exact-match high-intent local search keyword architecture',
      'Automated SMS review collection generating 140+ 5-star ratings',
      'Mobile-first appointment booking funnel with insurance pre-check'
    ],
    badgeColor: 'purple'
  },
  {
    id: 'saas-acquisition',
    title: 'MetricPulse Cloud: B2B Enterprise Pipeline Explosion',
    clientType: 'SaaS Customer Acquisition',
    industry: 'B2B Enterprise Workflow & Analytics',
    tagline: 'Skyrocketed qualified demo bookings by 410% and generated $2.8M in qualified sales pipeline.',
    challenge: 'Long 90-day sales cycle, generic value messaging confusing enterprise decision makers, and high organic bounce rates on technical product pages.',
    solution: 'Implemented Account-Based Marketing (ABM) on LinkedIn targeting VP & C-suite titles, authored 4 authoritative industry research reports, and rebuilt interactive product sandbox tour pages.',
    resultsSummary: 'Reduced CAC payback period from 14 months to 5.5 months while securing Fortune 500 pilots.',
    metrics: {
      trafficGrowth: '+320%',
      leadsGenerated: '410+ Demos Booked',
      conversionRate: '6.4% Demo CVR',
      roas: '3.9X Pipeline ARR'
    },
    chartData: [
      { month: 'Month 1', before: 20, after: 38 },
      { month: 'Month 3', before: 24, after: 92 },
      { month: 'Month 6', before: 28, after: 210 },
      { month: 'Month 9', before: 30, after: 410 },
    ],
    keyTactics: [
      'LinkedIn Account-Based Marketing targeting Tier-1 buyer personas',
      'Ungated interactive self-serve product tour with frictionless CTA',
      'Conversion-optimized landing pages addressing enterprise security'
    ],
    badgeColor: 'emerald'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    title: 'Discover',
    subtitle: 'Deep-Dive Audit & Gap Analysis',
    description: 'We dismantle your current funnels, audit tracking infrastructure, dissect competitor strengths/weaknesses, and define your ideal customer profile (ICP) unit economics.',
    duration: 'Week 1',
    deliverables: [
      'Comprehensive 360° Marketing & SEO Audit',
      'Competitor Keyword & Ad Spy Intelligence',
      'Attribution & Tracking Vulnerability Check',
      'Target Customer Persona Playbook'
    ],
    iconName: 'Compass'
  },
  {
    step: 2,
    title: 'Strategize',
    subtitle: 'Omni-Channel Roadmap & Forecasting',
    description: 'We construct your custom growth blueprint. We outline budget allocation across channels, creative concepts, landing page wireframes, and measurable 90-day KPI targets.',
    duration: 'Week 2',
    deliverables: [
      '90-Day Revenue & Milestone Growth Plan',
      'Channel Budget Allocation Matrix',
      'Creative Testing Strategy & Angle Scripts',
      'Landing Page & Offer Positioning Architecture'
    ],
    iconName: 'Layers'
  },
  {
    step: 3,
    title: 'Execute',
    subtitle: 'Agile Launch & Multi-Channel Deployment',
    description: 'Our technical and creative squads go live. We launch ad campaigns, deploy optimized landing pages, initiate SEO content sprints, and verify end-to-end data tracking.',
    duration: 'Weeks 3–4',
    deliverables: [
      'Multi-Platform Ad Campaigns Live (Meta, Google)',
      'High-Speed Conversion Landing Pages Deployed',
      'Server-Side Event Tracking Verification',
      'First-Wave Creative Cohorts in Flight'
    ],
    iconName: 'Rocket'
  },
  {
    step: 4,
    title: 'Optimize',
    subtitle: 'Iterative Scaling & Algorithmic Refinement',
    description: 'Continuous multivariate testing, bid management, and funnel optimization. We trim underperforming assets, double down on winning creative angles, and scale profitable spend.',
    duration: 'Ongoing Continuous',
    deliverables: [
      'Weekly Spend & Performance Syncs',
      'A/B Creative & Headline Refresh Sprints',
      'CRO Funnel Leak Resolution',
      'Real-Time Executive Looker Studio Dashboard'
    ],
    iconName: 'Gauge'
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: 't1',
    name: 'Marcus Vance',
    role: 'Founder & Chief Executive Officer',
    company: 'Veloce Luxury Apparel',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'GrowthSpark Digital transformed our online presence. Before working with them, our Meta ads were bleeding money post-iOS updates. Within 90 days, their creative strategy and server-side tracking pushed our blended ROAS over 4.5X. Truly exceptional partners.',
    verifiedMetric: '+265% Revenue in 9 Months'
  },
  {
    id: 't2',
    name: 'Dr. Elena Rostova',
    role: 'Managing Partner',
    company: 'Apex Healthcare & Dental',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'Our patient bookings were flatlining until GrowthSpark took over our local search and landing page funnels. They built a custom booking quiz that converts over 8% of visitors. We had to hire two additional specialists just to handle the volume.',
    verifiedMetric: '240+ Qualified Monthly Patient Leads'
  },
  {
    id: 't3',
    name: 'Julian Sterling',
    role: 'VP of Growth & Marketing',
    company: 'MetricPulse Analytics SaaS',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    rating: 5,
    quote: 'The level of transparency and strategic depth is unmatched. Most agencies show you vanity impressions, but GrowthSpark directly aligns with our pipeline revenue and CAC targets. Our enterprise demo volume is up 410%.',
    verifiedMetric: '$2.8M Added to Sales Pipeline'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    badge: 'Foundation',
    isPopular: false,
    monthlyPrice: 1950,
    annualMonthlyPrice: 1560,
    description: 'Essential digital marketing foundation tailored for growing businesses ready to build steady inbound pipeline.',
    features: [
      'Search Engine Optimization (SEO) basics & on-page tune-up',
      'Social media management (2 channels, 12 posts/month)',
      'Monthly performance reporting & executive video recap',
      'Basic growth strategy & quarterly goal setting',
      'Google Search Console & GA4 health maintenance',
      'Standard email & async communication support'
    ],
    notIncluded: [
      'Paid advertising management (Meta / Google)',
      'Custom landing page design & CRO testing',
      'Advanced server-side tracking architecture',
      'Dedicated instant Slack channel'
    ],
    bestFor: 'Growing local businesses, boutique brands, and early-stage companies.',
    ctaText: 'Get Started with Starter'
  },
  {
    id: 'growth',
    name: 'Growth',
    badge: 'Most Popular',
    isPopular: true,
    monthlyPrice: 3850,
    annualMonthlyPrice: 3080,
    description: 'Comprehensive multi-channel acquisition engine built to accelerate market share and maximize return on ad spend.',
    features: [
      'Advanced SEO (Technical audits, backlinks & monthly content)',
      'Multi-platform social media strategy (3 channels, 20 posts/mo + Reels)',
      'Paid advertising management (Google Ads & Meta Ads up to $25k spend)',
      'Content marketing (2 comprehensive SEO articles/month)',
      'Conversion rate optimization (Landing page audits & split tests)',
      'Bi-weekly detailed reporting & live dashboard access',
      'Dedicated senior growth strategist & team',
      'Direct Slack channel with < 2 hr response time'
    ],
    bestFor: 'Fast-growing companies looking to scale customer acquisition predictably.',
    ctaText: 'Accelerate with Growth'
  },
  {
    id: 'scale',
    name: 'Scale',
    badge: 'Enterprise Domination',
    isPopular: false,
    monthlyPrice: 6950,
    annualMonthlyPrice: 5560,
    description: 'Full-service digital dominance partner for aggressive brands scaling past multi-million revenue milestones.',
    features: [
      'Full-service multi-channel digital marketing orchestration',
      'Advanced paid campaigns across Google, Meta, TikTok & LinkedIn',
      'Unlimited ad spend management with custom algorithmic bidding',
      'High-velocity SEO & digital PR link building campaign',
      'Weekly multi-media content production & video editing',
      'Full-funnel server-side analytics & multi-touch attribution',
      'Continuous conversion rate optimization & custom landing page builds',
      'Dedicated fractional CMO & weekly strategic war room calls',
      'Priority 24/7 VIP communication and immediate campaign pivots'
    ],
    bestFor: 'Established brands, high-growth SaaS, and multi-million e-commerce stores.',
    ctaText: 'Dominate with Scale'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Timeline',
    question: 'How long does digital marketing take to show results?',
    answer: 'Timeline varies by channel: Paid advertising (Google & Meta Ads) begins driving targeted traffic and conversions within the first 7 to 14 days of launch. Conversion rate optimization (CRO) on your existing traffic typically yields statistically significant lifts in 30 to 45 days. Search Engine Optimization (SEO) and organic content marketing represent long-term compounding investments that typically display significant keyword velocity and organic revenue gains within 60 to 90 days. We establish clear 30, 60, and 90-day milestone targets so you always know what to expect.'
  },
  {
    id: 'faq-2',
    category: 'Services',
    question: 'What services do you offer?',
    answer: 'GrowthSpark Digital provides end-to-end growth solutions covering eight core disciplines: Search Engine Optimization (SEO), Social Media Marketing, Google & Meta Paid Advertising, High-Impact Content Marketing, Automated Email Lifecycle Marketing, Website & Landing Page Conversion Optimization, Brand Identity & Positioning, and Advanced Analytics with Conversion Tracking (GA4, CAPI, Looker Studio). We can either execute as your full outsourced growth team or support specific high-priority acquisition channels.'
  },
  {
    id: 'faq-3',
    category: 'Clients',
    question: 'Do you work with small businesses?',
    answer: 'Yes! Our Starter package is specifically designed for ambitious local businesses, boutique agencies, and emerging startups that need a reliable, cost-effective digital foundation without bloat. We evaluate every potential client based on their product-market fit, unit economics, and willingness to scale. If your business has a validated offer and clear target market, our frameworks can generate consistent customer acquisition.'
  },
  {
    id: 'faq-4',
    category: 'Metrics',
    question: 'How do you measure campaign success?',
    answer: 'We measure success through commercial outcomes: Net Revenue Generated, Return on Ad Spend (ROAS), Customer Acquisition Cost (CAC), Cost Per Lead (CPL), and Customer Lifetime Value (LTV). While we track leading indicators like click-through rates and organic ranking shifts, our primary reports and executive reviews focus squarely on pipeline velocity, booked consultations, and bottom-line profit. You receive 24/7 access to an interactive, real-time Looker Studio dashboard.'
  },
  {
    id: 'faq-5',
    category: 'Social Media',
    question: 'Can you manage our social media?',
    answer: 'Absolutely. Our social media marketing service includes creative strategy, editorial calendar management, custom graphic design, short-form video editing (Reels/TikToks/Shorts), engaging copywriting, community moderation, and proactive brand engagement. We align organic social efforts directly with your paid advertising funnels to create a cohesive, authoritative brand presence across LinkedIn, Instagram, TikTok, and X.'
  },
  {
    id: 'faq-6',
    category: 'Packages',
    question: 'Do you offer custom packages?',
    answer: 'Yes. While our Starter, Growth, and Scale plans address the most common business growth phases, many of our enterprise or hyper-niche clients request customized arrangements (such as pure paid media management, dedicated SEO content sprints, or bespoke landing page CRO overhauls). During our Free Strategy Call, we review your current metrics, identify the biggest leverage points, and tailor a scope of work specifically aligned with your growth objectives.'
  }
];
