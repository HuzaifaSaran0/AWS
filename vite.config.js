import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  base: '/', // Reset to absolute path
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    assetsDir: 'static', // Change assets directory
    manifest: true
  }
});