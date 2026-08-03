import React from 'react';
import type { BookingData } from './BookingFlow';
import { Button } from '../ui/Button';
import { services } from '../../data/services';
import { fleet } from '../../data/fleet';
import { Plus, Minus, Calendar, Clock, MapPin } from 'lucide-react';

interface Props {
  data: BookingData;
  updateData: (data: Partial<BookingData>) => void;
  onNext: () => void;
}

const StepTripDetails: React.FC<Props> = ({ data, updateData, onNext }) => {
  const isBespoke = data.serviceType === 'bespoke';
  
  // Basic validation
  const isValid = isBespoke 
    ? data.bespokeRequest.length > 0 && data.date && data.time
    : data.pickupLocation && data.dropoffLocation && data.date && data.time;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-serif text-[#f5f5f5] mb-6">1. Trip Details</h3>
      
      {/* Service Type */}
      <div>
        <label className="block text-sm font-medium text-[#a3a3a3] mb-3">Service Type</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {services.map(s => (
            <button
              key={s.id}
              onClick={() => updateData({ serviceType: s.id })}
              className={`p-3 text-sm rounded-md border text-left transition-all ${
                data.serviceType === s.id 
                  ? 'border-[#c9a769] bg-[#c9a769]/10 text-[#f5f5f5]' 
                  : 'border-neutral-700 bg-neutral-800/50 text-[#a3a3a3] hover:border-neutral-500'
              }`}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      {!isBespoke ? (
        <>
          {/* Trip Type */}
          <div>
            <label className="block text-sm font-medium text-[#a3a3a3] mb-3">Trip Type</label>
            <div className="flex space-x-4">
              {['one-way', 'return', 'hourly', 'multi-day'].map(type => (
                <button
                  key={type}
                  onClick={() => updateData({ tripType: type })}
                  className={`px-4 py-2 text-sm rounded-full border transition-all capitalize ${
                    data.tripType === type 
                      ? 'border-[#c9a769] bg-[#c9a769]/10 text-[#f5f5f5]' 
                      : 'border-neutral-700 bg-neutral-800/50 text-[#a3a3a3] hover:border-neutral-500'
                  }`}
                >
                  {type.replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Pickup Location *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input 
                  type="text" 
                  value={data.pickupLocation}
                  onChange={(e) => updateData({ pickupLocation: e.target.value })}
                  placeholder="Address or Airport"
                  className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[#a3a3a3] mb-2">
                {data.tripType === 'multi-day' ? 'Itinerary Notes *' : 'Drop-off Location *'}
              </label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                <input 
                  type="text" 
                  value={data.dropoffLocation}
                  onChange={(e) => updateData({ dropoffLocation: e.target.value })}
                  placeholder={data.tripType === 'multi-day' ? 'Brief outline' : 'Address or Airport'}
                  className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769]"
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        /* Bespoke Request Field */
        <div>
          <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Tell us what you need *</label>
          <textarea 
            value={data.bespokeRequest}
            onChange={(e) => updateData({ bespokeRequest: e.target.value })}
            placeholder="Describe your occasion, locations, and any special requirements..."
            rows={4}
            className="w-full p-4 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769]"
          />
        </div>
      )}

      {/* Date & Time */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Date *</label>
          <div className="relative">
            <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input 
              type="date" 
              value={data.date}
              onChange={(e) => updateData({ date: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769] [color-scheme:dark]"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Pickup Time *</label>
          <div className="relative">
            <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
            <input 
              type="time" 
              value={data.time}
              onChange={(e) => updateData({ time: e.target.value })}
              className="w-full pl-10 pr-4 py-3 bg-neutral-800 border border-neutral-700 rounded-md text-[#f5f5f5] focus:outline-none focus:border-[#c9a769] focus:ring-1 focus:ring-[#c9a769] [color-scheme:dark]"
            />
          </div>
        </div>
      </div>

      {/* Passengers & Luggage */}
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Passengers</label>
          <div className="flex items-center bg-neutral-800 border border-neutral-700 rounded-md p-1 w-max">
            <button onClick={() => updateData({ passengers: Math.max(1, data.passengers - 1) })} className="p-2 text-[#a3a3a3] hover:text-[#f5f5f5] focus:outline-none">
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-medium text-[#f5f5f5]">{data.passengers}</span>
            <button onClick={() => updateData({ passengers: data.passengers + 1 })} className="p-2 text-[#a3a3a3] hover:text-[#f5f5f5] focus:outline-none">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-[#a3a3a3] mb-2">Luggage</label>
          <div className="flex items-center bg-neutral-800 border border-neutral-700 rounded-md p-1 w-max">
            <button onClick={() => updateData({ luggage: Math.max(0, data.luggage - 1) })} className="p-2 text-[#a3a3a3] hover:text-[#f5f5f5] focus:outline-none">
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-10 text-center font-medium text-[#f5f5f5]">{data.luggage}</span>
            <button onClick={() => updateData({ luggage: data.luggage + 1 })} className="p-2 text-[#a3a3a3] hover:text-[#f5f5f5] focus:outline-none">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Vehicle Type */}
      <div>
        <label className="block text-sm font-medium text-[#a3a3a3] mb-3">Vehicle Preference</label>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {fleet.map(v => (
            <button
              key={v.id}
              onClick={() => updateData({ vehicleType: v.id })}
              className={`p-4 rounded-lg border text-left transition-all flex flex-col items-center ${
                data.vehicleType === v.id 
                  ? 'border-[#c9a769] bg-[#c9a769]/10' 
                  : 'border-neutral-700 bg-neutral-800/50 hover:border-neutral-500'
              }`}
            >
              <div className="w-full h-24 mb-3 rounded overflow-hidden">
                <img src={v.image} alt={v.name} className="w-full h-full object-cover" />
              </div>
              <span className={`font-medium ${data.vehicleType === v.id ? 'text-[#f5f5f5]' : 'text-[#a3a3a3]'}`}>
                {v.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="pt-6 border-t border-neutral-800 flex justify-end">
        <Button onClick={onNext} disabled={!isValid} className={!isValid ? 'opacity-50 cursor-not-allowed' : ''}>
          Next Step
        </Button>
      </div>
    </div>
  );
};

export default StepTripDetails;
