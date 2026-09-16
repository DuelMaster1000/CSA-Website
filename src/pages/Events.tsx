import { EmptyState } from '../components/events/EmptyState'
import { EventCard } from '../components/events/EventCard'
import { Container } from '../components/ui/Container'
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice'
import { SectionHeading } from '../components/ui/SectionHeading'
import { events } from '../data/events'
import { getPastEvents, getUpcomingEvents } from '../utils/date'

export function Events() {
  const upcomingEvents = getUpcomingEvents(events)
  const pastEvents = getPastEvents(events)
  const hasSampleContent = events.some((event) => event.isSample)

  return (
    <Container className="flex flex-col gap-14 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Calendar"
        title="Events"
        description="Everything CSA has planned, sorted soonest first. RSVP links are provided where available."
      />

      {hasSampleContent && (
        <PlaceholderNotice>
          the events on this page are illustrative examples for demonstration purposes,
          not confirmed BYU CSA events. Officers can replace them in{' '}
          <code className="bg-navy-950/10 rounded-xs px-1 py-0.5 font-mono text-[0.85em]">
            src/data/events.ts
          </code>
          .
        </PlaceholderNotice>
      )}

      <section aria-labelledby="upcoming-heading" className="flex flex-col gap-6">
        <h2
          id="upcoming-heading"
          className="font-display text-navy-950 text-2xl font-medium"
        >
          Upcoming
        </h2>
        {upcomingEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No events scheduled right now"
            description="BYU CSA doesn't have any confirmed upcoming events at the moment. Check back soon — this page updates as new events are added."
          />
        )}
      </section>

      {pastEvents.length > 0 && (
        <section aria-labelledby="past-heading" className="flex flex-col gap-6">
          <h2
            id="past-heading"
            className="font-display text-navy-950 text-2xl font-medium"
          >
            Past events
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </section>
      )}
    </Container>
  )
}
