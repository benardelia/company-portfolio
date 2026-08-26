import { projects } from '../content'
import SectionHeading from './SectionHeading'

export default function Projects() {
  return (
    <section id="work" className="bg-ink/[0.03] py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <SectionHeading
          eyebrow="Selected work"
          title="Products we've helped build"
          subtitle="A few of the platforms our team has designed, built and shipped to production."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className="group block overflow-hidden rounded-2xl bg-paper border border-ink/10 transition-shadow hover:shadow-xl"
            >
              <div className="aspect-4/3 overflow-hidden bg-ink/5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <p className="text-xs font-medium uppercase tracking-widest text-accent">
                  {project.category}
                </p>
                <h3 className="mt-2 font-serif text-xl font-medium">{project.title}</h3>
                <p className="mt-2 text-sm text-ink/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-ink/15 px-3 py-1 text-xs text-ink/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
