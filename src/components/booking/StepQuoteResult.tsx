import React, { useState } from 'react';
import type { BookingData } from './BookingFlow';
import { Button } from '../ui/Button';
import { CheckCircle } from 'lucide-react';
import { services } from '../../data/services';
import { fleet } from '../../data/fleet';

interface Props {
  data: BookingData;
  onBack: () => void;
}

const StepQuoteResult: React.FC<Props> = ({ data, onBack }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // TODO: connect real pricing API
  // Mock pricing logic based on vehicle and type
  const getMockPrice = () => {
    let base = 150;
    if (data.vehicleType === 'executive-minibus') base = 350;
    if (data.vehicleType === 'executive-coach') base = 600;
    if (data.tripType === 'return') base *= 1.8;
    return `£${base}.00`;
  };

  const handleConfirm = () => {
    // TODO: Connect to backend or email service
    console.log('Booking Payload submitted:', data);
    // Simulate analytics conversion tracking
    if (typeof window !== 'undefined' && (window as any).trackConversion) {
      (window as any).trackConversion();
    }
    setIsSubmitted(true);
  };

  const serviceName = services.find(s => s.id === data.serviceType)?.title || data.serviceType;
  const vehicleName = fleet.find(f => f.id === data.vehicleType)?.name || data.vehicleType;

  if (isSubmitted) {
    return (
      <div className="text-center py-12 animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-[#c9a769]/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-10 h-10 text-[#c9a769]" />
        </div>
        <h3 className="text-3xl font-serif text-[#f5f5f5] mb-4">Request Received</h3>
        <p className="text-[#a3a3a3] text-lg max-w-md mx-auto mb-8">
          Thank you, {data.fullName.split(' ')[0]}. We have received your request and will contact you shortly at {data.email} to confirm your booking and final rate.
        </p>
        <Button to="/">Return to Homepage</Button>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="text-center mb-8">
        <h3 className="text-2xl font-serif text-[#f5f5f5] mb-2">Your Estimated Quote</h3>
        <p className="text-sm text-[#a3a3a3]">* Subject to final confirmation by our dispatch team</p>
      </div>

      <div className="bg-[#c9a769]/10 border border-[#c9a769]/30 rounded-xl p-8 text-center max-w-sm mx-auto">
        <span className="text-5xl font-serif text-[#c9a769] font-medium">{getMockPrice()}</span>
        <p className="text-sm text-[#a3a3a3] mt-2">Estimated Total</p>
      </div>

      <div className="bg-neutral-800 rounded-lg p-6 max-w-2xl mx-auto border border-neutral-700">
        <h4 className="text-lg font-medium text-[#f5f5f5] mb-4 border-b border-neutral-700 pb-2">Trip Summary</h4>
        <dl className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 text-sm">
          <div>
            <dt className="text-[#a3a3a3]">Service</dt>
            <dd className="font-medium text-[#f5f5f5]">{serviceName}</dd>
          </div>
          <div>
            <dt className="text-[#a3a3a3]">Vehicle</dt>
            <dd className="font-medium text-[#f5f5f5]">{vehicleName}</dd>
          </div>
          <div>
            <dt className="text-[#a3a3a3]">Date & Time</dt>
            <dd className="font-medium text-[#f5f5f5]">{data.date} at {data.time}</dd>
          </div>
          <div>
            <dt className="text-[#a3a3a3]">Passengers & Luggage</dt>
            <dd className="font-medium text-[#f5f5f5]">{data.passengers} pax, {data.luggage} bags</dd>
          </div>
          
          {data.serviceType === 'bespoke' ? (
            <div className="md:col-span-2">
              <dt className="text-[#a3a3a3]">Request</dt>
              <dd className="font-medium text-[#f5f5f5] line-clamp-2">{data.bespokeRequest}</dd>
            </div>
          ) : (
            <>
              <div className="md:col-span-2">
                <dt className="text-[#a3a3a3]">Route</dt>
                <dd className="font-medium text-[#f5f5f5]">
                  {data.pickupLocation} <span className="text-[#c9a769] mx-2">→</span> {data.dropoffLocation}
                </dd>
              </div>
            </>
          )}
        </dl>
      </div>

      {/* Navigation */}
      <div className="pt-6 border-t border-neutral-800 flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button onClick={handleConfirm}>
          Confirm Request
        </Button>
      </div>
    </div>
  );
};

export default StepQuoteResult;
