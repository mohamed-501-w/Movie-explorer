import { useState , useEffect} from 'react'

import './Home.css'
import HomeHero from '../components/HomeHero'
import HomeCardsContainer from '../components/HomeCardsContainer'


function Home() {
  const [trendingList, setTrendingList] = useState([])
  const [popularList, setPopularList] = useState([])
  const [heroIndex,setHeroIndex] = useState(0)
  
  const isEmpty = trendingList.length === 0
  useEffect( ()=> {
    const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`
      }                          
    };

    fetch(url, options)
      .then(res => res.json())
      .then(json => setTrendingList(json.results))
      .catch(err => console.error(err));


      const urlPop = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const optionsPop = {
        method: 'GET',
        headers: {accept: 'application/json', Authorization: `Bearer ${import.meta.env.VITE_TMDB_KEY}`}
      };

      fetch(urlPop, options)
        .then(res => res.json())
        .then(json => setPopularList(json.results))
        .catch(err => console.error(err));

      

      

    }, [])

  useEffect(()=>{
    if(!isEmpty){
      const timer = setInterval(()=>{
      setHeroIndex(prev => (prev + 1 ) % trendingList.length) 
      }, 7010)
      return () => {
        clearInterval(timer)
    }}
  },[isEmpty])

  

  return (
    <main className=''>
      {/* hero section big hav a bit of details and rating */}

      {!isEmpty && <HomeHero  
      
        key={heroIndex}
        movie={trendingList[heroIndex]}
        />}

      {/* <section trending */}
        
      <HomeCardsContainer 
      movies={trendingList}
      title="Trending: "/>

      {/* section popular */}
        
      <HomeCardsContainer 
      movies={popularList}
      title="Popular: "/>
    </main>
  )
}

export default Home
