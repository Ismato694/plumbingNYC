import { useEffect, useRef, useState } from 'react'

interface Props {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
  /** format with thousands separators (e.g. 10,000) */
  thousands?: boolean
  className?: string
}

/**
 * Animates a number from 0 → target the first time it scrolls into view.
 * Jumps straight to the final value when reduced motion is preferred.
 */
export default function CountUp({ target, prefix = '', suffix = '', duration = 1600, thousands = false, className = '' }: Props) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const finish = () => setValue(target)

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      finish()
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        observer.disconnect()

        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // easeOutCubic for a natural deceleration
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(target * eased))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  const formatted = thousands ? value.toLocaleString('en-US') : String(value)

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  )
}
