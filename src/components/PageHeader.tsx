import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

interface Crumb {
  label: string
  to?: string
}

interface Props {
  title: ReactNode
  subtitle?: ReactNode
  crumbs?: Crumb[]
}

/** Consistent inner-page hero/banner with breadcrumbs. */
export default function PageHeader({ title, subtitle, crumbs = [] }: Props) {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-14 text-white sm:py-20">
      <div className="absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-950 via-brand-900 to-brand-800" />
        <div className="absolute -right-16 -top-16 h-72 w-72 rounded-full bg-accent-400/10 blur-3xl" />
      </div>
      <div className="container-x relative text-center">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex flex-wrap items-center justify-center gap-1.5 text-sm text-slate-300">
            <li>
              <Link to="/" className="hover:text-accent-300">Home</Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <span aria-hidden="true">/</span>
                {c.to ? (
                  <Link to={c.to} className="hover:text-accent-300">{c.label}</Link>
                ) : (
                  <span className="text-white" aria-current="page">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">{title}</h1>
        {subtitle && <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-200">{subtitle}</p>}
      </div>
    </section>
  )
}
