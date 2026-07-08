import { useState , useEffect} from 'react'

import './Home.css'
import MovieHero from '../components/MovieHero'
import MovieCardsContainer from '../components/MovieCardsContainer'
import {data} from '../data/dummyData'

function Home() {
  const [trendingList, setTrendingList] = useState(data.results)


  return (
    <>
      {/* hero section big hav a bit of details and rating */}

      <section>
        <MovieHero 
        movie={trendingList[2]}/>
      </section>

      {/* <section trending */}
        
      <MovieCardsContainer />

      {/* section popular */}
        
      <MovieCardsContainer />
    </>
  )
}

export default Home
