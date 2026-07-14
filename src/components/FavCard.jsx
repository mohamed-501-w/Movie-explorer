import { Link } from "react-router"
import genreList from "../utils/genre"


export default function FavCard({movie}) {

    const genresEl = genreList(movie)

    return (
            <Link 
                to={`/movie/${movie.id}`}
                className="relative drop-shadow drop-shadow-secondary">
                    <img 
                    className="rounded-2xl h-full"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie poster" />

                    <div 
                    className="absolute peer-hover:opacity-100 hover:opacity-100 opacity-0 transition-opacity
                    flex peer-focus-within:flex rounded-2xl  p-2 w-full min-h-full bg-primary/90 text-secondary top-0 flex-col justify-end ">
                        <h2 
                            className="self-center my-auto text-lg italic font-black">{movie.title}
                        </h2>
                        <p 
                            className="text-sm font-bold tracking-wide opacity-60 mb-2">Genres: {genresEl}
                        </p>
                    </div>
                    
                    <label 
                        htmlFor={movie.id}
                        onClick={(e) => e.stopPropagation()}
                        className="absolute right-2 top-2 z-10 flex items-center justify-center  shadow-md cursor-pointer select-none transition-transform active:scale-95 group"
                        >
                        {/* 1. The input must be a direct sibling of the SVG or we use group-checked */}
                        <input 
                            id={movie.id}
                            className="peer sr-only" 
                            type="checkbox"
                            onClick={(e) => e.stopPropagation()} 
                        />
                        
                        {/* 2. The Heart SVG */}
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="pointer-events-none transition-all duration-300 text-gray-400
                                    peer-checked:text-[#ff0000] 
                                    peer-checked:fill-[#ff0000] 
                                    peer-checked:stroke-[#ff0000] 
                                    peer-checked:animate-[heartButton_1s_ease-in-out]"
                        >
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                    </label>
                </Link>
    )
    }