import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'weatherForecast',
      filename: 'remoteEntry.js',
      exposes: { './ForecastApp': './src/ForecastApp.jsx' },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
  server: { port: 5002 },
  base: '/',
})
