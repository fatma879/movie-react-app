function MovieCard({ movie }) {
return (
    <div className="movie-card">
    <img src={movie.posterURL} alt={`${movie.title} poster`} />

    <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <p>Rating: {movie.rating}/10</p>

    </div>
    </div>
)}
export default MovieCard;