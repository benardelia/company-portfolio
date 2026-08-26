export default function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-ink/70">{subtitle}</p>}
    </div>
  )
}
