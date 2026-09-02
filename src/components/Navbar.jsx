import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content.js'
import { useActiveSection } from '../hooks/useActiveSection.js'

const SECTION_IDS = navLinks.map((link) => link.id)
const NAV_HEIGHT = 64

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  useEffect(() => {
    const heroEl = document.getElementById('hero')

    const onScroll = () => {
      // Stay transparent for the whole Hero section so the bottom-anchored
      // name/tagline can scroll fully past the top edge before the nav
      // solidifies — otherwise the opaque/blurred bar clips it mid-scroll.
      const threshold = heroEl ? heroEl.offsetHeight - NAV_HEIGHT : 12
      setScrolled(window.scrollY > threshold)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const handleNavClick = (event, id) => {
    event.preventDefault()
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-canvas/90 backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <nav aria-label="Primary" className="container-page flex h-[64px] items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, 'hero')}
          className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-ink"
        >
          {profile.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={`font-mono text-[11px] uppercase tracking-[0.2em] transition-colors duration-200 ${
                  activeId === link.id ? 'text-signal-300' : 'text-ink-muted hover:text-ink'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center border border-hairline text-ink md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 top-0 h-px w-4 bg-current transition-transform duration-200 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-px w-4 -translate-y-1/2 bg-current transition-opacity duration-200 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-px w-4 bg-current transition-transform duration-200 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </nav>

      {menuOpen && (
        <ul className="hairline-top bg-canvas/95 backdrop-blur-sm md:hidden">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                aria-current={activeId === link.id ? 'true' : undefined}
                className={`block px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] ${
                  activeId === link.id ? 'text-signal-300' : 'text-ink-muted'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
