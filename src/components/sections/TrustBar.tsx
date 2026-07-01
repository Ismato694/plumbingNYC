import Reveal from '../Reveal'

const items = [
  { label: 'Licensed & Insured', icon: 'M12 2 4 6v6c0 5 3.5 8.3 8 9 4.5-.7 8-4 8-9V6l-8-4Z' },
  { label: '30+ Years Experience', icon: 'M12 8v8m-4-4h8' },
  { label: '4.8★ on Google', icon: 'm12 2 3 6 6 1-5 5 1 6-5-3-5 3 1-6-5-5 6-1 3-6Z' },
  { label: 'Same-Day Service', icon: 'M13 2 3 14h7l-1 8 10-12h-7l1-8Z' },
]

/** A slim strip of trust signals directly under the hero. */
export default function TrustBar() {
  return (
    <section className="border-b border-slate-100 bg-white py-6" aria-label="Trust signals">
      <div className="container-x">
        <Reveal className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className="flex items-center justify-center gap-2.5 text-center">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-6 w-6 flex-none text-accent-500">
                <path d={it.icon} />
              </svg>
              <span className="text-sm font-semibold text-brand-900">{it.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
