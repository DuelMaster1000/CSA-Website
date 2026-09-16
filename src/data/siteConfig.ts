import type { SiteConfig } from '../types/content'

/**
 * Central club identity, links, and contact info.
 *
 * `socialLinks` and `contactEmail` are intentionally empty until BYU CSA
 * officers approve specific accounts/addresses to publish. Do not fill
 * these in with guessed or unofficial handles — the site should only ever
 * show links the club has actually confirmed.
 */
export const siteConfig: SiteConfig = {
  clubName: 'BYU Cybersecurity Students Association',
  shortName: 'BYU CSA',
  university: 'Brigham Young University',
  shortDescription:
    'A student community for learning, practicing, and exploring cybersecurity — together.',
  mission:
    'BYU CSA exists so that students who are curious about cybersecurity have a place to learn by doing: workshops that teach real skills, competitions that put them to the test, and a community of peers at every experience level working through the same problems.',
  socialLinks: [],
  contactEmail: undefined,
}
