import { company } from '../content'

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pb-20 md:px-10 md:pb-28">
      <div className="rounded-3xl bg-ink px-8 py-16 text-center text-paper md:px-16 md:py-20">
        <h2 className="font-serif text-3xl font-medium tracking-tight md:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-paper/70">
          Tell us what you're building and we'll get back to you within one business day.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${company.email}`}
            className="rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink transition-opacity hover:opacity-80"
          >
            {company.email}
          </a>
          <a
            href={`tel:${company.phone.replace(/\s+/g, '')}`}
            className="text-sm font-medium text-paper underline decoration-paper/30 underline-offset-4 transition-colors hover:decoration-paper"
          >
            {company.phone}
          </a>
        </div>
      </div>
    </section>
  )
}
