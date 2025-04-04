import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    host: '0.0.0.0',
    strictPort: true,
    cors: true,
    hmr: {
      host: 'localhost',
    },
    watch: {
      usePolling: true,
    },
    allowedHosts: ['localhost', '.onrender.com', 'ruth-portfolio.onrender.com']
  },
})
