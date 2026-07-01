import { Link } from 'react-router-dom'
import { business, links } from '../../data/business'
import StarRating from '../StarRating'

/** Homepage hero with strong value proposition + primary CTAs. */
export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-900 text-white">
      {/* Decorative background */}
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div className="absolute -right-24 -top-24 h-96 w-96 animate-blob rounded-full bg-accent-400/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-96 w-96 animate-blob rounded-full bg-brand-500/20 blur-3xl [animation-delay:5s]" />
        <div className="absolute right-1/3 top-1/4 h-64 w-64 animate-blob rounded-full bg-sky-400/10 blur-3xl [animation-delay:8s]" />
        <svg className="absolute inset-0 h-full w-full opacity-[0.04]" aria-hidden="true">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M0 40V0h40" fill="none" stroke="white" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container-x relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:py-28">
        {/* Copy */}
        <div className="animate-fade-in-up">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium ring-1 ring-white/20">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
            </span>
            Available Now — 24/7 Emergency Service
          </span>

          <h1 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            NYC's Trusted
            <span className="text-gradient block">24/7 Emergency Plumber</span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-200">
            Licensed, insured plumbers with over {business.yearsExperience} years of experience serving
            Manhattan, Queens, Brooklyn & the Bronx. Fast, high-quality service —
            <strong className="font-semibold text-white"> we arrive in less than 30 minutes.</strong>
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={links.tel} className="btn-primary text-base">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
              </svg>
              Call {business.phoneDisplay}
            </a>
            <Link to="/contact" className="btn-outline text-base">
              Get a Free Quote
            </Link>
          </div>

          {/* Rating proof */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-center gap-2">
              <StarRating rating={business.rating} size="h-5 w-5" />
              <span className="text-sm font-semibold">{business.rating}/5</span>
              <span className="text-sm text-slate-300">({business.reviewCount} Google reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5 text-accent-400">
                <path d="M12 2 4 6v6c0 5 3.5 8.3 8 9 4.5-.7 8-4 8-9V6l-8-4Z" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              Licensed · Bonded · Insured
            </div>
          </div>
        </div>

        {/* Highlight card */}
        <div className="animate-fade-in-up lg:justify-self-end" style={{ animationDelay: '150ms' }}>
          <div className="relative rounded-3xl bg-white/95 p-6 text-slate-800 shadow-2xl backdrop-blur sm:p-8 lg:animate-float">
            {/* Decorative water droplets */}
            <span className="absolute -right-3 top-8 h-3 w-3 animate-drip rounded-full bg-sky-400/70 [animation-delay:0.4s]" aria-hidden="true" />
            <span className="absolute -left-2 top-24 h-2.5 w-2.5 animate-drip rounded-full bg-brand-400/70 [animation-delay:1.6s]" aria-hidden="true" />
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-400 text-brand-900">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <div>
                <p className="font-display text-lg font-bold text-brand-900">Fast Response Guarantee</p>
                <p className="text-sm text-slate-500">Under 30 minutes, day or night</p>
              </div>
            </div>

            <ul className="mt-6 space-y-3">
              {[
                'Same-day service & repairs',
                'Free, transparent estimates',
                '100% satisfaction guarantee',
                'We clean up after every job',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm font-medium">
                  <span className="grid h-6 w-6 flex-none place-items-center rounded-full bg-green-100 text-green-600">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-3.5 w-3.5">
                      <path d="m5 12 5 5L20 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-6 text-center">
              <div>
                <p className="font-display text-2xl font-extrabold text-brand-700">30+</p>
                <p className="text-xs text-slate-500">Years</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-brand-700">24/7</p>
                <p className="text-xs text-slate-500">Availability</p>
              </div>
              <div>
                <p className="font-display text-2xl font-extrabold text-brand-700">5★</p>
                <p className="text-xs text-slate-500">Rated Service</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave divider */}
      <div className="relative" aria-hidden="true">
        <svg viewBox="0 0 1440 60" className="block h-8 w-full sm:h-12" preserveAspectRatio="none">
          <path d="M0 60V20c240 30 480 30 720 15S1200 0 1440 20v40Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
