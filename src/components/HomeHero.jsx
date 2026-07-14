import clsx from "clsx";
import { NavLink } from "react-router";


export default function HomeHero({movie}){
    const imgUrl = `url(https://image.tmdb.org/t/p/w1280${movie.backdrop_path})`

    return (
        <NavLink 
            
        to={`/movie/${movie.id}`} 
        className={({isActive}) => clsx("overflow-clip relative   animate-fadeLeft flex justify-center p-4 mb-8", isActive && "pointer-events-none")}>
            
            <img 
                className="h-[70dvh] md:h-[calc(100vh-120px)] w-full rounded-sm mask-x-from-95% mask-y-from-85%"
                src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} alt={`${movie.title} backdrop`} />

            <div className="absolute w-[90%] bottom-0 left-[50%] -translate-x-1/2  drop-shadow-2xl drop-shadow-primary"> 
                <h1 className="text-[clamp(1.5rem,4vw,3rem)] mb-4 font-black tracking-wider italic text-shadow-lg/30 text-shadow-secondary ">
                    {movie.title}
                </h1>

                <p 
                className="text-[clamp(0.625rem,2vw,1.75rem)] font-bold italic text-shadow-lg/50 text-shadow-primary opacity-70 tracking-wider">
                    {movie.overview}
                </p>

            </div>

        </NavLink>
    )
}