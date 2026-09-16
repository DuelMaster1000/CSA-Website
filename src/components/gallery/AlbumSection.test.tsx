import { fireEvent, render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import type { GalleryAlbum } from '../../types/content'
import { AlbumSection } from './AlbumSection'

const album: GalleryAlbum = {
  id: 'test-album',
  title: 'Test Album',
  date: '2026-01-01',
  description: 'A test album.',
  cover: { id: 'photo-1', src: '/photo-1.svg', alt: 'First test photo' },
  photos: [
    {
      id: 'photo-1',
      src: '/photo-1.svg',
      alt: 'First test photo',
      caption: 'First caption',
    },
    {
      id: 'photo-2',
      src: '/photo-2.svg',
      alt: 'Second test photo',
      caption: 'Second caption',
    },
  ],
}

describe('AlbumSection', () => {
  it('opens the lightbox with an accessible dialog when a thumbnail is clicked', async () => {
    const user = userEvent.setup()
    render(<AlbumSection album={album} />)

    await user.click(screen.getByRole('button', { name: /open photo 1 of 2/i }))

    const dialog = screen.getByRole('dialog')
    expect(dialog).toBeInTheDocument()
    expect(within(dialog).getByAltText('First test photo')).toBeInTheDocument()
  })

  it('closes the lightbox and returns focus to the trigger on Escape', async () => {
    const user = userEvent.setup()
    render(<AlbumSection album={album} />)

    const trigger = screen.getByRole('button', { name: /open photo 1 of 2/i })
    await user.click(trigger)
    expect(screen.getByRole('dialog')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(trigger).toHaveFocus()
  })

  it('navigates to the next photo with the right arrow key', async () => {
    const user = userEvent.setup()
    render(<AlbumSection album={album} />)

    await user.click(screen.getByRole('button', { name: /open photo 1 of 2/i }))
    const dialog = screen.getByRole('dialog')
    expect(within(dialog).getByAltText('First test photo')).toBeInTheDocument()

    fireEvent.keyDown(document, { key: 'ArrowRight' })

    expect(
      within(screen.getByRole('dialog')).getByAltText('Second test photo'),
    ).toBeInTheDocument()
  })
})
