/*
  The following functions have various syntax errors in them. Fix the bugs to get the tests to pass!
  
  When any of the following function's parameters reference `products`, they are referencing an array full of objects with the following shape:
   {
     name: "Slip Dress",
     priceInCents: 8800,
     availableSizes: [ 0, 2, 4, 6, 10, 12, 16 ],
     quantity: 0
   }
   
  When any of the following function's parameters reference `product`, they are referencing an object with the above shape.
*/

function printablePrice(priceInCents) {
  const amount = (priceInCents / 100).toFixed(2);
  return `$${amount}`;
}

function chooseItemByNameAndSize(products=[],name="",size=null) {
  //for each element in the products array - (loop) do:
  for(let currentElement of products){
    // console.log("*********", currentElement)
    //look at the name property of the current element and check IF it matches the given name parameter and the availableSizes array includes the size parameter. If so, return the current element
    if(currentElement.name === name && currentElement.availableSizes.includes(size)){
      return currentElement;
    }
  }
  
  //if we get to this point, that means nothing was found, return null
  return null;
}

function addProductToCart() {}

function calculateTotal() {}

function printReceipt() {}

module.exports = {
  chooseItemByNameAndSize,
  addProductToCart,
  calculateTotal,
  printReceipt,
};
