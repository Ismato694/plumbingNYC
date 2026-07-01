import { useState, type FormEvent } from 'react'
import { services } from '../data/content'

type Status = 'idle' | 'submitting' | 'success' | 'error'

interface Fields {
  name: string
  email: string
  phone: string
  service: string
  message: string
}

const empty: Fields = { name: '', email: '', phone: '', service: '', message: '' }

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRe = /^[\d\s()+-]{7,}$/

/** Validated contact / quote-request form with loading + error handling. */
export default function ContactForm() {
  const [fields, setFields] = useState<Fields>(empty)
  const [errors, setErrors] = useState<Partial<Fields>>({})
  const [status, setStatus] = useState<Status>('idle')

  const validate = (f: Fields): Partial<Fields> => {
    const e: Partial<Fields> = {}
    if (!f.name.trim()) e.name = 'Please enter your name.'
    if (!f.email.trim()) e.email = 'Please enter your email.'
    else if (!emailRe.test(f.email)) e.email = 'Please enter a valid email address.'
    if (!f.phone.trim()) e.phone = 'Please enter your phone number.'
    else if (!phoneRe.test(f.phone)) e.phone = 'Please enter a valid phone number.'
    if (!f.message.trim()) e.message = 'Please tell us how we can help.'
    return e
  }

  const update = (key: keyof Fields, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    const found = validate(fields)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    setStatus('submitting')
    try {
      // ── Integration point ──────────────────────────────────────────
      // Replace this simulated request with a POST to your backend /
      // email service (e.g. Formspree, a serverless function, etc.).
      await new Promise((resolve) => setTimeout(resolve, 1200))
      // Simulate the occasional failure path so error handling is real:
      // if (Math.random() < 0) throw new Error('network')
      setStatus('success')
      setFields(empty)
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div role="status" className="rounded-3xl bg-green-50 p-8 text-center ring-1 ring-green-200">
        <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-green-100 text-green-600">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-8 w-8">
            <path d="m5 12 5 5L20 7" />
          </svg>
        </div>
        <h3 className="mt-5 text-xl font-bold text-brand-900">Thank you — request received!</h3>
        <p className="mt-2 text-slate-600">
          Our team will respond within 15 minutes during business hours. For urgent
          emergencies, please call us directly.
        </p>
        <button onClick={() => setStatus('idle')} className="btn-secondary mt-6">
          Send another request
        </button>
      </div>
    )
  }

  const inputBase =
    'w-full rounded-xl border bg-white px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-500'

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4" aria-label="Contact and quote request form">
      {status === 'error' && (
        <div role="alert" className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700 ring-1 ring-red-200">
          Something went wrong sending your request. Please try again, or call us at{' '}
          <a href="tel:+16465807524" className="font-semibold underline">
            +1 (646) 580-7524
          </a>
          .
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-slate-700">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            value={fields.name}
            onChange={(e) => update('name', e.target.value)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={`${inputBase} ${errors.name ? 'border-red-400' : 'border-slate-200'}`}
            placeholder="Jane Doe"
          />
          {errors.name && <p id="name-error" className="mt-1 text-xs text-red-600">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-slate-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            value={fields.phone}
            onChange={(e) => update('phone', e.target.value)}
            aria-invalid={!!errors.phone}
            aria-describedby={errors.phone ? 'phone-error' : undefined}
            className={`${inputBase} ${errors.phone ? 'border-red-400' : 'border-slate-200'}`}
            placeholder="(646) 555-0100"
          />
          {errors.phone && <p id="phone-error" className="mt-1 text-xs text-red-600">{errors.phone}</p>}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            value={fields.email}
            onChange={(e) => update('email', e.target.value)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={`${inputBase} ${errors.email ? 'border-red-400' : 'border-slate-200'}`}
            placeholder="jane@example.com"
          />
          {errors.email && <p id="email-error" className="mt-1 text-xs text-red-600">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-slate-700">
            Service needed
          </label>
          <select
            id="service"
            value={fields.service}
            onChange={(e) => update('service', e.target.value)}
            className={`${inputBase} border-slate-200`}
          >
            <option value="">Select a service…</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Other">Other / Not sure</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-slate-700">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          rows={4}
          value={fields.message}
          onChange={(e) => update('message', e.target.value)}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputBase} resize-none ${errors.message ? 'border-red-400' : 'border-slate-200'}`}
          placeholder="Describe your plumbing issue…"
        />
        {errors.message && <p id="message-error" className="mt-1 text-xs text-red-600">{errors.message}</p>}
      </div>

      <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full text-base disabled:cursor-not-allowed disabled:opacity-70">
        {status === 'submitting' ? (
          <>
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
            Sending…
          </>
        ) : (
          'Request My Free Quote'
        )}
      </button>

      <p className="text-center text-xs text-slate-400">
        We respond within 15 minutes during business hours. Your information stays private.
      </p>
    </form>
  )
}
