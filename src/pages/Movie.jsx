import { useEffect, useState } from "react";
import { useParams } from "react-router";
import MovieHero from "../components/MovieHero";
import MovieDetails from "../components/MovieDetails";
import MovieImages from "../components/MovieImages";




export default function Movie() {
    const [movie, setMovie] = useState({})
    const [images, setImages] = useState([])

    let { id } = useParams();

    useEffect( ()=> {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;

    const movieOptions = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
        }                          
    };
    fetch(url,movieOptions)
        .then(res => res.json())
        .then(res => setMovie(res))
        .catch(err => console.error(err));



    const imagesOptions = {method: 'GET', headers: {accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
    }};

    fetch(`https://api.themoviedb.org/3/movie/${id}/images`, imagesOptions)
    .then(res => res.json())
    .then(res => setImages(res.backdrops))
    .catch(err => console.error(err));


    }, [id])

return (
    
    <>
        <MovieHero 
        movie={movie} 
        isHome={false} 
        isMovie={true}/>
        
        <MovieImages 
        images={images}
        />

        <MovieDetails 
        movie={movie}
        />
    </>
)
}