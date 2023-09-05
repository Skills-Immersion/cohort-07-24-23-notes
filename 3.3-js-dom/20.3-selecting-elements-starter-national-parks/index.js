//SANITY CHECK
// console.log("we in the mainframe")
/*

NOTES:
- document.querySelector() --> to select the first element on the page that matches the query
- document.querySelectorAll() --> to select all elements on the page that matches the query

*/


// 1. Select the first h1 selector
const h1 = document.querySelector("h1")
// console.log(h1)
// h1.innerText = "Wazzap"
// setInterval(()=>{
//   h1.innerText += "p"
// },1000)
// 2. Select all h1 selectors
const allH1s = document.querySelectorAll("h1") //gives back a NodeList (similar to an array) containing all the elements that math the query
// console.log(allH1s)


// 3. Select the first section with the class of park-display
const firstParkDisplay = document.querySelector(".park-display")
// console.log(firstParkDisplay)

const allParkDisplay = document.querySelectorAll(".park-display")
// console.log(allParkDisplay)

// 4. Select the first established date value
const firstDate = document.querySelector(".value");
console.log(firstDate)

const firstArea = document.querySelector(".area-display .value")
// console.log('first area is this', firstArea)

// 5. Select all the established date values
const allDates = document.querySelectorAll(".established-display .value")
// console.log(allDates)


// 6. Select all the area values
const allAreas = document.querySelectorAll(".area-display .value")


// 7. Write a statement that will find the Grand Canyon national park element by its ID.
const grandCanyonElement = document.querySelector("#gcnp")
console.log(grandCanyonElement)

// 8. Write a statement that will find the element containing the established date for the Grand Canyon national park.

const grandCanyonDate = document.querySelector("#gcnp .established-display .value")
console.log(grandCanyonDate)

