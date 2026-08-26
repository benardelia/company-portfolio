import { company, nav, socials } from '../content'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto max-w-6xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-serif text-xl font-semibold">{company.name}</p>
            <p className="mt-2 max-w-xs text-sm text-ink/60">{company.tagline}</p>
            <p className="mt-4 text-sm text-ink/60">{company.location}</p>
          </div>

          <div className="flex gap-16">
            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-ink/40">
                Navigate
              </p>
              <ul className="mt-3 flex flex-col gap-2">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="text-sm text-ink/70 hover:text-ink">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-widest text-ink/40">Connect</p>
              <ul className="mt-3 flex flex-col gap-2">
                {socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-ink/70 hover:text-ink"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-ink/10 pt-6 text-xs text-ink/50 md:flex-row md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>{company.email}</p>
        </div>
      </div>
    </footer>
  )
}
