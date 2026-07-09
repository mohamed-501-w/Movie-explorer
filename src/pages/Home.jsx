import { useState , useEffect} from 'react'

import './Home.css'
import MovieHero from '../components/MovieHero'
import MovieCardsContainer from '../components/MovieCardsContainer'
import {data} from '../data/dummyData'

function Home() {
  const [trendingList, setTrendingList] = useState(data.results)
  const [popularList, setPopularList] = useState([])
  const [heroIndex,setHeroIndex] = useState(0)


  // useEffect( ()=> {
  //   const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       accept: 'application/json',
  //       Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
  //     }                          
  //   };

  //   fetch(url, options)
  //     .then(res => res.json())
  //     .then(json => setTrendingList(json.results))
  //     .catch(err => console.error(err));


  //     const urlPop = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
  //     const optionsPop = {
  //       method: 'GET',
  //       headers: {accept: 'application/json', Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`}
  //     };

  //     fetch(urlPop, options)
  //       .then(res => res.json())
  //       .then(json => setPopularList(json.results))
  //       .catch(err => console.error(err));


  //   }, [])

  useEffect(()=>{
    const timer = setInterval(()=>{
    setHeroIndex(prev => (prev + 1 ) % trendingList.length) 
  }, 7010)
  return () => {
    clearInterval(timer)
  }

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
      movies={popularList}
      title="Popular: "/>
    </>
  )
}

export default Home
