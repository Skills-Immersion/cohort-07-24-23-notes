/*


Input: Teams array containing team objects


let teams = [
  {
    name: "Lakers",
    city: "Los Angeles",
    players: ["Lebron James", "Russell Westbrook", "Anthony Davis"],
    championships: 20
  },
  {
    name: "Warriors",
    city: "San Franscisco",
    players: ["Steph Curry", "Klay Thompson", "Andrew Wiggins"],
    championships: 5
  }
  {
    name: "Knicks",
    city: "New York",
    players: ["Carmelo", "Marbury"],
    championships: 3

  }
  {
    name: "Nets",
    city: "New York",
    players: ["Kyrie Irving", "Kevin Durant"],
    championships: 0
  }
]

Write a function that returns a team that matches the given city and player

1. Should return null if a team cannot be found by city
2. Should return null if a team cannot be found by player
3. Should return the team if its matching a city and contains the given player

*/

function findTeamByCityAndPlayer(teams=[], city, player) {
}



/*
Input: Team will be an object, cities will be an object


// Team object
let newTeam = {
  name: "Clippers",
  city: "Los Angeles",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}


Cities Object
let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}


Add a city from a given team to a given collection of cities and update the cities collection objects info

1. If called with only a team and no cities object, then use an empty object
2. If the given team's city is not in the cities object yet, then create a new key in the cities object with the given team's city and give it keys for numberOfPlayers, numberOfChampionships, and teams 
3. If the cities object already has a city that matches the given team, then update the cities object at that city key to update the number of players, number of championships and add to that cities teams array the given team

*/

let newTeam = {
  name: "Clippers",
  city: "Boston",
  players: ["Kawhi Leonard", "Paul George"],
  championships: 1
}

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

const obj = {
  x: "hi",
  y: "bye"
}

// console.log(obj['p'])

function addCityToCities(team = {}, cities={}) {
  //look at city of the given team and put in a variable - cityVar
  const {name, city, players, championships} = team;
  //check if the cities object has a value for a key represented by cityVar. if it does then:
  if(cities[city] !== undefined){
    //add to totalNumberOfPlayers by the length of players array from given team
    cities[city].totalNumberOfPlayers += players.length;
    //add to numberOfChampionships by the value of championships from given team
    cities[city].numberOfChampionships += championships;
    //insert into the teams array the name of the given team
    cities[city].teams.push(name)
  }else{ //if the city does not exist
    //create a new property in the cities object that represents the city of the new team and set the value to be an object
    cities[city] = {
      totalNumberOfPlayers: players.length,
      numberOfChampionships: championships,
      teams: [name]
    }
  }
  return cities
}

// console.log(addCityToCities(newTeam, cities_usa))


function calculateTotalChampionships(cities={}) {
  let total = 0;
  //get only the values from cities object
  const valuesOnly = Object.values(cities)
  // console.log(valuesOnly)
  //for each element in valuesOnly array, do:
  for(let currentElement of valuesOnly){
    //add numberOfChampionships of each element to total
    total += currentElement.numberOfChampionships
  }
  
  //return total
  return total;
}

function calculateTotalChampionships2(cities={}) {
  let total = 0;
  
  for(let key in cities){
    const value = cities[key] 
    //add numberOfChampionships of each element to total
    total += value.numberOfChampionships
  }
  //return total
  return total;
}

// console.log(calculateTotalChampionships2(cities_usa))



/*

1. Should return null if the cities is empty
2. Should return a receipt of all items in the cart
3. Example input:

let cities_usa = {
  "Los Angeles": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 20,
    teams: ["Lakers"]
  },
  "New York": {
    totalNumberOfPlayers: 4,
    numberOfChampionships: 3,
    teams: ["Knicks", "Nets"]
  },
  "San Franscisco": {
    totalNumberOfPlayers: 3,
    numberOfChampionships: 5,
    teams: ["Warriors"]
  }
}

//Example output: "Los Angeles has 20 championships and the following teams: Lakers\n New York has 3 championships and the following teams: Knicks, Nets\n San Franscisco has 5 championships and the following teams: Warriors \n Total Championships: 28"

*/
function printInfo(cities={}) {
	//Los Angeles has 20 championships and the following teams: Lakers
  //New York has 3 championships and the following teams: Knicks, Nets
  
  let final = ""
  //go through every key value pair in the cities Object. for each key value pair do:
  for(let key in cities){
    const value = cities[key]
    //create a sentence in this format: Los Angeles has 20 championships and the following teams: Lakers
    final += `${key} has ${value.numberOfChampionships} championships and the following teams: ${value.teams.join(", ")}\n`
  }

  return final;
}


// console.log(printInfo(cities_usa))