import { Link } from 'react-router-dom'
import { usePageMeta } from '../hooks/usePageMeta'
import { business, links } from '../data/business'

export default function NotFound() {
  usePageMeta({ title: 'Page Not Found | Plumbing NYC', description: 'The page you were looking for could not be found.' })

  return (
    <section className="grid min-h-[70vh] place-items-center bg-slate-50 px-4 py-20">
      <div className="text-center">
        <p className="font-display text-7xl font-extrabold text-brand-700 sm:text-8xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-brand-900 sm:text-3xl">This page sprung a leak</h1>
        <p className="mx-auto mt-3 max-w-md text-slate-600">
          The page you're looking for doesn't exist or has moved. Let's get you back on track.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link to="/" className="btn-secondary">Back to Home</Link>
          <a href={links.tel} className="btn-primary">Call {business.phoneDisplay}</a>
        </div>
      </div>
    </section>
  )
}
