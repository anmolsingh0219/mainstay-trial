import { motion } from 'framer-motion'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Reveal from './components/Reveal.jsx'
import Logo from './components/Logo.jsx'

const APPROACH = [
  {
    n: '01',
    name: 'Investment Focus',
    desc: 'We target services businesses with $500K–$5M of EBITDA, where our hands-on approach creates the most meaningful and lasting impact.',
  },
  {
    n: '02',
    name: 'Operational Partnership',
    desc: 'We are active partners, not just capital providers. We work hands-on with management to professionalize operations, recruit leadership, and implement the systems that allow businesses to scale.',
  },
  {
    n: '03',
    name: 'Patient Capital',
    desc: 'We raise capital directly into our companies with no fund mandate to sell. Our flexible capital lets us prioritize the long-term investments needed to build a market-leading company.',
  },
]

const STATS = [
  { value: '50+', label: 'Locations across 18 states' },
  { value: '5x', label: 'Revenue growth' },
  { value: '5x', label: 'Staff growth' },
  { value: '6', label: 'Years alongside the founding family' },
]

const TEAM = [
  {
    name: 'Jason Vahn',
    role: 'Managing Partner',
    bio: 'Co-founded Fidelity Memorial Group, a 50+ location platform built through 18 acquisitions, exited 2025. Previously an analyst at Canyon Partners. M.B.A. Wharton, B.A. (PPE), Penn.',
  },
  {
    name: 'Max Francois-Poncet',
    role: 'Managing Partner',
    bio: 'Co-founded Fidelity Memorial Group alongside Jason, exited 2025. Previously at Permira and led business development at Gratify. M.B.A. Wharton, B.A. (PPE), Penn.',
  },
  {
    name: 'Aaron Brandeis',
    role: 'Operating Partner',
    bio: 'Joined in 2026 focusing on new platform investments and operations. Previously an investor at Oak Hill Capital across B2B services and technology. M.B.A. HBS, B.A. Economics, Penn.',
  },
]

export default function App() {
  return (
    <div className="bg-cream">
      <Header />
      <Hero />

      {/* Approach */}
      <section id="approach" className="bg-mist py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Our Approach</p>
            <h2 className="font-serif text-5xl font-medium leading-[1.05] text-navy sm:text-6xl">
              Patient Capital,
              <br />
              Lasting Impact
            </h2>
            <span className="mt-8 block h-px w-14 bg-accent" />
          </Reveal>

          {/* Three pillars */}
          <div className="mt-16 grid gap-12 md:grid-cols-3 lg:gap-16">
            {APPROACH.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.1}>
                <p className="mb-4 font-serif text-base text-accent">{item.n}</p>
                <h3 className="mb-4 font-serif text-3xl font-medium text-navy">{item.name}</h3>
                <p className="text-[15px] leading-relaxed text-ink/70">{item.desc}</p>
              </Reveal>
            ))}
          </div>

          {/* Divider */}
          <div className="my-16 h-px w-full bg-navy/10 lg:my-20" />

          {/* Track record */}
          <Reveal className="mb-12 flex flex-wrap items-center gap-4">
            <h3 className="font-serif text-4xl font-medium text-navy">Fidelity Memorial Group</h3>
            <span className="rounded-sm border border-accent/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-accent">
              Exited 2025
            </span>
          </Reveal>

          <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:gap-y-0">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="border-l border-navy/15 pl-5">
                  <p className="font-serif text-6xl font-medium leading-none text-accent">{s.value}</p>
                  <p className="mt-4 text-[11px] font-semibold uppercase tracking-widest2 text-ink/50">
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-12">About Us</p>
          </Reveal>
          <div className="grid gap-8 md:grid-cols-3">
            {TEAM.map((person, i) => (
              <Reveal key={person.name} delay={i * 0.12}>
                <article className="group">
                  <div className="mb-5 aspect-[4/5] overflow-hidden rounded-sm bg-gradient-to-b from-navy-light to-navy">
                    <div className="h-full w-full bg-gradient-to-t from-navy/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>
                  <h3 className="font-serif text-xl font-medium text-navy">{person.name}</h3>
                  <p className="mb-3 mt-1 text-[11px] font-semibold uppercase tracking-widest2 text-accent">
                    {person.role}
                  </p>
                  <p className="text-[14px] leading-relaxed text-ink/70">{person.bio}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-navy-deep py-24 text-white lg:py-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl"
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="mb-8 text-[11px] font-semibold uppercase tracking-widest2 text-accent">
              Get in Touch
            </p>
            <p className="max-w-2xl font-serif text-3xl font-medium leading-snug sm:text-4xl lg:text-[2.75rem]">
              If you're a founder exploring a long-term partnership, we'd love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16 grid gap-8 border-t border-white/10 pt-8 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest2 text-white/40">
                Connect
              </p>
              <a
                href="mailto:hello@mainstaypartners.com"
                className="inline-flex items-center gap-2 text-[15px] text-white transition-colors hover:text-accent"
              >
                Connect with us <span aria-hidden="true">→</span>
              </a>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest2 text-white/40">
                Offices
              </p>
              <p className="text-[15px] text-white/80">New York, NY</p>
            </div>
            <div>
              <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest2 text-white/40">
                LinkedIn
              </p>
              <a
                href="https://www.linkedin.com/company/mainstay-partners"
                target="_blank"
                rel="noopener"
                className="text-[15px] text-white/80 transition-colors hover:text-accent"
              >
                Mainstay Partners
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-10">
          <Logo light />
          <p className="text-[12px] text-white/40">© 2026 · All rights reserved</p>
        </div>
      </footer>
    </div>
  )
}
