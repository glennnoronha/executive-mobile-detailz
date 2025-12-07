import { Service, Review, LocationData, NavItem } from './types';
import { Car, Sparkles, ShieldCheck, SprayCan, Wind, Sun, MapPin, Phone, Mail, Clock, CheckCircle } from 'lucide-react';

export const BUSINESS_INFO = {
  name: "Executive Mobile Detailz",
  phone: "(806) 729-8145",
  email: "mikesdetail11@gmail.com",
  location: "Amarillo, Texas",
  hours: "Weekdays 7–6 • Sat 7–5 • Sun 8–12",
  tagline: "Experience the Executive Standard of Automotive Care"
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Service Areas', path: '/areas' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'full-detail',
    title: "Full Detail Packages",
    shortDescription: "Complete interior and exterior transformation.",
    fullDescription: [
      "Our signature service designed to bring your vehicle back to showroom condition.",
      "Includes comprehensive exterior wash, clay bar decontamination, wax application, and deep interior cleaning including shampooing and leather conditioning."
    ],
    priceRange: "$200 - $350",
    features: ["Hand Wash & Wax", "Clay Bar Treatment", "Carpet & Seat Shampoo", "Leather Conditioning", "Engine Bay Rinse"],
    iconName: "Car"
  },
  {
    id: 'interior',
    title: "Interior Detailing",
    shortDescription: "Deep clean, sanitize, and refresh your cabin.",
    fullDescription: [
      "We spend hours inside our cars. Let us make that space healthy and spotless.",
      "We target stains, pet hair, dust in vents, and grime in cup holders."
    ],
    priceRange: "$120 - $200",
    features: ["Vacuuming & Blowing", "Steam Cleaning", "Stain Removal", "UV Protection for Plastics", "Glass Cleaning"],
    iconName: "Sparkles"
  },
  {
    id: 'ceramic',
    title: "Ceramic Coating",
    shortDescription: "Long-lasting paint protection and gloss.",
    fullDescription: [
      "Protect your investment from the harsh Texas sun and road debris.",
      "Our ceramic coatings provide years of protection, hydrophobic properties, and an unmatched candy-like gloss."
    ],
    priceRange: "$600 - $1500+",
    features: ["Paint Correction (1-Step or 2-Step)", "3-5 Year Protection", "Hydrophobic Layer", "Enhanced Gloss"],
    iconName: "ShieldCheck"
  },
  {
    id: 'exterior',
    title: "Exterior Detailing",
    shortDescription: "Enhance your vehicle's curb appeal.",
    fullDescription: ["Gentle hand wash methods that prevent swirls, followed by decontamination and protection."],
    priceRange: "$100 - $180",
    features: ["Foam Cannon Wash", "Wheel & Tire Cleaning", "Iron Decontamination", "Spray Sealant"],
    iconName: "Sun"
  },
  {
    id: 'restoration',
    title: "Headlight Restoration",
    shortDescription: "Restore visibility and safety.",
    fullDescription: ["Cloudy headlights aren't just ugly; they are dangerous. We sand, polish, and seal them for clarity."],
    priceRange: "$50 - $100",
    features: ["Wet Sanding", "Polishing", "UV Sealant Application"],
    iconName: "Wind"
  },
  {
    id: 'odor-pet',
    title: "Odor & Pet Hair Removal",
    shortDescription: "Eliminate smells and stubborn fur.",
    fullDescription: ["Specialized tools and enzymes to remove pet hair and neutralize organic odors permanently."],
    priceRange: "$50 Add-on",
    features: ["Ozone Treatment", "Enzyme Cleaners", "Specialized Pet Hair Brushes"],
    iconName: "SprayCan"
  }
];

export const LOCATIONS: LocationData[] = [
  {
    name: "Amarillo",
    slug: "amarillo",
    description: "Serving all neighborhoods in Amarillo, from Puckett to the Colonies. We bring professional detailing right to your driveway or workplace in the Yellow City.",
    keywords: ["Amarillo mobile detailing", "car detailing Amarillo", "auto detailer Amarillo TX"]
  },
  {
    name: "Canyon",
    slug: "canyon",
    description: "Located near WTAMU or anywhere in Canyon? We provides full mobile service to keep your vehicle clean against the panhandle dust.",
    keywords: ["Canyon TX car detailing", "mobile detailer Canyon Texas"]
  },
  {
    name: "Bushland",
    slug: "bushland",
    description: "Living out in Bushland means dealing with bugs and dust. We travel to you to maintain your trucks, SUVs, and cars.",
    keywords: ["Bushland auto detailing", "mobile car wash Bushland"]
  },
  {
    name: "Hereford",
    slug: "hereford",
    description: "We proudly extend our premium mobile services to the Hereford community. Quality detailing without the drive to the city.",
    keywords: ["Hereford car detailing", "mobile detail Hereford TX"]
  }
];

export const REVIEWS: Review[] = [
  { id: '1', author: "James T.", rating: 5, text: "They transformed my truck. The ceramic coating makes it look better than the day I bought it. Highly recommend!", date: "2 weeks ago" },
  { id: '2', author: "Sarah M.", rating: 5, text: "Best car detail in Amarillo. They came to my office and handled everything while I worked. Super convenient and professional.", date: "1 month ago" },
  { id: '3', author: "Robert L.", rating: 5, text: "Removed all the dog hair from my SUV. I didn't think it was possible. 10/10 service.", date: "3 months ago" }
];

export const FAQS = [
  { q: "Do you need water or power?", a: "We are fully mobile and equipped with our own power and water supply, allowing us to service your vehicle anywhere." },
  { q: "How long does a full detail take?", a: "A full detail typically takes between 3 to 5 hours depending on the size and condition of the vehicle." },
  { q: "What is a clay bar treatment?", a: "Clay bar treatment removes embedded contaminants from your paint that washing alone cannot remove, leaving a smooth-as-glass finish." },
  { q: "Do you service fleets?", a: "Yes, we offer custom packages for commercial fleets. Please contact us for a quote." }
];
