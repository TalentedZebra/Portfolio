import { motion } from 'framer-motion'
import { FiFileText, FiMail } from 'react-icons/fi'
import { profile } from '../data/content.js'

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-[92vh] items-end overflow-hidden"
    >
      <img
        src="/images/f22-raptor-climb.jpg"
        alt="F-22 Raptor fighter jet climbing steeply with afterburners lit"
        width={2400}
        height={904}
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            'linear-gradient(180deg, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 35%, rgba(0,0,0,0.85) 100%)',
        }}
      />

      <div className="container-page w-full pb-16 pt-32 sm:pb-24">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="eyebrow text-ink-muted"
        >
          {profile.location}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="display-heading mt-3 text-5xl leading-[0.95] sm:text-7xl lg:text-8xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 max-w-md font-body text-lg text-ink-muted sm:text-xl"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="ghost-button">
            <FiFileText className="h-3.5 w-3.5" aria-hidden="true" />
            Resume
          </a>
          <a href={`mailto:${profile.email}`} className="ghost-button">
            <FiMail className="h-3.5 w-3.5" aria-hidden="true" />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  )
}
