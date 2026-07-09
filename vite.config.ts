import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// GitHub Pages serves this project from https://hassanireza.github.io/blackMagic-main/
// so the base path must match the repository name exactly.
export default defineConfig({
  base: '/blackMagic/',
  plugins: [react(), svgr()],
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
