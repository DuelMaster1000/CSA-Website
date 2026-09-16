import { useRef, useState } from 'react'
import type { GalleryAlbum } from '../../types/content'
import { formatAlbumDate } from '../../utils/date'
import { Badge } from '../ui/Badge'
import { Lightbox } from './Lightbox'

interface AlbumSectionProps {
  album: GalleryAlbum
}

export function AlbumSection({ album }: AlbumSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const triggerRefs = useRef<(HTMLButtonElement | null)[]>([])

  function closeLightbox(returnFocusIndex: number) {
    setOpenIndex(null)
    triggerRefs.current[returnFocusIndex]?.focus()
  }

  return (
    <section
      aria-labelledby={`album-${album.id}-heading`}
      className="flex flex-col gap-5"
    >
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <div>
          <h3
            id={`album-${album.id}-heading`}
            className="font-display text-navy-950 text-2xl font-medium"
          >
            {album.title}
          </h3>
          <p className="text-navy-800/70 mt-1 text-sm">{formatAlbumDate(album.date)}</p>
        </div>
        {album.isSample && <Badge variant="sample">Sample</Badge>}
      </div>

      <p className="text-navy-800/85 max-w-2xl text-sm leading-relaxed sm:text-base">
        {album.description}
      </p>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
        {album.photos.map((photo, photoIndex) => (
          <button
            key={photo.id}
            ref={(el) => {
              triggerRefs.current[photoIndex] = el
            }}
            type="button"
            onClick={() => setOpenIndex(photoIndex)}
            className="group border-line bg-navy-900 aspect-[4/3] overflow-hidden border"
            aria-label={`Open photo ${photoIndex + 1} of ${album.photos.length} from ${album.title}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-200 ease-out group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          photos={album.photos}
          index={openIndex}
          onClose={() => closeLightbox(openIndex)}
          onNavigate={setOpenIndex}
        />
      )}
    </section>
  )
}
