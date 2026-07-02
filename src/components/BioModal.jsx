import { useEffect } from 'react'
import { motion } from 'framer-motion'

export default function BioModal({ person, onClose }) {
  // Close on Escape and lock body scroll while open
  useEffect(() => {
    if (!person) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [person, onClose])

  if (!person) return null

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${person.name} biography`}
    >
      {/* Backdrop — everything behind fades and blurs */}
      <motion.div
        className="absolute inset-0 bg-navy-deep/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />

      {/* Panel */}
      <motion.div
        className="relative z-10 max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-md bg-cream p-8 shadow-2xl sm:p-10"
        initial={{ opacity: 0, y: 24, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full text-ink/50 transition-colors hover:bg-navy/5 hover:text-navy"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>

        <div className="mb-6 flex items-center gap-5">
          <img
            src={person.img}
            alt={person.name}
            className="h-20 w-20 shrink-0 rounded-sm object-cover object-center"
          />
          <div>
            <h3 className="font-serif text-3xl font-medium leading-tight text-navy">{person.name}</h3>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest2 text-accent">
              {person.role}
            </p>
          </div>
        </div>

        <div className="space-y-4 text-[15px] leading-relaxed text-ink/80">
          {person.bio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </motion.div>
    </div>
  )
}
