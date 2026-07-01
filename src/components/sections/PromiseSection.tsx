import { Link } from 'react-router-dom'
import { promises } from '../../data/content'
import { business, links } from '../../data/business'
import Reveal from '../Reveal'

/** "Our promise to you" — the What We Offer checklist, paired with a CTA card. */
export default function PromiseSection() {
  return (
    <section className="section bg-slate-50">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="eyebrow">Our Promise</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            What We Offer Every Customer
          </h2>
          <p className="mt-4 text-slate-600">
            When you choose Plumbing NYC, your plumbing is in the hands of highly trained professionals.
            Here's our promise — so there's no need to worry about whether we can handle your needs.
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {promises.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-white p-3.5 shadow-sm ring-1 ring-slate-100">
                <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-accent-400 text-brand-900">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5">
                    <path d="m5 12 5 5L20 7" />
                  </svg>
                </span>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <div className="relative overflow-hidden rounded-3xl bg-brand-800 p-8 text-white shadow-xl sm:p-10">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent-400/20 blur-2xl" aria-hidden="true" />
            <h3 className="font-display text-2xl font-bold">Get a Free Quote</h3>
            <p className="mt-3 text-slate-200">
              We respond to every request within <strong className="text-accent-300">15 minutes</strong>.
              Tell us what's going on and we'll dispatch the nearest available plumber.
            </p>

            <div className="mt-8 space-y-3">
              <a href={links.tel} className="btn-primary w-full text-base">
                Call {business.phoneDisplay}
              </a>
              <Link to="/contact" className="btn-outline w-full text-base">
                Request a Quote Online
              </Link>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn w-full bg-[#25D366] text-white hover:bg-[#20bd5a]">
                Chat on WhatsApp
              </a>
            </div>

            <p className="mt-6 text-center text-sm text-slate-300">
              No hot water? Flooding? Gas leak? We're here 24/7.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
