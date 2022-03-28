import React,{ useState, useEffect } from 'react';

import { fetchTopTracks } from '../fetcher/fetchTopTracks';

import TrackRow from './trackRow';
import './table.css';

function TracksTable() {
  const [tracks, settracks] = useState([]);
  useEffect(() => {
    fetchTopTracks().then((data) => settracks(data.toptracks.track));
  }, [])

  return(
    <>
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th><div className="cap">ПЕСНЯ</div></th>
            <th id="artis">АРТИСТ</th>
            <th id="albom">АЛЬБОМ</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        { tracks.map( (item) => (
          <TrackRow key = {item.key} track={item}/>
        ))}
        </tbody>
      </table>
    </>
  )
}
export default TracksTable;