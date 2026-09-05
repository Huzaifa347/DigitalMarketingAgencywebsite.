import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ProcessSection } from './components/ProcessSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { RoiCalculator } from './components/RoiCalculator';
import { PricingSection } from './components/PricingSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ArrowUp, Sparkles, MessageCircle } from 'lucide-react';

export default function App() {
  const [prefillService, setPrefillService] = useState<string | undefined>(undefined);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToContact = (serviceName?: string) => {
    if (serviceName) {
      setPrefillService(serviceName);
    }
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#07090e] text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenContact={() => scrollToContact()} />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero 
          onOpenContact={() => scrollToContact()} 
          onExploreServices={scrollToServices} 
        />

        {/* 2. Services Section */}
        <ServicesSection 
          onOpenContactWithService={(serviceName) => scrollToContact(serviceName)} 
        />

        {/* 3. Why Choose Us */}
        <WhyChooseUs />

        {/* 4. Results & Case Studies */}
        <CaseStudiesSection 
          onOpenContact={(notes) => scrollToContact(notes)} 
        />

        {/* 5. 4-Step Process */}
        <ProcessSection />

        {/* 6. Testimonials */}
        <TestimonialsSection />

        {/* Interactive Growth / ROI Calculator */}
        <RoiCalculator 
          onOpenContact={(notes) => scrollToContact(notes)} 
        />

        {/* 7. Pricing Packages */}
        <PricingSection 
          onSelectPlan={(plan) => scrollToContact(`Pricing: ${plan} Plan`)} 
        />

        {/* 8. FAQ Section */}
        <FAQSection 
          onOpenContact={() => scrollToContact('General Inquiry / Question')} 
        />

        {/* 9. Contact / Lead Generation Section */}
        <ContactSection 
          prefillService={prefillService} 
          onClearPrefill={() => setPrefillService(undefined)} 
        />
      </main>

      {/* Footer */}
      <Footer 
        onOpenContact={(service) => scrollToContact(service)} 
      />

      {/* Quick Floating Strategy Call Button on Desktop & Mobile */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-slate-900/90 border border-white/15 text-slate-300 hover:text-white hover:bg-slate-800 flex items-center justify-center shadow-xl backdrop-blur-md transition-all duration-200 cursor-pointer hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}

        <button
          onClick={() => scrollToContact()}
          className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-xs shadow-2xl shadow-blue-600/40 hover:shadow-blue-600/60 hover:scale-105 transition-all duration-300 border border-white/20 cursor-pointer"
        >
          <Sparkles className="w-4 h-4 animate-pulse text-blue-200" />
          <span className="hidden sm:inline">Book Strategy Call</span>
          <span className="sm:hidden">Book Call</span>
        </button>
      </div>
    </div>
  );
}
