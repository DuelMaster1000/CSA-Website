import type { ClubEvent } from '../../types/content'
import { categoryLabels } from '../../utils/categories'
import { formatEventDate, formatEventTimeRange } from '../../utils/date'
import { Badge } from '../ui/Badge'
import { CtaLink } from '../ui/CtaLink'

interface EventCardProps {
  event: ClubEvent
}

export function EventCard({ event }: EventCardProps) {
  return (
    <article className="border-line bg-paper flex flex-col gap-4 border p-6">
      {event.image && (
        <img
          src={event.image}
          alt=""
          className="border-line aspect-video w-full border object-cover"
        />
      )}

      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-display text-navy-950 text-xl font-medium sm:text-2xl">
            {formatEventDate(event.startDateTime)}
          </p>
          <p className="text-navy-800/70 mt-1 text-sm">{formatEventTimeRange(event)}</p>
        </div>
        <div className="flex shrink-0 flex-col items-end gap-2">
          <Badge>{categoryLabels[event.category]}</Badge>
          {event.isSample && <Badge variant="sample">Sample</Badge>}
        </div>
      </div>

      <div>
        <h3 className="font-display text-navy-950 text-lg font-medium sm:text-xl">
          {event.title}
        </h3>
        <p className="text-navy-800/85 mt-2 text-sm leading-relaxed sm:text-base">
          {event.description}
        </p>
      </div>

      <div className="border-line text-navy-800/70 mt-auto flex flex-wrap items-center justify-between gap-3 border-t pt-4 text-sm">
        <span>{event.location}</span>
        {event.externalLink && (
          <CtaLink
            to={event.externalLink}
            external
            variant="secondary"
            className="px-4 py-2"
          >
            RSVP
          </CtaLink>
        )}
      </div>
    </article>
  )
}
