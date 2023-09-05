import React from "react";
import './Cheese.css';

function Cheese({ cheese }) {
  // if you wanted to avoid ternaries, this is how to do it
  let extraString;
  if (cheese.name === 'cheddar') {
    extraString = ', the best cheese'
  } else {
    extraString = ', a cheese'
  }

  // the secret behavior of &&
  // if the first thing is falsy, give back the first thing
  // if the first thing is truthy, give back the second thing
  // so, we can use && when we want to either show or hide something based on a condition
  return <li>
    <img src={cheese.imageUrl} />
    {cheese.name}
    {/* if the cheese is cheddar, include the string "the best cheese" */}
    {/* we will use ternaries */}
    {/* ternaries are WTF: What ? True : False */}
    {extraString}
    {cheese.name === 'cheddar' ? ', the best cheese' : ', a cheese'}
    {cheese.name === 'bleu' && '(not everyone\'s favorite cheese)'}
  </li>
}

export default Cheese;