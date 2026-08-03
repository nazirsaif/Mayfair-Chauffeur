import React from 'react';
import { Button } from '../ui/Button';

export const CtaBanner: React.FC = () => {
  return (
    <section className="bg-[#c9a769] py-16 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black opacity-10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-black mb-6">
          Ready to experience true luxury?
        </h2>
        <p className="text-black/80 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Book your premium chauffeur instantly and elevate your next journey with Mayfair Executive.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button 
            to="/book" 
            className="bg-black text-[#c9a769] hover:bg-neutral-900 border-none shadow-xl hover:shadow-2xl"
          >
            Get Instant Quote
          </Button>
          <a 
            href="tel:+448001234567" 
            className="text-black font-medium hover:text-black/70 transition-colors border-b-2 border-black/20 pb-1"
          >
            Or call 0800 123 4567
          </a>
        </div>
      </div>
    </section>
  );
};
