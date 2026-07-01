import { business, links } from '../../data/business'
import Reveal from '../Reveal'

/** Embedded Google Map + business hours + location details. */
export default function MapHours() {
  return (
    <section className="section bg-white">
      <div className="container-x grid gap-10 lg:grid-cols-2">
        {/* Map */}
        <Reveal>
          <div className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-slate-100">
            <iframe
              title={`Map showing ${business.name} location`}
              src={business.mapEmbed}
              width="100%"
              height="100%"
              className="h-80 w-full lg:h-full"
              style={{ border: 0, minHeight: '20rem' }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>

        {/* Details */}
        <Reveal delay={100}>
          <span className="eyebrow">Visit / Contact</span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
            Location & Business Hours
          </h2>
          <p className="mt-4 text-slate-600">
            Based in the heart of Manhattan and dispatching across all five boroughs — day or night.
          </p>

          <dl className="mt-8 space-y-4">
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand-50 text-brand-700">📍</span>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Address</dt>
                <dd className="text-brand-900">
                  <a href={business.mapLink} target="_blank" rel="noopener noreferrer" className="hover:text-brand-700 hover:underline">
                    {business.address.full}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand-50 text-brand-700">📞</span>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Phone</dt>
                <dd>
                  <a href={links.tel} className="font-semibold text-brand-900 hover:text-brand-700">
                    {business.phoneDisplay}
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 flex-none place-items-center rounded-xl bg-brand-50 text-brand-700">✉️</span>
              <div>
                <dt className="text-sm font-semibold text-slate-500">Email</dt>
                <dd>
                  <a href={links.mailto} className="text-brand-900 hover:text-brand-700">
                    {business.email}
                  </a>
                </dd>
              </div>
            </div>
          </dl>

          {/* Hours */}
          <div className="mt-8 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-brand-900">Business Hours</h3>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                <span className="h-2 w-2 rounded-full bg-green-500" /> Open Now
              </span>
            </div>
            <ul className="mt-4 space-y-1.5 text-sm">
              {business.hours.map((h) => (
                <li key={h.day} className="flex justify-between">
                  <span className="text-slate-600">{h.day}</span>
                  <span className="font-medium text-brand-900">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
