import PageHeader from '../components/PageHeader'
import ServicesSection from '../components/sections/ServicesSection'
import PromiseSection from '../components/sections/PromiseSection'
import CTABand from '../components/sections/CTABand'
import FAQSection from '../components/sections/FAQSection'
import { usePageMeta } from '../hooks/usePageMeta'
import { services } from '../data/content'
import Icon from '../components/Icon'
import Reveal from '../components/Reveal'
import { Link } from 'react-router-dom'

export default function Services() {
  usePageMeta({
    title: 'Plumbing Services in NYC | Emergency, Residential & Commercial',
    description:
      'Explore Plumbing NYC services: 24/7 emergency plumbing, drain cleaning, sewer line repair, water heaters, pipe upgrades, fixture installation and more across NYC.',
  })

  return (
    <>
      <PageHeader
        title="Our Plumbing Services"
        subtitle="Comprehensive residential and commercial plumbing across all five boroughs — done right, the first time."
        crumbs={[{ label: 'Services' }]}
      />

      <ServicesSection showHeading={false} />

      {/* Detailed service breakdown */}
      <section className="section bg-white">
        <div className="container-x space-y-12">
          {services.map((service, i) => (
            <Reveal key={service.slug}>
              <div
                id={`detail-${service.slug}`}
                className={`grid items-center gap-8 rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-100 sm:p-10 lg:grid-cols-2 ${
                  i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-3 py-1 text-xs font-semibold text-white">
                    <Icon name={service.icon} className="h-4 w-4" />
                    {service.title}
                  </span>
                  <h2 className="mt-4 text-2xl font-bold text-brand-900">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-slate-600">{service.description}</p>
                  <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-slate-700">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-4 w-4 flex-none text-accent-500">
                          <path d="m5 12 5 5L20 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="btn-secondary mt-6">
                    Request This Service
                  </Link>
                </div>
                <div className={`flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-900 text-white shadow-lg`}>
                  <Icon name={service.icon} className="h-28 w-28 text-white/40" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <PromiseSection />
      <FAQSection limit={6} />
      <CTABand />
    </>
  )
}
