import PageHeader from '../components/PageHeader'
import FAQSection from '../components/sections/FAQSection'
import CTABand from '../components/sections/CTABand'
import { usePageMeta } from '../hooks/usePageMeta'
import { faqs } from '../data/content'

export default function FAQs() {
  usePageMeta({
    title: 'Plumbing FAQs | Pricing, Response Times & More — Plumbing NYC',
    description:
      'Answers to common NYC plumbing questions: how much a plumber costs in 2026, response times, licensing, free estimates, service areas and 24/7 availability.',
  })

  // FAQ structured data for rich results
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about our NYC plumbing services, pricing and response times."
        crumbs={[{ label: 'FAQs' }]}
      />
      <FAQSection />
      <CTABand />
    </>
  )
}
