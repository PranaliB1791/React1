// booking/src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Booking from "../../movielist/src/Booking";

export default function App() {
  return (
    <Routes>
      {/* Booking Page only */}
      <Route path="/booking/:id" element={<Booking />} />
    </Routes>
  );
}
