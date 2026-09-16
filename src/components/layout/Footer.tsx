import { siteConfig } from '../../data/siteConfig'
import { Container } from '../ui/Container'

export function Footer() {
  const year = new Date().getFullYear()
  const hasLinks = siteConfig.socialLinks.length > 0
  const hasEmail = Boolean(siteConfig.contactEmail)

  return (
    <footer className="border-navy-800 bg-navy-950 text-offwhite border-t">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <p className="font-display text-lg font-medium">{siteConfig.clubName}</p>
          <p className="text-offwhite/70 mt-2 text-sm leading-relaxed">
            A student club at {siteConfig.university}. Not an official university office.
          </p>
        </div>

        <div className="text-offwhite/70 flex flex-col gap-2 text-sm">
          <span className="text-offwhite/90 font-semibold tracking-wide uppercase">
            Get in touch
          </span>
          {hasEmail && (
            <a href={`mailto:${siteConfig.contactEmail}`} className="hover:text-offwhite">
              {siteConfig.contactEmail}
            </a>
          )}
          {hasLinks &&
            siteConfig.socialLinks.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-offwhite"
              >
                {link.label}
              </a>
            ))}
          {!hasEmail && !hasLinks && (
            <span className="text-offwhite/50 italic">Contact details coming soon.</span>
          )}
        </div>
      </Container>

      <Container className="border-navy-800 border-t py-4">
        <p className="text-offwhite/50 text-xs">
          © {year} {siteConfig.shortName}. Site content is informational only.
        </p>
      </Container>
    </footer>
  )
}
