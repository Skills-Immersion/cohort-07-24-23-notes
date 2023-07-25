/*
  Complete the function below according to the instructions.
  
  When the function's parameters reference `products`, they are referencing an array of objects. Each object has the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ]
   }
*/

function listAllItems(products) {
  if(products.length === 0){
    return "There are no items for sale."
  }
  if(products.length === 1){
    return `There is 1 item for sale: ${products[0].name}.`
  }
  if(products.length === 2){
    return `There are 2 items for sale: ${products[0].name} and ${products[1].name}.`
  }

  //have array to put only product names into
  const namesOnly = []
  //get all the item names in an array - for loop
  for(let i = 0; i< products.length; i++){
    const eachItem = products[i]
    namesOnly.push(eachItem.name)
  }
  // console.log(namesOnly)
  //join the words in the array with ", "
  
  //return a stentence with those items
  return `There are ${products.length} items for sale: ${namesOnly.join(", ")}.`

}

module.exports = {
  listAllItems,
};
