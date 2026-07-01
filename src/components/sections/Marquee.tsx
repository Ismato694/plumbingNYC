import { business } from '../../data/business'

const items = [
  '24/7 Emergency Service',
  'Licensed & Insured',
  'Under 30-Minute Response',
  ...business.serviceAreas,
  'Free Estimates',
  'Same-Day Repairs',
  '100% Satisfaction Guarantee',
  '30+ Years Experience',
]

/** Seamless infinite ticker; pauses on hover. Purely decorative. */
export default function Marquee() {
  return (
    <div className="border-y border-white/10 bg-brand-800 py-3 text-white" aria-hidden="true">
      <div className="marquee-mask group flex overflow-hidden">
        {/* Two identical tracks create a seamless -50% loop */}
        {[0, 1].map((track) => (
          <ul
            key={track}
            className="flex flex-none animate-marquee items-center gap-8 pr-8 group-hover:[animation-play-state:paused]"
          >
            {items.map((item, i) => (
              <li key={`${track}-${i}`} className="flex items-center gap-8 whitespace-nowrap text-sm font-semibold">
                <span>{item}</span>
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 text-accent-400">
                  <path d="m12 2 3 6 6 1-5 5 1 6-5-3-5 3 1-6-5-5 6-1 3-6Z" />
                </svg>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
