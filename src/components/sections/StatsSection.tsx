import { business } from '../../data/business'
import Reveal from '../Reveal'

const stats = [
  { value: `${business.yearsExperience}+`, label: 'Years of Experience' },
  { value: '10,000+', label: 'Jobs Completed' },
  { value: '30 min', label: 'Average Arrival Time' },
  { value: '24/7', label: 'Emergency Availability' },
]

/** Bold stats band with the brand color background. */
export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-700 py-14 text-white">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-white blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-accent-400 blur-3xl" />
      </div>
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-display text-4xl font-extrabold text-accent-400 sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-sm font-medium text-slate-100 sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
