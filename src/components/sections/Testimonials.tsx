import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { testimonials } from '../../data/testimonials';
import { Star } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Client Testimonials" 
          subtitle="Don't just take our word for it. Read what our valued clients have to say about their Mayfair experience."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-neutral-950 p-8 rounded-lg border border-neutral-800 relative shadow-lg"
            >
              {/* Quote Mark Decoration */}
              <div className="absolute text-8xl text-neutral-800/50 font-serif top-4 left-6 -z-0">"</div>
              
              <div className="relative z-10">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#c9a769] fill-current" />
                  ))}
                </div>
                
                <p className="text-[#a3a3a3] text-lg italic mb-8 min-h-[100px]">
                  "{testimonial.quote}"
                </p>
                
                <div className="flex items-center border-t border-neutral-800 pt-6">
                  <div className="w-12 h-12 bg-neutral-800 rounded-full flex items-center justify-center text-[#c9a769] font-serif text-xl mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-[#f5f5f5] font-medium">{testimonial.name}</h4>
                    <p className="text-[#c9a769] text-sm">{testimonial.context}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
