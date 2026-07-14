import { Link } from "react-router";
import { genres } from "../data/genres";
import genreList from "../utils/genre";

export default function MovieCard({movie}){


    const genresEl = genreList(movie)


    return (
        <>
        
            <Link 
            to={`/movie/${movie.id}`}
            className="relative snap-end shrink-0 w-1/3 sm:w-1/3 md:w-1/5 lg:w-1/9 drop-shadow drop-shadow-secondary flex">
                <img 
                className="rounded-2xl  my-2 w-[95%]  mx-auto object-fill"
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`} alt={movie.title} />
                
                
                <div className="absolute  hover:opacity-100 opacity-0 transition-opacity
                flex peer-focus-within:flex rounded-2xl  p-2 w-full min-h-full bg-primary/90 text-secondary top-0 flex-col justify-end ">
                    <h2 
                    className="self-center my-auto text-lg italic font-black">{movie.title}</h2>
                    <p 
                    className="text-sm font-bold tracking-wide opacity-60 mb-2">Genres: {genresEl}</p>
    
                    
                </div>
            
            </Link>
            

        </>
    )
}