/// <reference types="vitest/config" />
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Base path matches the GitHub Pages project site (github.com/DuelMaster1000/CSA-Website).
// Change to '/' if deploying to a custom domain, Vercel, or Netlify instead.
export default defineConfig({
  base: '/CSA-Website/',
  plugins: [react(), tailwindcss()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./src/test/setup.ts'],
  },
})
