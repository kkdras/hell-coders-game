import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import { defineConfig } from 'vite'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: Number(process.env.CLIENT_PORT) || 3000,
  },
  define: {
    __SERVER_PORT__: process.env.SERVER_PORT,
    __API_ENDPOINT__: JSON.stringify(process.env.API_ENDPOINT),
  },
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        app: './index.html',
        serviceWorker: './src/sw.js',
      },
      output: {
        entryFileNames: assetInfo => {
          return assetInfo.name === 'entry-server'
            ? 'entry-server.cjs'
            : 'assets/js/[name]-[hash].js'
        },
      },
    },
  },
  legacy: {
    buildSsrCjsExternalHeuristics: true,
  },
})
