import React from 'react';
import { Clock, ShieldCheck, MapPin, Star } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustItems = [
    { icon: <Clock className="w-6 h-6" />, title: "24/7 Availability", desc: "Always here for you" },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Fully Licensed", desc: "& Insured" },
    { icon: <MapPin className="w-6 h-6" />, title: "UK-Wide", desc: "Coverage" },
    { icon: <Star className="w-6 h-6" />, title: "5-Star Rated", desc: "Service" }
  ];

  return (
    <section className="bg-neutral-900 border-y border-neutral-800 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {trustItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center justify-center">
              <div className="text-[#c9a769] mb-3">
                {item.icon}
              </div>
              <h4 className="text-[#f5f5f5] font-semibold text-sm md:text-base">{item.title}</h4>
              <p className="text-[#a3a3a3] text-xs md:text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
