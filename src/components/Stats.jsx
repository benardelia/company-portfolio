import { stats } from '../content'

export default function Stats() {
  return (
    <section className="border-y border-ink/10">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4 md:px-10">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center md:text-left">
            <p className="font-serif text-3xl font-medium md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
