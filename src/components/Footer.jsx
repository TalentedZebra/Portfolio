import { profile } from '../data/content.js'

export default function Footer() {
  return (
    <footer className="hairline-top py-8">
      <div className="container-page text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink-muted">
        <p>&copy; {new Date().getFullYear()} {profile.name}</p>
      </div>
    </footer>
  )
}
