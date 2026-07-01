import PageHeader from '../components/PageHeader'
import ContactForm from '../components/ContactForm'
import MapHours from '../components/sections/MapHours'
import Reveal from '../components/Reveal'
import { usePageMeta } from '../hooks/usePageMeta'
import { business, links } from '../data/business'
import SocialIcons from '../components/SocialIcons'

export default function Contact() {
  usePageMeta({
    title: 'Contact Plumbing NYC | Free Quote & 24/7 Emergency Line',
    description:
      'Contact Plumbing NYC for a free quote or 24/7 emergency service. Call +1 (646) 580-7524, email quotes@plumbingnyc.com, or send a message — we reply in 15 minutes.',
  })

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Emergency or not, we're here to help. Reach out and we'll respond within 15 minutes."
        crumbs={[{ label: 'Contact' }]}
      />

      <section className="section bg-white">
        <div className="container-x grid gap-10 lg:grid-cols-5">
          {/* Contact methods */}
          <Reveal className="lg:col-span-2">
            <span className="eyebrow">Get in Touch</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-900">
              Talk to a Plumber Now
            </h2>
            <p className="mt-3 text-slate-600">
              For urgent problems — burst pipes, floods, gas leaks — call us directly for the fastest response.
            </p>

            <div className="mt-8 space-y-4">
              <a href={links.tel} className="flex items-center gap-4 rounded-2xl bg-brand-50 p-5 ring-1 ring-brand-100 transition-colors hover:bg-brand-100">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-brand-700 text-white">📞</span>
                <div>
                  <p className="text-sm text-slate-500">Call us 24/7</p>
                  <p className="text-lg font-bold text-brand-900">{business.phoneDisplay}</p>
                </div>
              </a>
              <a href={links.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-green-50 p-5 ring-1 ring-green-100 transition-colors hover:bg-green-100">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-[#25D366] text-white">💬</span>
                <div>
                  <p className="text-sm text-slate-500">Message us</p>
                  <p className="text-lg font-bold text-brand-900">WhatsApp Chat</p>
                </div>
              </a>
              <a href={links.mailto} className="flex items-center gap-4 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100 transition-colors hover:bg-slate-100">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-accent-400 text-brand-900">✉️</span>
                <div>
                  <p className="text-sm text-slate-500">Email us</p>
                  <p className="text-lg font-bold text-brand-900">{business.email}</p>
                </div>
              </a>
            </div>

            <div className="mt-8">
              <p className="text-sm font-semibold text-slate-500">Follow us</p>
              <SocialIcons variant="dark" className="mt-3" />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={120} className="lg:col-span-3">
            <div className="rounded-3xl bg-slate-50 p-6 shadow-sm ring-1 ring-slate-100 sm:p-8">
              <h2 className="text-2xl font-bold text-brand-900">Request a Free Quote</h2>
              <p className="mt-1.5 text-sm text-slate-600">
                Fill out the form and we'll get back to you within 15 minutes during business hours.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <MapHours />
    </>
  )
}
