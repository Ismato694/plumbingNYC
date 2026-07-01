/** Full-viewport loading state shown while lazy route chunks load. */
export default function PageLoader() {
  return (
    <div className="grid min-h-[60vh] place-items-center" role="status" aria-live="polite">
      <div className="flex flex-col items-center gap-4">
        <svg className="h-10 w-10 animate-spin text-brand-700" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-20" />
          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
        </svg>
        <p className="text-sm font-medium text-slate-500">Loading…</p>
      </div>
    </div>
  )
}
