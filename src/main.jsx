import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router";
import Home from './pages/Home'
import Nav from './components/Nav';
import Movie from './pages/Movie'
import Favorites from './pages/Favorites'
import './pages/Home.css'
import Search from './pages/Search'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Nav />} >
        <Route index element={<Home />} />
        <Route path='/movie/:id' element={<Movie />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/search/:search' element={<Search />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
