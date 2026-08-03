import { Car, Clock, Plane, GlassWater, ShieldCheck, MapPin } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: any; // Lucide icon
  included: string[];
}

export const services: Service[] = [
  {
    id: 'pickups-dropoffs',
    title: 'Pick ups & Drop offs',
    description: 'Reliable, premium private hire for your day-to-day or special travel needs across the UK.',
    icon: Car,
    included: [
      'Door-to-door luxury service',
      'Professional, vetted chauffeurs',
      'Flexible booking options'
    ]
  },
  {
    id: 'airport-transfers',
    title: 'Airport Transfers',
    description: 'Seamless travel to and from all major UK airports. We monitor your flight for a stress-free pickup.',
    icon: Plane,
    included: [
      'Meet & Greet service',
      'Flight tracking',
      'Complimentary waiting time'
    ]
  },
  {
    id: 'weddings',
    title: 'Weddings',
    description: 'Arrive in style on your special day with our immaculate Black Fleet and professional chauffeurs.',
    icon: GlassWater,
    included: [
      'Immaculately presented vehicles',
      'Ribbons and bows available',
      'Coordinated transport for guests'
    ]
  },
  {
    id: 'parties',
    title: 'Parties / Private Parties',
    description: 'Elevate your night out with our luxury vehicles, ensuring everyone gets home safely and comfortably.',
    icon: ShieldCheck,
    included: [
      'Group transport in Sprinters',
      'Late-night availability',
      'VIP treatment for all guests'
    ]
  },
  {
    id: 'funeral-services',
    title: 'Funeral Services',
    description: 'Dignified, respectful, and reliable transportation for family and guests during difficult times.',
    icon: Clock, // using clock as a dignified placeholder
    included: [
      'Restrained and respectful tone',
      'Immaculate dark vehicles',
      'Punctual and accommodating chauffeurs'
    ]
  },
  {
    id: 'bespoke',
    title: 'Bespoke / Custom Requests',
    description: '"You name it, we can do it for you." Tailored travel solutions for any occasion not listed here.',
    icon: MapPin,
    included: [
      'Fully customizable itineraries',
      'Dedicated planning assistance',
      'Fleet flexibility'
    ]
  }
];
