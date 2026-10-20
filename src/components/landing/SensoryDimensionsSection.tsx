import { Ear, Info, Sun, Users, Wind } from 'lucide-react'

export function SensoryDimensionsSection() {
  const dimensions = [
    {
      id: 'noise',
      name: 'Acoustic Level',
      subtitle: 'Noise & sound reverberation',
      icon: Ear,
      colorClass: 'dim-coral',
      description:
        'Reflects background speech volume, echo from hard flooring, public address announcements, and machinery hum.',
      lowExample: 'Gentle whispers, soft carpeting, isolated quiet study rooms.',
      highExample: 'Echoey tiled corridors, overlapping group chatter, ringing phones.',
    },
    {
      id: 'crowd',
      name: 'Human Density',
      subtitle: 'Crowds & movement pace',
      icon: Users,
      colorClass: 'dim-sage',
      description:
        'Measures the density of people occupying a room, queue lengths at counters, and unexpected foot traffic movement.',
      lowExample: 'Plenty of personal buffer space, unhurried seating, clear walkways.',
      highExample: 'Congested counters, close physical proximity, bottlenecks.',
    },
    {
      id: 'light',
      name: 'Visual Environment',
      subtitle: 'Lighting type & glare',
      icon: Sun,
      colorClass: 'dim-yellow',
      description:
        'Evaluates window daylight exposure, direct sun reflection, fluorescent tube flicker, and availability of dim resting corners.',
      lowExample: 'Indirect diffused lamps, soft curtain shading, warm tones.',
      highExample: 'Exposed high-output fluorescent strips, direct sun glare on glass.',
    },
    {
      id: 'smell',
      name: 'Olfactory Stimuli',
      subtitle: 'Air quality & scent presence',
      icon: Wind,
      colorClass: 'dim-blue',
      description:
        'Accounts for cleaning chemical aromas, nearby cafeteria food scents, industrial ventilation, or freshly polished surfaces.',
      lowExample: 'Neutral, well-filtered fresh air with no detectable perfumes.',
      highExample: 'Strong surface sanitizers, warm food aroma mixes, stuffy air.',
    },
  ]

  const scaleLevels = [
    { level: 1, label: 'Gentle', desc: 'Minimal stimulus; spacious, calm, and forgiving.' },
    { level: 2, label: 'Mild', desc: 'Typical low-traffic baseline; peaceful environment.' },
    { level: 3, label: 'Moderate', desc: 'Active civic rhythm; standard public activity.' },
    { level: 4, label: 'Elevated', desc: 'Busy atmosphere; frequent simultaneous stimuli.' },
    { level: 5, label: 'Intense', desc: 'Peak traffic or reverberant noise; demanding environment.' },
  ]

  return (
    <section id="sensory-dimensions" className="dimensions-section section-wrap" aria-labelledby="dimensions-heading">
      <div className="section-heading">
        <p className="eyebrow">
          <span className="eyebrow-dot" /> Understanding the Room
        </p>
        <h2 id="dimensions-heading">Four sensory dimensions of public space.</h2>
        <p>
          Everyone processes sensory environments differently. Calmpass translates room complexity into four clear,
          transparent dimensions so you can evaluate places on your own terms.
        </p>
      </div>

      {/* 4 Dimension Cards */}
      <div className="dimensions-grid">
        {dimensions.map((dim) => {
          const Icon = dim.icon
          return (
            <article key={dim.id} className="dimension-card">
              <div className={`dim-icon-wrapper ${dim.colorClass}`}>
                <Icon size={24} aria-hidden="true" />
              </div>
              <h3>{dim.name}</h3>
              <p className="dim-subtitle">{dim.subtitle}</p>
              <p className="dim-desc">{dim.description}</p>

              <div className="dim-examples">
                <div className="example-item">
                  <span className="example-tag low-tag">Low (1–2)</span>
                  <p>{dim.lowExample}</p>
                </div>
                <div className="example-item">
                  <span className="example-tag high-tag">High (4–5)</span>
                  <p>{dim.highExample}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Explanatory 1-5 Rating Scale Strip */}
      <div className="scale-guide-card">
        <div className="scale-guide-header">
          <div className="scale-title-group">
            <Info size={18} className="scale-info-icon" aria-hidden="true" />
            <h3>Our Illustrative 1 to 5 Rating Scale</h3>
          </div>
          <p>
            Integer levels used consistently across all rooms and time slots. Always accompanied by plain-language descriptions.
          </p>
        </div>

        <div className="scale-levels-row">
          {scaleLevels.map((lvl) => (
            <div key={lvl.level} className="scale-step-item">
              <div className="scale-num-pill">
                <span className="scale-num">{lvl.level}</span>
                <span className="scale-name">{lvl.label}</span>
              </div>
              <p className="scale-desc">{lvl.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
