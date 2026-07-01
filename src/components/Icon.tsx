import type { IconName } from '../data/content'

interface IconProps {
  name: IconName
  className?: string
}

/**
 * Lightweight inline SVG icon set (stroke-based, currentColor).
 * Keeps the bundle tiny and avoids an icon-font network request.
 */
const paths: Record<IconName, JSX.Element> = {
  emergency: (
    <>
      <path d="M12 2 3 7v6c0 5 3.8 8.4 9 9 5.2-.6 9-4 9-9V7l-9-5Z" />
      <path d="M12 8v4" />
      <path d="M12 16h.01" />
    </>
  ),
  commercial: (
    <>
      <path d="M3 21h18" />
      <path d="M5 21V7l7-4 7 4v14" />
      <path d="M9 9h.01M9 13h.01M9 17h.01M15 9h.01M15 13h.01M15 17h.01" />
    </>
  ),
  residential: (
    <>
      <path d="m3 10 9-7 9 7" />
      <path d="M5 9v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V9" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  sewer: (
    <>
      <path d="M4 6h4v12a3 3 0 0 0 3 3h9" />
      <path d="M4 6a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2" />
      <path d="M20 15v6M17 18h6" />
    </>
  ),
  drain: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" />
    </>
  ),
  heater: (
    <>
      <rect x="6" y="2" width="12" height="16" rx="4" />
      <path d="M10 6h4M10 10h4" />
      <path d="M9 22c0-2 1.5-2.5 1.5-4M15 22c0-2-1.5-2.5-1.5-4" />
    </>
  ),
  pipe: (
    <>
      <path d="M4 8h6v8H4z" />
      <path d="M14 8h6v8h-6z" />
      <path d="M10 12h4" />
      <path d="M4 8V6a2 2 0 0 1 2-2M20 16v2a2 2 0 0 1-2 2" />
    </>
  ),
  fixture: (
    <>
      <path d="M4 20h16" />
      <path d="M6 20v-4a6 6 0 0 1 12 0v4" />
      <path d="M12 10V4h4" />
      <path d="M16 6h2" />
    </>
  ),
  inspection: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      <path d="M11 8v6M8 11h6" />
    </>
  ),
  sump: (
    <>
      <path d="M12 2s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11Z" />
      <path d="M9 13a3 3 0 0 0 3 3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  shield: (
    <>
      <path d="M12 2 4 6v6c0 5 3.5 8.3 8 9 4.5-.7 8-4 8-9V6l-8-4Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="6" />
      <path d="m8.2 13.5-1.2 7 5-3 5 3-1.2-7" />
      <path d="m10 9 1.5 1.5L15 7" />
    </>
  ),
  thumb: (
    <>
      <path d="M7 11v9H4a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3Z" />
      <path d="M7 11l4-8a2 2 0 0 1 2 2v4h5a2 2 0 0 1 2 2.3l-1.2 7A2 2 0 0 1 18 21H7" />
    </>
  ),
  wallet: (
    <>
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M3 10h18" />
      <path d="M16 14h2" />
    </>
  ),
  wrench: (
    <>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2L3 17.8 6.2 21l6.3-6.3a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.3-.5-.5-2.3 2.4-2.5Z" />
    </>
  ),
  phone: (
    <>
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
    </>
  ),
  star: <path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8-6.2-3.3-6.2 3.3L7 14.2l-5-4.9 6.9-1L12 2Z" />,
}

export default function Icon({ name, className = 'h-6 w-6' }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      {paths[name]}
    </svg>
  )
}
