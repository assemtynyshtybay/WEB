import './App.css';
import TracksTable from './components/table';
import { Routes, Route } from 'react-router-dom';
import Shrek from './les2/shrek';
import Les3 from './les2/Les3';
import Lesson3 from './les3/Lesson3';
import NavBar from './components/les6/navbar';
import MoviesPage from './components/les6/moviesPage';

function App() {
  return (
    <>
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
        <Route path='/lesson3/fib' element={<Lesson3/>} />
        <Route path='/lesson3/counter' element={<Lesson3/>} />
        <Route path='/lesson3/checkNumber' element={<Lesson3/>} />
      </Routes>
    </>
  );
}

export default App;
