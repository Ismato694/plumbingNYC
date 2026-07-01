import Reveal from '../Reveal'
import CountUp from '../CountUp'

interface Stat {
  target?: number
  prefix?: string
  suffix?: string
  thousands?: boolean
  static?: string
  label: string
}

const stats: Stat[] = [
  { target: 30, suffix: '+', label: 'Years of Experience' },
  { target: 10000, suffix: '+', thousands: true, label: 'Jobs Completed' },
  { target: 30, suffix: ' min', label: 'Average Arrival Time' },
  { static: '24/7', label: 'Emergency Availability' },
]

/** Bold stats band with animated count-up numbers. */
export default function StatsSection() {
  return (
    <section className="relative overflow-hidden bg-brand-700 py-14 text-white">
      <div className="absolute inset-0 opacity-10" aria-hidden="true">
        <div className="absolute -left-16 top-0 h-64 w-64 animate-blob rounded-full bg-white blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-64 w-64 animate-blob rounded-full bg-accent-400 blur-3xl [animation-delay:4s]" />
      </div>
      <div className="container-x relative">
        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <p className="font-display text-4xl font-extrabold text-accent-400 sm:text-5xl">
                {s.static ? (
                  s.static
                ) : (
                  <CountUp target={s.target!} suffix={s.suffix} thousands={s.thousands} />
                )}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-100 sm:text-base">{s.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
