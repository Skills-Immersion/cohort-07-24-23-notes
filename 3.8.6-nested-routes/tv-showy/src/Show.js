import React from 'react';
import './Show.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Show({ showData }) {
  return <div className="card">
    {/* the "a" tag w/ href attribute is good for linking outside of our React applications */}
    {/* if we want to link within our React applications, we use the Link component w/ to attribute from react-router */}
    <Link to={`/shows/${showData.id}`}><h3 className="btn btn-primary">{showData.name}</h3></Link>
    {/* <a href={`/shows/${showData.id}`}><h3>{showData.name}</h3></a> */}
    <img src={showData.image.medium} />
    <ul>
      <li>Average rating: {showData.rating.average}</li>
      {showData.network && <li>Ran on the network {showData.network.name}</li>}
    </ul>
  </div>
}

export default Show;
