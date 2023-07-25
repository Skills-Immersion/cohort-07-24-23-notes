// var -> don't use it anymore - it interfers with other built in global variables

// declare variables using 'let' and 'const'

// const is only for variables you don't want to be able to reassign
const daysInAWeek = 7
// daysInAWeek = 8
// daysInAWeek++ 
//daysInAWeek += 1
//daysInAWeek = daysInAWeek + 1


// using const with arrays (push, pop, update at an index)
const favFood = ["Quesadilla", "Pizza", "Sushi", "Wings"]
// favFood = ["Calamari"]
// favFood.pop()
// favFood.push("Calamari");
// console.log(favFood)

// using const with objects ()
const dreamCompany = {
  name: "EA Sports",
  location: "California",
  games: ["NBA 2k", "Fifa", "Halo"]
}

dreamCompany.name = "Microsoft"
dreamCompany.games.push("GTA")
dreamCompany.revenue = 10000000
// console.log(dreamCompany)



// Using let in for loops
let goat = "MJ"
//function here that does some logic, and based on some conditions it can reassign goat to be "lebron"

for(let i = 0; i<favFood.length; i++){
  const currentItem = favFood[i]
  console.log(currentItem)
}

/* 
MAIN TAKEAWAYS:

1. Use const primarily; this will be your go-to. Moving forward, you'll want to declare most of your variables using const.

2. Use let if you need to reassign a value. This is a common requirement during for loops and sometimes with if statements.

3. Don't use var unless necessary, like when working in a codebase that uses it. However, that will likely only happen in the distant future. As mentioned above, there are other reasons to use (and to not use) var, but those will be covered in a different lesson. For now, just avoid it.

*/



