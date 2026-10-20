import { useState } from 'react'
import { CheckCircle2, Compass, Ear, Lock, Sparkles, Sun, Users, Wind } from 'lucide-react'

export function BenefitsSection() {
  // Interactive sensory sensitivity demo inside Card 02
  const [activeMetric, setActiveMetric] = useState<'noise' | 'crowd' | 'light' | 'smell'>('noise')
  const [demoLevel, setDemoLevel] = useState<number>(2)

  const metricDetails = {
    noise: {
      name: 'Acoustic Sensitivity',
      icon: Ear,
      color: 'coral',
      levels: ['Don’t mind background chatter', 'Slightly sensitive to echoes', 'Quite sensitive to sudden loud sounds', 'Very sensitive; prefer near-silence'],
    },
    crowd: {
      name: 'Crowd Density',
      icon: Users,
      color: 'sage',
      levels: ['Comfortable in bustling rooms', 'Prefer moderate personal space', 'Avoid tight queues & bottlenecks', 'Require spacious, uncrowded rooms'],
    },
    light: {
      name: 'Visual Lighting',
      icon: Sun,
      color: 'yellow',
      levels: ['Fine with bright overhead light', 'Notice fluorescent tube flicker', 'Prefer soft, indirect lighting', 'Require low-glare, dim environments'],
    },
    smell: {
      name: 'Olfactory & Air',
      icon: Wind,
      color: 'blue',
      levels: ['Don’t mind public aromas', 'Notice strong cleaning agents', 'Sensitive to mixed food & chemicals', 'Need clean, fragrance-free ventilation'],
    },
  }

  const currentMetric = metricDetails[activeMetric]
  const CurrentIcon = currentMetric.icon

  return (
    <section id="how-it-works" className="how-section section-wrap" aria-labelledby="how-heading">
      <div className="section-heading">
        <p className="eyebrow">
          <span className="eyebrow-dot" /> A gentler way to prepare
        </p>
        <h2 id="how-heading">Three small steps. Much more context.</h2>
        <p>
          Unfamiliar public buildings can carry unpredictable sensory loads.
          Calmpass translates spatial complexity into three clear, empowering steps.
        </p>
      </div>

      <div className="editorial-flow-grid">
        {/* STEP 1: EXPLORE THE SPACE (Editorial Wide Feature) */}
        <article className="flow-card explore-card">
          <div className="card-meta">
            <span className="flow-num-badge">01</span>
            <span className="flow-step-tag">EXPLORE IN ADVANCE</span>
          </div>

          <div className="card-main-layout">
            <div className="card-copy">
              <h3>See the space before stepping inside</h3>
              <p>
                Unfamiliar public spaces often conceal their layouts behind heavy doors and winding corridors.
                Calmpass gives you complete spatial orientation before arrival: entrance points, connecting corridors,
                service points, and designated quiet refuges.
              </p>

              <div className="spatial-route-strip" aria-label="Typical visiting path">
                <span className="route-node node-start">Arrival</span>
                <span className="route-arrow" aria-hidden="true">&rarr;</span>
                <span className="route-node">Main Corridor</span>
                <span className="route-arrow" aria-hidden="true">&rarr;</span>
                <span className="route-node node-refuge">Quiet Room (Refuge)</span>
                <span className="route-arrow" aria-hidden="true">&rarr;</span>
                <span className="route-node">Service Desk</span>
              </div>
            </div>

            <div className="card-feature-visual">
              <div className="mini-diagram-box">
                <div className="diagram-header">
                  <Compass size={14} aria-hidden="true" />
                  <span>Harbour Learning Centre &middot; Ground Level</span>
                </div>
                <div className="diagram-blueprint">
                  <div className="bp-room bp-entrance">Entrance</div>
                  <div className="bp-room bp-reception">Reception</div>
                  <div className="bp-room bp-corridor">Main Corridor (Walkway)</div>
                  <div className="bp-room bp-refuge">
                    <span className="refuge-dot" /> Quiet Room
                  </div>
                  <div className="bp-room bp-waiting">Waiting Lounge</div>
                </div>
                <p className="diagram-caption">Full sightlines and refuge access identified in advance</p>
              </div>
            </div>
          </div>
        </article>

        {/* STEP 2: PERSONALISE (Interactive Mini-Simulator) */}
        <article className="flow-card personalise-card">
          <div className="card-meta">
            <span className="flow-num-badge">02</span>
            <span className="flow-step-tag">TAILORED PRIORITIES</span>
          </div>

          <h3>Focus on what matters to you</h3>
          <p>
            Everyone processes sound, lighting, and crowds differently. Choose which sensory factors
            impact your comfort most. Everything stays securely on your device—no sign-in or medical questions.
          </p>

          {/* Interactive Sensory Simulator */}
          <div className="interactive-mini-tool" aria-label="Interactive sensory priority preview">
            <div className="tool-metric-selector" role="tablist" aria-label="Select sensory dimension to preview">
              {(['noise', 'crowd', 'light', 'smell'] as const).map((key) => {
                const isSelected = activeMetric === key
                const ItemIcon = metricDetails[key].icon
                return (
                  <button
                    key={key}
                    role="tab"
                    aria-selected={isSelected}
                    className={`tool-pill ${isSelected ? 'active' : ''}`}
                    onClick={() => setActiveMetric(key)}
                  >
                    <ItemIcon size={14} aria-hidden="true" />
                    <span>{key.charAt(0).toUpperCase() + key.slice(1)}</span>
                  </button>
                )
              })}
            </div>

            <div className="tool-active-display">
              <div className="tool-display-header">
                <div className="tool-title-row">
                  <CurrentIcon size={18} className="tool-icon" aria-hidden="true" />
                  <span className="tool-name">{currentMetric.name}</span>
                </div>
                <span className="tool-level-badge">Level {demoLevel} / 3</span>
              </div>

              <div className="tool-slider-wrap">
                <input
                  type="range"
                  min="0"
                  max="3"
                  step="1"
                  value={demoLevel}
                  onChange={(e) => setDemoLevel(Number(e.target.value))}
                  className="interactive-slider"
                  aria-label={`Adjust sensitivity for ${currentMetric.name}`}
                  aria-valuetext={`Level ${demoLevel}: ${currentMetric.levels[demoLevel]}`}
                />
                <div className="slider-ticks" aria-hidden="true">
                  <span>0: Don’t mind</span>
                  <span>1: Mild</span>
                  <span>2: Sensitive</span>
                  <span>3: High</span>
                </div>
              </div>

              <div className="tool-feedback-box">
                <Sparkles size={14} className="tool-sparkle" aria-hidden="true" />
                <p>
                  <strong>Current Priority:</strong> {currentMetric.levels[demoLevel]}
                </p>
              </div>
            </div>

            <p className="privacy-pill-note">
              <Lock size={12} aria-hidden="true" /> 100% Client-side. No tracking.
            </p>
          </div>
        </article>

        {/* STEP 3: PLAN (Printable Pass Preview) */}
        <article className="flow-card plan-card">
          <div className="card-meta">
            <span className="flow-num-badge">03</span>
            <span className="flow-step-tag">ACTIONABLE REASSURANCE</span>
          </div>

          <h3>Form a calm, printable visit plan</h3>
          <p>
            Compare illustrative visiting windows, understand honest trade-offs, and take a simple,
            distraction-free visit pass with you on the day.
          </p>

          {/* Mini Visit Pass Teaser */}
          <div className="mini-pass-preview" aria-label="Sample Visit Pass preview">
            <div className="pass-top">
              <span className="pass-brand">CALMPASS &middot; VISIT PASS</span>
              <span className="pass-status-pill">ILLUSTRATIVE</span>
            </div>
            <div className="pass-body">
              <div className="pass-field">
                <span className="pass-lbl">DESTINATION</span>
                <span className="pass-val">Waiting Lounge & Desk</span>
              </div>
              <div className="pass-field">
                <span className="pass-lbl">RECOMMENDED WINDOW</span>
                <span className="pass-val pass-time">11:00 AM &middot; Comfort 84%</span>
              </div>
              <div className="pass-field pass-refuge-row">
                <span className="pass-lbl">DESIGNATED REFUGE</span>
                <span className="pass-val">Quiet Room (Across Main Hall)</span>
              </div>
            </div>
            <div className="pass-checklist-teaser">
              <div className="check-item">
                <CheckCircle2 size={13} aria-hidden="true" className="check-icon" />
                <span>Noise-cancelling headphones packed</span>
              </div>
              <div className="check-item">
                <CheckCircle2 size={13} aria-hidden="true" className="check-icon" />
                <span>Corridor layout reviewed</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
