import { Link } from "react-router"
import genreList from "../utils/genre"


export default function FavCard({movie, removeFromList}) {

    const genresEl = genreList(movie)

    return (
        


            <Link 
                to={`/movie/${movie.id}`}
                className="relative drop-shadow drop-shadow-secondary">
                    <img 
                    className="rounded-2xl h-full"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />

                    <div 
                    className="absolute hover:opacity-100 opacity-0 transition-opacity
                    flex rounded-2xl p-2 w-full min-h-full bg-primary/90 text-secondary top-0 flex-col justify-end ">
                        <h2 
                            className="self-center my-auto text-lg italic font-black">{movie.title}
                        </h2>
                        <p 
                            className="no text-sm font-bold tracking-wide opacity-60 mb-2">Genres: {genresEl}
                        </p>
                    </div>
                    


                    <div className="absolute right-1 top-1 z-20">
                        <button
                            onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            removeFromList(movie.id)
                            
                            }}
                            className="text-2xl font-black text-red-700 drop-shadow-md cursor-pointer transition-transform hover:scale-110 active:scale-95 p-1"
                        >
                            ✕
                        </button>
                    </div>
                </Link>
    )
    }