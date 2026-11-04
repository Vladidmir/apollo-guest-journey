import { copyFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const pagesBase = '/apollo-guest-journey/'

function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    apply: 'build',
    enforce: 'post',
    closeBundle() {
      copyFileSync('dist/index.html', 'dist/404.html')
    },
  }
}

export default defineConfig(({ command }) => ({
  base: command === 'build' ? pagesBase : '/',
  plugins: [react(), spaFallback()],
  server: { host: true, port: 5173 },
  preview: { host: true, port: 4173 },
}))
