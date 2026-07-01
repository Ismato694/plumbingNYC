import { useEffect } from 'react'

interface Meta {
  title: string
  description?: string
}

/**
 * Lightweight per-page SEO: updates <title> and meta description on mount.
 * (For full SSR/prerender SEO, pair this with a static prerender step at build.)
 */
export function usePageMeta({ title, description }: Meta) {
  useEffect(() => {
    const previous = document.title
    document.title = title

    let metaEl: HTMLMetaElement | null = null
    if (description) {
      metaEl = document.querySelector('meta[name="description"]')
      if (metaEl) metaEl.setAttribute('content', description)
    }

    return () => {
      document.title = previous
    }
  }, [title, description])
}
