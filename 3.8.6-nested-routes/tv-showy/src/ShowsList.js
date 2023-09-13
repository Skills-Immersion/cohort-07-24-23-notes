import React from 'react';
import Show from './Show';

function ShowsList({ shows }) {
  return <div>
    {shows.map(show => <Show showData={show} key={show.id} />)}
  </div>
}

export default ShowsList;