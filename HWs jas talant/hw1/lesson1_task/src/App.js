import './App.css';
import React, {useState} from 'react';
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
import TodoPage from './components/Todo/TodoPage';
import { Todo } from './components/context/Todo';

function App() {
  const [token, setToken] = useState(localStorage.getItem('idToken'))
  const [todo,setTodo] = useState(JSON.parse(localStorage.getItem('todos')))
  return (
    <Auth.Provider value={{ token, setToken }}>
      <Todo.Provider value={{todo, setTodo}}>
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
        <Route path='/Todo%20List' element={<TodoPage />} />
      </Routes>
      </Todo.Provider>
    </Auth.Provider>
  );
}

export default App;
