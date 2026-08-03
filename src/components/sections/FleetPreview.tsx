import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { fleet } from '../../data/fleet';
import { Users, Briefcase } from 'lucide-react';

export const FleetPreview: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Premium Fleet" 
          subtitle="A meticulously maintained selection of executive vehicles, ranging from luxury saloons to spacious coaches."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {fleet.map((vehicle) => (
            <Card 
              key={vehicle.id}
              title={vehicle.name}
              description={vehicle.description}
              image={vehicle.image}
              linkTo={vehicle.id === 'executive-coach' ? '/coaches' : '/fleet'}
              linkText="View Details"
              className="h-full"
            >
              <div className="flex items-center space-x-4 mb-4 text-[#a3a3a3] text-sm mt-2">
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-[#c9a769]" />
                  <span>{vehicle.passengers} passengers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-5 h-5 text-[#c9a769]" />
                  <span>{vehicle.luggage} bags</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
