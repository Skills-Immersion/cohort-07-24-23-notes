/* 
Sometime you will want to throw an error on purpose. 
Here are some reasons throwing errors might be useful:

Debugging: When an error is thrown, it provides valuable information about what went wrong and where. This can help developers quickly identify and fix the problem.

Robustness: By throwing errors, programs can handle unexpected situations and continue running without crashing. This can improve the overall reliability and stability of the software.

User experience: Errors can be presented to users in a clear and informative way, allowing them to take appropriate action and avoid further issues.

Security: Throwing errors can help prevent security vulnerabilities by identifying and stopping potentially malicious behavior.

*/

//BASIC EXAMPLE:

function validateGuess(guess=0) {
  const secret = 8;
  if (guess !== secret) {
    //YOU CAN THROW NEW ERROR USING THE BUILT IN ERROR CLASS
    throw new Error("That is not the secret number!");
    // console.log("**********************")
    //YOU CAN ALSO THROW ANY DATA TYPE YOU WANT
    // throw {name:"That's not the secret number!", code: 'aintNoSecret', message: "New app who dis."};
    // throw 10;
    // throw "oh nah"
  }else{
    return "That is correct guess"
  }
}

// console.log(validateGuess(5));
// console.log("ads running here")

//YOU CAN ALSO S

//EXAMPLE OF BACKTRACE- WHEN MULTIPLE FUNCTIONS ARE INVOLVED AND WERE NOT ABLE TO COMPLETE BECAUSE OF AN ERROR

function one() {
  console.log("one running")
  two();
  console.log("one finished running")

}
function two() {
  console.log("two running")
  three();
  console.log("two finished running")

}
function three() {
  console.log("three running")
  throw new Error("Here's the error");
  console.log("three finished running")
}
// one();

/* ASSESSMENT STUDY GUIDE! */

//Throwing an array of errors
function findPlayerAveragePoints(players = {}, name="") {
  const errors = [];
  //if player name is not in the players object, have an error pushed to an array
  if(!players[name]){
    errors.push("Player not found!");
  }else if(players[name].points.length === 0){
    //if player has not played any games, have an error pushed to an array
    errors.push("Player has played no games!")
  }else if(players[name].points.length < 2){
    //if player has played in less than 2 games, have an error pushed to an array
    errors.push("Player has not played enough games!")
  }

  //if there are any errors in our array, then throw all the errors
  if(errors.length > 0){
    throw errors
  }
  //if there are no errors in our array, return the player Average points
  const {points}  = players[name]
  const total = points.reduce((acc,element,idx)=>{
    acc += element;
    return acc
  },0)

  return total/points.length
}

let players = {
  Lebron: {
    points: [30, 22, 32, 26],
    team: "Lakers",
  },
  Jordan: {
    points: [36, 30, 30, 34],
    team: "Bulls",
  },
  Rob: {
    points: [],
    team: "JavaScript-ers",
  },
  Curry: {
    points: [100],
    team: "Warriors",
  },
};

console.log(findPlayerAveragePoints(players, "Shaq"));
console.log(findPlayerAveragePoints(players, "Rob"));
console.log(findPlayerAveragePoints(players, "Curry"));
console.log(findPlayerAveragePoints(players, "Lebron"));



