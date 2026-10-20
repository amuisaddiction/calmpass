export function HeroFloorPlan() {
  return (
    <svg
      className="floor-preview"
      viewBox="0 0 400 286"
      role="img"
      aria-labelledby="hero-floor-title hero-floor-desc"
    >
      <title id="hero-floor-title">Architectural preview of Harbour Learning Centre</title>
      <desc id="hero-floor-desc">
        Floor plan layout showing the Entrance, Reception, Main Corridor, Waiting Area, Quiet Room refuge, Service Desk, and Exit.
      </desc>

      {/* Subtle background grid pattern for architectural drafting aesthetic */}
      <defs>
        <pattern id="arch-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#E4E1D8" strokeWidth="0.75" opacity="0.6" />
        </pattern>
      </defs>

      {/* Building outer shell */}
      <rect
        x="12"
        y="12"
        width="376"
        height="262"
        rx="16"
        fill="#FFFDF8"
        stroke="#243B80"
        strokeWidth="2"
      />
      <rect
        x="12"
        y="12"
        width="376"
        height="262"
        rx="16"
        fill="url(#arch-grid)"
        opacity="0.4"
      />

      {/* Route Circulation Spine (connects corridor with service desk and exit) */}
      <rect
        x="248"
        y="116"
        width="124"
        height="52"
        rx="6"
        fill="#F3F0E8"
        stroke="#D5D7D0"
        strokeWidth="1"
        strokeDasharray="3 3"
      />
      <text x="310" y="146" textAnchor="middle" className="map-small" fill="#62665F">
        East Hallway
      </text>

      {/* Entrance */}
      <g>
        <rect
          x="24"
          y="24"
          width="104"
          height="74"
          rx="10"
          fill="#FFFDF8"
          stroke="#243B80"
          strokeWidth="1.5"
        />
        {/* Arrival door indicator */}
        <path d="M 16 61 L 24 61" stroke="#FF795B" strokeWidth="3" strokeLinecap="round" />
        <circle cx="24" cy="61" r="3.5" fill="#FF795B" />
        <text x="76" y="58" textAnchor="middle" className="map-label">Entrance</text>
        <text x="76" y="74" textAnchor="middle" className="map-small">Arrival point</text>
      </g>

      {/* Reception */}
      <g>
        <rect
          x="142"
          y="24"
          width="104"
          height="74"
          rx="10"
          fill="#FFFDF8"
          stroke="#243B80"
          strokeWidth="1.5"
        />
        {/* Reception desk outline */}
        <rect x="174" y="36" width="40" height="14" rx="4" fill="#E7EAF5" stroke="#243B80" strokeWidth="1" />
        <text x="194" y="66" textAnchor="middle" className="map-label">Reception</text>
        <text x="194" y="81" textAnchor="middle" className="map-small">Check-in desk</text>
      </g>

      {/* Service Desk */}
      <g>
        <rect
          x="260"
          y="24"
          width="112"
          height="74"
          rx="10"
          fill="#FFFDF8"
          stroke="#243B80"
          strokeWidth="1.5"
        />
        {/* Service counter */}
        <rect x="290" y="36" width="52" height="14" rx="4" fill="#E7EAF5" stroke="#243B80" strokeWidth="1" />
        <text x="316" y="66" textAnchor="middle" className="map-label">Service Desk</text>
        <text x="316" y="81" textAnchor="middle" className="map-small">Support area</text>
      </g>

      {/* Main Corridor */}
      <g>
        <rect
          x="24"
          y="116"
          width="222"
          height="52"
          rx="10"
          fill="#F5F3EB"
          stroke="#243B80"
          strokeWidth="1.5"
        />
        {/* Wayfinding dashed path */}
        <path
          d="M 40 142 H 230"
          stroke="#FF795B"
          strokeWidth="2"
          strokeDasharray="4 4"
          strokeLinecap="round"
          opacity="0.8"
        />
        <text x="135" y="139" textAnchor="middle" className="map-label">Main Corridor</text>
        <text x="135" y="154" textAnchor="middle" className="map-small">Central walkway</text>
      </g>

      {/* Waiting Area */}
      <g>
        <rect
          x="24"
          y="186"
          width="104"
          height="74"
          rx="10"
          fill="#FFFDF8"
          stroke="#243B80"
          strokeWidth="1.5"
        />
        {/* Seating cues */}
        <rect x="38" y="198" width="22" height="12" rx="3" fill="#F8E5DE" />
        <rect x="68" y="198" width="22" height="12" rx="3" fill="#F8E5DE" />
        <text x="76" y="228" textAnchor="middle" className="map-label">Waiting Area</text>
        <text x="76" y="244" textAnchor="middle" className="map-small">Pause & seating</text>
      </g>

      {/* Quiet Room (Designated Sensory Refuge) */}
      <g>
        <rect
          x="142"
          y="186"
          width="104"
          height="74"
          rx="10"
          fill="#DCE8D8"
          stroke="#2E4C2E"
          strokeWidth="1.8"
        />
        {/* Refuge pill icon */}
        <rect x="176" y="196" width="36" height="16" rx="8" fill="#FFFDF8" stroke="#2E4C2E" strokeWidth="1" />
        <text x="194" y="208" textAnchor="middle" fontSize="9" fontWeight="700" fill="#2E4C2E">REFUGE</text>
        <text x="194" y="228" textAnchor="middle" className="map-label" fill="#2E4C2E">Quiet Room</text>
        <text x="194" y="244" textAnchor="middle" className="map-small" fill="#3D5A3D">Low stimulus area</text>
      </g>

      {/* Exit */}
      <g>
        <rect
          x="260"
          y="186"
          width="112"
          height="74"
          rx="10"
          fill="#FFFDF8"
          stroke="#243B80"
          strokeWidth="1.5"
        />
        {/* Departure arrow indicator */}
        <path d="M 360 223 L 372 223 M 367 218 L 372 223 L 367 228" stroke="#243B80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <text x="310" y="223" textAnchor="middle" className="map-label">Exit</text>
        <text x="310" y="239" textAnchor="middle" className="map-small">Departure path</text>
      </g>
    </svg>
  )
}

