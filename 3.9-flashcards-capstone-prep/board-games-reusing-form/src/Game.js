import React, { useState } from 'react';
import BoardGameForm from './BoardGameForm';

function Game({ gameData, REACT_APP_API_URL, fetchAllGames }) {

  // using a state variable to control whether the summary is displayed
  const [shouldDisplaySummary, setShouldDisplaySummary] = useState(false);
  // control whether edit form is displayed
  const [shouldDisplayEditForm, setShouldDisplayEditForm] = useState(false);
  const handleEditButtonClicked = (event) => {
    setShouldDisplayEditForm(!shouldDisplayEditForm);
    // stopping propagation, so we don't also show/hide the summary
    event.stopPropagation();
  }

  function handleEditFormSubmit(editedGame) {
    // hide the edit form
    setShouldDisplayEditForm(false);
    // make request to update the data
    fetch(`${REACT_APP_API_URL}${gameData.id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: editedGame })
      // and then, after the request is done, we want to re-fetch all the data
    }).then(fetchAllGames);
  }
  // change that state variable when the user clicks anywhere on the game
  return <div onClick={() => setShouldDisplaySummary(!shouldDisplaySummary)}>
    <h3>
      {gameData.name}
      <button onClick={handleEditButtonClicked}>Edit</button>
    </h3>
    <img src={gameData.imageUrl} />
    {/* use that state variable to determine whether the summary is displayed */}
    {shouldDisplaySummary && <p>{gameData.summary}</p>}
    {shouldDisplayEditForm && <BoardGameForm
      submitButtonText="Save"
      initialFormData={gameData}
      onSubmit={handleEditFormSubmit}
    />}
  </div>
}

export default Game;