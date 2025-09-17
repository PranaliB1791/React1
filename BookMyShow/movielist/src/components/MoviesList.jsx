import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const demoMovies = [
    { id: 'm1', title: 'Interstellar', language: 'English', rating: 8.6, poster: 'https://upload.wikimedia.org/wikipedia/en/b/bc/Interstellar_film_poster.jpg' },
    { id: 'm2', title: 'RRR', language: 'Telugu', rating: 8.0, poster: 'https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg' },
    { id: 'm3', title: '3 Idiots', language: 'Hindi', rating: 8.4, poster: 'https://upload.wikimedia.org/wikipedia/en/d/df/3_idiots_poster.jpg' },
    { id: 'm4', title: 'Avengers: Endgame', language: 'English', rating: 8.4, poster: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg' },
]

export default function MoviesList() {
    const [search, setSearch] = useState('')
    const [language, setLanguage] = useState('All')

    const filteredMovies = demoMovies.filter(m => {
        const matchesSearch = m.title.toLowerCase().includes(search.toLowerCase())
        const matchesLang = language === 'All' || m.language === language
        return matchesSearch && matchesLang
    })

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '20px 0' }}>
            <h1 style={{ textAlign: 'center', color: '#e50914', fontSize: '36px', fontWeight: 'bold', marginBottom: 30 }}>
                🎬 BookMyShow
            </h1>

            {/* Search + Filter */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: 12, marginBottom: 20 }}>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc', width: 220 }}
                />
                <select
                    value={language}
                    onChange={(e) => setLanguage(e.target.value)}
                    style={{ padding: 8, borderRadius: 6, border: '1px solid #ccc' }}
                >
                    <option value="All">All Languages</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Telugu">Telugu</option>
                </select>
            </div>

            {/* Movies Grid */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 20, padding: '0 20px' }}>
                {filteredMovies.map(movie => (
                    <Link key={movie.id} to={`/movies/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <div style={{
                            width: 285,
                            borderRadius: 12,
                            overflow: 'hidden',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            cursor: 'pointer',
                            transition: 'transform 0.2s'
                        }}
                            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                            onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                        >
                            <img src={movie.poster} alt={movie.title} style={{ width: '100%', height: 330, objectFit: 'cover' }} />
                            <div style={{ padding: 10 }}>
                                <h3 style={{ fontSize: 16, fontWeight: 'bold', marginBottom: 4 }}>{movie.title}</h3>
                                <p style={{ fontSize: 12, color: '#555' }}>Language: {movie.language}</p>
                                <p style={{ fontSize: 12, color: '#555' }}>⭐ {movie.rating}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
