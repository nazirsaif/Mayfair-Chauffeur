import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/ui/Button';

const NotFound: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Mayfair Executive Chauffeurs</title>
      </Helmet>

      <section className="min-h-[70vh] flex items-center justify-center bg-neutral-950 py-20">
        <div className="text-center px-4">
          <h1 className="text-9xl font-serif text-[#c9a769] mb-6 opacity-20">404</h1>
          <h2 className="text-3xl md:text-4xl font-serif text-[#f5f5f5] mb-4">Page Not Found</h2>
          <p className="text-[#a3a3a3] text-lg max-w-md mx-auto mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Button to="/">Return to Homepage</Button>
        </div>
      </section>
    </>
  );
};

export default NotFound;
