import * as React from 'react';

import './movieCard.css';

export default function MovieCard({movie}) {
  return (
    <div className="card" style={{backgroundImage:`url('https://image.tmdb.org/t/p/original/'+${movie.poster_path})`}}>
        <span>{movie.original_title}</span>
    </div>
  );
}
