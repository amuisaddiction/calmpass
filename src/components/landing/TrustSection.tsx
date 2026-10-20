import { CheckCircle2, Lock, ShieldCheck, UserCheck } from 'lucide-react'

export function TrustSection() {
  const principles = [
    {
      icon: ShieldCheck,
      title: 'A Planning Aid, Not a Guarantee',
      description:
        'Real civic buildings fluctuate with weather, public transport schedules, and daily events. Calmpass provides a supportive mental model of typical conditions, not a guarantee that a room will remain quiet.',
    },
    {
      icon: Lock,
      title: 'Zero Tracking & Complete Privacy',
      description:
        'Your comfort preferences never leave your browser. We require no accounts, collect no email addresses, and perform no profiling. Your plan is entirely yours.',
    },
    {
      icon: UserCheck,
      title: 'Autonomy Over Prescription',
      description:
        'We do not diagnose sensory conditions or tell you where you are allowed to visit. You decide which factors matter most, and Calmpass surfaces the trade-offs clearly.',
    },
  ]

  return (
    <section id="trust-disclosure" className="trust-section section-wrap" aria-labelledby="trust-heading">
      <div className="section-heading">
        <p className="eyebrow">
          <span className="eyebrow-dot" /> Built on Respect & Autonomy
        </p>
        <h2 id="trust-heading">Designed to inform, not to diagnose.</h2>
        <p>
          Visiting unfamiliar places can take significant mental energy. Calmpass is designed with gentle honesty:
          giving you context in advance so you can walk through the door with greater confidence.
        </p>
      </div>

      <div className="trust-grid">
        {principles.map((item, idx) => {
          const Icon = item.icon
          return (
            <article key={idx} className="trust-card">
              <div className="trust-icon-badge">
                <Icon size={22} aria-hidden="true" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          )
        })}
      </div>

      {/* Reassurance Callout Box */}
      <div className="planning-promise-box">
        <div className="promise-content">
          <div className="promise-badge">
            <CheckCircle2 size={16} aria-hidden="true" />
            <span>Ethical Design Standard</span>
          </div>
          <h3>Preparedness is about having choices</h3>
          <p>
            Whether you are neurodivergent, recovering from sensory overload, or simply prefer to know where the quietest corner is,
            having clear layout information and sensory transparency transforms an intimidating space into a manageable visit.
          </p>
        </div>
        <div className="promise-quote">
          <blockquote>
            “When you know where the quiet room is before you arrive, the entire building feels significantly less daunting.”
          </blockquote>
          <cite>— Calmpass Design Philosophy</cite>
        </div>
      </div>
    </section>
  )
}
