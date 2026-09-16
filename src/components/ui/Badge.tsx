import type { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'accent' | 'navy' | 'sample'
}

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  accent: 'bg-accent-light text-navy-950',
  navy: 'bg-navy-900 text-offwhite',
  sample: 'bg-navy-950 text-accent-light ring-1 ring-inset ring-accent/60',
}

export function Badge({ children, variant = 'accent' }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-semibold tracking-wide uppercase ${variants[variant]}`}
    >
      {children}
    </span>
  )
}
