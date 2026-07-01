import PageHeader from '../components/PageHeader'
import { usePageMeta } from '../hooks/usePageMeta'
import { business, links } from '../data/business'

interface Section {
  heading: string
  body: string[]
}

function LegalLayout({ title, updated, sections }: { title: string; updated: string; sections: Section[] }) {
  return (
    <>
      <PageHeader title={title} crumbs={[{ label: title }]} />
      <section className="section bg-white">
        <div className="container-x max-w-3xl">
          <p className="text-sm text-slate-400">Last updated: {updated}</p>
          <div className="mt-8 space-y-8">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-xl font-bold text-brand-900">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mt-3 leading-relaxed text-slate-600">{p}</p>
                ))}
              </div>
            ))}
            <div className="rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
              <p className="text-sm text-slate-600">
                Questions? Contact us at{' '}
                <a href={links.mailto} className="font-semibold text-brand-700 underline">{business.email}</a> or{' '}
                <a href={links.tel} className="font-semibold text-brand-700 underline">{business.phoneDisplay}</a>.
              </p>
            </div>
          </div>
          <p className="mt-8 rounded-xl bg-accent-50 p-4 text-xs text-accent-800 ring-1 ring-accent-100">
            This is a placeholder document provided for demonstration. Please replace it with a
            policy reviewed by qualified legal counsel before going live.
          </p>
        </div>
      </section>
    </>
  )
}

export function PrivacyPolicy() {
  usePageMeta({ title: 'Privacy Policy | Plumbing NYC', description: 'How Plumbing NYC collects, uses and protects your personal information.' })
  return (
    <LegalLayout
      title="Privacy Policy"
      updated="July 1, 2026"
      sections={[
        { heading: '1. Information We Collect', body: ['We collect information you provide directly — such as your name, phone number, email address and service details — when you contact us or request a quote. We also collect limited analytics data (such as pages visited) to improve our website.'] },
        { heading: '2. How We Use Your Information', body: ['We use your information to respond to inquiries, schedule and provide plumbing services, send service updates, and improve our website and offerings. We do not sell your personal information.'] },
        { heading: '3. Cookies & Analytics', body: ['Our site uses cookies to remember your preferences and understand site usage. You can control cookies through the consent banner and your browser settings. Declining cookies may limit some functionality.'] },
        { heading: '4. Data Sharing', body: ['We only share information with trusted service providers who help us operate our business (for example, scheduling or communication tools), and only as necessary. We may disclose information where required by law.'] },
        { heading: '5. Data Security', body: ['We take reasonable measures to protect your information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.'] },
        { heading: '6. Your Rights', body: ['You may request access to, correction of, or deletion of your personal information at any time by contacting us using the details below.'] },
      ]}
    />
  )
}

export function Terms() {
  usePageMeta({ title: 'Terms of Service | Plumbing NYC', description: 'The terms governing your use of the Plumbing NYC website and services.' })
  return (
    <LegalLayout
      title="Terms of Service"
      updated="July 1, 2026"
      sections={[
        { heading: '1. Acceptance of Terms', body: ['By accessing this website or using our services, you agree to these Terms of Service. If you do not agree, please do not use the site or our services.'] },
        { heading: '2. Services', body: ['Plumbing NYC provides residential and commercial plumbing services in the New York City area. Service availability, response times and pricing may vary based on location, timing and job complexity. Estimates are provided free of charge and confirmed before work begins.'] },
        { heading: '3. Quotes & Payment', body: ['Quotes are based on the information provided and an on-site assessment. Final pricing is confirmed before work starts. Payment terms will be communicated at the time of service.'] },
        { heading: '4. Warranties', body: ['We stand behind our workmanship. Specific warranty terms depend on the service and parts installed and will be provided in writing where applicable.'] },
        { heading: '5. Limitation of Liability', body: ['To the fullest extent permitted by law, Plumbing NYC is not liable for indirect or consequential damages arising from the use of our website. Our liability for services is limited to the amount paid for the specific service.'] },
        { heading: '6. Changes to These Terms', body: ['We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.'] },
      ]}
    />
  )
}
