import { AlbumSection } from '../components/gallery/AlbumSection'
import { EmptyState } from '../components/events/EmptyState'
import { Container } from '../components/ui/Container'
import { PlaceholderNotice } from '../components/ui/PlaceholderNotice'
import { SectionHeading } from '../components/ui/SectionHeading'
import { galleryAlbums } from '../data/galleryAlbums'

export function Gallery() {
  const hasSampleContent = galleryAlbums.some((album) => album.isSample)

  return (
    <Container className="flex flex-col gap-14 py-14 sm:py-20">
      <SectionHeading
        eyebrow="Photos"
        title="Gallery"
        description="A look back at CSA workshops, competitions, and socials, organized by event. Click any photo to view it larger."
      />

      {hasSampleContent && (
        <PlaceholderNotice>
          the albums and photos below are placeholder graphics for demonstration purposes,
          not real photos from BYU CSA events. Officers can add real albums in{' '}
          <code className="bg-navy-950/10 rounded-xs px-1 py-0.5 font-mono text-[0.85em]">
            src/data/galleryAlbums.ts
          </code>
          .
        </PlaceholderNotice>
      )}

      {galleryAlbums.length > 0 ? (
        <div className="flex flex-col gap-16">
          {galleryAlbums.map((album) => (
            <AlbumSection key={album.id} album={album} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No photos yet"
          description="Photos from CSA events will appear here after they're added by officers."
        />
      )}
    </Container>
  )
}
