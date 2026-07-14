import { Link } from "react-router"
import dateFormat from "../utils/dateFormat"

export default function SearchCard({movie}) {

    return (
        <>
            <Link 
            to={`/movie/${movie.id}`}
            className="shadow-[1px_3px_6px_-1px] rounded-xl shadow-secondary w-[90%] p-1 max-w-xl mx-auto grid grid-cols-3 items-stretch">
                <img 
                className="shrink-0 aspect-9/16 rounded-xl"
                loading="lazy"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
                
                <div className="col-span-2 p-5 flex  flex-col  justify-evenly"> 
                    <h1 className="xs:text-xl sm:text-2xl mb-5 font-black tracking-wider italic text-shadow-lg/20 text-shadow-secondary ">
                        {movie.title}
                    </h1>
                    <h1 className="xs:text-base text-sm sm:text-lg mb-5 font-semibold tracking-wider italic text-shadow-lg/20 text-shadow-secondary ">
                        {dateFormat(movie.release_date)}
                    </h1>

                    

            </div>
            
                
            
            </Link>
            

        </>
    )
}
