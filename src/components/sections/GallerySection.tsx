import { useEffect, useState } from 'react'
import { gallery } from '../../data/content'
import Icon from '../Icon'
import Reveal from '../Reveal'
import SectionHeading from '../SectionHeading'

interface Props {
  showHeading?: boolean
}

/**
 * Filterable project gallery with an accessible lightbox.
 * Uses branded gradient tiles as placeholders (no external images to load).
 */
export default function GallerySection({ showHeading = true }: Props) {
  const categories = ['All', ...Array.from(new Set(gallery.map((g) => g.category)))]
  const [filter, setFilter] = useState('All')
  const [active, setActive] = useState<number | null>(null)

  const items = filter === 'All' ? gallery : gallery.filter((g) => g.category === filter)

  // Keyboard controls for the lightbox
  useEffect(() => {
    if (active === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
      if (e.key === 'ArrowRight') setActive((i) => (i === null ? i : (i + 1) % gallery.length))
      if (e.key === 'ArrowLeft') setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length))
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [active])

  const activeItem = active !== null ? gallery[active] : null

  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        {showHeading && (
          <SectionHeading
            eyebrow="Our Work"
            title="Recent Projects Gallery"
            subtitle="A look at the quality workmanship we bring to homes and businesses across NYC."
          />
        )}

        {/* Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                filter === c ? 'bg-brand-700 text-white' : 'bg-white text-slate-600 ring-1 ring-slate-200 hover:bg-slate-100'
              }`}
              aria-pressed={filter === c}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <Reveal key={item.id} delay={(i % 3) * 70}>
              <button
                onClick={() => setActive(gallery.findIndex((g) => g.id === item.id))}
                className={`group relative flex aspect-[4/3] w-full flex-col justify-end overflow-hidden rounded-2xl bg-gradient-to-br ${item.gradient} p-5 text-left text-white shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl`}
                aria-label={`View ${item.title}`}
              >
                <Icon name={item.icon} className="absolute right-4 top-4 h-10 w-10 text-white/25" />
                <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/10" aria-hidden="true" />
                <div className="relative">
                  <span className="inline-block rounded-full bg-white/20 px-2.5 py-0.5 text-xs font-medium backdrop-blur">
                    {item.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold">{item.title}</h3>
                </div>
                <span className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full bg-white/20 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.title}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-brand-950/90 p-4 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            onClick={() => setActive(null)}
            aria-label="Close gallery"
            className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="M6 6l12 12M6 18 18 6" /></svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i === null ? i : (i - 1 + gallery.length) % gallery.length)) }}
            aria-label="Previous image"
            className="absolute left-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          <figure className="max-w-2xl" onClick={(e) => e.stopPropagation()}>
            <div className={`flex aspect-[4/3] w-full flex-col items-center justify-center rounded-2xl bg-gradient-to-br ${activeItem.gradient} p-10 text-white shadow-2xl`}>
              <Icon name={activeItem.icon} className="h-24 w-24 text-white/80" />
            </div>
            <figcaption className="mt-4 text-center text-white">
              <span className="text-sm text-accent-300">{activeItem.category}</span>
              <p className="text-xl font-bold">{activeItem.title}</p>
            </figcaption>
          </figure>

          <button
            onClick={(e) => { e.stopPropagation(); setActive((i) => (i === null ? i : (i + 1) % gallery.length)) }}
            aria-label="Next image"
            className="absolute right-4 grid h-12 w-12 place-items-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6"><path d="m9 6 6 6-6 6" /></svg>
          </button>
        </div>
      )}
    </section>
  )
}
