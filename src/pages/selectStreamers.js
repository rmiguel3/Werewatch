import React from 'react';
import Header from '../components/Header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const REGION = "US";

export default function SelectStreamers(){
    const navigate = useNavigate();
    const [providers, setProviders] = useState([]);
    const [baseImagePath, setBaseImagePath] = useState("");
    const [selectedProviders, setSelectedProviders] = useState([]);

    const handleSubmit = () => {
        const data = {
            providers: selectedProviders
        };
        localStorage.setItem('selectedProviders', JSON.stringify(data));
        navigate('/home');
    };

  const toggleService = (providerName) => {
    setSelectedProviders((prev) =>
      prev.includes(providerName)
        ? prev.filter((n) => n !== providerName)
        : [...prev, providerName]
    );
  };

    // 🔹 Fetch providers and base image path on mount
    useEffect(() => {
        fetchProviders();
        fetchBaseImagePath();
    }, []);

    async function fetchBaseImagePath() {
        const url = `https://api.themoviedb.org/3/configuration?api_key=${TMDB_API_KEY}`;
        const res = await fetch(url);
        const data = await res.json();
        setBaseImagePath(data.images.base_url);
    }

    async function fetchProviders() {
        const url = `https://api.themoviedb.org/3/watch/providers/movie?api_key=${TMDB_API_KEY}&language=en-US&watch_region=${REGION}`;
        const res = await fetch(url);
        const data = await res.json();
        const sorted = (data.results || []).sort((a, b) => 
            a.provider_name.localeCompare(b.provider_name)
        );
        setProviders(sorted);
    }

    return (
        <div>
            <Header/>
            <h1 className='select-streamers-title'>Select What Streaming Service You Use</h1>
            <ul className='logo-grid'>
                {providers.map((p) => (
                    <div 
                        key={p.provider_id} 
                        className={`provider-item ${selectedProviders.includes(p.provider_name) ? 'selected' : ''}`}
                        onClick={() => toggleService(p.provider_name)}
                    >
                        <div className='provider-image-wrapper'>
                            <img 
                                src={`${baseImagePath}w92${p.logo_path}`} 
                                alt={`${p.provider_name} logo`}
                                className='provider-logo'
                            />
                            {selectedProviders.includes(p.provider_name) && (
                                <span className='provider-check'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="12" fill="#2563eb" />
                                        <path d="M6 12l4 4 8-8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </span>
                            )}
                        </div>
                        <p>{p.provider_name}</p>
                    </div>
                ))}
            </ul>
            <div className='submit-container'>
                <button 
                    className='submit-button'
                    onClick={handleSubmit}
                    disabled={selectedProviders.length === 0}
                >
                    Submit
                </button>
            </div>
        </div>
    );

}