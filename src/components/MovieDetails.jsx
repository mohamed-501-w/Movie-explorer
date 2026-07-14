import dateFormat from "../utils/dateFormat"

export default function MovieDetails({movie}) {
    const genreString = movie.genres && movie.genres.map(el => el.name).join(', ') 

    const budget = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
        }).format(movie.budget)

    const revenue = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
        }).format(movie.revenue)

    
    const release_date = dateFormat(movie.release_date)

    return (
        <div className="p-6 text-lg font-semibold opacity-80 space-y-3 tracking-wider">
            <p>Genres: {genreString}</p>
            <p>Budget: {budget}</p>
            <p>Revenue: {revenue}</p>
            <p>Release date:  {release_date}</p>
        </div>
    )
}