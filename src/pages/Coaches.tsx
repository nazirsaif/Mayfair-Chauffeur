import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { CtaBanner } from '../components/sections/CtaBanner';
import { Map, Users, ShieldCheck, Clock } from 'lucide-react';

const Coaches: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Executive Coaches & UK Tours | Mayfair Executive Chauffeurs</title>
        <meta name="description" content="Luxury executive coach hire for UK-wide tours, corporate events, and large group travel. Accommodating up to 49 passengers in supreme comfort." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/90 to-neutral-950/60 z-10" />
          <img 
            src="/images/coach.png" 
            alt="Executive Coaches" 
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-serif text-[#f5f5f5] mb-6 leading-tight">
              Executive Coaches <br/>& UK Tours
            </h1>
            <p className="text-xl text-[#a3a3a3] mb-8 leading-relaxed">
              Elevate group travel with our premium fleet of Executive Coaches. Perfect for nationwide tours, corporate retreats, and large-scale events.
            </p>
            <Button to="/book?service=executive-coach" className="px-8 py-4 text-lg">
              Enquire About Coach Tours
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-neutral-950">
        <div className="container mx-auto px-4 md:px-6">
          <SectionHeading 
            title="Why Choose Our Coaches" 
            subtitle="We bring our signature luxury chauffeur experience to large-scale group transportation."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              { icon: <Map className="w-8 h-8" />, title: "UK-Wide Itineraries", desc: "From the Scottish Highlands to the Cornish coast, we handle complex multi-day tours." },
              { icon: <Users className="w-8 h-8" />, title: "Up to 49 Seats", desc: "Spacious, climate-controlled interiors with ample legroom for every passenger." },
              { icon: <ShieldCheck className="w-8 h-8" />, title: "Expert Drivers", desc: "Experienced coach drivers who prioritize safety, smoothness, and punctuality." },
              { icon: <Clock className="w-8 h-8" />, title: "Dedicated Planning", desc: "Our team helps coordinate pickup logistics and route planning for your event." }
            ].map((feature, i) => (
              <div key={i} className="bg-neutral-900 p-8 rounded-lg border border-neutral-800 text-center hover:border-[#c9a769]/50 transition-colors">
                <div className="w-16 h-16 mx-auto bg-neutral-800 rounded-full flex items-center justify-center text-[#c9a769] mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-medium text-[#f5f5f5] mb-3">{feature.title}</h3>
                <p className="text-[#a3a3a3] text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
};

export default Coaches;
