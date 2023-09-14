import React, { useEffect, useState } from 'react';
import Game from './Game';
import SearchForm from './SearchForm';
import AddBoardGameForm from './AddBoardGameForm';

function GamesList() {

  const { REACT_APP_API_URL = 'http://localhost:8080/games/' } = process.env;
  // search term will be updated by the form component
  // and we use it below to filter what's displayed
  const [searchTerm, setSearchTerm] = useState('');
  const [gamesArray, setGamesArray] = useState([])

  // new feature of the day: retrieve the games from the backend
  const fetchAllGames = () => {
    fetch(REACT_APP_API_URL)
      .then(response => response.json())
      .then(data => setGamesArray(data))
  }
  useEffect(fetchAllGames, [])

  // helper function to add a new game (used by the form)
  function addGame(newGame) {
    // when our client did all the work, this function would directly update the array
    // setGamesArray([...gamesArray, newGame])
    // now, we want to make a request to the backend to update the array
    fetch(REACT_APP_API_URL, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ data: newGame })
      // and then, after the request is done, we want to re-fetch all the data
    }).then(fetchAllGames);

  }
  return <div>
    <AddBoardGameForm addGame={addGame} />
    <SearchForm setSearchTerm={setSearchTerm} />
    {/* the search magic: filter our list of games, then render whatever's left to the page with a map */}
    {gamesArray
      .filter(g => g.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .map(g => <Game key={g.name} gameData={g} />)}
  </div>
}

export default GamesList;