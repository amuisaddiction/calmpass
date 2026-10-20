import { useState } from 'react'
import { ArrowUpRight, Flower2, Menu, X } from 'lucide-react'

export function AppHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      {/* Keyboard Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header className="site-header" role="banner">
        <a className="brand" href="#top" aria-label="Calmpass home — return to top">
          <span className="brand-mark">
            <Flower2 size={21} strokeWidth={2} aria-hidden="true" />
          </span>
          <span className="brand-text">
            calmpass<span className="brand-period">.</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Main navigation" className="header-nav desktop-nav">
          <a href="#how-it-works">How it works</a>
          <a href="#sample-venue">Sample venue</a>
          <a href="#sensory-dimensions">Sensory factors</a>
          <a href="#trust-disclosure">Transparency</a>
          <a className="nav-cta" href="#sample-venue">
            Explore place <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="mobile-menu-btn"
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMobileMenuOpen((prev) => !prev)}
        >
          {mobileMenuOpen ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
        </button>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="mobile-nav-drawer"
          >
            <a
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </a>
            <a
              href="#sample-venue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sample venue (Harbour Learning Centre)
            </a>
            <a
              href="#sensory-dimensions"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sensory factors
            </a>
            <a
              href="#trust-disclosure"
              onClick={() => setMobileMenuOpen(false)}
            >
              Transparency & trust
            </a>
            <a
              className="mobile-nav-cta"
              href="#sample-venue"
              onClick={() => setMobileMenuOpen(false)}
            >
              Explore sample place <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </nav>
        )}
      </header>
    </>
  )
}
