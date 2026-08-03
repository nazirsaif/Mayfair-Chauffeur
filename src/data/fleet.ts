export interface Vehicle {
  id: string;
  name: string;
  description: string;
  passengers: number;
  luggage: number;
  image: string;
}

export const fleet: Vehicle[] = [
  {
    id: 'executive-v-classes',
    name: 'Executive V Classes',
    description: 'Our premium luxury minivans for VIP, weddings, parties, and family transfers.',
    passengers: 7,
    luggage: 7,
    image: '/images/sedan.png'
  },
  {
    id: 'executive-sprinter',
    name: 'Executive Sprinter',
    description: 'Luxury Mercedes Sprinter vans, perfect for group travel and airport transfers.',
    passengers: 16,
    luggage: 16,
    image: '/images/sprinter.png'
  },
  {
    id: 'executive-coach',
    name: 'Mercedes Benz Executive Coaches',
    description: 'Large premium coaches for UK-wide tours, corporate outings, and large events.',
    passengers: 49,
    luggage: 49,
    image: '/images/coach.png'
  }
];
