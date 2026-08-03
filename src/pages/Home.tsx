import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/sections/Hero';
import { TrustBar } from '../components/sections/TrustBar';
import { ServicesPreview } from '../components/sections/ServicesPreview';
import { FleetPreview } from '../components/sections/FleetPreview';
import { CoverageArea } from '../components/sections/CoverageArea';
import { Testimonials } from '../components/sections/Testimonials';
import { FaqPreview } from '../components/sections/FaqPreview';
import { CtaBanner } from '../components/sections/CtaBanner';

const Home: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Mayfair Executive Chauffeurs | Premium UK Travel</title>
        <meta name="description" content="Experience uncompromised luxury and reliability across the UK with Mayfair Executive Chauffeurs. Airport transfers, bespoke journeys, and premium fleet." />
      </Helmet>
      
      <Hero />
      <TrustBar />
      <ServicesPreview />
      <FleetPreview />
      <CoverageArea />
      <Testimonials />
      <FaqPreview />
      <CtaBanner />
    </>
  );
};

export default Home;
