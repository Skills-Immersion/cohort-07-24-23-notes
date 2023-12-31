/*
  Modify each function below to continue working with the suggested syntax.
  
  When a function's parameters reference `team`, it is referring to an object. Each object has the following shape:

   {
     name: "Lakers",
     city: "Los Angeles" ,
     stars: [ "Lebron James", "Russell Westbrook", "Anthony Davis"]
   }
*/

// console.log([2,4,6].includes(7))


let team = {
  name: "Lakers",
  city: "Los Angeles" ,
  stars: [ "Lebron James", "Russell Westbrook", "Anthony Davis"]
}

// Use a conditional (ternary) operator below.
function checkIfStarIsOnTeam(team, player) {
  // let result;
  // .includes() will check the team.stars array to see if it includes a certain player. if it does contain the given player, it will return true, otherwise it will return false
  // if(team.stars.includes(player)){
  //   result = "The player is there!";
  // }else{
  //   result = "We need to acquire this player";
  // }
  // return result;

  return team.stars.includes(player) ?  "The player is there!" : "We need to acquire this player";
}

// console.log(checkIfStarIsOnTeam(team, "Giannis"))

// Use a `switch` statement below.
function generateChampionBanner(team, numberChampionships) {
  let banner;
  // if (numberChampionships===0) {
  //   banner = "No Banners to show."
  // }else if(numberChampionships === 1){
  //   banner = `Got one! ${team.name} are champions!`
  // }else if(numberChampionships === 2){
  //   banner = `${team.name} are TWO time champions!`
  // }else{
  //   banner = `${team.name} talkin' dynasty!`
  // }
  switch(numberChampionships){
    case(0):
      banner = "No Banners to show.";
      break;
    case(1):
      banner = `Got one! ${team.name} This ones for you!`;
      break;
    case(2):
      banner = `${team.name} are TWO time champions!`;
      break;
    default:
      banner = `${team.name} talkin' dynasty!`;
  }
  return banner
}


// console.log(generateChampionBanner(team, 1))


