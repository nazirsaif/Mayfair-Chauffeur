import React from 'react';
import { Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-neutral-950/40 z-10" />
        <img 
          src="/images/sedan.png" 
          alt="Mayfair Executive Chauffeur" 
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-2 border border-[#c9a769]/30 rounded-full bg-[#c9a769]/10 mb-6 backdrop-blur-sm">
            <span className="text-sm font-medium text-[#c9a769] tracking-widest uppercase">Premium Ground Transportation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-[#f5f5f5] mb-6 leading-tight">
            Executive Chauffeur &<br />Travel, Done Right
          </h1>
          <p className="text-xl text-[#a3a3a3] mb-10 max-w-2xl leading-relaxed">
            Experience uncompromised luxury and reliability across the UK. From airport transfers to bespoke journeys, we set the standard.
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button to="/book" className="w-full sm:w-auto text-lg px-8 py-4">
              Get Instant Quote
            </Button>
            <a 
              href="tel:+448001234567" 
              className="flex items-center text-[#f5f5f5] hover:text-[#c9a769] transition-colors group w-full sm:w-auto justify-center py-4"
            >
              <div className="w-12 h-12 rounded-full border border-neutral-700 flex items-center justify-center mr-4 group-hover:border-[#c9a769] transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <span className="text-lg font-medium">Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
