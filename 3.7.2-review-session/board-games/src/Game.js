import React, { useState } from 'react';

function Game({ gameData }) {

  // using a state variable to control whether the summary is displayed
  const [shouldDisplaySummary, setShouldDisplaySummary] = useState(false);
  // change that state variable when the user clicks anywhere on the game
  return <div onClick={() => setShouldDisplaySummary(!shouldDisplaySummary)}>
    <h3>{gameData.name}</h3>
    <img src={gameData.imageUrl} />
    {/* use that state variable to determine whether the summary is displayed */}
    {shouldDisplaySummary && <p>{gameData.summary}</p>}
  </div>
}

export default Game;