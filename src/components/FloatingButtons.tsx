import { useEffect, useState } from 'react'
import { business, links } from '../data/business'

/** Floating WhatsApp + click-to-call buttons, plus a back-to-top control. */
export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      {/* Back to top */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Back to top"
        className={`grid h-11 w-11 place-items-center rounded-full bg-brand-800 text-white shadow-lg transition-all duration-300 hover:bg-brand-700 ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} className="h-5 w-5">
          <path d="m6 15 6-6 6 6" />
        </svg>
      </button>

      {/* Click to call */}
      <a
        href={links.tel}
        aria-label={`Call ${business.phoneDisplay}`}
        className="grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-white shadow-xl transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6" aria-hidden="true">
          <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.4.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.3 1l-2.2 2.2Z" />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href={links.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
      >
        <span className="absolute inset-0 animate-pulse-ring rounded-full bg-[#25D366]" aria-hidden="true" />
        <svg viewBox="0 0 24 24" fill="currentColor" className="relative h-7 w-7" aria-hidden="true">
          <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.5-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.1-.6-1.4-.8-2-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.9.9-1.1 2-.8 3.2.4 1.6 1.4 3 2.7 4.2 2 1.9 3.7 2.5 4.9 2.9.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.4.2-.7.2-1.2.2-1.4-.1-.2-.3-.3-.6-.4ZM12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-3 .8.8-3-.2-.3A8.2 8.2 0 1 1 12 20.2Z" />
        </svg>
      </a>
    </div>
  )
}
