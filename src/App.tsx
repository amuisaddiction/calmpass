import { ArrowDown, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react'
import { AppHeader } from './components/layout/AppHeader'
import { AppFooter } from './components/layout/AppFooter'
import { HeroFloorPlan } from './components/landing/HeroFloorPlan'
import { BenefitsSection } from './components/landing/BenefitsSection'
import { VenuePreview } from './components/landing/VenuePreview'
import { SensoryDimensionsSection } from './components/landing/SensoryDimensionsSection'
import { TrustSection } from './components/landing/TrustSection'

function App() {
  return (
    <div className="app-shell" id="top">
      <AppHeader />

      <main id="main-content">
        {/* HERO SECTION */}
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-badge-row">
              <p className="eyebrow">
                <span className="eyebrow-dot" /> A little more certainty, before you go
              </p>
              <span className="editorial-edition-tag">SENSORY JOURNAL &middot; ISSUE 01</span>
            </div>

            <h1 id="hero-title">
              Feel more prepared <em>before</em> you arrive.
            </h1>

            <p className="hero-lede">
              Calmpass translates complex public venue architecture into clear, predictable choices—so you can explore
              unfamiliar spaces, locate quiet refuges, and plan your arrival on your own terms.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#sample-venue">
                Explore a sample place <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#how-it-works">
                How Calmpass works <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>

            {/* Quick Metrics Editorial Strip */}
            <div className="hero-metrics-strip" aria-label="Key system statistics">
              <div className="metric-pill">
                <span className="metric-accent">7</span>
                <span className="metric-label">Rooms Mapped</span>
              </div>
              <div className="metric-separator" aria-hidden="true">&middot;</div>
              <div className="metric-pill">
                <span className="metric-accent lime-accent">1</span>
                <span className="metric-label">Designated Refuge</span>
              </div>
              <div className="metric-separator" aria-hidden="true">&middot;</div>
              <div className="metric-pill">
                <span className="metric-accent">4</span>
                <span className="metric-label">Sensory Dimensions</span>
              </div>
              <div className="metric-separator" aria-hidden="true">&middot;</div>
              <div className="metric-pill">
                <span className="metric-accent">0</span>
                <span className="metric-label">Tracking / No Sign-In</span>
              </div>
            </div>

            <p className="fine-print">
              <ShieldCheck size={16} aria-hidden="true" className="fine-print-icon" />
              <span>A thoughtful planning aid, not a clinical promise of conditions.</span>
            </p>
          </div>

          <div className="hero-art" aria-label="Visual preview of Harbour Learning Centre floor plan">
            <div className="art-note note-top">
              <span className="note-dot sage-dot" /> Quiet Room — designated sensory refuge
            </div>
            <HeroFloorPlan />
            <div className="art-note note-bottom">
              <span className="note-dot coral-dot" /> Start with what matters to you
            </div>
            <div className="art-sparkle sparkle-one" aria-hidden="true">✳</div>
            <div className="art-sparkle sparkle-two" aria-hidden="true">✳</div>
          </div>
        </section>

        {/* HOW IT WORKS / EDITORIAL FLOW */}
        <BenefitsSection />

        {/* SAMPLE VENUE INTRODUCTION & INTERACTIVE PREVIEW */}
        <section id="sample-venue" className="sample-section" aria-labelledby="venue-heading">
          <div className="section-wrap">
            <div className="sample-header-text">
              <div className="sample-eyebrow-group">
                <p className="eyebrow">
                  <span className="eyebrow-dot" /> Demonstration Venue
                </p>
                <span className="venue-status-chip">
                  <Sparkles size={13} aria-hidden="true" /> EXPLORATION MODE
                </span>
              </div>
              <h2 id="venue-heading">Meet Harbour Learning Centre.</h2>
              <p className="sample-intro-copy">
                A modern public learning and civic center with workshops, inquiry counters, reading lounges,
                and an acoustically isolated quiet room. Select any room below to review its layout and typical sensory atmosphere.
              </p>
            </div>

            <VenuePreview />
          </div>
        </section>

        {/* SENSORY DIMENSIONS SECTION */}
        <SensoryDimensionsSection />

        {/* TRUST, ETHICS & DISCLOSURE SECTION */}
        <TrustSection />
      </main>

      <AppFooter />
    </div>
  )
}

export default App
