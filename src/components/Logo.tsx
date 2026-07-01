import { Link } from 'react-router-dom'
import { business } from '../data/business'
import logoUrl from '../assets/logo.png'

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

/** Brand logo — uses the official Plumbing NYC logo image. */
export default function Logo({ variant = 'dark', className = '' }: LogoProps) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center ${className}`}
      aria-label={`${business.name} — home`}
    >
      <img
        src={logoUrl}
        alt={`${business.name} logo`}
        width={402}
        height={100}
        // On the dark footer, invert the black/blue artwork to white so it stays visible
        className={`h-9 w-auto sm:h-10 ${variant === 'light' ? 'brightness-0 invert' : ''}`}
      />
    </Link>
  )
}
