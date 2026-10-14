/// <reference types="vitest/config" />
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // For GitHub Pages, change this to '/YOUR_REPOSITORY_NAME/'.
  // Keep '/' for local development and Vercel deployments.
  base: '/',
  test: {
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    globals: true,
    css: true,
  },
})
