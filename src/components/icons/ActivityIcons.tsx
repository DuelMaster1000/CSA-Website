import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base = {
  width: 28,
  height: 28,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
}

export function WorkshopIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="4" width="18" height="12" rx="1" />
      <path d="M8 20h8M12 16v4" />
    </svg>
  )
}

export function SpeakerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M4 14V10a1 1 0 0 1 1-1h3l5-4v14l-5-4H5a1 1 0 0 1-1-1Z" />
      <path d="M17 8.5a4 4 0 0 1 0 7" />
    </svg>
  )
}

export function CtfIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M6 3v18" />
      <path d="M6 4h11l-3 3.5L17 11H6" />
    </svg>
  )
}

export function CompetitionIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 4h10v4a5 5 0 0 1-10 0V4Z" />
      <path d="M7 5H4v2a3 3 0 0 0 3 3M17 5h3v2a3 3 0 0 1-3 3" />
      <path d="M12 13v3M9 20h6M10 16.5h4" />
    </svg>
  )
}

export function PeerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="9" cy="9" r="3" />
      <circle cx="16" cy="10.5" r="2.3" />
      <path d="M4 19c0-3 2.5-5 5-5s5 2 5 5M14.5 19c.2-2 1.5-3.6 3.5-4" />
    </svg>
  )
}

export function CareerIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="3.5" y="7.5" width="17" height="12" rx="1.2" />
      <path d="M8.5 7.5v-2a1.5 1.5 0 0 1 1.5-1.5h4a1.5 1.5 0 0 1 1.5 1.5v2M3.5 12.5h17" />
    </svg>
  )
}
