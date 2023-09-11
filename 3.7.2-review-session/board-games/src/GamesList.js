import React, { useState } from 'react';
import Game from './Game';
import SearchForm from './SearchForm';
import AddBoardGameForm from './AddBoardGameForm';

function GamesList() {

  // search term will be updated by the form component
  // and we use it below to filter what's displayed
  const [searchTerm, setSearchTerm] = useState('');
  const [gamesArray, setGamesArray] = useState([
    {
      "name": "Sorry!",
      "imageUrl": "https://images.heb.com/is/image/HEBGrocery/001669716-1",
      "summary": "knock out others to win!"
    },
    {
      "name": "Citadels",
      "imageUrl": "https://cf.geekdo-images.com/sHd0jkZZLDgixHjAXtn7kA__imagepage/img/BAc4tOD4A_Bu2QJ2lR_B_zmelto=/fit-in/900x600/filters:no_upscale():strip_icc()/pic3119514.jpg",
      "summary": "You are competing to build the biggest and best citadel. Each round, you draft a new secret role and attempt to sabotage your opponents."
    },
    {
      "name": "Scrabble",
      "imageUrl": "https://images.food52.com/KPaH-agchBk1WQhu73hFcWNDjb4=/1500x0/b195ede2-97dd-4c1a-89b5-547ea0ad27ad--2021-0813_ws-game-company_luxury-wooden-game-boards_scrabble_1x1_1x1_rocky-luten_009.jpg",
      "summary": "A word game in which two to four players score points by placing tiles, each bearing a single letter, onto a game board divided into a 15×15 grid of squares."
    },
    {
      "name": "Risk",
      "imageUrl": "https://www.hasbro.com/common/productimages/en_US/9678C9300E7B4385B564846FA3465E47/0814e0d5d8144769d4a59f449756bb71e5ac0745.jpg",
      "summary": "Battle for Middle Earth!"
    }

  ])

  // helper function to add a new game (used by the form)
  function addGame(newGame) {
    setGamesArray([...gamesArray, newGame])
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