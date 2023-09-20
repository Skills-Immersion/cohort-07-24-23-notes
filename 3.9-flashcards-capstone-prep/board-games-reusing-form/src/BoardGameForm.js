import React, { useState } from 'react';


// FORM SIMILARITIES:
// the same 3 inputs
// handle the form data the same way
// a submit button

// FORM DIFFERENCES:
// text: submit vs save on the submit button
// behavior: what should the fom do when we submit
// starting text: blank for add, existing game data for edit form

// the similarities are the things that can live inside of the shared component
// the differences are the things that we need to pass in as props to the shared component

function BoardGameForm({ onSubmit, submitButtonText, initialFormData }) {
  // all the data is empty to start
  // now, we take in initialFormData as a prop
  // const initialFormData = {
  //   name: '',
  //   imageUrl: '',
  //   summary: ''
  // }
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
    onSubmit(formData);
  }
  return <form onSubmit={handleSubmit}>
    <input type="text" name="name" value={formData.name} onChange={handleInput} />
    <input type="url" name="imageUrl" value={formData.imageUrl} onChange={handleInput} />
    <textarea name="summary" value={formData.summary} onChange={handleInput}></textarea>
    <button type="submit">{submitButtonText}</button>
  </form>
}

export default BoardGameForm;