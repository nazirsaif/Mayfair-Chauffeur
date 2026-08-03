import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import BookingFlow from '../components/booking/BookingFlow';

const Book: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Book a Chauffeur | Mayfair Executive Chauffeurs</title>
        <meta name="description" content="Get an instant quote and book your premium chauffeur service online in just 60 seconds." />
      </Helmet>

      <section className="pt-32 pb-24 bg-neutral-950 min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Instant Quote & Booking" 
            subtitle="Secure your luxury transportation in just a few simple steps. Available 24/7."
          />
          
          <div className="max-w-4xl mx-auto mt-12 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl overflow-hidden">
            <BookingFlow />
          </div>
        </div>
      </section>
    </>
  );
};

export default Book;
