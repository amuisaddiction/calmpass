import { ArrowUp, Flower2, ShieldAlert } from 'lucide-react'

export function AppFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="footer-top">
        <div className="footer-brand-col">
          <a className="footer-brand" href="#top" aria-label="Calmpass footer — return to top">
            <span className="footer-mark" aria-hidden="true">
              <Flower2 size={18} strokeWidth={2} />
            </span>
            <span>calmpass<span className="brand-period">.</span></span>
          </a>
          <p className="footer-tagline">Know the room before you walk in.</p>
          <p className="footer-subtext">
            Sensory-aware visit-planning to help people navigate unfamiliar public spaces with calm and autonomy.
          </p>
        </div>

        <nav className="footer-nav" aria-label="Footer quick links">
          <div className="footer-link-group">
            <h4>Application</h4>
            <a href="#how-it-works">How it works</a>
            <a href="#sample-venue">Sample venue preview</a>
            <a href="#sensory-dimensions">Sensory dimensions</a>
          </div>
          <div className="footer-link-group">
            <h4>Ethical Standards</h4>
            <a href="#disclosure">Data disclosure</a>
            <a href="#trust-disclosure">Privacy policy (100% local)</a>
            <a href="#trust-disclosure">Accessibility approach</a>
          </div>
        </nav>

        <div className="footer-back-to-top">
          <button
            type="button"
            className="back-to-top-btn"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <ArrowUp size={16} aria-hidden="true" />
            <span>Top</span>
          </button>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-disclosure-inline">
          <ShieldAlert size={15} aria-hidden="true" className="footer-shield" />
          <span>
            <strong>Illustrative Demonstration Data:</strong> Conditions depicted are fictional benchmarks for planning practice,
            not live telemetry or comfort guarantees.
          </span>
        </div>
        <p className="footer-copy">
          Calmpass &middot; Crafted for HyperBloom UI/UX & Web Design Hackathon.
        </p>
      </div>
    </footer>
  )
}
