import React, { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const MoviesList = React.lazy(() => import('movielist/MoviesList'))
const MovieDetails = React.lazy(() => import('movielist/MovieDetails'))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MoviesList />} />
          <Route path="/movies/:id" element={<MovieDetails />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
