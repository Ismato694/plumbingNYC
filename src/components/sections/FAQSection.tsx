import { useState } from 'react'
import { faqs } from '../../data/content'
import SectionHeading from '../SectionHeading'
import Reveal from '../Reveal'

interface Props {
  limit?: number
}

export default function FAQSection({ limit }: Props) {
  const [open, setOpen] = useState<number | null>(0)
  const list = limit ? faqs.slice(0, limit) : faqs

  return (
    <section className="section bg-slate-50">
      <div className="container-x">
        <SectionHeading
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          subtitle="Answers to the questions NYC homeowners and businesses ask us most."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-3">
          {list.map((faq, i) => {
            const isOpen = open === i
            return (
              <Reveal key={faq.question} delay={(i % 4) * 60}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100">
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    >
                      <span className="font-semibold text-brand-900">{faq.question}</span>
                      <span
                        className={`grid h-7 w-7 flex-none place-items-center rounded-full bg-brand-50 text-brand-700 transition-transform duration-300 ${
                          isOpen ? 'rotate-45' : ''
                        }`}
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                          <path d="M12 5v14M5 12h14" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div
                    id={`faq-panel-${i}`}
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
