import { useState,useEffect } from "react"
import dateFormat from "../utils/dateFormat"

export default function MovieDetails({movie}) {
    const [isFav, setIsFav] = useState(false);

    useEffect(() => {
        if (!movie?.id) return; 

        const favData = localStorage.getItem("fav");
        if (favData) {
            const arr = JSON.parse(favData);
            const exists = arr.some(item => item.id === movie.id);
            setIsFav(exists);
        }
    }, [movie]);

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

    function addRemoveFav(){
        setIsFav(prev => !prev)
        if(!isFav){
            if(localStorage.getItem("fav")){
                const arr = JSON.parse(localStorage.getItem("fav"))
                localStorage.setItem("fav",JSON.stringify([...arr, movie]))
            } 
            else {
                localStorage.setItem("fav",JSON.stringify([movie]))
            }
        } 
        else {
            
            if(localStorage.getItem("fav")){
                const arr = JSON.parse(localStorage.getItem("fav"))
                localStorage.setItem("fav",JSON.stringify(arr.filter(item => item.id !== movie.id)))
            } 
        }
    }

    return (
        <div className="p-6 text-lg font-semibold opacity-80 space-y-3 tracking-wider">
            <p>Genres: {genreString}</p>
            <p>Budget: {budget}</p>
            <p>Revenue: {revenue}</p>
            <p>Release date:  {release_date}</p>
            <button
                className="px-6 py-4 rounded-3xl bg-main1 font-black text-2xl"
                onClick={addRemoveFav}>
                    {isFav ? "Added to favorites" : "Add to favorites"}
            </button>
        </div>
    )
}