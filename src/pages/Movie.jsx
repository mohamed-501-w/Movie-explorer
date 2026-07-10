import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieHero from "../components/MovieHero";






export default function Movie() {
    const [movie, setMovie] = useState({})
    let { id } = useParams();

    useEffect( ()=> {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
        }                          
    };
    fetch(url,options)
        .then(res => res.json())
        .then(res => setMovie(res))


    }, [id])

return (
    
    <>
        <MovieHero 
        movie={movie} 
        isHome={false} 
        isMovie={true}/>
    </>
)
}