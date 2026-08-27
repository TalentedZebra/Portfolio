import { education, intro } from '../data/content.js'

export default function About() {
  return (
    <section id="about" aria-label="About" className="hairline-top py-24 sm:py-32">
      <div className="container-page">
        <p className="max-w-2xl font-body text-xl leading-relaxed text-ink sm:text-2xl">
          {intro.blurb}
        </p>

        <div className="mt-10 flex items-center gap-4">
          <img
            src="/images/tamu-etid-logo.png"
            alt="Texas A&M Engineering Technology & Industrial Distribution logo"
            className="h-10 w-10 shrink-0 object-cover"
          />
          <p className="font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
            {education.degree}
            <br />
            {education.school} · {education.period}
          </p>
        </div>
      </div>
    </section>
  )
}
