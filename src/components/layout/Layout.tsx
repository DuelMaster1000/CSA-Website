import { Outlet } from 'react-router-dom'
import { Footer } from './Footer'
import { Header } from './Header'

export function Layout() {
  return (
    <div className="bg-offwhite text-ink flex min-h-screen flex-col">
      <a
        href="#main-content"
        className="bg-accent text-navy-950 sr-only rounded-sm px-4 py-2 text-sm font-semibold focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50"
      >
        Skip to main content
      </a>
      <Header />
      <main id="main-content" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
