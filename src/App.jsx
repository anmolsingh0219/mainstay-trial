import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Reveal from './components/Reveal.jsx'
import Logo from './components/Logo.jsx'
import BioModal from './components/BioModal.jsx'

const APPROACH = [
  {
    n: '01',
    name: 'Investment Focus',
    desc: 'We target services businesses with $500K–$5M of EBITDA, where our hands-on approach creates the most meaningful and lasting impact. However, we prioritize the right partnership over strict numbers, and happily consider opportunities outside our typical range.',
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
  { value: '45yr', label: 'Multi-generational family-owned business' },
  { value: '50+', label: 'Locations across 18 metros' },
  { value: '18', label: 'Acquisitions' },
  { value: '5x', label: 'EBITDA and headcount growth' },
]

const TEAM = [
  {
    name: 'Jason Vahn',
    role: 'Managing Partner',
    img: '/assets/team/jason.jpg',
    bio: [
      'Jason is a Managing Partner and Co-Founder of Mainstay Partners. In partnership with Max, Jason co-founded Fidelity Memorial Group, a multi-state funeral services platform with 50+ locations across 18 acquisitions. Mainstay Partners exited their investment in 2025.',
      'Prior to Mainstay, Jason worked as an investment analyst at Canyon Partners, where he focused on debt and equity investments in the healthcare sector. Jason is a member of the Penn Libraries Young Alumni Board, the Children’s Health Council at Cornell Weill, and the Reverse Rett Junior Board.',
      'Jason earned an M.B.A. from the Wharton School and a B.A. in Philosophy, Politics, and Economics from the University of Pennsylvania. Jason was raised in Los Angeles and now lives in New York with his wife and son.',
    ],
  },
  {
    name: 'Max Francois-Poncet',
    role: 'Managing Partner',
    img: '/assets/team/max.jpg',
    bio: [
      'Max is a Managing Partner and Co-Founder of Mainstay Partners. In partnership with Jason, Max co-founded Fidelity Memorial Group, a multi-state funeral services platform with 50+ locations across 18 acquisitions. Mainstay Partners exited their investment in 2025.',
      'Prior to Mainstay, Max completed a pre-MBA internship at Permira, a $35B+ global private equity firm, where he focused on consumer investments. Previously, he led business development at Grability, a grocery software company, and was an associate at Burch Creative Capital, a consumer and technology focused family office.',
      'Max earned an M.B.A. from the Wharton School and a B.A. in Philosophy, Politics, and Economics from the University of Pennsylvania. Max was raised in Paris and now lives in New York with his wife and son.',
    ],
  },
  {
    name: 'Aaron Brandeis',
    role: 'Operating Partner',
    img: '/assets/team/aaron.jpg',
    bio: [
      'Aaron Brandeis is an Operating Partner at Mainstay Partners, where he focuses on new platform investments and operations. He joined Mainstay in 2026 following his M.B.A. from London Business School.',
      'Prior to Mainstay, Aaron was an investor at Oak Hill Capital, where he evaluated and executed majority buyouts and buy-and-build investments across B2B services and technology, including Mercer Advisors and Kestra Financial.',
      'Aaron earned a B.A. in Economics from the University of Pennsylvania. He was raised in New York City where he lives full-time, close to his parents, twin brother, and older sister.',
    ],
  },
]

export default function App() {
  const [activeBio, setActiveBio] = useState(null)

  return (
    <div className="bg-cream">
      <Header />
      <Hero />

      {/* Approach */}
      <section id="approach" className="bg-mist py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Our Approach</p>
            <h2 className="max-w-4xl font-serif text-5xl font-medium leading-[1.05] text-navy sm:text-6xl">
              We help founders scale their businesses
            </h2>
            <span className="mt-8 block h-px w-14 bg-accent" />
          </Reveal>

          {/* Three pillars */}
          <div className="mt-16 grid gap-10 md:grid-cols-3 lg:gap-12">
            {APPROACH.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.1}>
                <p className="mb-4 font-serif text-lg text-accent">{item.n}</p>
                <h3 className="mb-4 whitespace-nowrap font-serif text-[1.75rem] font-medium text-navy md:whitespace-normal lg:whitespace-nowrap">
                  {item.name}
                </h3>
                <p className="text-[17px] leading-relaxed text-ink/75">{item.desc}</p>
              </Reveal>
            ))}
          </div>

          {/* Divider */}
          <div className="my-16 h-px w-full bg-navy/10 lg:my-20" />

          {/* Track record */}
          <Reveal className="mb-6 flex flex-wrap items-center gap-4">
            <h3 className="font-serif text-4xl font-medium text-navy">Fidelity Memorial Group</h3>
            <span className="rounded-sm border border-accent/50 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest2 text-accent">
              Exited 2025
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mb-14 max-w-3xl text-[17px] leading-relaxed text-ink/75">
              Max and Jason co-founded FMG in partnership with a multi-generational, family-owned
              business deeply rooted in the Southeast. Today, the founding family continues to run the
              business alongside the FMG team.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 items-stretch gap-y-10 md:grid-cols-4 md:gap-y-0">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08} className="h-full">
                <div className="h-full border-l border-navy/15 pl-5">
                  <p className="font-sans text-5xl font-semibold leading-none tracking-tight text-accent">
                    {s.value}
                  </p>
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
                  <button
                    type="button"
                    onClick={() => setActiveBio(person)}
                    className="block w-full cursor-pointer text-left"
                    aria-label={`View ${person.name}'s bio`}
                  >
                    <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-sm bg-navy-light">
                      <img
                        src={person.img}
                        alt={person.name}
                        loading="lazy"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Hover veil hint */}
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-navy-deep/70 via-navy-deep/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                        <span className="m-5 text-[11px] font-semibold uppercase tracking-widest2 text-white">
                          View bio →
                        </span>
                      </div>
                    </div>
                    <h3 className="font-serif text-2xl font-medium text-navy">{person.name}</h3>
                    <p className="mb-2 mt-1 text-[11px] font-semibold uppercase tracking-widest2 text-accent">
                      {person.role}
                    </p>
                    <span className="inline-flex items-center gap-1.5 text-[12px] font-medium text-ink/60 transition-colors group-hover:text-accent">
                      View bio <span aria-hidden="true">→</span>
                    </span>
                  </button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-cream py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <p className="eyebrow mb-6">Get in Touch</p>
            <h2 className="font-serif text-5xl font-medium leading-[1.05] text-navy sm:text-6xl">
              Contact
            </h2>
            <span className="mt-8 block h-px w-14 bg-accent" />
          </Reveal>

          <div className="mt-16 grid gap-12 md:grid-cols-2 lg:mt-20 lg:gap-20">
            <Reveal>
              <p className="max-w-xl font-serif text-2xl leading-relaxed text-navy/90 sm:text-[1.7rem]">
                If you are a founder, family-owned business, or broker looking to explore a long-term
                partnership or transition, we'd love to connect.
              </p>
            </Reveal>

            <Reveal delay={0.1} className="space-y-10">
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest2 text-ink/40">
                  Email
                </p>
                <a
                  href="mailto:info@mainstaypartners.com"
                  className="font-serif text-xl text-navy transition-colors hover:text-accent"
                >
                  info@mainstaypartners.com
                </a>
              </div>
              <div>
                <p className="mb-2 text-[11px] font-semibold uppercase tracking-widest2 text-ink/40">
                  LinkedIn
                </p>
                <a
                  href="https://www.linkedin.com/company/mainstay-partners"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2.5 font-serif text-xl text-navy transition-colors hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  Mainstay Partners
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-10">
          <Logo light />
          <p className="text-[12px] text-white/40">© 2026 · All rights reserved</p>
        </div>
      </footer>

      <BioModal person={activeBio} onClose={() => setActiveBio(null)} />
    </div>
  )
}
