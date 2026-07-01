import { business } from '../data/business'

const socials = [
  {
    label: 'Facebook',
    href: business.social.facebook,
    path: 'M13 22v-8h2.7l.4-3H13V9c0-.9.3-1.5 1.6-1.5H16V4.9c-.3 0-1.2-.1-2.3-.1-2.3 0-3.9 1.4-3.9 4V11H7.5v3H10v8h3Z',
  },
  {
    label: 'Instagram',
    href: business.social.instagram,
    path: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0 6.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM16.5 6.9a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8ZM12 4.5c2.4 0 2.7 0 3.6.1 2.5.1 3.7 1.3 3.8 3.8 0 .9.1 1.2.1 3.6s0 2.7-.1 3.6c-.1 2.5-1.3 3.7-3.8 3.8-.9 0-1.2.1-3.6.1s-2.7 0-3.6-.1c-2.5-.1-3.7-1.3-3.8-3.8 0-.9-.1-1.2-.1-3.6s0-2.7.1-3.6C4.8 5.9 6 4.7 8.4 4.6c.9 0 1.2-.1 3.6-.1ZM12 3c-2.4 0-2.8 0-3.7.1C5 3.2 3.2 5 3.1 8.3 3 9.2 3 9.6 3 12s0 2.8.1 3.7C3.2 19 5 20.8 8.3 20.9c.9 0 1.3.1 3.7.1s2.8 0 3.7-.1c3.3-.1 5.1-1.9 5.2-5.2 0-.9.1-1.3.1-3.7s0-2.8-.1-3.7C20.8 5 19 3.2 15.7 3.1 14.8 3 14.4 3 12 3Z',
  },
  {
    label: 'X (Twitter)',
    href: business.social.twitter,
    path: 'M17.5 3h3l-6.6 7.5L21.7 21h-6l-4.7-6.1L5.6 21H2.6l7-8L2.6 3h6.1l4.2 5.6L17.5 3Zm-1 16h1.6L7.6 4.7H5.9L16.5 19Z',
  },
  {
    label: 'YouTube',
    href: business.social.youtube,
    path: 'M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.3 5 12 5 12 5s-6.3 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.7 19 12 19 12 19s6.3 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5 3-5 3Z',
  },
]

interface Props {
  variant?: 'light' | 'dark'
  className?: string
}

export default function SocialIcons({ variant = 'light', className = '' }: Props) {
  const base =
    variant === 'light'
      ? 'bg-white/10 text-white hover:bg-accent-400 hover:text-brand-900'
      : 'bg-brand-50 text-brand-700 hover:bg-accent-400 hover:text-brand-900'

  return (
    <ul className={`flex items-center gap-2.5 ${className}`}>
      {socials.map((s) => (
        <li key={s.label}>
          <a
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit our ${s.label} page`}
            className={`grid h-9 w-9 place-items-center rounded-full transition-colors duration-200 ${base}`}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
              <path d={s.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  )
}
