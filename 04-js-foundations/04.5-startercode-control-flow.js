const product = {
  priceInCents: 2100,
  name: "Red Beanie",
  size: "L",
  onSale: true,
};

// BASIC IF STATEMENTS
function getPrice(product) {
  let price = product.priceInCents;
  if (product.onSale) {
    price = price * 0.9;
  }

  return price;
}
// getPrice(product); //> 1890

// SINGLE LINE IF STATEMENTS- refactor the above function


// CONDITIONAL OPERATOR- refactor getPrice()


// CONDITIONAL OPERATOR WITH RETURNS - refactor getPrice()


// MULTIPLE CONDITIONAL IF-ELSE STATEMENTS
function calculateTax(state){
  let result;
  if (stateAbbreviation === "CA") {
    result = 0.0725;
  } else if (stateAbbreviation === "CO") {
    result = 0.029;
  } else if (stateAbbreviation === "GA") {
    result = 0.04;
  } else if (stateAbbreviation === "VT") {
    result = 0.06;
  } else {
    result = 0;
  }
}


// SWITCH STATEMENTS -> refactor calculateTax()