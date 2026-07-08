import { useState , useEffect} from 'react'

import './Home.css'
import MovieHero from '../components/MovieHero'
import MovieCardsContainer from '../components/MovieCardsContainer'
import {data} from '../data/dummyData'

function Home() {
  const [trendingList, setTrendingList] = useState(data.results)

  const [heroIndex,setHeroIndex] = useState(0)

  useEffect(()=>{
    setInterval(()=>{
    setHeroIndex(prev => (prev + 1 ) % trendingList.length) 
  }, 7010)
  },[])

  return (
    <>
      {/* hero section big hav a bit of details and rating */}

      <section className='scrollbar-none overflow-auto'>
        <MovieHero 
        key={trendingList[heroIndex].id}
        movie={trendingList[heroIndex]}
        isHome={true}
        isMovie={false}
        />
      </section>

      {/* <section trending */}
        
      <MovieCardsContainer 
      movies={trendingList}
      title="Trending: "/>

      {/* section popular */}
        
      <MovieCardsContainer 
      movies={trendingList}
      title="Popular: "/>
    </>
  )
}

export default Home
