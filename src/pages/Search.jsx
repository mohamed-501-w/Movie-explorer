import { useEffect, useState } from "react";
import { useParams } from "react-router";
import SearchContainer from "../components/SearchContainer";
import OrderButtons from "../components/OrderButtons"
import { oldestOrder, newestOrder, mostPopularOrder, leastPopularOrder } from "../utils/listOrder"

export default function Search() {
    const [searchResults, setSearchResults] =useState([])
    const [currentActive, setCurrentActive] = useState("newest")
    
        
        function setOldest(){
            if(currentActive !== "oldest"){
                setCurrentActive("oldest")
                setSearchResults(oldestOrder(searchResults))
            }
        }
    
        function setNewest(){
            if(currentActive !== "newest"){
                setCurrentActive("newest")
                setSearchResults(newestOrder(searchResults))
            }
        }
        function setMostPopular(){
            if(currentActive !== "mostPopularity"){
                setCurrentActive("mostPopularity")
                setSearchResults(mostPopularOrder(searchResults))
            }
        }
    
        function setLeastPopular(){
            if(currentActive !== "leastPopularity"){
                setCurrentActive("leastPopularity")
                setSearchResults(leastPopularOrder(searchResults))
            }
        }

    let { search } = useParams();

    useEffect( ()=> {
        const url = `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`;
    
        const movieOptions = {
            method: 'GET',
            headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
            }                          
        };
        fetch(url,movieOptions)
            .then(res => res.json())
            .then(res => setSearchResults(mostPopularOrder(res.results)))
            .catch(err => console.error(err));
    
        }, [search])

    return (
        <main className="flex my-10  flex-col justify-center gap-8">
            <OrderButtons
                setOldest={setOldest}
                setNewest={setNewest}
                setMostPopular={setMostPopular}
                setLeastPopular={setLeastPopular}
                currentActive={currentActive}
            />
            <SearchContainer 
            list={searchResults}
            />
        </main>
    )
}