import type { ReactNode } from 'react'

interface PlaceholderNoticeProps {
  children: ReactNode
}

/** A visible banner marking demo/placeholder content so it's never mistaken for real. */
export function PlaceholderNotice({ children }: PlaceholderNoticeProps) {
  return (
    <div className="border-accent/40 bg-accent-light/30 text-navy-950 border px-4 py-3 text-sm sm:text-base">
      <strong className="font-semibold">Sample content:</strong> {children}
    </div>
  )
}
