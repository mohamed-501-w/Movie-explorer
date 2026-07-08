import { Link } from "react-router";
import { genres } from "../data/genres";

export default function MovieCard({movie,}){


    const genresEl = genres.filter(genre => {
        return movie.genre_ids.includes(genre.id)
    }).map(el => `${el.name}, `)


    return (
        <>
        
            <Link 
            to={"/movie"}
            className="relative snap-end  shrink-0 w-1/2  sm:w-1/3 md:w-1/5 lg:w-1/9 drop-shadow drop-shadow-secondary">
                <img 
                className="rounded-2xl peer my-2 w-[95%] mx-auto" 
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                
                
                <div className="absolute peer-hover:opacity-100 hover:opacity-100 opacity-0 transition-opacity
                flex peer-focus-within:flex rounded-2xl  p-2 w-full min-h-full bg-secondary/90 text-primary top-0 flex-col justify-end ">
                    <h2 
                    className="self-center my-auto text-lg italic font-black">{movie.title}</h2>
                    <p 
                    className="text-sm font-bold tracking-wide opacity-60 mb-2">Genres: {}</p>
                    <h3 
                    className="text-base font-bold mb-2">Overview : {genresEl}</h3>
                    
                </div>
            
            </Link>
            

        </>
    )
}