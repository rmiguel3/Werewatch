import {useNavigate} from 'react-router-dom';

export default function MovieCard({ movie, image }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/movieDetailsPage", {state: {movie: movie, img: image }});
  }

  return (
    <div className="movie-card">
      <img
        src={image}
        onClick={handleClick}
        alt={movie.title + " poster"}
        className="movie-card__image"
      />
      <h3 className="movie-card__title">{movie.title}</h3>
    </div>
  );
}