import { HeroGraphic } from '../components/home/HeroGraphic'
import {
  CareerIcon,
  CompetitionIcon,
  CtfIcon,
  PeerIcon,
  SpeakerIcon,
  WorkshopIcon,
} from '../components/icons/ActivityIcons'
import { Container } from '../components/ui/Container'
import { CtaLink } from '../components/ui/CtaLink'
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice'
import { SectionHeading } from '../components/ui/SectionHeading'
import { EmptyState } from '../components/events/EmptyState'
import { EventCard } from '../components/events/EventCard'
import { events } from '../data/events'
import { galleryAlbums } from '../data/galleryAlbums'
import { siteConfig } from '../data/siteConfig'
import { getUpcomingEvents } from '../utils/date'

const activities = [
  {
    icon: WorkshopIcon,
    title: 'Technical workshops',
    description: 'Hands-on sessions that build real, practical security skills.',
  },
  {
    icon: SpeakerIcon,
    title: 'Guest speakers',
    description: 'Industry professionals share their path and answer questions.',
  },
  {
    icon: CtfIcon,
    title: 'Capture-the-flag nights',
    description: 'Practice offense and defense skills in a low-stakes setting.',
  },
  {
    icon: CompetitionIcon,
    title: 'Competition preparation',
    description: 'Team practice ahead of regional and national competitions.',
  },
  {
    icon: PeerIcon,
    title: 'Peer learning',
    description: 'Members at every level teach and learn from each other.',
  },
  {
    icon: CareerIcon,
    title: 'Career exploration',
    description: 'Conversations about internships, research, and career paths.',
  },
]

export function Home() {
  const upcomingEvents = getUpcomingEvents(events).slice(0, 3)
  const featuredAlbum = galleryAlbums[0]

  return (
    <>
      <section className="border-navy-800 bg-navy-950 text-offwhite border-b">
        <Container className="grid gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
          <div className="flex flex-col gap-6">
            <span className="text-accent text-sm font-semibold tracking-widest uppercase">
              {siteConfig.university}
            </span>
            <h1 className="font-display text-4xl leading-tight font-medium sm:text-5xl lg:text-6xl">
              A student community for learning, practicing, and exploring cybersecurity.
            </h1>
            <p className="text-offwhite/80 max-w-xl text-base leading-relaxed sm:text-lg">
              {siteConfig.mission}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <CtaLink to="/events">See upcoming events</CtaLink>
              <CtaLink to="/about" variant="secondary-inverse">
                About BYU CSA
              </CtaLink>
            </div>
          </div>
          <div className="mx-auto aspect-square w-full max-w-sm opacity-90 lg:max-w-none">
            <HeroGraphic />
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container className="flex flex-col gap-10">
          <SectionHeading
            eyebrow="What members do"
            title="Concrete ways to get involved"
            description="CSA is built around doing, not just talking about security. Here's what shows up on a typical semester's calendar."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => (
              <div
                key={activity.title}
                className="border-line flex flex-col gap-3 border p-6"
              >
                <activity.icon className="text-accent-dark" />
                <h3 className="font-display text-navy-950 text-lg font-medium">
                  {activity.title}
                </h3>
                <p className="text-navy-800/80 text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-line bg-paper border-y py-16 sm:py-20">
        <Container className="flex flex-col gap-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="Calendar" title="Upcoming events" />
            <CtaLink to="/events" variant="secondary">
              View all events
            </CtaLink>
          </div>

          {upcomingEvents.some((event) => event.isSample) && (
            <PlaceholderNotice>
              the events below are illustrative examples, not confirmed BYU CSA events.
            </PlaceholderNotice>
          )}

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No events scheduled right now"
              description="Check back soon, or view the events page for updates as they're confirmed."
            />
          )}
        </Container>
      </section>

      {featuredAlbum && (
        <section className="py-16 sm:py-20">
          <Container className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="flex flex-col gap-4">
              <SectionHeading eyebrow="Gallery" title="A look at past activities" />
              {featuredAlbum.isSample && (
                <PlaceholderNotice>
                  this photo is a placeholder graphic, not a real event photo.
                </PlaceholderNotice>
              )}
              <p className="text-navy-800/80 text-sm leading-relaxed sm:text-base">
                {featuredAlbum.description}
              </p>
              <div>
                <CtaLink to="/gallery" variant="secondary">
                  Browse the gallery
                </CtaLink>
              </div>
            </div>
            <img
              src={featuredAlbum.cover.src}
              alt={featuredAlbum.cover.alt}
              className="border-line aspect-[4/3] w-full border object-cover"
            />
          </Container>
        </section>
      )}
    </>
  )
}
