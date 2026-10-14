import { Flower2 } from 'lucide-react'

export function AppHeader() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Calmpass home">
        <span className="brand-mark"><Flower2 size={21} strokeWidth={1.8} aria-hidden="true" /></span>
        <span>calmpass<span className="brand-period">.</span></span>
      </a>
      <nav aria-label="Main navigation" className="header-nav">
        <a href="#how-it-works">How it works</a>
        <a className="nav-cta" href="#sample-venue">View sample <ArrowIcon /></a>
      </nav>
    </header>
  )
}

function ArrowIcon() {
  return <span aria-hidden="true">↗</span>
}
