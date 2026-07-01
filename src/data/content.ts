/**
 * Content collections: services, features, testimonials, FAQs, team, gallery, blog.
 * Icons are referenced by key and resolved in components/Icon.tsx.
 */

export type IconName =
  | 'emergency'
  | 'commercial'
  | 'residential'
  | 'sewer'
  | 'drain'
  | 'heater'
  | 'pipe'
  | 'fixture'
  | 'inspection'
  | 'sump'
  | 'clock'
  | 'shield'
  | 'badge'
  | 'thumb'
  | 'wallet'
  | 'wrench'
  | 'phone'
  | 'star'

export interface Service {
  slug: string
  title: string
  short: string
  description: string
  icon: IconName
  features: string[]
}

export const services: Service[] = [
  {
    slug: 'emergency-plumbing',
    title: '24/7 Emergency Plumbing',
    short: 'Burst pipes, floods & leaks handled around the clock.',
    description:
      'Plumbing emergencies can happen anytime — which is why we answer the phone 24/7. Our plumbers arrive at your home or business fast, typically within 30 minutes, and solve the problem on the spot so you can get back to normal.',
    icon: 'emergency',
    features: ['Response in under 30 minutes', 'Burst & frozen pipe repair', 'Flood & water damage mitigation', 'After-hours & holiday service'],
  },
  {
    slug: 'commercial-plumbing',
    title: 'Commercial Plumbing',
    short: 'Reliable plumbing for NYC businesses & buildings.',
    description:
      'Stuck with a commercial plumbing emergency? Plumbing NYC is a call away. We service restaurants, offices, retail and multi-unit buildings across the five boroughs with fast, code-compliant workmanship that keeps your business running.',
    icon: 'commercial',
    features: ['Restaurants & food service', 'Office & retail spaces', 'Multi-unit & co-op buildings', 'Preventive maintenance plans'],
  },
  {
    slug: 'residential-plumbing',
    title: 'Residential Plumbing',
    short: 'Keep your home safe, dry and running smoothly.',
    description:
      'Home is a peaceful place — until a plumbing problem strikes. From leaky faucets to full repipes, our licensed residential plumbers treat your home with respect and clean up after every job.',
    icon: 'residential',
    features: ['Faucet & toilet repair', 'Leak detection', 'Bathroom & kitchen plumbing', 'Whole-home repiping'],
  },
  {
    slug: 'sewer-line-repair',
    title: 'Sewer Line Repair & Replacement',
    short: 'Root intrusion, backups & broken sewer lines fixed.',
    description:
      'Sewer lines get damaged by tree roots, ground shift and freezing temperatures — a leading cause of winter sewage backups. We diagnose with camera inspection and repair or replace with minimal disruption.',
    icon: 'sewer',
    features: ['Camera line inspection', 'Trenchless repair options', 'Root removal', 'Full line replacement'],
  },
  {
    slug: 'drain-cleaning',
    title: 'Drain Cleaning',
    short: 'Fast clearing of clogged drains, sinks & toilets.',
    description:
      'Drain cleaning is one of our most-requested services. Grease, food buildup and debris clog pipes over time. We clear drains, sewer lines, toilets, bathtubs and sinks quickly and affordably.',
    icon: 'drain',
    features: ['Kitchen & bathroom drains', 'Hydro-jetting', 'Main line cleaning', 'Recurring-clog solutions'],
  },
  {
    slug: 'water-heater',
    title: 'Water Heater Repair & Install',
    short: 'Hot water restored — repair or new installation.',
    description:
      'No hot water? We repair and replace tank and tankless water heaters, sizing the right unit for your home and installing it the same day whenever possible.',
    icon: 'heater',
    features: ['Same-day replacement', 'Tank & tankless units', 'Energy-efficient upgrades', 'Leak & pilot repair'],
  },
  {
    slug: 'pipe-upgrades',
    title: 'Pipe Upgrades & Relining',
    short: 'Replace corroded pipes and reline without digging.',
    description:
      'Old, corroded pipes cause leaks, low pressure and discolored water. We upgrade, replace and reline pipes using modern materials to protect your property for decades.',
    icon: 'pipe',
    features: ['Pipe replacement', 'Trenchless relining', 'Water main repair', 'Low water-pressure fixes'],
  },
  {
    slug: 'fixture-installation',
    title: 'Fixture Installations',
    short: 'Sinks, faucets, toilets & more, installed right.',
    description:
      'Upgrading your kitchen or bath? Our plumbers install sinks, faucets, toilets, showers and appliances cleanly and correctly the first time.',
    icon: 'fixture',
    features: ['Sinks & faucets', 'Toilets & bidets', 'Showers & tubs', 'Dishwasher & appliance hookups'],
  },
  {
    slug: 'home-inspection',
    title: 'Plumbing Home Inspection',
    short: 'Know your system before problems become disasters.',
    description:
      'Buying, selling or just proactive? Our comprehensive plumbing inspection identifies risks early with a clear written report and honest recommendations.',
    icon: 'inspection',
    features: ['Full system evaluation', 'Written report', 'Leak & pressure testing', 'Honest recommendations'],
  },
  {
    slug: 'sump-pump-repair',
    title: 'Sump Pump Repair',
    short: 'Keep your basement dry through every storm.',
    description:
      'A failing sump pump means a flooded basement. We repair, replace and install sump pumps and battery backups to protect your property from water damage.',
    icon: 'sump',
    features: ['Pump repair & replacement', 'Battery backup systems', 'Storm-season checkups', 'Basement waterproofing advice'],
  },
]

export interface Feature {
  title: string
  description: string
  icon: IconName
}

export const whyChooseUs: Feature[] = [
  { title: '30+ Years of Experience', description: "We've served thousands of NYC customers and have the experience to handle any job, large or small.", icon: 'badge' },
  { title: 'Licensed, Bonded & Insured', description: 'Every technician is fully licensed, bonded and insured — top-tier workmanship you can trust, every time.', icon: 'shield' },
  { title: 'Transparent, Fair Pricing', description: 'Prices are displayed clearly before work begins. No surprises — competitive rates and honest advice.', icon: 'wallet' },
  { title: 'Always On Time', description: "You won't wait around. We show up when we say we will — often in under 30 minutes for emergencies.", icon: 'clock' },
  { title: 'Highly Trained Team', description: 'Knowledgeable plumbers who diagnose fast and deliver a solution that actually works for you.', icon: 'wrench' },
  { title: '24/7 Customer Service', description: 'Our friendly team is available around the clock to answer questions and solve emergencies.', icon: 'phone' },
]

export const promises: string[] = [
  '24/7 emergency service',
  'Free estimates',
  '100% satisfaction guarantee',
  'Same-day service & repair when possible',
  'Honest, professional advice',
  'Prompt response to your call',
  'High-quality workmanship',
  'We clean up after ourselves',
]

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  timeAgo: string
}

// Real review names & text drawn from the business's Google reviews.
export const testimonials: Testimonial[] = [
  {
    name: 'Joan Avina',
    location: 'New York, NY',
    rating: 5,
    text: 'My parents are both seniors and had an emergency plumbing issue. I called two companies and they rejected the service because of bad weather. Good thing Plumbing NYC was there to save the day! Thank you for being considerate and respectful to the people I love most.',
    timeAgo: 'Verified customer',
  },
  {
    name: 'Katarina Johnes',
    location: 'Manhattan, NY',
    rating: 5,
    text: 'I had a leaking, old water heater and a home full of corroded pipes. Plumbing NYC came out in the early afternoon and stayed way past 5pm to get the job done. They went above and beyond to make sure I had hot water that night. I will definitely use them again.',
    timeAgo: 'Verified customer',
  },
  {
    name: 'Alexis Lawson',
    location: 'Brooklyn, NY',
    rating: 5,
    text: 'My water heater stopped working, and they fixed it the same day. Super impressed with their service!',
    timeAgo: 'a year ago',
  },
  {
    name: 'Erikas Vosy',
    location: 'Queens, NY',
    rating: 5,
    text: 'They installed my kitchen sink and faucet perfectly. Would definitely recommend them for installations.',
    timeAgo: 'a year ago',
  },
  {
    name: 'Jérôme Martins',
    location: 'Manhattan, NY',
    rating: 5,
    text: 'Had a gas leak, and their quick response might have saved my home. Forever grateful!',
    timeAgo: 'a year ago',
  },
  {
    name: 'Serena B',
    location: 'The Bronx, NY',
    rating: 5,
    text: 'Their emergency plumbing service is a total lifesaver — fast, professional, and reasonably priced.',
    timeAgo: 'a year ago',
  },
  {
    name: 'Isabella Ortega',
    location: 'Brooklyn, NY',
    rating: 5,
    text: 'They repaired my leaking pipe and even gave tips to avoid future problems.',
    timeAgo: 'a year ago',
  },
  {
    name: 'Tiffany Scrivener',
    location: 'New York, NY',
    rating: 5,
    text: 'They handled my emergency plumbing issue professionally and quickly. Highly recommend!',
    timeAgo: 'a year ago',
  },
]

export interface FAQ {
  question: string
  answer: string
}

export const faqs: FAQ[] = [
  {
    question: 'How fast can a plumber get to me in NYC?',
    answer:
      'For emergencies we typically arrive in under 30 minutes across Manhattan, Queens, Brooklyn and the Bronx. Call +1 (646) 580-7524 and our dispatch team will send the nearest available plumber right away.',
  },
  {
    question: 'How much does a plumber cost in NYC in 2026?',
    answer:
      'The average plumber in NYC charges between $100 and $200 per hour. Rates vary with job complexity, timing and borough. We display our pricing transparently and provide a free estimate before any work begins, so you always know the cost up front.',
  },
  {
    question: 'How much would a plumber charge for a 3-hour job?',
    answer:
      'Experienced NYC plumbers charge roughly $150–$250 per hour, so a 3-hour job typically runs $450–$750 in labor. Most total job costs land between $200 and $530. Emergency or after-hours calls can be 1.5–3× higher. We always give you a clear quote first.',
  },
  {
    question: 'Are your plumbers licensed and insured?',
    answer:
      'Yes. Every Plumbing NYC technician is fully licensed, bonded, insured and certified. You get top-tier, code-compliant workmanship with complete peace of mind.',
  },
  {
    question: 'Do you offer free estimates?',
    answer:
      'Absolutely. We offer free estimates upon assessment of your plumbing system, and we respond to quote requests within 15 minutes during business hours.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'We proudly serve all five boroughs of New York City, with a focus on Manhattan, Queens, Brooklyn and the Bronx for both residential and commercial plumbing.',
  },
  {
    question: 'Do you really offer 24/7 emergency service?',
    answer:
      'Yes — burst pipes, gas leaks, floods and clogs don’t keep business hours, and neither do we. Our team is available 24 hours a day, 7 days a week, including holidays.',
  },
  {
    question: 'Do you provide same-day service?',
    answer:
      'Whenever possible, yes. We offer same-day service and same-day repairs so you can fix your issue as fast as possible without calling multiple plumbers.',
  },
]

export interface TeamMember {
  name: string
  role: string
  initials: string
  bio: string
}

export const team: TeamMember[] = [
  { name: 'Michael Rossi', role: 'Founder & Master Plumber', initials: 'MR', bio: 'Founded Plumbing NYC 30+ years ago with a promise: top-notch results and amazing customer service.' },
  { name: 'David Chen', role: 'Lead Emergency Technician', initials: 'DC', bio: 'Specializes in rapid-response repairs — burst pipes, floods and gas leaks across Manhattan.' },
  { name: 'Anthony Rivera', role: 'Commercial Plumbing Manager', initials: 'AR', bio: 'Keeps NYC restaurants, offices and buildings running with code-compliant commercial work.' },
  { name: 'James Park', role: 'Drain & Sewer Specialist', initials: 'JP', bio: 'Camera inspection and trenchless repair expert who clears the toughest clogs and lines.' },
]

export interface GalleryItem {
  id: number
  title: string
  category: string
  /** gradient classes used to render an attractive placeholder tile */
  gradient: string
  icon: IconName
}

export const gallery: GalleryItem[] = [
  { id: 1, title: 'Emergency Pipe Repair', category: 'Emergency', gradient: 'from-brand-700 to-brand-900', icon: 'emergency' },
  { id: 2, title: 'Water Heater Installation', category: 'Installation', gradient: 'from-accent-400 to-accent-600', icon: 'heater' },
  { id: 3, title: 'Kitchen Sink & Faucet', category: 'Residential', gradient: 'from-brand-500 to-brand-700', icon: 'fixture' },
  { id: 4, title: 'Drain Cleaning', category: 'Drain', gradient: 'from-sky-500 to-brand-700', icon: 'drain' },
  { id: 5, title: 'Sewer Line Camera Inspection', category: 'Sewer', gradient: 'from-slate-600 to-slate-900', icon: 'sewer' },
  { id: 6, title: 'Commercial Bathroom Fit-out', category: 'Commercial', gradient: 'from-brand-600 to-brand-800', icon: 'commercial' },
  { id: 7, title: 'Sump Pump Replacement', category: 'Emergency', gradient: 'from-cyan-600 to-brand-800', icon: 'sump' },
  { id: 8, title: 'Bathroom Fixture Upgrade', category: 'Residential', gradient: 'from-accent-500 to-accent-700', icon: 'fixture' },
  { id: 9, title: 'Pipe Relining Project', category: 'Installation', gradient: 'from-brand-700 to-slate-900', icon: 'pipe' },
]

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
}

export const blogPosts: BlogPost[] = [
  { slug: 'gas-leak-emergency-safety-guide', title: 'Gas Leak Emergency in NYC: Step-by-Step Safety Guide', excerpt: 'A gas leak is one of the only plumbing situations where the right first move can save lives. Here is exactly what to do — and what to avoid.', date: 'June 26, 2026', readTime: '5 min read', category: 'Emergency' },
  { slug: 'emergency-plumber-manhattan-response-time', title: 'How Fast Can an Emergency Plumber Arrive in Manhattan?', excerpt: 'If you have a plumbing emergency right now, you want one number: how long until someone shows up. Here is what response time really looks like.', date: 'June 24, 2026', readTime: '4 min read', category: 'Emergency' },
  { slug: 'kitchen-drain-clogged-nyc-fixes', title: 'Kitchen Drain Clogged in NYC? Causes and Professional Fixes', excerpt: 'From grease buildup to aging pipes, here is why NYC kitchen drains clog — and the professional fixes that actually last.', date: 'June 9, 2026', readTime: '6 min read', category: 'Drain Cleaning' },
  { slug: 'why-nyc-drains-clog-faster', title: 'Why NYC Drains Clog Faster (and How to Prevent It)', excerpt: 'Your shower drains slowly and your kitchen sink sits full for a minute. Old NYC plumbing is often the culprit — here is how to prevent it.', date: 'May 30, 2026', readTime: '5 min read', category: 'Informational' },
  { slug: 'water-heater-installation-cost-nyc-2026', title: 'Water Heater Installation Cost in NYC: 2026 Guide', excerpt: 'Your water heater stopped working, or it is 12 years old and on its way out. Here is what a replacement really costs in NYC this year.', date: 'May 9, 2026', readTime: '6 min read', category: '2026 Data' },
  { slug: 'drain-cleaning-cost-nyc-2026', title: 'How Much Does Drain Cleaning Cost in NYC? 2026 Price Guide', excerpt: 'Your drain is moving slow — or not at all. Here is exactly what professional drain cleaning costs in NYC in 2026.', date: 'March 13, 2026', readTime: '5 min read', category: '2026 Data' },
]
