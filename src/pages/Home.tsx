import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import ServicesSection from '../components/sections/ServicesSection'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import StatsSection from '../components/sections/StatsSection'
import PromiseSection from '../components/sections/PromiseSection'
import Testimonials from '../components/sections/Testimonials'
import FAQSection from '../components/sections/FAQSection'
import CTABand from '../components/sections/CTABand'
import MapHours from '../components/sections/MapHours'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: "Plumbing NYC | 24/7 Emergency Plumber in New York City — Under 30 Min",
    description:
      'Licensed & insured NYC plumbers with 30+ years experience. 24/7 emergency service, same-day repairs, free estimates across Manhattan, Queens, Brooklyn & the Bronx.',
  })

  return (
    <>
      <Hero />
      <TrustBar />
      <ServicesSection limit={6} showAllLink />
      <WhyChooseUs />
      <StatsSection />
      <PromiseSection />
      <Testimonials />
      <FAQSection limit={6} />
      <CTABand />
      <MapHours />
    </>
  )
}
