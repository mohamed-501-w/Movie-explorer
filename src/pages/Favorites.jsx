import { useState } from "react"
import FavGrid from "../components/FavGrid"
import OrderButtons from "../components/OrderButtons"
import { data } from "../data/dummyData"

import { oldestOrder, newestOrder ,mostPopularOrder, leastPopularOrder} from "../utils/listOrder"
export default function Favorites() {
    const [favList, setFavList] = useState(oldestOrder(data.results))
    const [currentActive, setCurrentActive] = useState("oldest")

    function removeFromList(id){
        setFavList(prev => prev.filter(item => item.id !== id))
    }
    
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
            setFavList(mostPopularOrder(favList))
        }
    }
        
    function setLeastPopular(){
        if(currentActive !== "leastPopularity"){
            setCurrentActive("leastPopularity")
            setFavList(leastPopularOrder(favList))
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
            movies={favList}
            removeFromList={removeFromList}/>
        </main>
    )
}