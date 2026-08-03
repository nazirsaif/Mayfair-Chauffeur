import React from 'react';
import type { BookingData } from './BookingFlow';
import { Button } from '../ui/Button';

interface Props {
  data: BookingData;
  updateData: (data: Partial<BookingData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const StepContactInfo: React.FC<Props> = ({ data, updateData, onNext, onBack }) => {
  const isAirport = data.serviceType === 'airport-transfers';
  
  // Basic validation
  const isValid = data.fullName && data.email.includes('@') && data.phone && data.agreedToContact;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-serif text-[#f5f5f5] mb-6">2. Contact Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Full Name *</label>
          <input 
            type="text" 
            value={data.fullName}
            onChange={(e) => updateData({ fullName: e.target.value })}
            placeholder="John Doe"
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769]"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Phone Number *</label>
          <input 
            type="tel" 
            value={data.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            placeholder="+44 7000 000000"
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769]"
          />
        </div>

        <div className={isAirport ? '' : 'md:col-span-2'}>
          <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Email Address *</label>
          <input 
            type="email" 
            value={data.email}
            onChange={(e) => updateData({ email: e.target.value })}
            placeholder="john@example.com"
            className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769]"
          />
        </div>

        {isAirport && (
          <div>
            <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Flight Number (Optional)</label>
            <input 
              type="text" 
              value={data.flightNumber}
              onChange={(e) => updateData({ flightNumber: e.target.value })}
              placeholder="e.g. BA123"
              className="w-full px-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769]"
            />
          </div>
        )}
      </div>

      <div className="flex items-start mt-6">
        <input 
          type="checkbox" 
          id="terms"
          checked={data.agreedToContact}
          onChange={(e) => updateData({ agreedToContact: e.target.checked })}
          className="mt-1 w-4 h-4 rounded border-neutral-700 text-[#c9a769] focus:ring-[#c9a769] bg-neutral-800"
        />
        <label htmlFor="terms" className="ml-3 text-sm text-[#a3a3a3]">
          I agree to be contacted regarding this enquiry and accept the <a href="#" className="text-[#c9a769] hover:underline">terms and conditions</a>. *
        </label>
      </div>

      {/* Navigation */}
      <div className="pt-6 border-t border-neutral-800 flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={onNext} disabled={!isValid} className={!isValid ? 'opacity-50 cursor-not-allowed' : ''}>
          Get My Rate
        </Button>
      </div>
    </div>
  );
};

export default StepContactInfo;
