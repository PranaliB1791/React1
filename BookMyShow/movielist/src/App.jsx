// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import Booking from "./Booking";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MoviesList />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/booking/:id" element={<Booking />} />
    </Routes>
  );
}
