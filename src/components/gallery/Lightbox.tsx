import { useEffect, useRef } from 'react'
import type { GalleryPhoto } from '../../types/content'

interface LightboxProps {
  photos: GalleryPhoto[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ photos, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const photo = photos[index]

  useEffect(() => {
    closeButtonRef.current?.focus()
  }, [])

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        onClose()
        return
      }

      if (event.key === 'ArrowRight') {
        onNavigate((index + 1) % photos.length)
        return
      }

      if (event.key === 'ArrowLeft') {
        onNavigate((index - 1 + photos.length) % photos.length)
        return
      }

      if (event.key === 'Tab') {
        const container = dialogRef.current
        if (!container) return
        const focusable = container.querySelectorAll<HTMLElement>(
          'button, [href], [tabindex]:not([tabindex="-1"])',
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [index, photos.length, onClose, onNavigate])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = originalOverflow
    }
  }, [])

  return (
    <div
      className="bg-navy-950/90 fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8"
      onClick={onClose}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={photo.caption ?? photo.alt}
        className="relative flex max-h-full w-full max-w-4xl flex-col gap-3"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="text-offwhite flex items-center justify-between">
          <span className="text-sm">
            {index + 1} of {photos.length}
          </span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="hover:bg-offwhite/10 rounded-sm px-3 py-2 text-sm font-semibold"
          >
            Close
          </button>
        </div>

        <img
          src={photo.src}
          alt={photo.alt}
          className="border-navy-800 bg-navy-900 max-h-[70vh] w-full border object-contain"
        />

        <div className="text-offwhite flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={() => onNavigate((index - 1 + photos.length) % photos.length)}
            className="hover:bg-offwhite/10 rounded-sm px-4 py-2 text-sm font-semibold"
            aria-label="Previous photo"
          >
            ← Previous
          </button>
          {photo.caption && (
            <p className="text-offwhite/80 text-center text-sm">{photo.caption}</p>
          )}
          <button
            type="button"
            onClick={() => onNavigate((index + 1) % photos.length)}
            className="hover:bg-offwhite/10 rounded-sm px-4 py-2 text-sm font-semibold"
            aria-label="Next photo"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  )
}
