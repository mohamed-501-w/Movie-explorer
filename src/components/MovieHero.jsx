import clsx from "clsx";
import { Link } from "react-router";


export default function MovieHero({movie, isHome, isMovie ,isE}){
    return (
        <Link to={`/movie/${movie.id}`} 
        className={clsx("flex justify-center items-center shadow shadow-gr mb-10", isHome &&"animate-fadeLeft ", isMovie &&"")}>
            <div className="pl-4 max-w-md shadow "> 
                <h1 className="text-3xl mb-10 font-black tracking-wider italic text-shadow-lg/20 text-shadow-secondary ">
                    {movie.title}
                </h1>

                <p 
                className="text-lg font-semibold italic opacity-70 tracking-wide">
                    {movie.overview}
                </p>

            </div>
            <img 
            className={clsx("rounded-sm  mask-radial-from-30% mask-radial-to-95% mask-radial-at-right mask-l-from-50 mask-r-from-95% mask-b-from-98% ", isMovie && "h-150" )}
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
        </Link>
    )
}