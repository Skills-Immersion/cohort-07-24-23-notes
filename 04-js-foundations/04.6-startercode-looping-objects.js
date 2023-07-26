const player = {
  firstName: "Lebron",
  "last name": "James",
  age: 38,
  awards: ["MVP", "Finals MVP", "Points leader of all time", "GOAT"],
  team: {
    name: "Lakers",
    city: "Los Angeles",
    salary: 38000000
  }
}

// console.log(player.team.city)
// - OBJECTS HAVE KEY VALUE PAIRS (KEYS ARE ALSO PROPERTIES)

// - KEYS NEED TO BE IN STRINGS IF THEY HAVE A SPACE OR '-' IN IT

// - ACCESSING VALUES IN AN OBJECT USING A KEY NAME (DOT NOTATION VS BRACKET NOTATION)

// console.log(player.age)
// console.log(player.team.salary)
// console.log(player["last name"])
// console.log(player["age"])
// console.log(player["team"]["salary"])


// - DOT NOTATION VS BRACKET NOTATION TO ADD THE FOLLOWING KEYS: 'NUMBEROFCHAMPIONSHIPS', 'HOMETOWN':
player.numberOfChampionships = 4
player["hometown"] = "Akron, Ohio"



// - DOT NOTATION VS BRACKET NOTATION TO UPDATE AN EXISTING KEY VALUE PAIR
player.firstName = "Bron Bron"
player["age"]++
player.age++

// console.log(player)




// - VARIABLES GO IN BRACKET NOTATION - WITH NO QUOTES
const x = "awards"
console.log(player['x']) //same as player.x --> undefined
console.log(player[x])

// - LITERAL PROPERTY NAMES GO IN DOT NOTATION OR BRACKET NOTATION WITH QUOTES



// - FOR-IN LOOP TO LOOP OVER OBJECTS -
for(let key in player){
  console.log("key is: ", key)
  console.log("value is: ", player[key])
}


// - OBJECT.KEYS() AND OBJECT.VALUES() GIVE US BACK ARRAYS THAT WE CAN LOOP THROUGH KEYS AND VALUES WITH


// - FOR OF LOOP TO LOOP OVER ARRAYS





