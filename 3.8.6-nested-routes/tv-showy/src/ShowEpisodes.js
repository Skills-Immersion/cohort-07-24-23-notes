import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function ShowEpisodes() {
  const params = useParams();
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${params.id}/episodes`)
      .then(response => response.json())
      .then(data => setEpisodes(data))
  }, [params.id])
  return <div>
    {episodes.map(episode => (
      <div key={episode.id}>
        <h3>{episode.name}</h3>
        <p>Season {episode.season}, Episode {episode.number}</p>
        <p>{episode.summary.replaceAll(/<\/?.>/g, '')}</p>
      </div>
    ))}
  </div>
}

export default ShowEpisodes;
