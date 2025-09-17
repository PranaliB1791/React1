import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

const demoMovies = [
  { id: "m1", title: "Interstellar", poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg" },
  { id: "m2", title: "RRR", poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg" },
  { id: "m3", title: "3 Idiots", poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg" },
  { id: "m4", title: "Avengers: Endgame", poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg" },
];

export default function Booking() {
  const { id } = useParams();
  const movie = demoMovies.find(m => m.id === id);

  const [tickets, setTickets] = useState(1);
  const [seatType, setSeatType] = useState("Regular");
  const priceMap = { Regular: 150, Premium: 250, VIP: 400 };
  const totalPrice = tickets * priceMap[seatType];

  if (!movie) return <h2 style={{ textAlign: "center", marginTop: 40 }}>Movie not found</h2>;

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: 40, background: "#000" }}>
      <div style={{ width: 500, background: "#fff", borderRadius: 12, padding: 20 }}>
        <h2 style={{ textAlign: "center", color: "#e50914", marginBottom: 20 }}>🎟 Book Tickets</h2>
        <img src={movie.poster} alt={movie.title} style={{ width: "100%", borderRadius: 12, marginBottom: 20 }} />
        <h3 style={{ textAlign: "center", marginBottom: 20 }}>{movie.title}</h3>

        <div style={{ marginBottom: 15 }}>
          <label style={{ fontWeight: 600 }}>Seat Type:</label>
          <select value={seatType} onChange={e => setSeatType(e.target.value)} style={{ marginLeft: 10, padding: 6, borderRadius: 6, width: "60%" }}>
            <option value="Regular">Regular</option>
            <option value="Premium">Premium</option>
            <option value="VIP">VIP</option>
          </select>
        </div>

        <div style={{ marginBottom: 15 }}>
          <label style={{ fontWeight: 600 }}>Tickets:</label>
          <input type="number" min={1} value={tickets} onChange={e => setTickets(Number(e.target.value))} style={{ marginLeft: 10, padding: 6, borderRadius: 6, width: 60 }} />
        </div>

        <p style={{ fontSize: 16, fontWeight: 600 }}>Total Price: ₹{totalPrice}</p>

        <button style={{ marginTop: 15, width: "100%", padding: "10px 0", background: "#e50914", color: "#fff", border: "none", borderRadius: 8, cursor: "pointer", fontSize: 16, fontWeight: 600 }}>
          Confirm Booking
        </button>

        <div style={{ marginTop: 15, textAlign: "center" }}>
          <Link to="/" style={{ color: "#007bff", textDecoration: "none", fontWeight: 500 }}>
            ⬅ Back to Movies
          </Link>
        </div>
      </div>
    </div>
  );
}
