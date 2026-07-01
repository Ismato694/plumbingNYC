# Plumbing NYC — Website

A premium, production-ready marketing website for **Plumbing NYC**, a 24/7 emergency
plumbing company serving New York City. Built with **React + TypeScript + Tailwind CSS + Vite**.

## ✨ Features

- **Fully responsive**, mobile-first design with a polished desktop experience
- **Sticky navigation** + emergency top bar, animated mobile menu
- **Hero** with clear value proposition & primary CTAs (call / quote)
- **Services** overview + detailed breakdown (10 services)
- **Why Choose Us**, stats band, "Our Promise" checklist
- **Testimonials** carousel (autoplay, swipe, keyboard) using real Google review content
- **FAQ** accordion with `FAQPage` structured data
- **Gallery** with category filters and an accessible lightbox
- **Contact form** with client-side validation, loading & error states
- **Embedded Google Map**, business hours, location info
- **Floating WhatsApp + click-to-call** buttons, back-to-top
- **Cookie consent** banner (persisted), **analytics placeholder**
- **SEO**: metadata, Open Graph/Twitter tags, `LocalBusiness`/`Plumber` + `FAQPage` JSON-LD, `sitemap.xml`, `robots.txt`
- **Accessibility**: semantic HTML, ARIA, skip link, focus-visible rings, reduced-motion support
- **Performance**: route-based code splitting, lazy-loaded map/images, minimal inline SVG icons, vendor chunking
- Legal pages (Privacy / Terms placeholders), 404 page, error boundary

## 🚀 Getting started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build locally
```

## 🧩 Project structure

```
src/
├─ components/            # Reusable UI (Navbar, Footer, Icon, forms, etc.)
│  └─ sections/           # Page sections (Hero, Services, Testimonials, …)
├─ pages/                 # Route pages (Home, Services, About, …)
├─ data/                  # Business info + content collections (edit here)
├─ hooks/                 # usePageMeta (per-page SEO)
├─ App.tsx                # Routes + layout
└─ main.tsx               # Entry point
```

## ✏️ Editing content

All business details and content live in **`src/data/`**:

- `business.ts` — name, phone, email, address, hours, social links, map embed
- `content.ts` — services, features, testimonials, FAQs, team, gallery, blog

Update those files and the whole site stays consistent.

## 🔌 Things to wire up before launch

1. **Contact form** — replace the simulated submit in
   `src/components/ContactForm.tsx` with a real endpoint (Formspree, a serverless
   function, etc.). See `.env.example`.
2. **Analytics** — uncomment the GA snippet in `index.html` and set your Measurement ID.
3. **Domain / URLs** — update the canonical + Open Graph URLs in `index.html`,
   `sitemap.xml`, and `robots.txt`.
4. **OG image** — add `public/og-image.jpg` (1200×630) for social sharing.
5. **Legal pages** — replace the placeholder Privacy/Terms text with counsel-reviewed copy.
6. **Real photos** — the gallery uses branded gradient placeholders; swap in real
   project photos when available.

## 📦 Deployment

The build outputs a static site to `/dist` — deploy to any static host.
SPA routing rewrites are included for **Netlify** (`public/_redirects`) and
**Vercel** (`vercel.json`).

---

© 2026 Plumbing NYC. Licensed · Bonded · Insured.
