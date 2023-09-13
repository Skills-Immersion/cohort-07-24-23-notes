import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function ShowDetail() {
  // params will give us access to all the URL parameters (the things that start with a : in the Route, which is in the App.js file)
  const params = useParams();

  const [show, setShow] = useState({})
  useEffect(() => {
    // get the data
    fetch(`https://api.tvmaze.com/shows/${params.id}`)
      // transform the data
      .then(response => response.json())
      // save the data into a state variable for later display
      .then(data => setShow(data));
  }, [params.id])
  return <div>
    show detail for show {params.id}
    <h2>{show.name}</h2>
    {show.image && <img src={show.image.medium} />}
    <p>{show.summary}</p>
  </div>
}

export default ShowDetail;