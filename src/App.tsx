import { ArrowDown, ArrowRight, Ear, Eye, MapPinned, ShieldCheck } from 'lucide-react'
import { AppHeader } from './components/layout/AppHeader'
import { AppFooter } from './components/layout/AppFooter'

function MiniFloorPlan() {
  return (
    <svg
      className="floor-preview"
      viewBox="0 0 420 300"
      role="img"
      aria-labelledby="floor-title floor-desc"
    >
      <title id="floor-title">Illustrative venue floor plan</title>
      <desc id="floor-desc">
        A simple sample map showing an entrance, reception, waiting area, quiet room, and service desk.
      </desc>
      <rect x="14" y="14" width="392" height="272" rx="18" fill="#FFFDF8" stroke="#243B80" strokeWidth="2" />
      <path d="M34 150 H386 M145 34 V150 M274 34 V150 M145 150 V266 M274 150 V266" fill="none" stroke="#D5D7D0" strokeWidth="3" strokeLinecap="round" />
      <rect x="34" y="34" width="95" height="98" rx="12" fill="#DCE8D8" />
      <text x="81" y="78" textAnchor="middle" className="map-label">Reception</text>
      <text x="81" y="96" textAnchor="middle" className="map-small">sample room</text>
      <rect x="160" y="34" width="96" height="98" rx="12" fill="#F8E5DE" />
      <text x="208" y="78" textAnchor="middle" className="map-label">Waiting</text>
      <text x="208" y="96" textAnchor="middle" className="map-small">sample room</text>
      <rect x="289" y="34" width="99" height="98" rx="12" fill="#E7EAF5" />
      <text x="338" y="78" textAnchor="middle" className="map-label">Service</text>
      <text x="338" y="96" textAnchor="middle" className="map-small">sample room</text>
      <rect x="34" y="169" width="95" height="96" rx="12" fill="#DCE8D8" />
      <text x="81" y="214" textAnchor="middle" className="map-label">Quiet room</text>
      <text x="81" y="232" textAnchor="middle" className="map-small">refuge</text>
      <rect x="160" y="169" width="228" height="96" rx="12" fill="#F3F0E8" />
      <text x="274" y="213" textAnchor="middle" className="map-label">Main corridor</text>
      <text x="274" y="232" textAnchor="middle" className="map-small">route connection</text>
      <circle cx="52" cy="150" r="7" fill="#FF795B" stroke="#FFFDF8" strokeWidth="3" />
      <text x="68" y="155" className="map-small">Entrance</text>
    </svg>
  )
}

function App() {
  return (
    <div className="app-shell">
      <AppHeader />
      <main>
        <section className="hero section-wrap">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> A little more certainty, before you go</p>
            <h1>Feel more prepared <em>before</em> you arrive.</h1>
            <p className="hero-lede">
              Calmpass helps you explore an unfamiliar place, understand its possible sensory conditions,
              and make a visit plan that feels more manageable.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sample-venue">
                Explore a sample place <ArrowRight size={18} aria-hidden="true" />
              </a>
              <a className="text-link" href="#how-it-works">
                How Calmpass works <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
            <p className="fine-print"><ShieldCheck size={15} aria-hidden="true" /> A planning aid, not a promise of conditions.</p>
          </div>
          <div className="hero-art" aria-label="Preview of an illustrative venue map">
            <div className="art-note note-top"><span className="note-dot sage-dot" /> A place, made more familiar</div>
            <MiniFloorPlan />
            <div className="art-note note-bottom"><span className="note-dot coral-dot" /> Start with what matters to you</div>
            <div className="art-sparkle sparkle-one" aria-hidden="true">✳</div>
            <div className="art-sparkle sparkle-two" aria-hidden="true">✳</div>
          </div>
        </section>

        <section id="how-it-works" className="how-section section-wrap">
          <div className="section-heading">
            <p className="eyebrow">A gentler way to prepare</p>
            <h2>Small steps. More context.</h2>
            <p>Get a clearer picture of a place before deciding how and when to visit.</p>
          </div>
          <div className="benefit-grid">
            <article className="benefit-card">
              <span className="benefit-icon"><Eye size={22} aria-hidden="true" /></span>
              <p className="card-number">01 / EXPLORE</p>
              <h3>See the space</h3>
              <p>Get familiar with a sample floor plan and the rooms along a typical route.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon coral-icon"><Ear size={22} aria-hidden="true" /></span>
              <p className="card-number">02 / PERSONALISE</p>
              <h3>Focus on your needs</h3>
              <p>Choose which sensory conditions matter most to you, without needing an account.</p>
            </article>
            <article className="benefit-card">
              <span className="benefit-icon blue-icon"><MapPinned size={22} aria-hidden="true" /></span>
              <p className="card-number">03 / PLAN</p>
              <h3>Make a simple plan</h3>
              <p>Compare illustrative time slots and keep a practical visit plan to refer to.</p>
            </article>
          </div>
        </section>

        <section id="sample-venue" className="sample-section">
          <div className="sample-inner section-wrap">
            <div>
              <p className="eyebrow">Your first look</p>
              <h2>Meet Harbour Learning Centre.</h2>
              <p>A fictional sample venue used to demonstrate how Calmpass can organise room and time information.</p>
              <p className="sample-disclosure"><strong>Illustrative sample data.</strong> These are not live measurements, venue-specific facts, or predictions of future conditions.</p>
            </div>
            <div className="sample-map-wrap"><MiniFloorPlan /></div>
          </div>
        </section>
      </main>
      <AppFooter />
    </div>
  )
}

export default App
