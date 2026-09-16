# BYU Cybersecurity Students Association — Website

The public website for BYU CSA: a student community for learning, practicing, and
exploring cybersecurity. Built with React, TypeScript, Vite, and Tailwind CSS. It's a
fully static, informational site — no backend, no accounts, no forms that collect
personal information.

> **Status:** the events and gallery content shipped in this repo is **placeholder/sample
> data**, clearly labeled as such in the UI (look for the "Sample content" banners and
> "SAMPLE" badges). It exists to show what the layout looks like with real data in it.
> See [Content still needed from BYU CSA](#content-still-needed-from-byu-csa) below.

## Tech stack

- React 19 + TypeScript
- Vite 8 (build tool / dev server)
- Tailwind CSS 4 (via `@tailwindcss/vite`, no separate config file — tokens live in
  `src/index.css`)
- React Router 7 (`BrowserRouter`)
- Vitest + React Testing Library (tests)
- Prettier (formatting) + oxlint (linting)

## Getting started

Requires [Node.js](https://nodejs.org/) 20+.

```bash
npm install
npm run dev
```

The dev server prints a local URL (something like `http://localhost:5173/CSA-Website/`).
Note the `/CSA-Website/` path segment — the app is configured with that base path to
match GitHub Pages project-site hosting (see [Deployment](#deployment)).

## Available scripts

| Script                 | What it does                                           |
| ---------------------- | ------------------------------------------------------ |
| `npm run dev`          | Start the local dev server with hot reload             |
| `npm run build`        | Type-check, then produce a production build in `dist/` |
| `npm run preview`      | Serve the production build locally, for a final check  |
| `npm run typecheck`    | Type-check without building                            |
| `npm run lint`         | Lint with oxlint                                       |
| `npm run format`       | Format all files with Prettier                         |
| `npm run format:check` | Check formatting without writing changes               |
| `npm run test`         | Run the test suite once                                |
| `npm run test:watch`   | Run tests in watch mode                                |

Before committing, it's worth running `npm run format && npm run typecheck && npm run lint && npm run test && npm run build` — that's the same sequence used to verify this project.

## Updating content

All club content lives in typed data files under `src/data/`. **You should never need
to touch a component or page to add an event or a photo** — just edit these files.

### Events — `src/data/events.ts`

Add a new object to the `events` array:

```ts
{
  id: 'unique-kebab-case-id',
  title: 'Intro to Reverse Engineering',
  startDateTime: '2026-11-04T18:00:00-07:00', // ISO 8601, with UTC offset
  endDateTime: '2026-11-04T19:30:00-07:00',   // optional
  location: 'TMCB 1170',
  description: 'What the event is and who it is for.',
  category: 'workshop', // see EventCategory in src/types/content.ts
  status: 'upcoming',   // 'upcoming' | 'past'
  externalLink: 'https://forms.gle/...', // optional RSVP link
  image: someImportedImage, // optional, see "Images" below
}
```

- The Events page and the Home page's "Upcoming events" preview both sort automatically
  by date — you don't need to keep the array in order yourself.
- An event counts as "upcoming" until its `endDateTime` (or `startDateTime`, if there's
  no end time) has passed, regardless of the `status` field — but set `status` to
  `'past'` once an event is over so it moves into the "Past events" section even if
  someone's clock is off.
- Utah is `-07:00` (MDT, roughly March–November) or `-06:00` (MST, the rest of the
  year) relative to UTC. Always include the offset so dates display correctly for
  every visitor regardless of their timezone.
- **Do not set `isSample: true`** on real events — that flag exists only to badge
  demo/placeholder content so it's never mistaken for a real confirmed event. Delete
  the sample events in this file once you have real ones (or leave them removed and
  the Events page will show its "no events scheduled" empty state instead).

### Gallery — `src/data/galleryAlbums.ts`

Add a new object to the `galleryAlbums` array with a cover photo and a `photos` array.
Each photo needs a `src`, and **specific, accurate `alt` text** describing what's
actually in the photo (not a generic caption) — this is what screen reader users hear
instead of seeing the image. An optional `caption` shows underneath the photo in the
lightbox viewer.

As with events, only set `isSample: true` on placeholder content — never on a real
album.

### Site config — `src/data/siteConfig.ts`

Club name, short description, mission statement, social links, and contact email.
`socialLinks` and `contactEmail` are intentionally left empty until officers approve
specific accounts/addresses to publish — don't fill these in with guesses.

## Images

- Drop image files into `src/assets/` (for images referenced by data files, imported
  like the existing placeholder SVGs — `import photo from '../assets/gallery/my-photo.jpg'`)
  or into `public/` (for files referenced by a plain string path, unprocessed by the
  build).
- **Prefer `.jpg`/`.webp` for photos.** Aim to keep individual photos under ~300–500 KB.
  Resize to a sensible max dimension before adding (~1600px on the long edge is plenty
  for this site — nothing is displayed larger than that).
- Vite automatically fingerprints and optimizes imported images at build time. Files
  under 4 KB get inlined as data URIs (this is why the placeholder SVGs don't show up
  as separate files in `dist/assets/`); larger files become separate hashed files.
- Always write real, specific `alt` text. If a photo is decorative and adds no
  information (rare, but the hero graphic is an example), use `alt=""`.

## Design tokens

Colors, fonts, and other design tokens live in a single `@theme` block at the top of
`src/index.css`. No official BYU CSA brand colors/logo are on file yet, so the current
palette (deep navy, off-white, and one warm accent) is a restrained placeholder —
update the token values there once the club approves specific brand colors, and swap
`public/favicon.svg` once a logo exists.

## Accessibility notes

- The gallery lightbox (`src/components/gallery/Lightbox.tsx`) supports Escape to
  close, Left/Right arrow keys to navigate, focus is trapped inside the dialog while
  open, and focus returns to the thumbnail that opened it on close.
- Motion (hover scale on gallery thumbnails, smooth scrolling) respects
  `prefers-reduced-motion`.
- There's a "Skip to main content" link for keyboard users, visible on focus.

## Deployment

This is a fully static site — `npm run build` produces a `dist/` folder that can be
hosted anywhere that serves static files (GitHub Pages, Netlify, Vercel, S3, etc.),
with no server-side code required.

**Currently configured for GitHub Pages** at `github.com/DuelMaster1000/CSA-Website`,
served as a project site under the `/CSA-Website/` path:

- `vite.config.ts` sets `base: '/CSA-Website/'`.
- `src/App.tsx` sets a matching `basename="/CSA-Website"` on the router.
- `public/404.html` contains a small, standard redirect script (the
  ["SPA GitHub Pages" technique](https://github.com/rafgraph/spa-github-pages)) so
  that direct links to a route like `/CSA-Website/events` work correctly — GitHub Pages
  has no server-side rewrites, so without this a page refresh on any route but the
  homepage would 404. The matching decode script is inlined in `index.html`.

To deploy: build (`npm run build`), then publish the contents of `dist/` to the
`gh-pages` branch (or configure GitHub's "Deploy from a branch"/Actions Pages flow to
do this automatically on push to `main`).

**To deploy elsewhere instead** (Vercel, Netlify, a custom domain): change `base: '/'`
in `vite.config.ts` and `basename="/"` (or remove the `basename` prop entirely) in
`src/App.tsx`, and `public/404.html` / the decode script in `index.html` are no longer
needed (Vercel and Netlify both handle SPA routing automatically via their own
rewrite rules).

## Content still needed from BYU CSA

This site was built with clearly-labeled placeholder content in place of anything not
yet confirmed. Before this goes live as the real BYU CSA site, it needs:

- **Logo and/or approved brand colors** — the current navy/off-white/gold palette and
  text wordmark are placeholders (see [Design tokens](#design-tokens)).
- **Real event details** to replace the sample events in `src/data/events.ts`.
- **Real event photos** to replace the placeholder graphics in
  `src/data/galleryAlbums.ts`.
- **Approved social media links and a public contact email** for `src/data/siteConfig.ts`.
- **Leadership names/bios**, if the club wants an officer list on the About page —
  currently that section just links to BYU's official club directory.
