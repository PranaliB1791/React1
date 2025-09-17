import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'movielist',                 // the remote app name
      filename: 'remoteEntry.js',        // the file the host will load
      exposes: {
        './MoviesList': './src/remote/MoviesListRemote.jsx', // what we expose
         './MovieDetails': './src/components/MovieDetails.jsx',
      },
      shared: ['react', 'react-dom', 'react-router-dom'],
    }),
  ],
  server: { port: 5001 },   // dev server
  preview: { port: 5001 },  // preview (serves the build) — useful for host integration
  build: {
    target: 'esnext',
    minify: false,
    cssCodeSplit: true,
  },
})
