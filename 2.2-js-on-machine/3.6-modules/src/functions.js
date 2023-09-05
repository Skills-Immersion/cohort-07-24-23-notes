function findPlantById(plants=[], id=null) {
  if(!id) return "Id is required";
  let result = null;
  for (let i = 0; i < plants.length; i++) {
    let plant = plants[i];
    if (plant.id === id) {
      result = plant;
    }
  }
  return result;
}

function greet(name="New User"){
  console.log(`Hello there ${name}`)
}

//step 1 - export the data using module.exports =
module.exports = {findPlantById, greet}