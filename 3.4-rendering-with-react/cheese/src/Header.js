// every time I make a new component, I follow 3ish steps
// step 1: import React
// step 2: write the function that returns some basic HTML
// step 3: export default

import React from 'react';

// the name of the prop, funFact, matches the name of the prop in App.js where we render the Header component
function Header({ factAboutCheese, someOtherString }) {
  return <header>
    <h1>Cheese!</h1>
    <p>{factAboutCheese.toUpperCase()} {someOtherString}</p>
    <p>2 + 3 is {2 + 3}</p>
  </header>
}

export default Header;
