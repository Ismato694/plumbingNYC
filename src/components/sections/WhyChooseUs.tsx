import { whyChooseUs } from '../../data/content'
import Icon from '../Icon'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

export default function WhyChooseUs() {
  return (
    <section className="section bg-white">
      <div className="container-x">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why We're the Best Plumbers in NYC"
          subtitle="You have many options when choosing a plumber in New York City. Here's what makes Plumbing NYC different."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyChooseUs.map((feature, i) => (
            <Reveal key={feature.title} delay={(i % 3) * 80}>
              <div className="flex h-full gap-4 rounded-2xl p-6 transition-colors hover:bg-slate-50">
                <span className="grid h-12 w-12 flex-none place-items-center rounded-xl bg-accent-100 text-accent-600">
                  <Icon name={feature.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="text-lg font-bold text-brand-900">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
