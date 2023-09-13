import React, { useEffect, useState } from 'react';
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom/cjs/react-router-dom.min';
import ShowEpisodes from './ShowEpisodes';

function ShowDetail() {
  // params will give us access to all the URL parameters (the things that start with a : in the Route, which is in the App.js file)
  const params = useParams();
  // useRouteMatch will tell us which URL and which path we are at in the current route (which is the route declared on line 76 of App.js)
  // so the path will be literally "/shows/:id"
  // and the URL will be different depending on which show we're currently looking at
  // so, might be "/shows/1", or "/shows/175"
  const { url, path } = useRouteMatch();

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

    <Link to={url}>Show Summary</Link>
    <Link to={`${url}/episodes`}>Episodes</Link>

    <Route path={path} exact>
      <p>{show.summary && show.summary.replaceAll(/<\/?.>/g, '')}</p>
    </Route>
    <Route path={`${path}/episodes`}>
      <ShowEpisodes />
    </Route>

  </div>
}

export default ShowDetail;