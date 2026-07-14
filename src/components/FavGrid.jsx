import FavCard from "./FavCard"
export default function FavGrid({movies ,removeFromList}) {
    
    
    const cardEl = movies.map((movie, index) => (
        <FavCard 
        key={movie.id || index}
        movie={movie}
        removeFromList={removeFromList}
        />
    ))

    return (
        <div className="w-[80%] content-stretch my-10 gap-10 mx-auto grid grid-cols-[repeat(auto-fill,minmax(8rem,1fr))] ">
            {cardEl}
        </div>
    )}