import { useState } from 'react'
import { Compass, Ear, Eye, ShieldAlert, Sparkles, Sun, Users, Wind } from 'lucide-react'
import { sampleVenue } from '../../data/sampleVenue'
import type { VenueRoom } from '../../types/calmpass'

interface RoomTip {
  role: string
  advice: string
  lightingNote: string
  acousticNote: string
}

const roomContextTips: Record<string, RoomTip> = {
  entrance: {
    role: 'Arrival & Orientation Zone',
    advice: 'A spacious entry foyer with good visibility of the whole ground floor. Pause just inside the inner doors to get your bearings before proceeding.',
    lightingNote: 'Natural window daylight combined with soft recessed overhead light.',
    acousticNote: 'Footsteps and door chimes; occasional draughts from outside.',
  },
  reception: {
    role: 'Staff Welcome & Enquiries',
    advice: 'Low counter designed for easy approach. Staff can offer visual venue maps, hearing loops, and directions to workshops.',
    lightingNote: 'Even, glare-free warm LED lighting over the counter.',
    acousticNote: 'Gentle conversational voices; low keyboard typing sound.',
  },
  'main-corridor': {
    role: 'Central Circulation Spine',
    advice: 'Wide connecting corridor with clear sightlines between all wings. Wide enough to step aside at the wall if you need a breather.',
    lightingNote: 'Even corridor lighting with directional wayfinding floor markers.',
    acousticNote: 'Reverberant acoustic flooring; sound carries during shift changes.',
  },
  'waiting-area': {
    role: 'Rest & Unscheduled Pause',
    advice: 'Equipped with cushioned armchairs and bench seating. A comfortable spot to sit while waiting for an appointment or gathering your thoughts.',
    lightingNote: 'Indirect warm ambient lighting; no flickering lights.',
    acousticNote: 'Soft ambient murmur; periodic movement from corridor.',
  },
  'quiet-room': {
    role: 'Designated Low-Stimulus Refuge',
    advice: 'A dedicated sanctuary with acoustic dampening panels, dimmable lamps, and no public announcements. Available to anyone at any time without asking permission.',
    lightingNote: 'Subdued, dimmable floor lamps with minimal glare.',
    acousticNote: 'High acoustic isolation; whispers only, no background machinery.',
  },
  'service-desk': {
    role: 'Dedicated Assistance Point',
    advice: 'Where specific public queries and document checks occur. Can be more active during midday hours.',
    lightingNote: 'Direct task illumination with anti-glare diffusers.',
    acousticNote: 'Multi-party conversations, printers, and queuing activity.',
  },
  exit: {
    role: 'Unobstructed Departure',
    advice: 'Dedicated egress passage leading directly to the outer street and public transport concourse.',
    lightingNote: 'Daylight through glass exit vestibule.',
    acousticNote: 'Gradual transition back to outdoor ambient street noise.',
  },
}

export function VenuePreview() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>('quiet-room')

  const selectedRoom: VenueRoom =
    sampleVenue.rooms.find((r) => r.id === selectedRoomId) ?? sampleVenue.rooms[0]

  const contextTip = roomContextTips[selectedRoom.id] ?? {
    role: 'Venue Space',
    advice: 'An illustrative public area inside Harbour Learning Centre.',
    lightingNote: 'Standard civic lighting.',
    acousticNote: 'Standard indoor acoustics.',
  }

  return (
    <div className="venue-preview-container">
      {/* Room Selection Buttons / Interactive Directory */}
      <div className="venue-directory" role="tablist" aria-label="Harbour Learning Centre Rooms">
        {sampleVenue.rooms.map((room) => {
          const isSelected = room.id === selectedRoomId
          return (
            <button
              key={room.id}
              role="tab"
              aria-selected={isSelected}
              aria-controls={`room-panel-${room.id}`}
              id={`room-tab-${room.id}`}
              className={`room-pill-btn ${isSelected ? 'active' : ''} ${room.refuge ? 'refuge-pill' : ''}`}
              onClick={() => setSelectedRoomId(room.id)}
            >
              <span className="room-pill-name">{room.name}</span>
              {room.refuge && <span className="refuge-tag" aria-label="Refuge room">Refuge</span>}
            </button>
          )
        })}
      </div>

      <div className="venue-grid">
        {/* Interactive Architectural SVG Map */}
        <div className="venue-map-card">
          <div className="map-card-header">
            <span className="map-badge">
              <Compass size={14} aria-hidden="true" /> Floor Plan Layout
            </span>
            <span className="map-tip">Click any room to explore</span>
          </div>

          <svg
            className="interactive-svg-map"
            viewBox="0 0 400 286"
            role="region"
            aria-label="Interactive map of Harbour Learning Centre"
          >
            <defs>
              <pattern id="venue-grid-pattern" width="16" height="16" patternUnits="userSpaceOnUse">
                <path d="M 16 0 L 0 0 0 16" fill="none" stroke="#EAE7DE" strokeWidth="0.75" />
              </pattern>
            </defs>

            {/* Background container */}
            <rect
              x="10"
              y="10"
              width="380"
              height="266"
              rx="16"
              fill="#FFFDF8"
              stroke="#243B80"
              strokeWidth="2"
            />
            <rect
              x="10"
              y="10"
              width="380"
              height="266"
              rx="16"
              fill="url(#venue-grid-pattern)"
              opacity="0.45"
            />

            {/* Circulation hallway between corridor and exit */}
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
              East Corridor
            </text>

            {/* Interactive Room Shapes */}
            {sampleVenue.rooms.map((room) => {
              const isSelected = room.id === selectedRoomId
              const isRefuge = room.refuge
              const { x, y, width, height } = room.geometry

              // Fill & stroke colors based on status
              let fillColor = '#FFFDF8'
              let strokeColor = '#243B80'
              let strokeWidth = 1.5

              if (isRefuge) {
                fillColor = isSelected ? '#CDE1C8' : '#DCE8D8'
                strokeColor = '#2E4C2E'
                strokeWidth = isSelected ? 2.5 : 1.8
              } else if (room.id === 'main-corridor') {
                fillColor = isSelected ? '#EAE5D8' : '#F5F3EB'
                strokeColor = isSelected ? '#FF795B' : '#243B80'
                strokeWidth = isSelected ? 2.5 : 1.5
              } else if (isSelected) {
                fillColor = '#FFF5F0'
                strokeColor = '#FF795B'
                strokeWidth = 2.5
              }

              return (
                <g
                  key={room.id}
                  className={`svg-room-interactive ${isSelected ? 'selected' : ''}`}
                  onClick={() => setSelectedRoomId(room.id)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setSelectedRoomId(room.id)
                    }
                  }}
                  tabIndex={0}
                  role="button"
                  aria-pressed={isSelected}
                  aria-label={`${room.name}, ${room.description}`}
                >
                  <rect
                    x={x}
                    y={y}
                    width={width}
                    height={height}
                    rx="10"
                    fill={fillColor}
                    stroke={strokeColor}
                    strokeWidth={strokeWidth}
                    className="room-shape"
                  />

                  {/* Room specific internal iconography */}
                  {room.id === 'entrance' && (
                    <>
                      <path d="M 16 61 L 24 61" stroke="#FF795B" strokeWidth="3" strokeLinecap="round" />
                      <circle cx="24" cy="61" r="3.5" fill="#FF795B" />
                    </>
                  )}
                  {room.id === 'reception' && (
                    <rect x="174" y="36" width="40" height="14" rx="4" fill="#E7EAF5" stroke="#243B80" strokeWidth="1" />
                  )}
                  {room.id === 'service-desk' && (
                    <rect x="290" y="36" width="52" height="14" rx="4" fill="#E7EAF5" stroke="#243B80" strokeWidth="1" />
                  )}
                  {room.id === 'main-corridor' && (
                    <path d="M 40 142 H 230" stroke="#FF795B" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" opacity="0.8" />
                  )}
                  {room.id === 'waiting-area' && (
                    <>
                      <rect x="38" y="198" width="22" height="12" rx="3" fill="#F8E5DE" />
                      <rect x="68" y="198" width="22" height="12" rx="3" fill="#F8E5DE" />
                    </>
                  )}
                  {room.id === 'quiet-room' && (
                    <rect x="176" y="196" width="36" height="16" rx="8" fill="#FFFDF8" stroke="#2E4C2E" strokeWidth="1" />
                  )}
                  {room.id === 'exit' && (
                    <path d="M 360 223 L 372 223 M 367 218 L 372 223 L 367 228" stroke="#243B80" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  )}

                  {/* Room Text Label */}
                  {room.id === 'quiet-room' && (
                    <text x={x + width / 2} y={y + 22} textAnchor="middle" fontSize="9" fontWeight="700" fill="#2E4C2E">
                      REFUGE
                    </text>
                  )}
                  <text
                    x={x + width / 2}
                    y={y + (room.id === 'quiet-room' ? 42 : height / 2 - 2)}
                    textAnchor="middle"
                    className="map-label"
                    fill={isRefuge ? '#2E4C2E' : isSelected ? '#243B80' : '#243B80'}
                    fontWeight={isSelected ? '700' : '600'}
                  >
                    {room.name}
                  </text>
                  <text
                    x={x + width / 2}
                    y={y + (room.id === 'quiet-room' ? 57 : height / 2 + 14)}
                    textAnchor="middle"
                    className="map-small"
                    fill={isRefuge ? '#3D5A3D' : '#62665F'}
                  >
                    {isRefuge ? 'Sensory sanctuary' : room.route ? 'Route room' : 'Exit path'}
                  </text>
                </g>
              )
            })}
          </svg>

          <div className="map-legend">
            <div className="legend-item">
              <span className="legend-swatch standard-swatch" />
              <span>Route Rooms</span>
            </div>
            <div className="legend-item">
              <span className="legend-swatch refuge-swatch" />
              <span>Quiet Refuge (Off-route)</span>
            </div>
            <div className="legend-item">
              <span className="legend-swatch route-swatch" />
              <span>Wayfinding Spine</span>
            </div>
          </div>
        </div>

        {/* Selected Room Profile Card */}
        <div
          id={`room-panel-${selectedRoom.id}`}
          role="tabpanel"
          aria-labelledby={`room-tab-${selectedRoom.id}`}
          className="room-detail-spotlight"
        >
          <div className="spotlight-header">
            <div>
              <span className={`spotlight-badge ${selectedRoom.refuge ? 'refuge-badge' : 'route-badge'}`}>
                {selectedRoom.refuge ? 'Designated Refuge' : selectedRoom.route ? 'Route Room' : 'Departure Point'}
              </span>
              <h3>{selectedRoom.name}</h3>
              <p className="spotlight-role">{contextTip.role}</p>
            </div>
            <div className="spotlight-pin" aria-hidden="true">
              <Sparkles size={20} />
            </div>
          </div>

          <p className="spotlight-desc">{selectedRoom.description}</p>

          <div className="spotlight-reassurance">
            <h4>
              <Compass size={15} aria-hidden="true" /> Visitor Reassurance Tip
            </h4>
            <p>{contextTip.advice}</p>
          </div>

          {/* Baseline sensory conditions */}
          <div className="sensory-snapshot">
            <h4>Typical Baseline Conditions (Scale 1–5)</h4>
            <div className="snapshot-grid">
              <div className="snapshot-item">
                <span className="snapshot-label">
                  <Ear size={15} aria-hidden="true" /> Acoustics
                </span>
                <span className="snapshot-val">
                  <strong>{selectedRoom.baseline.noise}</strong> / 5
                </span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">
                  <Users size={15} aria-hidden="true" /> Foot Traffic
                </span>
                <span className="snapshot-val">
                  <strong>{selectedRoom.baseline.crowd}</strong> / 5
                </span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">
                  <Sun size={15} aria-hidden="true" /> Lighting
                </span>
                <span className="snapshot-val">
                  <strong>{selectedRoom.baseline.light}</strong> / 5
                </span>
              </div>
              <div className="snapshot-item">
                <span className="snapshot-label">
                  <Wind size={15} aria-hidden="true" /> Scent/Air
                </span>
                <span className="snapshot-val">
                  <strong>{selectedRoom.baseline.smell}</strong> / 5
                </span>
              </div>
            </div>
          </div>

          <div className="spotlight-notes">
            <p>
              <Eye size={14} aria-hidden="true" /> <strong>Lighting:</strong> {contextTip.lightingNote}
            </p>
            <p>
              <Ear size={14} aria-hidden="true" /> <strong>Sound:</strong> {contextTip.acousticNote}
            </p>
          </div>
        </div>
      </div>

      {/* Prominent Ethical Sample Disclosure */}
      <div className="preview-disclosure" id="disclosure">
        <ShieldAlert size={20} className="disclosure-icon" aria-hidden="true" />
        <div className="disclosure-text">
          <p className="disclosure-title">
            <strong>Sample conditions, not live measurements.</strong>
          </p>
          <p>
            Harbour Learning Centre is a fictional demonstration venue created to illustrate the Calmpass planning method.
            These condition levels are benchmark approximations for planning your visit in advance, not real-time sensor
            readings or comfort guarantees.
          </p>
        </div>
      </div>
    </div>
  )
}
