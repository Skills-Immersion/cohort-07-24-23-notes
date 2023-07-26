const tournament1 = {
  "game 1": { homeTeam: 100, awayTeam: 85 },
  "game 2": { homeTeam: 98, awayTeam: 100 },
  "game 3": { homeTeam: 50, awayTeam: 51 },
  "game 4": { homeTeam: 10, awayTeam: 8 },
};

// Input
// Your input for both functions will be a tournament object

// calculateTotalPoints
//The calculateTotalPoints function will take in the tournament and return a total number of points scored from all teams in all games
function calculateTotalPoints(tournament){
  //get all the values from the object into an array
  const valuesOnly = Object.values(tournament);
  // console.log(valuesOnly)

  let total = 0;
  for(let gameElement of valuesOnly){
    total += gameElement.homeTeam + gameElement.awayTeam
  }
  return total;
}

// console.log(calculateTotalPoints(tournament1))



// printGameSummarys
// The printGameSummarys function will take in the tournament array of game objects and return a string, joined by \n, of the game results for each game

// For example:

function printGameSummarys(tournament){
  let finalSummary = "";
  for(let key in tournament){
    const value = tournament[key]
    let gameResult;
    if(value.homeTeam > value.awayTeam){
      gameResult = "beat"
    }else{
      gameResult = "lost to"
    }
    finalSummary += `${key}: Home team ${gameResult} the away team ${value.homeTeam}-${value.awayTeam}\n`
    // console.log(`${key}: Home team ${value.homeTeam > value.awayTeam ? "beat" : "lost to"} the away team ${value.homeTeam}-${value.awayTeam}`)
  }

  return finalSummary
}

console.log(printGameSummarys(tournament1)); //> "Game 1: Home team beat the away team 100-85 \n Game 2: Home team lost to the away team 98-100 \n etc;"