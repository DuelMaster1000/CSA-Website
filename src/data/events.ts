import type { ClubEvent } from '../types/content'

/**
 * Club events.
 *
 * ── FOR OFFICERS ──────────────────────────────────────────────────────
 * Add a real event by appending a new object to this array with
 * `isSample` omitted (or `false`). Every entry marked `isSample: true`
 * below is placeholder/demo content used to show what the layout looks
 * like with data in it — replace or delete them once real events are
 * confirmed. Do not remove the `isSample` flag from demo entries unless
 * they describe a real, confirmed BYU CSA event.
 *
 * `startDateTime` / `endDateTime` use ISO 8601 with an explicit UTC
 * offset (Utah is -06:00 MDT / -07:00 MST) so sorting and display are
 * unambiguous, e.g. "2026-10-14T18:00:00-06:00".
 * ──────────────────────────────────────────────────────────────────────
 */
export const events: ClubEvent[] = [
  {
    id: 'sample-ctf-night',
    title: 'Example: Fall CTF Night',
    startDateTime: '2026-09-24T18:00:00-06:00',
    endDateTime: '2026-09-24T21:00:00-06:00',
    location: 'BYU campus — room TBD',
    description:
      'A beginner-friendly capture-the-flag night with challenges in web, crypto, and forensics. Teams of any size are welcome and no prior experience is required.',
    category: 'ctf',
    status: 'upcoming',
    isSample: true,
  },
  {
    id: 'sample-workshop-network-traffic',
    title: 'Example: Workshop — Intro to Network Traffic Analysis',
    startDateTime: '2026-10-01T18:00:00-06:00',
    endDateTime: '2026-10-01T19:30:00-06:00',
    location: 'BYU campus — room TBD',
    description:
      'A hands-on session covering packet capture basics and reading traffic with Wireshark, aimed at members with little to no prior experience.',
    category: 'workshop',
    status: 'upcoming',
    isSample: true,
    externalLink: 'https://example.com/rsvp',
  },
  {
    id: 'sample-speaker-soc',
    title: 'Example: Guest Speaker — Life in a Security Operations Center',
    startDateTime: '2026-10-08T18:00:00-06:00',
    location: 'BYU campus — room TBD',
    description:
      'An industry guest shares what day-to-day work looks like on a security operations team and takes questions from the group afterward.',
    category: 'speaker',
    status: 'upcoming',
    isSample: true,
  },
  {
    id: 'sample-competition-prep',
    title: 'Example: Regional Competition Prep Session',
    startDateTime: '2026-10-15T18:00:00-06:00',
    endDateTime: '2026-10-15T20:00:00-06:00',
    location: 'BYU campus — room TBD',
    description:
      'Open practice time for students preparing for regional cybersecurity competitions, with peer coaching from returning competitors.',
    category: 'competition-prep',
    status: 'upcoming',
    isSample: true,
  },
  {
    id: 'sample-kickoff-social',
    title: 'Example: Semester Kickoff Social',
    startDateTime: '2026-09-03T18:00:00-06:00',
    endDateTime: '2026-09-03T20:00:00-06:00',
    location: 'BYU campus — room TBD',
    description:
      'An informal welcome event for new and returning members at the start of the semester.',
    category: 'social',
    status: 'past',
    isSample: true,
  },
]
