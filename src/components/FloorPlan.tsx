import type { ZoneCat } from '../types'
import type { PlacedZone } from '../content/select'
import { useApp } from '../state'

const catColor: Record<ZoneCat, string> = {
  service: '#e4b54a',
  training: '#f0835a',
  comfort: '#7eb8c9',
}

export function FloorPlan({
  rooms,
  active,
  dim,
  onSelect,
}: {
  rooms: PlacedZone[]
  active: string | null
  dim: (room: PlacedZone) => boolean
  onSelect: (id: string) => void
}) {
  const { tx } = useApp()
  const height = Math.max(...rooms.map((room) => room.y + room.h), 200) + 20

  return (
    <svg id="floorplan" className="floor" viewBox={`0 0 320 ${height}`} role="group" aria-label={tx({ uk: 'План клубу', en: 'Club plan' })}>
      <rect x="8" y="8" width="304" height={height - 16} rx="22" fill="#101114" stroke="rgba(255,255,255,.08)" />
      {rooms.map((room) => {
        const faded = dim(room)
        const selected = room.id === active
        const lines = tx(room.short).split('\n')
        const small = room.w < 40 || room.h < 36
        const startY = room.y + room.h / 2 - (lines.length - 1) * 7
        return (
          <g
            key={room.id}
            role="button"
            tabIndex={faded ? -1 : 0}
            aria-pressed={selected}
            aria-label={tx(room.title)}
            className={faded ? 'room dim' : selected ? 'room selected' : 'room'}
            onClick={() => {
              if (!faded) onSelect(room.id)
            }}
            onKeyDown={(event) => {
              if (faded) return
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                onSelect(room.id)
              }
            }}
          >
            <clipPath id={`clip-${room.id}`}>
              <rect x={room.x + 8} y={room.y + 4} width={Math.max(room.w - 14, 8)} height={room.h - 8} />
            </clipPath>
            <rect
              x={room.x}
              y={room.y}
              width={room.w}
              height={room.h}
              rx={small ? 13 : 12}
              fill={selected ? 'rgba(228,181,74,.16)' : '#1a1b20'}
              stroke={selected ? '#e4b54a' : 'rgba(255,255,255,.1)'}
              strokeWidth={selected ? 2 : 1}
            />
            {!small && (
              <line
                x1={room.x + 3}
                y1={room.y + 12}
                x2={room.x + 3}
                y2={room.y + room.h - 12}
                stroke={catColor[room.category]}
                strokeWidth="3"
                strokeLinecap="round"
              />
            )}
            <text
              x={room.x + room.w / 2}
              y={small ? room.y + room.h / 2 + 4 : startY}
              textAnchor="middle"
              className="map-label"
              clipPath={`url(#clip-${room.id})`}
            >
              {small
                ? '+'
                : lines.map((line, index) => (
                    <tspan key={line} x={room.x + room.w / 2} dy={index === 0 ? 0 : 14}>
                      {line}
                    </tspan>
                  ))}
            </text>
          </g>
        )
      })}
    </svg>
  )
}
