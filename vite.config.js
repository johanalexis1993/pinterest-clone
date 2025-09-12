import { defineConfig } from 'vite'
export default defineConfig({
  root: 'public',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: { input: { index: 'public/index.html' } }
  },
  server: { port: 5173, open: true }
})
