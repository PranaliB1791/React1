import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host',
      remotes: {
        movielist: 'http://localhost:5001/assets/remoteEntry.js' // URL where movielist runs
      },
      shared: ['react', 'react-dom', 'react-router-dom']
    })
  ]
})
