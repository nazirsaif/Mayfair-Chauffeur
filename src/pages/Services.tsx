import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { services } from '../data/services';
import { CtaBanner } from '../components/sections/CtaBanner';

const Services: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Services | Mayfair Executive Chauffeurs</title>
        <meta name="description" content="Explore our premium chauffeur services including airport transfers, wedding cars, funeral services, and bespoke executive travel across the UK." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-neutral-950 border-b border-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Premium Chauffeur Services" 
            subtitle="Tailored luxury transportation for every occasion. We pride ourselves on punctuality, discretion, and unparalleled comfort."
          />
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-24">
            {services.map((service, index) => {
              const isEven = index % 2 === 0;
              const Icon = service.icon;
              
              return (
                <div key={service.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                  {/* Text Content */}
                  <div className="w-full lg:w-1/2">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full bg-neutral-800 flex items-center justify-center text-[#c9a769] mr-6 shadow-inner">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h2 className="text-3xl font-serif text-[#f5f5f5]">{service.title}</h2>
                    </div>
                    
                    <p className="text-[#a3a3a3] text-lg mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-4 mb-8">
                      {service.included.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-[#c9a769] mr-3 mt-1">✓</span>
                          <span className="text-[#f5f5f5]">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {service.id === 'bespoke' ? (
                      <div className="bg-neutral-800/50 p-6 rounded-lg border border-[#c9a769]/30">
                        <h4 className="text-[#c9a769] font-medium mb-2">Have a specific request?</h4>
                        <p className="text-sm text-[#a3a3a3] mb-4">Tell us exactly what you need in our booking form.</p>
                        <Button to="/book?service=bespoke" variant="outline">Enquire Now</Button>
                      </div>
                    ) : (
                      <Button to={`/book?service=${service.id}`}>Book This Service</Button>
                    )}
                  </div>
                  
                  {/* Image Placeholder */}
                  <div className="w-full lg:w-1/2">
                    <div className="aspect-[4/3] rounded-lg overflow-hidden border border-neutral-800 shadow-2xl relative group">
                      <div className="absolute inset-0 bg-neutral-950/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={`/images/${
                          service.id === 'parties' ? 'sprinter.png' :
                          'sedan.png'
                        }`} 
                        alt={service.title} 
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      
      <CtaBanner />
    </>
  );
};

export default Services;
