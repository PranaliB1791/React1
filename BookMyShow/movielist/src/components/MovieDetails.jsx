import React from "react";
import { useParams, Link } from "react-router-dom";

const demoMovies = [
  { id: "m1", title: "Interstellar", language: "English", rating: 8.6, genres: ["Sci-Fi", "Adventure"], poster: "https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg", description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival." },
  { id: "m2", title: "RRR", language: "Telugu", rating: 8.0, genres: ["Action", "Drama"], poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg", description: "Two legendary revolutionaries journey away from home before they start fighting for their country in 1920s India." },
  { id: "m3", title: "3 Idiots", language: "Hindi", rating: 8.4, genres: ["Comedy", "Drama"], poster: "https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg", description: "Two friends are searching for their long lost companion who inspired them to think differently." },
  { id: "m4", title: "Avengers: Endgame", language: "English", rating: 8.4, genres: ["Action", "Adventure"], poster: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg", description: "After the devastating events of Infinity War, the Avengers assemble once more to reverse Thanos' actions." },
];

export default function MovieDetails() {
  const { id } = useParams();
  const movie = demoMovies.find((m) => m.id === id);

  if (!movie) return <h2 style={{ textAlign: "center", marginTop: 40 }}>Movie not found</h2>;

  return (
    <div style={{ maxWidth: 900, margin: "24px auto", background: "#fff", borderRadius: 12, boxShadow: "0 2px 8px rgba(0,0,0,0.1)", overflow: "hidden", paddingBottom: 16 }}>
      <img src={movie.poster} alt={movie.title} style={{ width: "50%", height: "auto", objectFit: "contain", display: "block", margin: "0 auto" }} />

      <div style={{ padding: 16 }}>
        <h2 style={{ marginBottom: 12 }}>{movie.title}</h2>
        <p><strong>Language:</strong> {movie.language} • ⭐ {movie.rating}</p>
        <p><strong>Genres:</strong> {movie.genres.join(", ")}</p>
        <p style={{ marginTop: 12 }}>{movie.description}</p>

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 20 }}>
          <Link to="/" style={{ display: "inline-block", padding: "8px 16px", background: "#007bff", color: "#fff", borderRadius: 6, textDecoration: "none", fontWeight: 600 }}>⬅ Back to Movies</Link>

          <Link to={`/booking/${movie.id}`} style={{ display: "inline-block", padding: "8px 16px", background: "#e50914", color: "#fff", borderRadius: 6, textDecoration: "none", fontWeight: 600 }}>🎟 Book Now</Link>
        </div>
      </div>
    </div>
  );
}
