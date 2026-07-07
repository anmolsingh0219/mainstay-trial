import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden text-center"
    >
      {/* Full-bleed mountain photo with a slow, subtle zoom (Ken Burns) */}
      <motion.div
        aria-hidden="true"
        initial={{ scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 14, ease: 'easeOut' }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/hero-mountains.jpg)' }}
      />
      {/* Soft overlays — keep the photo visible while text stays legible */}
      <div aria-hidden="true" className="absolute inset-0 bg-navy-deep/45" />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-navy-deep/25 to-navy-deep/60"
      />

      <div className="relative mx-auto w-full max-w-3xl px-6">
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-6xl font-medium uppercase leading-[0.92] tracking-[0.08em] text-white sm:text-7xl lg:text-8xl"
        >
          Mainstay
          <br />
          Partners
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mt-8 font-serif text-2xl text-white/90 sm:text-3xl"
        >
          Enduring Businesses, Built Through Partnership
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="mx-auto mt-10 max-w-3xl font-serif text-2xl leading-relaxed text-white/85 sm:text-[1.7rem]"
        >
          Mainstay Partners was founded in 2019 to serve as trusted stewards for small business
          owners entering their next chapter. In the years since, we have partnered with dozens of
          owners, providing patient capital, strategic guidance, and hands-on support to preserve
          their legacies and ensure long-term growth.
        </motion.p>
      </div>

      {/* Subtle centered scroll cue */}
      <motion.a
        href="#approach"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[11px] font-medium uppercase tracking-widest2 text-white/60 transition-colors hover:text-white"
      >
        Scroll
      </motion.a>

      {/* Photo caption */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.2 }}
        className="absolute bottom-6 left-6 max-w-[15rem] text-left font-serif text-sm italic leading-snug text-white/60 sm:bottom-8 sm:left-10 sm:max-w-xs sm:text-base"
      >
        Pictured: the beautiful streets of Savannah, Georgia, a nod to the city where we built our
        first partnership.
      </motion.p>
    </section>
  )
}
