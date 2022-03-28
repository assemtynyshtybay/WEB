import * as React from 'react';

import './movieCard.css';
import Rate from './rate';

export default function MovieCard({movie}) {
  return (
    <>
      <div className="card" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/${movie.poster_path}')`   }}>
        <div className="bottom"> 
          <div>
            <Rate params={movie.vote_average}/><span>{movie.vote_average}</span>
          </div>
          <span className="title">{movie.original_title}</span>
        </div>    
      </div>
    </>
  );
}
