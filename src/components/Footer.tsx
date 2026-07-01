import { Link } from 'react-router-dom'
import Logo from './Logo'
import SocialIcons from './SocialIcons'
import { business, links } from '../data/business'
import { services } from '../data/content'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-950 text-slate-300">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo variant="light" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Licensed & insured plumbers with {business.yearsExperience}+ years of experience,
              serving all five boroughs of New York City — 24 hours a day, 7 days a week.
            </p>
            <SocialIcons variant="light" className="mt-6" />
          </div>

          {/* Services */}
          <nav aria-label="Footer services">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link to={`/services#${s.slug}`} className="text-slate-400 transition-colors hover:text-accent-300">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                { to: '/about', label: 'About Us' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/faqs', label: 'FAQs' },
                { to: '/contact', label: 'Contact' },
                { to: '/privacy-policy', label: 'Privacy Policy' },
                { to: '/terms', label: 'Terms of Service' },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-slate-400 transition-colors hover:text-accent-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a href={links.tel} className="flex items-start gap-3 text-slate-400 hover:text-accent-300">
                  <span aria-hidden="true">📞</span>
                  <span>{business.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={links.mailto} className="flex items-start gap-3 text-slate-400 hover:text-accent-300">
                  <span aria-hidden="true">✉️</span>
                  <span>{business.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <span aria-hidden="true">📍</span>
                <span>{business.address.full}</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <span aria-hidden="true">🕐</span>
                <span>Open 24 / 7 — including holidays</span>
              </li>
            </ul>
            <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Service areas strip */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <p className="text-xs uppercase tracking-wider text-slate-500">Proudly serving</p>
          <p className="mt-2 text-sm text-slate-400">
            {business.serviceAreas.join(' · ')} — and all of New York City
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-3 py-5 text-xs text-slate-500 sm:flex-row">
          <p>© {year} All Rights Reserved by {business.name}.</p>
          <p className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300">Privacy</Link>
            <Link to="/terms" className="hover:text-slate-300">Terms</Link>
            <span>Licensed · Bonded · Insured</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
