import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/send-email': {
        target: 'http://localhost:8080',
        changeOrigin: true, // Ensures the origin header is rewritten to the target URL
        rewrite: (path) => path.replace(/^\/send-email/, '/send-email'), // Adjust the path if necessary
      },
    },
  },
})
