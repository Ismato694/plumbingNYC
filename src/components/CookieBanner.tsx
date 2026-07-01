import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'pnyc-cookie-consent'

/** GDPR-style cookie consent banner. Persists choice to localStorage. */
export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // slight delay so it doesn't fight with first paint
        const t = setTimeout(() => setVisible(true), 900)
        return () => clearTimeout(t)
      }
    } catch {
      /* localStorage unavailable — fail silently */
    }
  }, [])

  const decide = (choice: 'accepted' | 'declined') => {
    try {
      localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      /* ignore */
    }
    setVisible(false)
    // Analytics hook: if accepted, initialize gtag here.
    // if (choice === 'accepted' && window.gtag) window.gtag('consent', 'update', { analytics_storage: 'granted' })
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl animate-fade-in-up rounded-2xl bg-white p-5 shadow-2xl ring-1 ring-slate-200 sm:inset-x-6 sm:bottom-6"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-slate-600">
          🍪 We use cookies to improve your experience and analyze site traffic. See our{' '}
          <Link to="/privacy-policy" className="font-semibold text-brand-700 underline">
            Privacy Policy
          </Link>
          .
        </p>
        <div className="flex flex-none gap-2">
          <button onClick={() => decide('declined')} className="btn border border-slate-300 text-slate-600 hover:bg-slate-50">
            Decline
          </button>
          <button onClick={() => decide('accepted')} className="btn-primary">
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
