import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { coverageAreas } from '../../data/coverageAreas';
import { MapPin } from 'lucide-react';

export const CoverageArea: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <SectionHeading 
              title="UK-Wide Coverage" 
              subtitle="Based in Midlands Covering All over UK. Our expansive network ensures you have premium chauffeur service wherever you go."
              centered={false}
            />
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              {coverageAreas.slice(0, 8).map((area, index) => (
                <div key={index} className="flex items-center text-[#f5f5f5]">
                  <MapPin className="w-5 h-5 text-[#c9a769] mr-3 flex-shrink-0" />
                  <span className="font-medium">{area}</span>
                </div>
              ))}
            </div>
            
            <p className="mt-8 text-[#a3a3a3] text-sm italic">
              * This is just a selection of our popular areas. We cover all UK airports, cities, and regions.
            </p>
          </div>
          
          <div className="w-full lg:w-1/2">
            {/* Simple stylized map representation since we don't have an actual map image */}
            <div className="aspect-square w-full max-w-md mx-auto bg-neutral-900 rounded-full border border-neutral-800 flex items-center justify-center p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c9a769]/10 via-neutral-900 to-neutral-900"></div>
              <img 
                src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80" 
                alt="UK Coverage" 
                className="w-full h-full object-cover rounded-full opacity-40 mix-blend-overlay"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <MapPin className="w-12 h-12 text-[#c9a769] mb-4" />
                <h3 className="text-2xl font-serif text-[#f5f5f5] mb-2">Nationwide<br/>Service</h3>
                <p className="text-[#c9a769] font-medium tracking-widest uppercase text-sm">Everywhere you need to be</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
