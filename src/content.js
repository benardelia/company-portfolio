// ────────────────────────────────────────────────────────────────
// Single source of truth for site content.
// Swap names, text and images here — components just render this.
//
// Images currently point to real Unsplash photos chosen to match
// each section's subject (team, code, servers, dashboards, etc.),
// and testimonial avatars use randomuser.me portraits. To use your
// own photos: drop the file in /public/images/ and change the URL
// below to e.g. "/images/hero.jpg".
// ────────────────────────────────────────────────────────────────

const unsplash = (id, w, h) => `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80`

export const company = {
  name: 'Bravix',
  shortName: 'Bravix',
  tagline: 'Software, crafted with intent.',
  email: 'us@support.akiliunde.com',
  phone: '+255 696 683 636',
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
  image: unsplash('1522071820081-009f0129c71c', 1200, 900), // team collaborating around a table
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
    image: unsplash('1461749280684-dccba630e2f6', 800, 600), // laptop showing code editor
  },
  {
    title: 'Mobile Apps',
    description:
      'Native-feeling iOS and Android apps, built cross-platform to ship faster without cutting quality.',
    image: unsplash('1512941937669-90a1b58e7e9c', 800, 600), // hand holding a phone
  },
  {
    title: 'Cloud & DevOps',
    description:
      'Scalable infrastructure, CI/CD pipelines and observability so your product stays fast and reliable as you grow.',
    image: unsplash('1544197150-b99a580bb7a8', 800, 600), // server room / data center
  },
  {
    title: 'Product Design',
    description:
      'Research-driven UI/UX design that turns complex workflows into interfaces people enjoy using.',
    image: unsplash('1559028006-448665bd7c7f', 800, 600), // UI/UX design tools on a desk
  },
]

export const projects = [
  {
    title: 'Nexora Finance',
    category: 'Web App · Fintech',
    description: 'A dashboard for SMEs to manage invoicing, payroll and cash flow in one place.',
    image: unsplash('1551288049-bebda4e38f71', 900, 700), // finance analytics dashboard
    tags: ['React', 'Node.js', 'PostgreSQL'],
    link: '#',
  },
  {
    title: 'Harbor Logistics',
    category: 'Mobile App · Logistics',
    description: 'Real-time fleet tracking and delivery management for a regional logistics company.',
    image: unsplash('1601584115197-04ecc0da31d7', 900, 700), // delivery truck / logistics
    tags: ['React Native', 'Go', 'Maps API'],
    link: '#',
  },
  {
    title: 'Clinix Health',
    category: 'Web Platform · Healthcare',
    description: 'Patient scheduling and records platform used by clinics across three countries.',
    image: unsplash('1576091160399-112ba8d25d1d', 900, 700), // doctor with technology
    tags: ['Next.js', 'PostgreSQL', 'AWS'],
    link: '#',
  },
  {
    title: 'Marketplace OS',
    category: 'E-commerce · Cloud',
    description: 'Multi-vendor marketplace infrastructure handling thousands of daily transactions.',
    image: unsplash('1556742049-0cfed4f6a45d', 900, 700), // warehouse packages / e-commerce
    tags: ['Django', 'React', 'Stripe'],
    link: 'https://dukagro.akiliunde.com/',
  },
]

export const testimonials = [
  {
    quote:
      'Bravix rebuilt our platform from the ground up and it just works. Communication was clear from day one and they shipped ahead of schedule.',
    name: 'Amara Kessy',
    role: 'CEO, Nexora Finance',
    avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    quote:
      'The team feels like an extension of ours. They understand the business, not just the code.',
    name: 'David Mrema',
    role: 'COO, Harbor Logistics',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    quote:
      'Reliable, fast, and genuinely good design instincts. Exactly what we needed for a healthcare product.',
    name: 'Sofia Peters',
    role: 'Founder, Clinix Health',
    avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
  },
]

export const socials = [
  { label: 'GitHub', href: 'https://github.com' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'X', href: 'https://x.com' },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61594500832000' },
  { label: 'Instagram', href: 'https://www.instagram.com/bravetechteam/' },
]
