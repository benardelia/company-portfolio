import { services } from '../content'
import SectionHeading from './SectionHeading'

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28">
      <SectionHeading
        eyebrow="What we do"
        title="Full-stack capability, senior-only team"
        subtitle="We take products from idea to production and keep them running — no handoffs, no juniors learning on your dime."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <div
            key={service.title}
            className="group overflow-hidden rounded-2xl border border-ink/10 transition-shadow hover:shadow-lg"
          >
            <div className="aspect-16/10 overflow-hidden bg-ink/5">
              <img
                src={service.image}
                alt={service.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="font-serif text-xl font-medium">{service.title}</h3>
              <p className="mt-2 text-sm text-ink/70">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
