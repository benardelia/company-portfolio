import { testimonials } from '../content'
import SectionHeading from './SectionHeading'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeading eyebrow="Client feedback" title="What partners say about working with us" />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col justify-between rounded-2xl border border-ink/10 p-6"
          >
            <blockquote className="text-ink/80">"{t.quote}"</blockquote>
            <figcaption className="mt-6 flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="text-sm font-medium">{t.name}</p>
                <p className="text-xs text-ink/60">{t.role}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
