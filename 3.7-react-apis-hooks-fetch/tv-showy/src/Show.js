import React from 'react';
import './Show.css';

function Show({ showData }) {
  return <div className="card">
    <h3>{showData.name}</h3>
    <img src={showData.image.medium} />
    <ul>
      <li>Average rating: {showData.rating.average}</li>
      {showData.network && <li>Ran on the network {showData.network.name}</li>}
    </ul>
  </div>
}

export default Show;
