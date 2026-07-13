import HomeCard from "./HomeCard"



export default function MovieCardsContainer({movies ,title}){
    const moviesEl = movies.map(movie => (
    <HomeCard 
    key={movie.id}
    movie={movie}/>
    ))

    // const moviesEl = <HomeCard key={movies[0].id} movie={movies[0]}/>

    return (
        <section>
            <h3 className="ml-4 text-xl font-bold mb-4  text-shadow-secondary text-shadow-xs tracking-wider">{title}</h3>
            <section className="snap-x overflow-x-scroll overflow-hidden custom-scrollbar  mx-4 my-8">
                <section className=" flex items-stretch h-1/2">
                    {moviesEl}
                </section>
            </section>
        </section>
    )
}