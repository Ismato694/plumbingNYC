import { Suspense, lazy } from 'react'
import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import CookieBanner from './components/CookieBanner'
import ScrollToTop from './components/ScrollToTop'
import PageLoader from './components/PageLoader'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'

// Lazy-load secondary routes for smaller initial bundle / better Core Web Vitals
const Services = lazy(() => import('./pages/Services'))
const About = lazy(() => import('./pages/About'))
const Gallery = lazy(() => import('./pages/Gallery'))
const FAQs = lazy(() => import('./pages/FAQs'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const PrivacyPolicy = lazy(() => import('./pages/Legal').then((m) => ({ default: m.PrivacyPolicy })))
const Terms = lazy(() => import('./pages/Legal').then((m) => ({ default: m.Terms })))

export default function App() {
  return (
    <ErrorBoundary>
      {/* Skip link for keyboard & screen-reader users */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-brand-700 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to main content
      </a>

      <ScrollToTop />
      <Navbar />

      <main id="main">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      <Footer />
      <FloatingButtons />
      <CookieBanner />
    </ErrorBoundary>
  )
}
