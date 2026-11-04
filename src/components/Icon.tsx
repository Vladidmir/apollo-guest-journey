import type { ReactNode } from 'react'
import type { IconName } from '../types'

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="M4 10.5 12 4l8 6.5V20a1 1 0 0 1-1 1h-5v-6H10v6H5a1 1 0 0 1-1-1v-9.5z" />
    </>
  ),
  map: (
    <>
      <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4z" />
      <path d="M9 4v13M15 6.5V20" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6" />
      <path d="m16 16 4 4" />
    </>
  ),
  help: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M9.5 9.5a2.5 2.5 0 1 1 3.2 2.4c-.7.3-1.2.9-1.2 1.6V14" />
      <path d="M12 17h.01" />
    </>
  ),
  door: (
    <>
      <path d="M6 21V5a1 1 0 0 1 1-1h8l3 3v14" />
      <path d="M10 12h.01" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
    </>
  ),
  drop: <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z" />,
  pin: (
    <>
      <path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.2" />
    </>
  ),
  wifi: (
    <>
      <path d="M5 9.5a10 10 0 0 1 14 0" />
      <path d="M8 13a6 6 0 0 1 8 0" />
      <path d="M12 17h.01" />
    </>
  ),
  dumbbell: (
    <>
      <path d="M6 9v6M18 9v6M4 10v4M20 10v4M6 12h12" />
    </>
  ),
  card: (
    <>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18" />
    </>
  ),
  alert: (
    <>
      <path d="M12 4 3 19h18L12 4z" />
      <path d="M12 10v4M12 16.5h.01" />
    </>
  ),
  phone: (
    <>
      <path d="M8 3h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M11 18h2" />
    </>
  ),
  check: <path d="m5 12 5 5L20 7" />,
  chevron: <path d="m9 6 6 6-6 6" />,
  mic: (
    <>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0M12 17v4" />
    </>
  ),
  play: <path d="m8 5 12 7-12 7V5z" />,
  pause: (
    <>
      <path d="M8 5v14M16 5v14" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="3" />
      <path d="M5 19c1.5-3 3.8-4.5 7-4.5S17.5 16 19 19" />
    </>
  ),
  wind: (
    <>
      <path d="M4 8h11a3 3 0 1 0-3-3" />
      <path d="M4 12h14a3 3 0 1 1-3 3" />
      <path d="M4 16h8" />
    </>
  ),
  heart: <path d="M12 19s-7-4.4-7-9a4 4 0 0 1 7-2 4 4 0 0 1 7 2c0 4.6-7 9-7 9z" />,
  box: (
    <>
      <path d="M3 8 12 4l9 4-9 4-9-4z" />
      <path d="M3 8v8l9 4 9-4V8M12 12v8" />
    </>
  ),
  shirt: (
    <>
      <path d="M8 5 4 8l2 2 2-1.5V20h8V8.5L18 10l2-2-4-3-2 2h-4L8 5z" />
    </>
  ),
  star: <path d="m12 3 2.4 5.2L20 9l-4 3.8.9 5.7L12 16.8 7.1 18.5 8 12.8 4 9l5.6-.8L12 3z" />,
  list: (
    <>
      <path d="M9 7h11M9 12h11M9 17h11" />
      <path d="M4 7h.01M4 12h.01M4 17h.01" />
    </>
  ),
  wrench: (
    <>
      <path d="M14 7a4 4 0 0 0-6 3L4 14l3 3 4-4a4 4 0 0 0 5-5l-3 3-2-2 3-3z" />
    </>
  ),
  water: (
    <>
      <path d="M8 10h8v8a4 4 0 0 1-8 0v-8z" />
      <path d="M8 8V6M12 8V5M16 8V6" />
    </>
  ),
  plus: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v8M8 12h8" />
    </>
  ),
}

export function Icon({
  name,
  size = 22,
  className,
}: {
  name: IconName
  size?: number
  className?: string
}) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
