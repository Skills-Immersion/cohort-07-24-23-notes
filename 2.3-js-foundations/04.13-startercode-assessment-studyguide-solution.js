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

1. should return null if a team cannot be found by city
2. should return null if a team cannot be found by player
3. should return the team if its matching a city and contains the given player

*/

function findTeamByCityAndPlayer(teams=[], city, player) {

	let result = null;
	for(const team of teams){
		if(team.city === city && team.players.includes(player)){
			return team
		}
	}
	return result
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

function addCityToCities(team, cities={}) {
	//name of team and price of team
	const {name, city, players, championships} = team;
	if(cities[city] === undefined){
    cities[city] = {
      totalNumberOfPlayers: players.length,
      numberOfChampionships: championships,
      teams: [name]
    }
  }else{
    cities[city].totalNumberOfPlayers += players.length;
    cities[city].numberOfChampionships += championships;
    cities[city].teams.push(name);
  }
  return cities;
}




function calculateTotalChampionships(cities={}) {
	if(Object.keys(cities).length === 0) return 0;
	let total = 0;
	for(const city in cities){
		total += cities[city].numberOfChampionships;
	}
	return total
}





/*

1. should return null if the cities is empty
2. should return a receipt of all items in the cart
3. example input:

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

//example output: "Los Angeles has 20 championships and the following teams: Lakers\n New York has 3 championships and the following teams: Knicks, Nets\n San Franscisco has 5 championships and the following teams: Warriors \n Total Championships: 28"

*/
function printInfo(cities={}) {
	if(Object.keys(cities).length === 0) return null;
	let info = "";
	for(const city in cities){
		let {numberOfChampionships, teams} = cities[city]

		info += `${city} has ${numberOfChampionships} championships and the following teams: ${teams.join(', ')}\n`
	}

	let totalChampionships = calculateTotalChampionships(cities);
	info += `Total Championships: ${totalChampionships}`;
	return info;
}


// console.log(printInfo(cities_usa))