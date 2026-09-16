/**
 * Shared content types for club data. Officers edit the data files in
 * `src/data/` — the layout and pages never need to change to add,
 * update, or remove an event, album, or photo.
 */

export type EventCategory =
  'workshop' | 'speaker' | 'ctf' | 'competition-prep' | 'social' | 'career' | 'meeting'

export type EventStatus = 'upcoming' | 'past'

export interface ClubEvent {
  /** Stable, unique identifier (kebab-case). */
  id: string
  title: string
  /** ISO 8601 date-time string, e.g. "2026-10-14T18:00:00-06:00". */
  startDateTime: string
  /** Optional ISO 8601 date-time string for multi-hour or multi-day events. */
  endDateTime?: string
  location: string
  description: string
  category: EventCategory
  /** Path under src/assets or public/ for the event's image. */
  image?: string
  /** Optional external RSVP / sign-up link (e.g. a form or Discord event). */
  externalLink?: string
  status: EventStatus
  /**
   * Marks clearly-labeled placeholder/demo content. Real club events must
   * NOT set this flag. Placeholder events are visibly badged in the UI and
   * must never be mistaken for confirmed BYU CSA events.
   */
  isSample?: boolean
}

export interface GalleryPhoto {
  id: string
  /** Path under src/assets or public/ for the photo. */
  src: string
  /** Required, specific alt text describing the photo's content. */
  alt: string
  /** Optional short caption shown in the lightbox. */
  caption?: string
}

export interface GalleryAlbum {
  id: string
  title: string
  /** ISO 8601 date string for the event the album documents, e.g. "2026-03-14". */
  date: string
  description: string
  /** The cover photo shown in album grids; should also appear in `photos`. */
  cover: GalleryPhoto
  photos: GalleryPhoto[]
  /** See ClubEvent.isSample — same placeholder-labeling contract applies. */
  isSample?: boolean
}

export interface SocialLink {
  label: string
  url: string
}

export interface SiteConfig {
  clubName: string
  shortName: string
  shortDescription: string
  mission: string
  /** Only populated once the club approves specific accounts. */
  socialLinks: SocialLink[]
  /** Only populated once the club approves a public contact address. */
  contactEmail?: string
  university: string
}
