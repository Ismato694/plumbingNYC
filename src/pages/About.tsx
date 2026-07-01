import PageHeader from '../components/PageHeader'
import WhyChooseUs from '../components/sections/WhyChooseUs'
import StatsSection from '../components/sections/StatsSection'
import Testimonials from '../components/sections/Testimonials'
import CTABand from '../components/sections/CTABand'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import { usePageMeta } from '../hooks/usePageMeta'
import { business } from '../data/business'
import { team } from '../data/content'

export default function About() {
  usePageMeta({
    title: 'About Plumbing NYC | 30+ Years Serving New York City',
    description:
      'Plumbing NYC is an independently owned plumbing company with 30+ years of experience serving New York City. Licensed, insured, and committed to top-notch service.',
  })

  return (
    <>
      <PageHeader
        title="About Plumbing NYC"
        subtitle="Independently owned and trusted by thousands of New Yorkers for over 30 years."
        crumbs={[{ label: 'About' }]}
      />

      {/* Story */}
      <section className="section bg-white">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="eyebrow">Our Story</span>
            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-brand-900 sm:text-4xl">
              More Than a Job Well Done
            </h2>
            <div className="mt-5 space-y-4 leading-relaxed text-slate-600">
              <p>
                Here at Plumbing NYC, we value our customers and want them to have more than just a
                job well done — we deliver a top-notch overall experience that combines excellent
                results with amazing customer service.
              </p>
              <p>
                We're the professional plumbers for all your plumbing needs in New York City, and
                we've been in the market for {business.yearsExperience} years. Over that time we've
                continuously delivered exquisite plumbing services to New York City residents. Our
                quality of service precedes us.
              </p>
              <p>
                Plumbing NYC is independently owned and focused on delivering plumbing services
                across the five boroughs. We understand that leaky pipes, sewer bursts, and failing
                fixtures can be a real hassle — and that your past experiences may have cost you more
                than they should have. We're dedicated to your safety and to quality in everything we do.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { k: `${business.yearsExperience}+`, v: 'Years in business' },
                { k: '10,000+', v: 'Customers served' },
                { k: '4.8★', v: 'Average rating' },
                { k: '24/7', v: 'Always available' },
              ].map((s) => (
                <div key={s.v} className="rounded-2xl bg-slate-50 p-6 text-center ring-1 ring-slate-100">
                  <p className="font-display text-3xl font-extrabold text-brand-700">{s.k}</p>
                  <p className="mt-1 text-sm text-slate-600">{s.v}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission / values band */}
      <section className="bg-slate-50 py-14">
        <div className="container-x grid gap-6 md:grid-cols-3">
          {[
            { title: 'Our Mission', text: 'To provide fast, honest, high-quality plumbing that protects your home and gives you total peace of mind.' },
            { title: 'Our Values', text: 'Integrity, transparency, and respect — for your time, your property, and your budget.' },
            { title: 'Our Promise', text: 'We clean up after ourselves, stand behind our work with a 100% satisfaction guarantee, and always arrive on time.' },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <div className="card h-full">
                <h3 className="text-lg font-bold text-brand-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <WhyChooseUs />

      {/* Team */}
      <section className="section bg-white">
        <div className="container-x">
          <SectionHeading
            eyebrow="Meet the Team"
            title="The People Behind Plumbing NYC"
            subtitle="Licensed, bonded and insured professionals who treat every job like it's in their own home."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={(i % 4) * 70}>
                <div className="card h-full text-center">
                  <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-brand-600 to-brand-800 font-display text-2xl font-bold text-white">
                    {member.initials}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-brand-900">{member.name}</h3>
                  <p className="text-sm font-medium text-accent-600">{member.role}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            Team members shown are representative profiles for demonstration.
          </p>
        </div>
      </section>

      <StatsSection />
      <Testimonials />
      <CTABand />
    </>
  )
}
