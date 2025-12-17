import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { useLocation } from 'react-router-dom';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const REGION = 'US';

export default function MovieDetailsPage() {
    const { state } = useLocation();
    const { movie, img } = state;
    const [details, setDetails] = useState(null);
    const [providers, setProviders] = useState(null);
    const [selectedProviderIds, setSelectedProviderIds] = useState([]);

    useEffect(() => {
        async function fetchDetails() {
            if (!movie || !movie.id || !TMDB_API_KEY) return;
            try {
                const url = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${TMDB_API_KEY}&language=en-US`;
                const res = await fetch(url);
                const data = await res.json();
                setDetails(data);
                console.log(data);
                try {
                    const pUrl = `https://api.themoviedb.org/3/movie/${movie.id}/watch/providers?api_key=${TMDB_API_KEY}`;
                    const pres = await fetch(pUrl);
                    const pdata = await pres.json();
                    setProviders(pdata.results?.[REGION] ?? null);
                } catch (e) {
                    // ignore provider fetch errors
                }
            } catch (e) {
                // ignore fetch errors for now
            }
        }
        fetchDetails();
    }, [movie]);

    // Load selected providers from local storage and cross-reference with available providers
    useEffect(() => {
        try {
            const raw = localStorage.getItem('selectedProviders');
            if (!raw) return setSelectedProviderIds([]);
            const parsed = JSON.parse(raw);
            if (parsed && Array.isArray(parsed.providers)) {
                const items = parsed.providers;
                if (items.length > 0 && typeof items[0] === 'object' && items[0] !== null && 'id' in items[0]) {
                    setSelectedProviderIds(items.map((p) => p.id));
                } else {
                    setSelectedProviderIds(items);
                }
            } else if (Array.isArray(parsed)) {
                setSelectedProviderIds(parsed);
            } else {
                setSelectedProviderIds([]);
            }
        } catch (e) {
            setSelectedProviderIds([]);
        }
    }, []);

    function formatRuntime(minutes) {
        if (!minutes && minutes !== 0) return 'N/A';
        const h = Math.floor(minutes / 60);
        const m = minutes % 60;
        return h > 0 ? `${h}h ${m}m` : `${m}m`;
    }

    // Format provider names, optionally filtering by selected providers
    function formatProviders(p, selectedIds) {
        if (!p) return 'N/A';
        const names = [];
        const collect = (arr) => {
            if (!Array.isArray(arr)) return;
            arr.forEach((it) => {
                if (!it || !it.provider_id) return;
                if (selectedIds && selectedIds.length > 0 && !selectedIds.includes(it.provider_id)) return;
                if (it.provider_name && !names.includes(it.provider_name)) names.push(it.provider_name);
            });
        };
        collect(p.flatrate);
        if (!names.length) return 'None of your selected providers';
        return names.join(', ');
    }

    return (
        <>
            <Header />
            <div className='movie-details-page'>
                <div className='movie-details-image-and-title'>
                    <h1>{movie?.title}</h1>
                    <img src={img} alt={movie?.title} />
                </div>
                <div className='movie-details'>
                    <p className='movie-details-text'>{movie?.overview}</p>
                    <p className='movie-details-text'>Release Date: {movie?.release_date}</p>
                    <p className='movie-details-text'>Runtime: {formatRuntime(details?.runtime ?? movie?.runtime)}</p>
                    <p className='movie-details-text'>Watch on: {formatProviders(providers, selectedProviderIds)}</p>
                </div>
            </div>
        </>
    );
}