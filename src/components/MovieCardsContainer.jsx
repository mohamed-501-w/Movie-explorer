import MovieCard from "./MovieCard"



export default function MovieCardsContainer({movies ,title}){

    const moviesEl =movies.map(movie => (
    <MovieCard 
    key={movie.id}
    movie={movie}/>
    ))

    // const moviesEl = <MovieCard key={movies[0].id} movie={movies[0]}/>

    return (
        <>

            <section className="snap-x overflow-x-clip  mx-4 my-8 ">
                <h3 className="text-xl font-bold mb-4 text-shadow-secondary text-shadow-xs tracking-wider">{title}</h3>
                <section className=" flex items-center content-center ">
                    {moviesEl}
                </section>
            </section>
        </>
    )
}