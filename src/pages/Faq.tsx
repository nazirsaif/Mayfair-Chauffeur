import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Accordion } from '../components/ui/Accordion';
import { faqs } from '../data/faq';
import { CtaBanner } from '../components/sections/CtaBanner';

const Faq: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | Mayfair Executive Chauffeurs</title>
        <meta name="description" content="Find answers to common questions about our premium chauffeur services, booking policies, fleet, and coverage areas." />
      </Helmet>

      <section className="pt-32 pb-24 bg-neutral-950 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Frequently Asked Questions" 
            subtitle="Everything you need to know about booking with Mayfair Executive Chauffeurs."
          />
          
          <div className="mt-16 mb-24 max-w-4xl mx-auto bg-neutral-900 p-6 md:p-12 rounded-xl border border-neutral-800 shadow-2xl">
            <Accordion items={faqs} />
          </div>
          
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-xl font-medium text-[#f5f5f5] mb-4">Still have questions?</h3>
            <p className="text-[#a3a3a3] mb-6">
              Our dedicated support team is available 24/7 to assist you with any specific inquiries or bespoke requests.
            </p>
            <a 
              href="mailto:info@mayfairexecutivechauffeurs.com" 
              className="inline-flex items-center text-[#c9a769] hover:text-[#b59556] font-medium transition-colors"
            >
              Contact Support <span>→</span>
            </a>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default Faq;
