// every time I make a new component, I follow 3ish steps
// step 1: import React
// step 2: write the function that returns some basic HTML
// step 3: export default

import React, { useState } from 'react';

// the 3 things an event listener needs
// 1. Which element am I listening for an event on?
// 2. Which event am I listening for? (click, submit, mouseOver, keypress, etc)
// 3. What should we do when that event happens? (callback function)

// the name of the prop, funFact, matches the name of the prop in App.js where we render the Header component
function Header({ factAboutCheese, someOtherString, numberOfClicks, setNumberOfClicks }) {
  // declaring a normal variable
  // let numberOfClicks = 0;
  // declaring a state variable

  function logClick() {
    console.log('clicked the header')
  }
  function handleMouseOver() {
    // if numberOfClicks is currently 2
    // this line sets it to be 3
    setNumberOfClicks(numberOfClicks => numberOfClicks + 1)
    // this line also sets it to be 3
    setNumberOfClicks(numberOfClicks => numberOfClicks + 1)
  }
  return <header>
    <h1 onClick={logClick}>Cheese!</h1>
    <p onClick={() => setNumberOfClicks(1)}>{factAboutCheese.toUpperCase()} {someOtherString}</p>
    <p onMouseOver={handleMouseOver}>
      2 + {numberOfClicks} is {2 + numberOfClicks}
    </p>
  </header>
}

export default Header;


// before lifting up state
// import React, { useState } from 'react';

// // the 3 things an event listener needs
// // 1. Which element am I listening for an event on?
// // 2. Which event am I listening for? (click, submit, mouseOver, keypress, etc)
// // 3. What should we do when that event happens? (callback function)

// // the name of the prop, funFact, matches the name of the prop in App.js where we render the Header component
// function Header({ factAboutCheese, someOtherString }) {
//   // declaring a normal variable
//   // let numberOfClicks = 0;
//   // declaring a state variable
//   const [numberOfClicks, setNumberOfClicks] = useState(1);
//   function logClick() {
//     console.log('clicked the header')
//   }
//   function handleMouseOver() {
//     // if numberOfClicks is currently 2
//     // this line sets it to be 3
//     setNumberOfClicks(numberOfClicks => numberOfClicks + 1)
//     // this line also sets it to be 3
//     setNumberOfClicks(numberOfClicks => numberOfClicks + 1)
//   }
//   return <header>
//     <h1 onClick={logClick}>Cheese!</h1>
//     <p onClick={() => setNumberOfClicks(1)}>{factAboutCheese.toUpperCase()} {someOtherString}</p>
//     <p onMouseOver={handleMouseOver}>
//       2 + {numberOfClicks} is {2 + numberOfClicks}
//     </p>
//   </header>
// }

// export default Header;