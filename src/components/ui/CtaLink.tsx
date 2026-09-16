import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface CtaLinkProps {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'secondary-inverse'
  external?: boolean
  className?: string
}

const base =
  'inline-flex items-center gap-2 rounded-sm px-5 py-3 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-2 focus-visible:outline-offset-2'

const variants: Record<NonNullable<CtaLinkProps['variant']>, string> = {
  primary: 'bg-accent text-navy-950 hover:bg-accent-dark hover:text-offwhite',
  secondary:
    'border border-navy-950/20 text-navy-950 hover:border-navy-950 hover:bg-navy-950/5',
  'secondary-inverse':
    'border border-offwhite/30 text-offwhite hover:border-offwhite hover:bg-offwhite/10',
}

export function CtaLink({
  to,
  children,
  variant = 'primary',
  external = false,
  className = '',
}: CtaLinkProps) {
  const classes = `${base} ${variants[variant]} ${className}`

  if (external) {
    return (
      <a href={to} target="_blank" rel="noreferrer noopener" className={classes}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  )
}
