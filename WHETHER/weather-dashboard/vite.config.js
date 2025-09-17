import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        weatherToday: 'http://localhost:5001/dist/assets/remoteEntry.js',
        weatherForecast: 'http://localhost:5002/dist/assets/remoteEntry.js',
      },
      shared: { react: { singleton: true }, 'react-dom': { singleton: true } },
    }),
  ],
  server: { port: 5000 },
})
