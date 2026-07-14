import SearchCard from "./SearchCard";

export default function SearchContainer({list}) {
    const listEL = list.map((movie, index) => (
        <SearchCard 
        key={movie.id || index}
        movie={movie}
        />
    ))
    return (
        <>
            {listEL}
        </>
    )
}