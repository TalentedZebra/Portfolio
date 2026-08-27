import { FiLinkedin, FiMail } from 'react-icons/fi'
import { profile, socials, toolbox } from '../data/content.js'

export default function Contact() {
  return (
    <section id="contact" aria-label="Contact" className="hairline-top py-24 sm:py-32">
      <div className="container-page">
        <h2 className="display-heading normal-case max-w-xl text-3xl sm:text-4xl">
          Open to internships and conversations.
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-3">
          <a href={`mailto:${profile.email}`} className="ghost-button">
            <FiMail className="h-3.5 w-3.5" aria-hidden="true" />
            {profile.email}
          </a>
          <a href={socials.linkedin} target="_blank" rel="noreferrer" className="ghost-button">
            <FiLinkedin className="h-3.5 w-3.5" aria-hidden="true" />
            LinkedIn
          </a>
        </div>

        <div className="mt-16">
          <p className="font-mono text-xs text-ink-faint">Tools</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {toolbox.map((tool) => (
              <li key={tool} className="font-mono text-xs uppercase tracking-[0.1em] text-ink-faint">
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
