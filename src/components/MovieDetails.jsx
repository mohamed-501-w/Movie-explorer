export default function MovieDetails({movie}) {
    const genreString = movie.genres && movie.genres.map(el => el.name).join(', ') 

    return (
        <div className="p-6 text-lg font-semibold opacity-80 space-y-3 tracking-wider">
            <p>Genres: {genreString}</p>
            <p>Budget: {movie.budget}</p>
            <p>Revenue: {movie.revenue}</p>
            <p>Release_date:  {movie.release_date}</p>
        </div>
    )
}