import p1 from '../assets/gallery/placeholder-1.svg'
import p2 from '../assets/gallery/placeholder-2.svg'
import p3 from '../assets/gallery/placeholder-3.svg'
import p4 from '../assets/gallery/placeholder-4.svg'
import p5 from '../assets/gallery/placeholder-5.svg'
import p6 from '../assets/gallery/placeholder-6.svg'
import type { GalleryAlbum } from '../types/content'

/**
 * Gallery albums.
 *
 * ── FOR OFFICERS ──────────────────────────────────────────────────────
 * Add a real album by appending an object with `isSample` omitted, a
 * real `cover` photo, and real photos in `photos`. Drop image files into
 * `src/assets/gallery/` (see the README for size/format guidance) and
 * import them at the top of this file the same way the placeholders
 * below are imported.
 *
 * Every album/photo below is placeholder artwork, not a real photo from
 * a BYU CSA event — keep `isSample: true` on demo entries.
 * ──────────────────────────────────────────────────────────────────────
 */
export const galleryAlbums: GalleryAlbum[] = [
  {
    id: 'sample-fall-ctf-2025',
    title: 'Example Album: Fall CTF Night 2025',
    date: '2025-10-17',
    description:
      'Placeholder album standing in for photos from a fall capture-the-flag night.',
    isSample: true,
    cover: {
      id: 'sample-fall-ctf-2025-cover',
      src: p1,
      alt: 'Placeholder graphic (abstract node diagram) standing in for the cover photo of Example Album: Fall CTF Night 2025.',
    },
    photos: [
      {
        id: 'sample-fall-ctf-2025-cover',
        src: p1,
        alt: 'Placeholder graphic (abstract node diagram) standing in for the cover photo of Example Album: Fall CTF Night 2025.',
        caption: 'Placeholder — replace with a real photo from Fall CTF Night.',
      },
      {
        id: 'sample-fall-ctf-2025-2',
        src: p2,
        alt: 'Placeholder graphic (abstract node diagram) standing in for a second photo from Example Album: Fall CTF Night 2025.',
        caption: 'Placeholder — replace with a real photo from Fall CTF Night.',
      },
      {
        id: 'sample-fall-ctf-2025-3',
        src: p3,
        alt: 'Placeholder graphic (abstract node diagram) standing in for a third photo from Example Album: Fall CTF Night 2025.',
        caption: 'Placeholder — replace with a real photo from Fall CTF Night.',
      },
    ],
  },
  {
    id: 'sample-spring-workshops-2026',
    title: 'Example Album: Spring Workshop Series 2026',
    date: '2026-03-12',
    description:
      'Placeholder album standing in for photos from the spring hands-on workshop series.',
    isSample: true,
    cover: {
      id: 'sample-spring-workshops-2026-cover',
      src: p4,
      alt: 'Placeholder graphic (abstract node diagram) standing in for the cover photo of Example Album: Spring Workshop Series 2026.',
    },
    photos: [
      {
        id: 'sample-spring-workshops-2026-cover',
        src: p4,
        alt: 'Placeholder graphic (abstract node diagram) standing in for the cover photo of Example Album: Spring Workshop Series 2026.',
        caption: 'Placeholder — replace with a real workshop photo.',
      },
      {
        id: 'sample-spring-workshops-2026-2',
        src: p5,
        alt: 'Placeholder graphic (abstract node diagram) standing in for a second photo from Example Album: Spring Workshop Series 2026.',
        caption: 'Placeholder — replace with a real workshop photo.',
      },
      {
        id: 'sample-spring-workshops-2026-3',
        src: p6,
        alt: 'Placeholder graphic (abstract node diagram) standing in for a third photo from Example Album: Spring Workshop Series 2026.',
        caption: 'Placeholder — replace with a real workshop photo.',
      },
    ],
  },
]
