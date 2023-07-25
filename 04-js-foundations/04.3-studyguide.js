/* STUDY GUIDE!! */


var thaiMenu = [
  {
    name: "Panang Curry",
    priceInCents: 2000,
    category: "Entrees",
    allergens: ["Gluten", "Dairy", "Peanuts"]
  },
  {
    name: "Calamari",
    priceInCents: 1000,
    category: "Appetizer",
    allergens: ["Gluten", "Shellfish"]
  },
  // {
  //   name: "Panang Curry",
  //   priceInCents: 8800,
  //   category: "Thai",
  //   allergens: ["Gluten", "Dairy", "Peanuts"]
  // }
]


function activateHappyHour(foods){
  for(let i=0; i<foods.length; i++){
      const statement = `We are in iteration number ${i+1}`
      const currentFood = foods[i];
      //if the current food's category property is appetizer
      if(currentFood.category === "Appetizer"){
        //set the currentfood items price to be half of what it currently is
        currentFood.priceInCents = currentFood.priceInCents/2
        console.log(`Happy hour price applied to ${currentFood.name} at ${currentFood.priceInCents} cents`)
      }
      console.log(statement)
  }
}

activateHappyHour(thaiMenu)