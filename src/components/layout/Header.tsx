import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { siteConfig } from '../../data/siteConfig'
import { Container } from '../ui/Container'

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  // Close the mobile menu if the viewport grows past the mobile breakpoint.
  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 640px)')
    const handleChange = () => setMenuOpen(false)
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold tracking-wide transition-colors ${
      isActive ? 'text-accent' : 'text-offwhite/85 hover:text-offwhite'
    }`

  return (
    <header className="border-navy-800 bg-navy-950 border-b">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <NavLink
          to="/"
          className="font-display text-offwhite text-lg font-semibold sm:text-xl"
          onClick={() => setMenuOpen(false)}
        >
          {siteConfig.shortName}
        </NavLink>

        <nav aria-label="Primary" className="hidden items-center gap-8 sm:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} end={item.end} className={linkClasses}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          type="button"
          className="text-offwhite inline-flex h-10 w-10 items-center justify-center sm:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {menuOpen ? (
              <path d="M6 6 L18 18 M18 6 L6 18" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="border-navy-800 bg-navy-950 border-t sm:hidden"
        >
          <Container className="flex flex-col gap-1 py-3">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-2 py-3 text-base font-semibold ${
                    isActive ? 'text-accent' : 'text-offwhite/85'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}
