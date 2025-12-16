import { useEffect, useRef, useState } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const REGION = "US";

export default function MovieRow({genre, genreName, providers }){
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [baseImagePath, setBaseImagePath] = useState("");
    const sliderRef = useRef(null);

    useEffect(() => {
        fetchBaseImagePath();
        if (genre && providers && providers.length > 0) {
            fetchMovies();
        }
    }, []);

    async function fetchBaseImagePath() {
        const url = `https://api.themoviedb.org/3/configuration?api_key=${TMDB_API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setBaseImagePath(data.images.base_url);
    }

    async function fetchMovies() {
        if (!genre || !providers || providers.length === 0) return;
        setLoading(true);

        // Join multiple provider IDs with commas (e.g., "8,119,15")
        const providerParam = providers.join(',');

        const url = `https://api.themoviedb.org/3/discover/movie?` +
        `api_key=${TMDB_API_KEY}` +
        `&language=en-US` +
        `&sort_by=popularity.desc` +
        `&include_adult=false` +
        `&with_watch_providers=${providerParam}` +
        `&watch_region=${REGION}` +
        `&with_genres=${genre}`;

        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results || []);
        setLoading(false);
    }

    const slideLeft = () => {
        const slider = sliderRef.current;
        if (!slider) return;
        const amount = Math.round(slider.clientWidth * 0.75);
        slider.scrollBy({ left: -amount, behavior: "smooth" });
    };

    const slideRight = () => {
        const slider = sliderRef.current;
        if (!slider) return;
        const amount = Math.round(slider.clientWidth * 0.75);
        slider.scrollBy({ left: amount, behavior: "smooth" });
    };

    return (
        <section className="section">
            <h2 className="section__title">{genreName}</h2>
            <div className="movie-row__container ">
                <div className="movie-row-wrapper">
                    <MdChevronLeft onClick={slideLeft} className="movie-row__nav--left" />
                    <div ref={sliderRef} className="movie-row no-scrollbar" role="list">
                        {movies.map((m, i) => {
                            // Construct full image URL with fallback for missing posters
                            const imageUrl = m.poster_path 
                                ? `${baseImagePath}w500${m.poster_path}` 
                                : "https://via.placeholder.com/500x750?text=No+Image";
                            
                            return (
                                <div key={i} role="listitem" className="movie-row__item">
                                    <MovieCard 
                                        title={m.title || "Unknown Title"} 
                                        image={imageUrl} 
                                    />
                                </div>
                            );
                        })}
                    </div>
                    <MdChevronRight onClick={slideRight} className="movie-row__nav--right" />
                </div>
            </div>
        </section>
    );
}