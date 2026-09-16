import { Container } from '../components/ui/Container'
import { CtaLink } from '../components/ui/CtaLink'

export function NotFound() {
  return (
    <Container className="flex flex-col items-start gap-6 py-24">
      <span className="text-accent-dark text-sm font-semibold tracking-widest uppercase">
        404
      </span>
      <h1 className="font-display text-navy-950 text-4xl font-medium">Page not found</h1>
      <p className="text-navy-800/85 max-w-md text-base leading-relaxed">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <CtaLink to="/">Back to home</CtaLink>
    </Container>
  )
}
