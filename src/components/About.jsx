import { education, intro } from '../data/content.js'

export default function About() {
  return (
    <section id="about" aria-label="About" className="hairline-top py-24 sm:py-32">
      <div className="container-page">
        <h2 className="display-heading text-3xl sm:text-4xl">About</h2>

        <p className="mt-6 max-w-2xl font-body text-xl leading-relaxed text-ink sm:text-2xl">
          {intro.blurb}
        </p>

        <div className="mt-10 flex items-center gap-4">
          <img
            src={`${import.meta.env.BASE_URL}images/tamu-etid-logo.png`}
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
