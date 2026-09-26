// -----------------------------------------------------------------------------
// Centralized, editable content for Coorg North Breeze.
// Edit values here to update the whole site. No fabricated facts â€” placeholder
// fields are clearly marked and safe to replace with real information.
// -----------------------------------------------------------------------------

export const site = {
  name: 'North Breeze',
  fullName: 'Coorg North Breeze',
  location: 'Madikeri, Coorg, Karnataka',
  // Primary phone (provided).
  phone: '+91 88673 18857',
  phoneHref: 'tel:+918867318857',
  // WhatsApp uses the same number by default. Edit if a different number is used.
  whatsapp: '918867318857',
  whatsappMessage: 'Hello! I would like to enquire about a stay at Coorg North Breeze.',
  // Configurable Google Maps links. Replace the query with an exact pin when available.
  mapsSearchUrl: 'https://www.google.com/maps/search/?api=1&query=Coorg+North+Breeze+Madikeri+Coorg+Karnataka',
  mapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Coorg+North+Breeze+Madikeri+Coorg+Karnataka',
  mapsEmbedUrl:
    'https://www.google.com/maps?q=Madikeri,Coorg,Karnataka&z=13&output=embed',
} as const

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Stay', href: '/#stay' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Contact', href: '/#contact' },
] as const

export type Room = {
  id: string
  label: string
  name: string
  image: string
  description: string
  details: string[]
}

// Room & space details
export const rooms: Room[] = [
  {
    id: 'bed-room',
    label: 'Bedroom',
    name: 'Master Bedroom',
    image: '/images/bed room.jpg',
    description:
      'A calm and comfortable bedroom with warm wood finishes, plush bedding, and restful natural light.',
    details: ['Double bed', 'Air conditioning', 'Large windows', 'Attached bathroom'],
  },
  {
    id: 'living-area-1',
    label: 'Living Space',
    name: 'Living Area',
    image: '/images/living area 1.jpg',
    description:
      'A spacious, open-plan living room designed for relaxed conversations, gatherings, and leisurely afternoons.',
    details: ['Comfortable sofas', 'Open layout', 'Natural light', 'Scenic views'],
  },
  {
    id: 'living-area-2',
    label: 'Lounge',
    name: 'Lounge & Seating',
    image: '/images/living area 2.jpg',
    description:
      'A sunlit lounge corner with cozy seating and warm interiors, ideal for slow mornings and quiet downtime.',
    details: ['Cozy seating', 'Garden views', 'Warm lighting', 'Relaxing ambiance'],
  },
]

export const amenities = [
  'Hill & valley views',
  'Open terrace',
  'Home-cooked meals',
  'Parking on site',
  'Peaceful surroundings',
  'Warm homestay hospitality',
]

export type Experience = {
  number: string
  title: string
  description: string
  image?: string
}

// Descriptions are short and atmospheric â€” no invented distances or facts.
export const experiences: Experience[] = [
  {
    number: '01',
    title: "Raja's Seat",
    description:
      'A garden viewpoint famous for its sweeping sunsets over the layered Coorg hills.',
    image: '/images/coorg-town-day.png',
  },
  {
    number: '02',
    title: 'Madikeri Fort',
    description:
      'A historic hilltop fort at the heart of Madikeri, quietly holding the townâ€™s stories.',
    image: '/images/property-exterior.png',
  },
  {
    number: '03',
    title: 'Abbey Falls',
    description:
      'A cascade tucked among coffee estates and spice plantations, framed by dense green.',
    image: '/images/balcony.png',
  },
  {
    number: '04',
    title: 'Coffee Plantations',
    description:
      'The scent of coffee blossom drifts across the estates that give Coorg its character.',
    image: '/images/night-terrace.png',
  },
  {
    number: '05',
    title: 'Coorg Nature & Surroundings',
    description:
      'Misty mornings, birdsong and slow walks through the hills that surround the homestay.',
    image: '/images/coorg-night.png',
  },
]

export type GalleryImage = {
  src: string
  alt: string
  category: 'Property' | 'Rooms' | 'Views' | 'Nature' | 'Coorg'
}

export const gallery: GalleryImage[] = [
  {
    src: '/Gallery/road view.png',
    alt: 'Road view',
    category: 'Views',
  },
  {
    src: '/Gallery/balcony.png',
    alt: 'Balcony',
    category: 'Property',
  },
  {
    src: '/Gallery/Pent House.png',
    alt: 'Pent House',
    category: 'Property',
  },
  {
    src: '/Gallery/Real night view.png',
    alt: 'Real night view',
    category: 'Views',
  },
  {
    src: '/Gallery/hall.png',
    alt: 'Hall',
    category: 'Rooms',
  },
  {
    src: '/Gallery/window view.png',
    alt: 'Window view',
    category: 'Rooms',
  },
]

export type Testimonial = {
  quote: string
  name: string
  detail: string
  url?: string
}

// EDITABLE PLACEHOLDERS â€” replace with real, attributed guest reviews.
export const testimonials: Testimonial[] = [
  {
    quote: "We felt like home food was delicious. Rooms big and clean. Very Sweet family took care of everything. Took us around his farm beautiful. The food was so delicious we had all our meals at home. If their was more than 5 stars I would have given them 100 stars. Enjoyed our stay excellent. Thanks a lot for everything.",
    name: "Jahanafrin",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "Really good stay! Very homely atmosphere and the owner was very friendly and staff was helpful. The plantation around the stay was soo beautiful, perfect to take a stroll around and experience the nature.",
    name: "Shrirame",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "I liked the homely food, clean rooms and prompt service provided by the caretaker Pushpa. The drive to property is an experience that you shouldn't miss, nested in nature away from the city.",
    name: "Suraj",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "The View, the rooms, the road to go there, the coffee estate, the cleanliness, the homely feel, the food, the hospitality of staff what not? Everthing is amazing here. The homely hospitality of the...",
    name: "Bhanu",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "Very nice and excellent stay. Staff are very friendly, we feel like home. Good service enjoyed the stay very much. Must stay spot in Coorg and it's away from all the town noises and busy routes...",
    name: "Chukkath",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "Care taker Vishal has been very helpful. Though we reached the location at 1AM he was very obedient and down to earth to help us check in at night without any hassle. Breakfast was super yummy and homely. Would definitely recommend this place to all my contacts.",
    name: "Pushpalatha",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "I stayed there for 4 days the location is awesome. The room was very clean and comfortable the view outside from the room was excellent. The staff was very friendly and the owner Rajesh is extremely warm and welcoming. We had a great time to talk with their family. Food was very yummy homely food. Overall it was superb.",
    name: "Jaibharath",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "Staff courteousness and simple but elegant rooms.",
    name: "Robert",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "Fabulous day Smiling cooperative staff.",
    name: "Shubhada",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
  {
    quote: "The welcoming was really Good, though we reached late in evening … also the lady (care taker) was really polite and helpful. The homemade food made by her was also good. We really enjoyed the stay and the surrounding they had...",
    name: "Kangralkar",
    detail: "Booking.com Verified Review",
    url: "https://www.booking.com/reviews/in/hotel/coorg-estate-breeze-homestay.html",
  },
]
