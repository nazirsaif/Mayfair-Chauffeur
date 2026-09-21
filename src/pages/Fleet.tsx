import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { fleet } from '../data/fleet';
import { CtaBanner } from '../components/sections/CtaBanner';
import { Users, Briefcase } from 'lucide-react';

const Fleet: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Our Premium Fleet | Mayfair Executive Chauffeurs</title>
        <meta name="description" content="View our pristine fleet of luxury vehicles, including Black Fleet saloons, Executive Minibuses, and spacious Coaches." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-32 pb-16 bg-neutral-950 border-b border-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="The Mayfair Fleet" 
            subtitle="Meticulously maintained, valeted to perfection, and driven by absolute professionals. Choose the perfect vehicle for your journey."
          />
        </div>
      </section>

      {/* Fleet Display */}
      <section className="py-20 bg-neutral-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="space-y-20">
            {fleet.map((vehicle, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={vehicle.id} className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 bg-neutral-950 rounded-xl overflow-hidden border border-neutral-800 shadow-xl`}>
                  {/* Image */}
                  <div className="w-full lg:w-1/2 h-64 lg:h-auto min-h-[400px]">
                    <img 
                      src={vehicle.image} 
                      alt={vehicle.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="w-full lg:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-3xl font-serif text-[#f5f5f5] mb-4">{vehicle.name}</h2>
                    <p className="text-[#a3a3a3] text-lg mb-8 leading-relaxed">
                      {vehicle.description}
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-10">
                      <div className="flex flex-col p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                        <div className="flex items-center space-x-3 mb-2">
                          <Users className="w-6 h-6 text-[#c9a769]" />
                          <span className="text-[#a3a3a3] text-xs uppercase tracking-wider">Passengers</span>
                        </div>
                        <p className="text-xl font-medium text-[#f5f5f5]">{vehicle.passengers} passengers</p>
                      </div>
                      <div className="flex flex-col p-4 bg-neutral-900 rounded-lg border border-neutral-800">
                        <div className="flex items-center space-x-3 mb-2">
                          <Briefcase className="w-6 h-6 text-[#c9a769]" />
                          <span className="text-[#a3a3a3] text-xs uppercase tracking-wider">Luggage</span>
                        </div>
                        <p className="text-xl font-medium text-[#f5f5f5]">{vehicle.luggage} bags</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button to={`/book?vehicle=${vehicle.id}`} className="px-8 py-4">
                        Request This Vehicle
                      </Button>
                      <a 
                        href={`mailto:info@mayfairexecutivechauffers.com?subject=Quick Booking: ${vehicle.name}`}
                        className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium tracking-wide transition-colors duration-200 bg-transparent border text-[#f5f5f5] border-neutral-700 hover:bg-neutral-800 hover:text-white rounded-lg"
                      >
                        Quick Book (Email)
                      </a>
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

export default Fleet;
