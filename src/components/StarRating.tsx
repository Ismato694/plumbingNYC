interface Props {
  rating: number
  className?: string
  size?: string
}

/** Accessible star rating (supports half stars). */
export default function StarRating({ rating, className = '', size = 'h-4 w-4' }: Props) {
  const full = Math.floor(rating)
  const hasHalf = rating - full >= 0.5

  return (
    <div className={`inline-flex items-center gap-0.5 ${className}`} role="img" aria-label={`Rated ${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const fillLevel = i < full ? 'full' : i === full && hasHalf ? 'half' : 'empty'
        return (
          <svg key={i} viewBox="0 0 24 24" className={`${size} text-accent-400`} aria-hidden="true">
            <defs>
              <linearGradient id={`half-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z"
              fill={fillLevel === 'full' ? 'currentColor' : fillLevel === 'half' ? `url(#half-${i})` : 'none'}
              stroke="currentColor"
              strokeWidth={fillLevel === 'empty' ? 1.4 : 0}
            />
          </svg>
        )
      })}
    </div>
  )
}
