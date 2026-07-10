import MovieCard from "./MovieCard"



export default function MovieCardsContainer({movies ,title}){
    const moviesEl = movies.map(movie => (
    <MovieCard 
    key={movie.id}
    movie={movie}/>
    ))

    // const moviesEl = <MovieCard key={movies[0].id} movie={movies[0]}/>

    return (
        <>
            <h3 className="text-xl font-bold mb-4 text-shadow-secondary text-shadow-xs tracking-wider">{title}</h3>
            <section className="snap-x overflow-x-scroll overflow-hidden custom-scrollbar  mx-4 my-8">
                <section className=" flex items-stretch ">
                    {moviesEl}
                </section>
            </section>
        </>
    )
}