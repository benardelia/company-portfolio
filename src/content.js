// ────────────────────────────────────────────────────────────────
// Single source of truth for site content.
// Swap names, text and images here — components just render this.
//
// Images currently point to picsum.photos placeholders (seeded, so
// they stay stable across reloads). To use real photos: drop the
// file in /public/images/ and change the URL below to e.g.
// "/images/hero.jpg".
// ────────────────────────────────────────────────────────────────

const placeholder = (seed, w, h) => `https://picsum.photos/seed/${seed}/${w}/${h}`

export const company = {
  name: 'Bravix',
  shortName: 'Bravix',
  tagline: 'Software, crafted with intent.',
  email: 'hello@bravix.co',
  phone: '+255 700 000 000',
  location: 'Dar es Salaam, Tanzania',
}

export const nav = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  eyebrow: 'Software Development Studio',
  title: 'We build software that moves your business forward.',
  subtitle:
    'Bravix is a small, senior team of engineers and designers who partner with founders and companies to design, build and ship reliable digital products — from web platforms to mobile apps and cloud infrastructure.',
  primaryCta: { label: 'Start a project', href: '#contact' },
  secondaryCta: { label: 'See our work', href: '#work' },
  image: placeholder('bravix-hero', 1200, 900),
}

export const stats = [
  { value: '40+', label: 'Products shipped' },
  { value: '12', label: 'Countries served' },
  { value: '8 yrs', label: 'Combined experience' },
  { value: '98%', label: 'Client retention' },
]

export const services = [
  {
    title: 'Web Platforms',
    description:
      'Fast, accessible web applications built on modern frameworks — from marketing sites to complex internal tools.',
    image: placeholder('bravix-web', 800, 600),
  },
  {
    title: 'Mobile Apps',
    description:
      'Native-feeling iOS and Android apps, built cross-platform to ship faster without cutting quality.',
    image: placeholder('bravix-mobile', 800, 600),
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Scalable infrastructure, CI/CD pipelines and observability so your product stays fast and reliable as you grow.',
    image: placeholder('bravix-cloud', 800, 600),
  },
  {
    title: 'Product Design',
    description:
      'Research-driven UI/UX design that turns complex workflows into interfaces people enjoy using.',
    image: placeholder('bravix-design', 800, 600),
  },
]

export const projects = [
  {
    title: 'Nexora Finance',
    category: 'Web App · Fintech',
    description: 'A dashboard for SMEs to manage invoicing, payroll and cash flow in one place.',
    image: placeholder('bravix-project-1', 900, 700),
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Harbor Logistics',
    category: 'Mobile App · Logistics',
    description: 'Real-time fleet tracking and delivery management for a regional logistics company.',
    image: placeholder('bravix-project-2', 900, 700),
    tags: ['React Native', 'Go', 'Maps API'],
    link: '#',
  },
  {
    title: 'Clinix Health',
    category: 'Web Platform · Healthcare',
    description: 'Patient scheduling and records platform used by clinics across three countries.',
    image: placeholder('bravix-project-3', 900, 700),
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
    link: '#',
  },
  {
    title: 'Marketplace OS',
    category: 'E-commerce · Cloud',
    description: 'Multi-vendor marketplace infrastructure handling thousands of daily transactions.',
    image: placeholder('bravix-project-4', 900, 700),
    tags: ['Django', 'React', 'Stripe'],
    link: '#',
  },
]

export const testimonials = [
  {
    quote:
      'Bravix rebuilt our platform from the ground up and it just works. Communication was clear from day one and they shipped ahead of schedule.',
    name: 'Amara Kessy',
    role: 'CEO, Nexora Finance',
    avatar: placeholder('bravix-avatar-1', 200, 200),
  },
  {
    quote:
      'The team feels like an extension of ours. They understand the business, not just the code.',
    name: 'David Mrema',
    role: 'COO, Harbor Logistics',
    avatar: placeholder('bravix-avatar-2', 200, 200),
  },
  {
    quote:
      'Reliable, fast, and genuinely good design instincts. Exactly what we needed for a healthcare product.',
    name: 'Sofia Peters',
    role: 'Founder, Clinix Health',
    avatar: placeholder('bravix-avatar-3', 200, 200),
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
]
