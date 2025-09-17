import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'weatherToday',
      filename: 'remoteEntry.js',
      exposes: { './TodayApp': './src/TodayApp.jsx' },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
  server: { port: 5001 },
  base: '/',
})
