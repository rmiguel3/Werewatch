import { useRef } from "react";
import MovieCard from "./MovieCard";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function MovieRow({ movies }){
    const sliderRef = useRef(null);

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
            <h2 className="section__title">Featured Movies</h2>
            <div className="movie-row__container ">
                <div className="movie-row-wrapper">
                    <MdChevronLeft onClick={slideLeft} className="movie-row__nav--left" />
                    <div ref={sliderRef} className="movie-row no-scrollbar" role="list">
                        {movies.map((m, i) => (
                        <div key={i} role="listitem" className="movie-row__item">
                            <MovieCard title={m.name} image={m.image} />
                        </div>
                        ))}
                    </div>
                    <MdChevronRight onClick={slideRight} className="movie-row__nav--right" />
                </div>
            </div>
        </section>
    );
}