const park1 = {
  name: "Arches",
  state: "Utah",
  rating: 5,
  geo: {
    lat: 38.68,
    lon: -109.57,
  },
};

// FUNCTION DECLARATION

function ratingAsText(park) {
  console.log("This is a function declaration.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(ratingAsText(park1))


// FUNCTION EXPRESSION- VARIABLE EQUALS TO A FUNCTION
const ratingAsText2 = function(park){
  console.log("This is a function expression.");
  return park.rating > 4 ? "Excellent!" : "Good";
}

// console.log(ratingAsText2(park1))

// ARROW FUNCTION EXPRESSION-HOW DO WE CONVERT TO ARROW?
  // ARROW REPLACES FUNCTION KEYWORD -> PUT THE ARROW AFTER THE PARAMETERS
  // () CONTAINS THE PARAMETERS FOR THE FUNCTION
  // NO () REQUIRED IF ONLY ONE PARAMETER
  // () ARE REQUIRED IF 0 PARAMETERS OR MORE THAN 1 PARAMETERS
const ratingAsText3 = park =>{
  console.log("This is an arrow function.");
  return park.rating > 4 ? "Excellent!" : "Good";
}
// console.log(ratingAsText3(park1))


// IMPLICIT RETURN- WHEN THE ONLY LINE OF CODE INSIDE THE FUNCTION BODY IS A RETURN STATEMENT
const ratingAsText4 = park => park.rating > 4 ? "Excellent!" : "Good";

// console.log(ratingAsText4(park1))




// POP QUIZ: CONVERT THESE TO ARROW FUNCTION
function getLocationCoordinates({ geo: { lat, lon } }, zoom = 10) {
  return `https://www.google.com/maps/@${lat},${lon},${zoom}z`;
}

const calculateCylinderVolume = function (radius, height) {
  return Math.PI * radius ** 2 * height;
};