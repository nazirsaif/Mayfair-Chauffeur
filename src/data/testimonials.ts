export interface Testimonial {
  id: string;
  name: string;
  context: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    context: 'Wedding Party',
    quote: 'Absolutely flawless service for our wedding day. The cars were immaculate and the drivers so professional. Could not recommend Mayfair Executive Chauffeurs enough!',
    rating: 5
  },
  {
    id: '2',
    name: 'David R.',
    context: 'Airport Transfer',
    quote: 'Always my go-to for Heathrow transfers. They track the flights perfectly, wait patiently, and the vehicles are incredibly comfortable after a long flight.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emma Thompson',
    context: 'Corporate Tour',
    quote: 'We booked the Executive Coach for a 3-day corporate tour across the UK. The journey was smooth, the coach was luxurious, and the driver was exceptional.',
    rating: 5
  }
];
