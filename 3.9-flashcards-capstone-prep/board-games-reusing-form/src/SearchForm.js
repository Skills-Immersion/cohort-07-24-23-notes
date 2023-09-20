import React, { useState } from 'react';

function SearchForm({ setSearchTerm }) {
  const [searchTermBeingTyped, setSearchTermBeingTyped] = useState('');
  function handleSubmit(event) {
    event.preventDefault();
    // this is legal in React, but frowned upon
    // we usually prefer to use a state variable and update it with every character the user types
    setSearchTerm(event.target.query.value);
    // more commonly, we use a state variable and pass that in
    setSearchTerm(searchTermBeingTyped);
  }
  return <form onSubmit={handleSubmit}>
    <label htmlFor="query">Search for a board game!</label>
    <input id="query" name="query" type="text" value={searchTermBeingTyped} onChange={e => setSearchTermBeingTyped(e.target.value)} />
    <input type="submit" />
  </form>
}

export default SearchForm;
