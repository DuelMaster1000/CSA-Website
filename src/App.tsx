import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { Layout } from './components/layout/Layout'
import { About } from './pages/About'
import { Events } from './pages/Events'
import { Gallery } from './pages/Gallery'
import { Home } from './pages/Home'
import { NotFound } from './pages/NotFound'

// Must match `base` in vite.config.ts — both encode the GitHub Pages project path.
const BASENAME = '/CSA-Website'

export function App() {
  return (
    <BrowserRouter basename={BASENAME}>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="events" element={<Events />} />
          <Route path="about" element={<About />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
