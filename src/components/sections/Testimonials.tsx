import { useEffect, useRef, useState } from 'react'
import { testimonials } from '../../data/content'
import { business } from '../../data/business'
import StarRating from '../StarRating'
import SectionHeading from '../SectionHeading'

/** Accessible testimonial carousel with autoplay (pauses on hover/focus). */
export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const count = testimonials.length

  const go = (n: number) => setIndex((n + count) % count)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % count), 6000)
    return () => clearInterval(id)
  }, [paused, count])

  // Touch swipe support
  const startX = useRef(0)
  const onTouchStart = (e: React.TouchEvent) => (startX.current = e.touches[0].clientX)
  const onTouchEnd = (e: React.TouchEvent) => {
    const dx = e.changedTouches[0].clientX - startX.current
    if (dx > 50) go(index - 1)
    else if (dx < -50) go(index + 1)
  }

  return (
    <section
      className="section bg-white"
      aria-roledescription="carousel"
      aria-label="Customer testimonials"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="container-x">
        <SectionHeading
          eyebrow="Reviews"
          title="What Our Clients Say About Us"
          subtitle={
            <span className="inline-flex flex-wrap items-center justify-center gap-2">
              <StarRating rating={business.rating} size="h-5 w-5" />
              <strong className="text-brand-900">{business.rating}/5</strong> based on {business.reviewCount} Google reviews
            </span>
          }
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          <div
            className="overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <blockquote
                  key={t.name}
                  className="w-full flex-none px-2"
                  aria-hidden={i !== index}
                >
                  <div className="mx-auto rounded-3xl bg-slate-50 p-8 text-center shadow-sm ring-1 ring-slate-100 sm:p-10">
                    <svg viewBox="0 0 24 24" className="mx-auto h-10 w-10 text-accent-300" fill="currentColor" aria-hidden="true">
                      <path d="M9 7H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2H4v2h1a4 4 0 0 0 4-4V9a2 2 0 0 0 0-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v2a2 2 0 0 1-2 2h-1v2h1a4 4 0 0 0 4-4V9a2 2 0 0 0 0-2Z" />
                    </svg>
                    <StarRating rating={t.rating} className="mt-4 justify-center" size="h-5 w-5" />
                    <p className="mt-5 text-lg leading-relaxed text-slate-700">"{t.text}"</p>
                    <footer className="mt-6">
                      <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-brand-700 font-display font-bold text-white">
                        {t.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                      </div>
                      <p className="mt-3 font-bold text-brand-900">{t.name}</p>
                      <p className="text-sm text-slate-500">{t.location} · {t.timeAgo}</p>
                    </footer>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-700 shadow-lg ring-1 ring-slate-100 hover:bg-brand-50 sm:-left-5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-5 w-5"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-brand-700 shadow-lg ring-1 ring-slate-100 hover:bg-brand-50 sm:-right-5"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-5 w-5"><path d="m9 6 6 6-6 6" /></svg>
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index}
                className={`h-2.5 rounded-full transition-all ${
                  i === index ? 'w-7 bg-brand-700' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
