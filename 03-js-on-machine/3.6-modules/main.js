//step 2 - import the data
const {findPlantById,greet} = require("./src/functions")

let plants = [
  { id: 1, name: "Garden Rocket Arugula" },
  { id: 2, name: "Watercress" },
  { id: 3, name: "Royal Rose Radicchio" },
];

console.log(findPlantById(plants,2))

greet("MJ")