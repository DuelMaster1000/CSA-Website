import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Resets scroll position on route change (browsers don't do this by default with client-side routing). */
export function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  return null
}
