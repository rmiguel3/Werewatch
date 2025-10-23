export default function MovieCard({ title = "Wolfman", image = "/wolfman.jpg" }) {
  return (
    <div className="movie-card">
      <img
        src={image}
        alt={title + " poster"}
        className="movie-card__image"
      />
      <h3 className="movie-card__title">{title}</h3>
    </div>
  );
}