import { Link } from 'react-router-dom'
import { services } from '../../data/content'
import Icon from '../Icon'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

interface Props {
  /** limit the number shown (homepage shows a subset) */
  limit?: number
  showHeading?: boolean
  showAllLink?: boolean
}

export default function ServicesSection({ limit, showHeading = true, showAllLink = false }: Props) {
  const list = limit ? services.slice(0, limit) : services

  return (
    <section id="services" className="section bg-slate-50">
      <div className="container-x">
        {showHeading && (
          <SectionHeading
            eyebrow="What We Do"
            title="Plumbing Services in NYC"
            subtitle="From emergency repairs to full installations, our licensed plumbers handle every job with the same professionalism and attention to detail."
          />
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <article
                id={service.slug}
                className="card group h-full scroll-mt-28 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-100"
              >
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-700 transition-colors duration-300 group-hover:bg-brand-700 group-hover:text-white">
                  <Icon name={service.icon} className="h-7 w-7" />
                </span>
                <h3 className="mt-5 text-xl font-bold text-brand-900">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{service.short}</p>
                <ul className="mt-4 space-y-1.5">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-500">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5 flex-none text-accent-500">
                        <path d="m5 12 5 5L20 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        {showAllLink && (
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
