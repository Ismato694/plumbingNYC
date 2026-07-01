import type { ReactNode } from 'react'
import Reveal from './Reveal'

interface Props {
  eyebrow?: string
  title: ReactNode
  subtitle?: ReactNode
  align?: 'left' | 'center'
  light?: boolean
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }: Props) {
  return (
    <Reveal
      className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center' : 'text-left'}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-brand-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-slate-200' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}
