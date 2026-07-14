import { useState } from "react"
import FavGrid from "../components/FavGrid"
import OrderButton from "../components/OrderButtons"
import { data } from "../data/dummyData"

import { oldestOrder, newestOrder } from "../utils/listOrder"
export default function Favorites() {
    const [favList, setFavList] = useState(oldestOrder(data.results))
    const [currentActive, setCurrentActive] = useState("oldest")

    
    function setOldest(){
        if(currentActive !== "oldest"){
            setCurrentActive("oldest")
            setFavList(oldestOrder(favList))
        }
    }

    function setNewest(){
        if(currentActive !== "newest"){
            setCurrentActive("newest")
            setFavList(newestOrder(favList))
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


    return (
        <main className="flex flex-col "> 
            <OrderButtons
            setOldest={setOldest}
            setNewest={setNewest}
            setMostPopular={setMostPopular}
            setLeastPopular={setLeastPopular}
            currentActive={currentActive}
            />
            <FavGrid 
            movies={favList}/>
        </main>
    )
}