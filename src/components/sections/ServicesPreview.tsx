import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { services } from '../../data/services';

export const ServicesPreview: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Our Services" 
          subtitle="Tailored luxury transportation for every occasion, ensuring you arrive in unparalleled comfort and style."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Card 
                key={service.id}
                title={service.title}
                description={service.description}
                icon={<Icon className="w-8 h-8" />}
                linkTo="/services"
                linkText="Learn More"
                className="h-full"
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};
