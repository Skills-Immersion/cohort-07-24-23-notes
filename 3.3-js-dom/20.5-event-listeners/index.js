//type of events: click, mouseover/hover, submit

//warmup - click event on a button
//1. Select the element that needs to respond to a click event
// const firstbtn = document.querySelector(".rate-button");

//2. Attach an event listener to the element
// firstbtn.addEventListener("click", (event)=>{
//   // console.log("button has been clickd!", event)
//   //event.target -> tells you which element the event happened on
//   // console.log("event.target", event.target)
//   //event.target.parentNode -> give you access the the elemnt that contains the event.target element
//   // console.log("event.target.parentNode", event.target.parentNode)
//   // console.log(event.target.innerText)
//   event.target.style.backgroundColor = "yellow"
//   event.target.parentNode.style.backgroundColor = "pink";
// })

function favoriteParkHighlighter(){
  //select all buttons
  const allButtons = document.querySelectorAll(".rate-button")
  //loop through allButtons nodelist (array-ish)
  for(let button of allButtons){
    button.addEventListener("click", (event)=>{
      event.target.style.backgroundColor = "yellow"
      event.target.parentNode.style.backgroundColor = "pink";
    })
  }
}


/* 

//select the element that needs to listen for a click
const nameSorter = document.querySelector("#name-sorter");

nameSorter.addEventListener("click", (event)=>{
  event.preventDefault(); //prvents the anchor tag's click from reloading the page
  
  //select all the park sections
  const allParksNodeList = document.querySelectorAll(".park-display")
  
  //convert the allParks nodelist to an array so we can do .sort()
  const allParksArray = Array.from(allParksNodeList)
  console.log(allParksArray)
  //for each park section, sort them by the name
  allParksArray.sort((parkSectionA, parkSectionB)=>{
    const parkAName = parkSectionA.querySelector("h2").innerText;
    const parkBName = parkSectionB.querySelector("h2").innerText;
    
    return parkAName > parkBName ? 1 : -1
  })

  //clear out the container containg all the parks so that we can re-insert the sorted park in there
  const main = document.querySelector("main");
  main.innerHTML = "";

  for(let parkSection of allParksArray){
    main.appendChild(parkSection)
  }
})

*/

//Function for sorting by name
const sortByName = (parkSectionA, parkSectionB)=>{
  const parkAName = parkSectionA.querySelector("h2").innerText;
  const parkBName = parkSectionB.querySelector("h2").innerText;
  
  return parkAName > parkBName ? 1 : -1
}
//Function for sorting by rating
const sortByRating = (parkSectionA, parkSectionB)=>{
  const parkARating = Number(parkSectionA.querySelector(".rating-display .value").innerText)
  const parkBRating = Number(parkSectionB.querySelector(".rating-display .value").innerText)
  
  return parkBRating - parkARating;
}

const nameSorterClickHandler = (event)=>{
  event.preventDefault(); //prvents the anchor tag's click from reloading the page
  
  //select all the park sections
  const allParksNodeList = document.querySelectorAll(".park-display")
  
  //convert the allParks nodelist to an array so we can do .sort()
  const allParksArray = Array.from(allParksNodeList)
  console.log(allParksArray)
  //for each park section, sort them by the name
  allParksArray.sort(sortByName)

  //clear out the container containg all the parks so that we can re-insert the sorted park in there
  const main = document.querySelector("main");
  main.innerHTML = "";

  for(let parkSection of allParksArray){
    main.appendChild(parkSection)
  }
}

const ratingSorterClickHandler = (event)=>{
  event.preventDefault(); //prvents the anchor tag's click from reloading the page
  
  //select all the park sections
  const allParksNodeList = document.querySelectorAll(".park-display")
  
  //convert the allParks nodelist to an array so we can do .sort()
  const allParksArray = Array.from(allParksNodeList)
  // console.log(allParksArray)
  //for each park section, sort them by the name
  allParksArray.sort(sortByRating)

  //clear out the container containg all the parks so that we can re-insert the sorted park in there
  const main = document.querySelector("main");
  main.innerHTML = "";

  for(let parkSection of allParksArray){
    main.appendChild(parkSection)
  }
}


function main(){
  //select the 'namesorter link'
  const nameSorter = document.querySelector("#name-sorter");
  nameSorter.addEventListener("click", nameSorterClickHandler);
  
  //select the 'ratingSorter link'
  const ratingSorter = document.querySelector("#rating-sorter");
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

favoriteParkHighlighter();

//once the dom has loaded on the browser, run the main() function which attaches event listeners to the dom
window.addEventListener("DOMContentLoaded", (event)=>{
  main()
})
