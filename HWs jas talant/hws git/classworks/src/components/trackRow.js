import React from 'react';

import './table.css';

function TrackRow({track}) {
  return(
    <>
      <tr>
          <td><img src={track.image[0]['#text']} alt="music.svg"/></td>
          <td title={track.title}>
            <div className="mus-title">{track.name}</div></td>
          <td>{track.artist.name}</td>
          <td>{track.playcount}</td>
          <td><button type="button" onclick={track.url}>Shazam</button></td>
      </tr>
    </>
  )
}
export default TrackRow;