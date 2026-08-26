import { hero } from '../content'

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-20 md:px-10 md:pt-24 md:pb-28">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-5 text-sm font-medium uppercase tracking-widest text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="font-serif text-4xl leading-[1.08] font-medium tracking-tight md:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-6 max-w-lg text-lg text-ink/70">{hero.subtitle}</p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={hero.primaryCta.href}
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-opacity hover:opacity-80"
            >
              {hero.primaryCta.label}
            </a>
            <a
              href={hero.secondaryCta.href}
              className="text-sm font-medium text-ink underline decoration-ink/30 underline-offset-4 transition-colors hover:decoration-ink"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-4/3 overflow-hidden rounded-2xl bg-ink/5">
            <img
              src={hero.image}
              alt="Bravix team at work"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
