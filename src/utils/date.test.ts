import { describe, expect, it } from 'vitest'
import type { ClubEvent } from '../types/content'
import { getPastEvents, getUpcomingEvents, sortEventsChronologically } from './date'

function makeEvent(overrides: Partial<ClubEvent>): ClubEvent {
  return {
    id: 'event',
    title: 'Event',
    startDateTime: '2026-01-01T18:00:00-07:00',
    location: 'Somewhere',
    description: 'Description',
    category: 'workshop',
    status: 'upcoming',
    ...overrides,
  }
}

describe('sortEventsChronologically', () => {
  it('orders events from earliest to latest start time', () => {
    const events = [
      makeEvent({ id: 'c', startDateTime: '2026-03-01T18:00:00-07:00' }),
      makeEvent({ id: 'a', startDateTime: '2026-01-01T18:00:00-07:00' }),
      makeEvent({ id: 'b', startDateTime: '2026-02-01T18:00:00-07:00' }),
    ]

    expect(sortEventsChronologically(events).map((e) => e.id)).toEqual(['a', 'b', 'c'])
  })

  it('does not mutate the original array', () => {
    const events = [
      makeEvent({ id: 'b', startDateTime: '2026-02-01T18:00:00-07:00' }),
      makeEvent({ id: 'a', startDateTime: '2026-01-01T18:00:00-07:00' }),
    ]
    const original = [...events]

    sortEventsChronologically(events)

    expect(events).toEqual(original)
  })
})

describe('getUpcomingEvents', () => {
  const now = new Date('2026-06-01T00:00:00-06:00')

  it('includes only events marked upcoming that have not ended, soonest first', () => {
    const events = [
      makeEvent({
        id: 'future-2',
        status: 'upcoming',
        startDateTime: '2026-08-01T18:00:00-06:00',
      }),
      makeEvent({
        id: 'future-1',
        status: 'upcoming',
        startDateTime: '2026-07-01T18:00:00-06:00',
      }),
      makeEvent({
        id: 'already-ended',
        status: 'upcoming',
        startDateTime: '2026-05-01T18:00:00-06:00',
      }),
      makeEvent({
        id: 'marked-past',
        status: 'past',
        startDateTime: '2026-09-01T18:00:00-06:00',
      }),
    ]

    expect(getUpcomingEvents(events, now).map((e) => e.id)).toEqual([
      'future-1',
      'future-2',
    ])
  })

  it('treats an event as upcoming until its end time, not just its start time', () => {
    const events = [
      makeEvent({
        id: 'in-progress',
        status: 'upcoming',
        startDateTime: '2026-05-31T18:00:00-06:00',
        endDateTime: '2026-06-02T18:00:00-06:00',
      }),
    ]

    expect(getUpcomingEvents(events, now).map((e) => e.id)).toEqual(['in-progress'])
  })
})

describe('getPastEvents', () => {
  const now = new Date('2026-06-01T00:00:00-06:00')

  it('includes past events most recent first', () => {
    const events = [
      makeEvent({
        id: 'older',
        status: 'past',
        startDateTime: '2026-01-01T18:00:00-06:00',
      }),
      makeEvent({
        id: 'newer',
        status: 'past',
        startDateTime: '2026-03-01T18:00:00-06:00',
      }),
      makeEvent({
        id: 'future',
        status: 'upcoming',
        startDateTime: '2026-09-01T18:00:00-06:00',
      }),
    ]

    expect(getPastEvents(events, now).map((e) => e.id)).toEqual(['newer', 'older'])
  })
})
