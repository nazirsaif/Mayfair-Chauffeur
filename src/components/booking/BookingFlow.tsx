import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Stepper } from '../ui/Stepper';
import StepTripDetails from './StepTripDetails';
import StepContactInfo from './StepContactInfo';
import StepQuoteResult from './StepQuoteResult';

export interface BookingData {
  serviceType: string;
  tripType: string;
  pickupLocation: string;
  dropoffLocation: string;
  date: string;
  time: string;
  passengers: number;
  luggage: number;
  vehicleType: string;
  bespokeRequest: string;
  fullName: string;
  email: string;
  phone: string;
  flightNumber: string;
  agreedToContact: boolean;
}

const initialData: BookingData = {
  serviceType: 'pickups-dropoffs',
  tripType: 'one-way',
  pickupLocation: '',
  dropoffLocation: '',
  date: '',
  time: '',
  passengers: 1,
  luggage: 0,
  vehicleType: 'black-fleet',
  bespokeRequest: '',
  fullName: '',
  email: '',
  phone: '',
  flightNumber: '',
  agreedToContact: false,
};

const BookingFlow: React.FC = () => {
  const [searchParams] = useSearchParams();
  
  // Initialize with URL params if they exist (e.g. from /fleet or /services)
  const initialService = searchParams.get('service') || initialData.serviceType;
  const initialVehicle = searchParams.get('vehicle') || initialData.vehicleType;
  
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<BookingData>({
    ...initialData,
    serviceType: initialService,
    vehicleType: initialVehicle
  });

  const updateFormData = (fields: Partial<BookingData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="w-full">
      <div className="px-6 md:px-12 pt-8 pb-4 bg-neutral-900 border-b border-neutral-800">
        <Stepper 
          currentStep={currentStep} 
          totalSteps={3} 
          labels={['Trip Details', 'Contact Info', 'Quote']} 
        />
      </div>
      
      <div className="p-6 md:p-12">
        {currentStep === 1 && (
          <StepTripDetails 
            data={formData} 
            updateData={updateFormData} 
            onNext={nextStep} 
          />
        )}
        
        {currentStep === 2 && (
          <StepContactInfo 
            data={formData} 
            updateData={updateFormData} 
            onNext={nextStep} 
            onBack={prevStep} 
          />
        )}
        
        {currentStep === 3 && (
          <StepQuoteResult 
            data={formData} 
            onBack={prevStep} 
          />
        )}
      </div>
    </div>
  );
};

export default BookingFlow;
