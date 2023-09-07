import React, { useState } from 'react';

function HelloForm() {

  const [nameTheUserIsTypingRightNow, setNameTheUserIsTypingRightNow] = useState('');

  const [nameTheUserSubmitted, setNameTheUserSubmitted] = useState('user');

  function handleInput(event) {
    // take the data the user has typed so far and save it to the typing state variable
    console.log('the user typed something!')
    console.log('setting the typing name to ', event.target.value)
    setNameTheUserIsTypingRightNow(event.target.value);
  }
  function handleSubmit(event) {
    // stopping the refresh from happening
    event.preventDefault();
    console.log('the form was submitted');
    // saving what the user typed into the Submitted variable
    setNameTheUserSubmitted(nameTheUserIsTypingRightNow);
    // resetting the typing variable to clear out the input
    setNameTheUserIsTypingRightNow('');
  }

  return <div>
    Hello, {nameTheUserSubmitted}!
    <form onSubmit={handleSubmit}>
      <input onChange={handleInput} value={nameTheUserIsTypingRightNow} />
      <button type="submit">Enter your Name</button>
    </form>
  </div>
}

export default HelloForm;
