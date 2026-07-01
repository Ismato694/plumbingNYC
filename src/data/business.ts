/**
 * Central source of truth for all business information & content.
 * Editing values here updates them consistently across the whole site.
 */

export const business = {
  name: 'Plumbing NYC',
  legalName: 'Plumbing NYC',
  tagline: '24/7 Plumber in NYC — Near You in Less Than 30 Minutes',
  yearsExperience: 30,
  phoneDisplay: '+1 (646) 580-7524',
  phoneRaw: '6465807524', // digits only, for tel: & wa.me links
  phoneTel: '+16465807524',
  whatsapp: '16465807524',
  email: 'quotes@plumbingnyc.com',
  address: {
    line1: '510 West 45th St, Apt 11G',
    city: 'New York',
    state: 'NY',
    zip: '10036',
    full: '510 West 45th St, Apt 11G, New York, NY 10036',
  },
  rating: 4.8,
  reviewCount: 44,
  serviceAreas: ['Manhattan', 'Queens', 'Brooklyn', 'The Bronx', 'Staten Island'],
  hours: [
    { day: 'Monday', time: 'Open 24 Hours' },
    { day: 'Tuesday', time: 'Open 24 Hours' },
    { day: 'Wednesday', time: 'Open 24 Hours' },
    { day: 'Thursday', time: 'Open 24 Hours' },
    { day: 'Friday', time: 'Open 24 Hours' },
    { day: 'Saturday', time: 'Open 24 Hours' },
    { day: 'Sunday', time: 'Open 24 Hours' },
  ],
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    twitter: 'https://twitter.com',
    youtube: 'https://youtube.com',
    linkedin: 'https://linkedin.com',
  },
  // Google Maps embed centered on Hell's Kitchen / W 45th St, NYC
  mapEmbed:
    'https://www.google.com/maps?q=510+West+45th+Street,+New+York,+NY+10036&output=embed',
  mapLink: 'https://www.google.com/maps/search/?api=1&query=510+West+45th+Street+New+York+NY+10036',
} as const

/** Pre-built helper links */
export const links = {
  tel: `tel:${business.phoneTel}`,
  mailto: `mailto:${business.email}`,
  whatsapp: `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(
    "Hi Plumbing NYC, I'd like to request a plumbing service."
  )}`,
}
