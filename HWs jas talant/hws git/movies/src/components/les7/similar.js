import React, { useState, useEffect} from 'react';

import '../../components/les6/movieCard.css';
import MovieItem from '../les7/movieItem';

function Similar() {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/634649/similar?api_key=d65708ab6862fb68c7b1f70252b5d91c&language=ru-RU')
    .then(data => data.json())
    .then(data => setmovies(data))
  }, [])

  return(
    <>
      <div className="cards">
        {
          movies.map( (movie) => (
            <MovieItem key={movie.id} movie={movie}/>
          ))
        }
      </div>
    </>
  );
}
export default Similar;