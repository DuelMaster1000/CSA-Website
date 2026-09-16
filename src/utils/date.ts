import type { ClubEvent } from '../types/content'

const dateFormatter = new Intl.DateTimeFormat('en-US', {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
})

const timeFormatter = new Intl.DateTimeFormat('en-US', {
  hour: 'numeric',
  minute: '2-digit',
})

const monthDayFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  day: 'numeric',
})

export function formatEventDate(isoDateTime: string): string {
  return dateFormatter.format(new Date(isoDateTime))
}

export function formatEventTime(isoDateTime: string): string {
  return timeFormatter.format(new Date(isoDateTime))
}

export function formatEventTimeRange(event: ClubEvent): string {
  const start = formatEventTime(event.startDateTime)
  if (!event.endDateTime) return start
  return `${start} – ${formatEventTime(event.endDateTime)}`
}

export function formatAlbumDate(isoDate: string): string {
  return dateFormatter.format(new Date(`${isoDate}T00:00:00`))
}

export function formatMonthDay(isoDateTime: string): string {
  return monthDayFormatter.format(new Date(isoDateTime))
}

export function sortEventsChronologically(events: ClubEvent[]): ClubEvent[] {
  return [...events].sort(
    (a, b) => new Date(a.startDateTime).getTime() - new Date(b.startDateTime).getTime(),
  )
}

/** Upcoming events, soonest first. An event counts as upcoming until it ends. */
export function getUpcomingEvents(events: ClubEvent[], now = new Date()): ClubEvent[] {
  return sortEventsChronologically(
    events.filter((event) => {
      const end = new Date(event.endDateTime ?? event.startDateTime)
      return event.status === 'upcoming' && end.getTime() >= now.getTime()
    }),
  )
}

/** Past events, most recent first. */
export function getPastEvents(events: ClubEvent[], now = new Date()): ClubEvent[] {
  return sortEventsChronologically(
    events.filter((event) => {
      const end = new Date(event.endDateTime ?? event.startDateTime)
      return event.status === 'past' || end.getTime() < now.getTime()
    }),
  ).reverse()
}
