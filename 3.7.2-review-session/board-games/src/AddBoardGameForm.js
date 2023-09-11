import React, { useState } from 'react';

function AddBoardGameForm({ addGame }) {
  // all the data is empty to start
  const initialFormData = {
    name: '',
    imageUrl: '',
    summary: ''
  }
  const [formData, setFormData] = useState(initialFormData);

  // updates for when the user types
  function handleInput(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  // add a game when the user submits the form
  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
    addGame(formData);
  }
  return <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={formData.name} onChange={handleInput} />
    <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleInput} />
    <textarea name="summary" value={formData.summary} onChange={handleInput}></textarea>
    <button type="submit">Add Game</button>
  </form>
}

export default AddBoardGameForm;