import React, { useState } from "react";
import './Cheese.css';

function Cheese({ cheese, numberOfClicks, deleteACheese, updateCheeseDeliciousness }) {
  // if you wanted to avoid ternaries, this is how to do it
  let extraString;
  if (cheese.name === 'cheddar') {
    extraString = ', the best cheese'
  } else {
    extraString = ', a cheese'
  }

  // to show and hide the name of the cheese based on clicking the image
  const [shouldShowNameOfCheese, setShouldShowNameOfCheese] = useState(false);

  function handleDeleteButtonClicked() {
    deleteACheese(cheese);
  }

  // the secret behavior of &&
  // if the first thing is falsy, give back the first thing
  // if the first thing is truthy, give back the second thing
  // so, we can use && when we want to either show or hide something based on a condition
  return <li>
    <img src={cheese.imageUrl} onClick={() => setShouldShowNameOfCheese(!shouldShowNameOfCheese)} />

    {/* if the cheese is cheddar, include the string "the best cheese" */}
    {/* we will use ternaries */}
    {/* ternaries are WTF: What ? True : False */}
    {shouldShowNameOfCheese ? <span>
      {cheese.name}, {cheese.deliciousness}/10 delicious
      {cheese.name === 'cheddar' ? ', the best cheese' : ', a cheese'}
      {cheese.name === 'bleu' && ' (not everyone\'s favorite cheese)'}
    </span> : 'REDACTED'}
    <div>
      <button className="btn btn-primary" onClick={() => updateCheeseDeliciousness(cheese)}>More Delicious</button>
    </div>
    <div>
      <button className="btn btn-danger" onClick={handleDeleteButtonClicked}>Delete this cheese!</button>
    </div>
  </li>
}

export default Cheese;


// before lifting up state

// function Cheese({ cheese }) {
//   // if you wanted to avoid ternaries, this is how to do it
//   let extraString;
//   if (cheese.name === 'cheddar') {
//     extraString = ', the best cheese'
//   } else {
//     extraString = ', a cheese'
//   }

//   // to show and hide the name of the cheese based on clicking the image
//   const [shouldShowNameOfCheese, setShouldShowNameOfCheese] = useState(false);

//   // the secret behavior of &&
//   // if the first thing is falsy, give back the first thing
//   // if the first thing is truthy, give back the second thing
//   // so, we can use && when we want to either show or hide something based on a condition
//   return <li>
//     <img src={cheese.imageUrl} onClick={() => setShouldShowNameOfCheese(!shouldShowNameOfCheese)} />

//     {/* if the cheese is cheddar, include the string "the best cheese" */}
//     {/* we will use ternaries */}
//     {/* ternaries are WTF: What ? True : False */}
//     {shouldShowNameOfCheese ? <span>
//       {cheese.name}
//       {extraString}
//       {cheese.name === 'cheddar' ? ', the best cheese' : ', a cheese'}
//       {cheese.name === 'bleu' && '(not everyone\'s favorite cheese)'}
//     </span> : 'REDACTED'}
//   </li>
// }

// export default Cheese;