import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      // Each page is its own HTML entry so GitHub Pages serves /cv/ as a static file
      input: {
        main: resolve(__dirname, 'index.html'),
        cv: resolve(__dirname, 'cv/index.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    port: 8000
  }
})
