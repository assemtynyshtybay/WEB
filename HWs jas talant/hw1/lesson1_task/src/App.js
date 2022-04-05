import './App.css';
import React, {useState, useEffect} from 'react';
import TracksTable from './components/table';
import { Routes, Route } from 'react-router-dom';
import Shrek from './les2/shrek';
import Les3 from './les2/Les3';
import Lesson3 from './les3/Lesson3';
import NavBar from './components/les6/navbar';
import MoviesPage from './components/les6/moviesPage';
import SignInPage from './pages/signInPage';
import SignUpPage from './pages/SignUpPage';
import {Auth} from './components/context/Auth';
import CounterFunc from './les3/counter_func';

function App() {
  const [movies, setMovies] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('idToken'))

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    .then((res) => res.json())
    .then((data) => setMovies(data.results))
  }, [])
  console.log(movies)
  console.log(movies[12])
  return (
    <Auth.Provider value={{ token, setToken }}>
      <NavBar/>
      {/* <nav className='nav'>
        <Link to='/'>Top tracks</Link>
        <Link to='/shrek' >About Shrek</Link>
        <Link to='/hw1'>hw1</Link> 
        <Link to='/lesson3'>lesson3</Link>
        <Link to='/lesson3/fib'>Fibonacci</Link>
        <Link to='/lesson3/checkNumber'>Check number</Link>
        <Link to='/lesson3/counter'>Counter</Link>
      </nav> */}
      <Routes>
        <Route path='/Top%20Tracks' element={<TracksTable />} />
        <Route path='/About%20Shrek' element={<Shrek />} />
        <Route path='/hw1' element={<Les3 />} />
        <Route path='/lesson3' element={<Lesson3/>} />
        <Route path='/Movies' element={<MoviesPage/>} />
        <Route path='/Movies/:id' element={<MoviesPage/>} />
        <Route path='/lesson3/fib' element={<Lesson3/>} />
        <Route path='/lesson3/counter' element={<Lesson3/>} />
        <Route path='/lesson3/checkNumber' element={<Lesson3/>} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/Counter' element={<CounterFunc />} />
      </Routes>
    </Auth.Provider>
  );
}

export default App;
