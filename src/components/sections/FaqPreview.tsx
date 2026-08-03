import React from 'react';

import { SectionHeading } from '../ui/SectionHeading';
import { Accordion } from '../ui/Accordion';
import { faqs } from '../../data/faq';
import { Button } from '../ui/Button';

export const FaqPreview: React.FC = () => {
  // Show only first 4 FAQs on the homepage
  const previewFaqs = faqs.slice(0, 4);

  return (
    <section className="py-24 bg-neutral-950">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Frequently Asked Questions" 
          subtitle="Everything you need to know about our premium chauffeur services."
        />
        
        <div className="mb-12">
          <Accordion items={previewFaqs} />
        </div>
        
        <div className="text-center">
          <Button variant="outline" to="/faq">
            View All FAQs
          </Button>
        </div>
      </div>
    </section>
  );
};
