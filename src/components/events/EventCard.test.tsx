import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import type { ClubEvent } from '../../types/content'
import { EventCard } from './EventCard'

const event: ClubEvent = {
  id: 'test-event',
  title: 'Intro to CTFs',
  startDateTime: '2026-10-01T18:00:00-06:00',
  endDateTime: '2026-10-01T19:30:00-06:00',
  location: 'Room 101',
  description: 'A beginner-friendly workshop.',
  category: 'workshop',
  status: 'upcoming',
  isSample: true,
  externalLink: 'https://example.com/rsvp',
}

describe('EventCard', () => {
  it('renders title, location, category, sample badge, and an RSVP link', () => {
    render(
      <MemoryRouter>
        <EventCard event={event} />
      </MemoryRouter>,
    )

    expect(screen.getByText('Intro to CTFs')).toBeInTheDocument()
    expect(screen.getByText('Room 101')).toBeInTheDocument()
    expect(screen.getByText('Workshop')).toBeInTheDocument()
    expect(screen.getByText('Sample')).toBeInTheDocument()

    const rsvpLink = screen.getByRole('link', { name: /rsvp/i })
    expect(rsvpLink).toHaveAttribute('href', 'https://example.com/rsvp')
    expect(rsvpLink).toHaveAttribute('target', '_blank')
  })
})
