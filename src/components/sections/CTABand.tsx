import { Link } from 'react-router-dom'
import { business, links } from '../../data/business'
import Reveal from '../Reveal'

/** Full-width emergency call-to-action band. */
export default function CTABand() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-16 text-white">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 to-brand-800" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-accent-400/15 blur-3xl" />
      </div>
      <div className="container-x relative">
        <Reveal className="flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">
          <div>
            <h2 className="font-display text-3xl font-extrabold sm:text-4xl">
              Have a Plumbing Emergency?
            </h2>
            <p className="mt-3 max-w-xl text-lg text-slate-200">
              Don't wait for a small leak to become a big flood. Our team is ready 24/7 and arrives in under 30 minutes.
            </p>
          </div>
          <div className="flex flex-none flex-col gap-3 sm:flex-row">
            <a href={links.tel} className="btn-primary text-base">
              📞 Call {business.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-outline text-base">
              Get a Free Quote
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
