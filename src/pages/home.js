import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import MovieRow from "../components/MovieRow";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export default function HomePage() {
  const [genres, setGenres] = useState([]);
  const [userSelectedProviders, setUserSelectedProviders] = useState([]);

  // 🔹 Fetch providers and genres on mount
  useEffect(() => {
    fetchGenres();
    // read selected providers saved from SelectStreamers (localStorage)
    try {
      const raw = localStorage.getItem('selectedProviders');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && Array.isArray(parsed.providers)) {
          // support both old shape [{id,name},...] and new shape [id, id, ...]
          const items = parsed.providers;
          if (items.length > 0 && typeof items[0] === 'object' && items[0] !== null && 'id' in items[0]) {
            setUserSelectedProviders(items.map((p) => p.id));
          } else {
            setUserSelectedProviders(items);
          }
        }
      }
    } catch (e) {
      // ignore parse errors
    }
  }, []);

  async function fetchGenres() {
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${TMDB_API_KEY}&language=en-US`;
    const res = await fetch(url);
    const data = await res.json();
    setGenres(data.genres || []);
  }

  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <Header/>

      {/* Movie Rows by Genre */}
      <div className="mt-8">
        {genres.map((genre) => (
            <div key={genre.id} style={{marginBottom: '48px'}}>
              <MovieRow 
                genre={genre.id} 
                genreName={genre.name}
                providers={userSelectedProviders} 
              />
            </div>
        ))}
      </div>
    </div>
  );
}
