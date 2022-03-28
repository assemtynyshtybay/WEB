import React, { useEffect, useState } from 'react';

import MovieCard from './movieCard';
import '../les6/movieCard.css';

function MoviesPage() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate')
    .then((res) => res.json())
    .then((data) => setMovies(data.results))
  }, [])

  return(
    <>
      <div className="cards">
        {
          movies.map( (movie) => (
            <MovieCard key={movie.id} movie={movie}/>
          ))
        }
      </div>
    </>
  )
}
export default MoviesPage;