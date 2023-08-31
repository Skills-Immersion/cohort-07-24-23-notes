/* 
Properties to know:

.innerText -> gives you the content inside of an element

.innerHTML -> gives you access to the html elements inside an element and also access to add or update html elements inside an element

.style -> lets you access css for an element

.classList.add() -> lets you add a class to an element
.classList.remove() -> lets you remove a class from an element


CREATING ELEMENTS and inserting into the dom - .appendChild()
1. First create the element using: const newElement = document.createElement("h1") - replace "h1" with whichever element you want to create

2. Add content/style to the element: newElement.innerText = "hi"

3. Select what element will be the parent of this newElement: const parentElement = document.querySelector("selector here")


4. Insert the element into the parentElement like this:
parentElement.appendChild(newElement)


REMOVING ELEMENT from the dom - .removeChild()

1. Identify the element we want to remove and put it in variable like elementToRemove
2. Identify the parent container of the element we want to remove like parentElement
3. parentElement.removeChild(elementToRemove)
*/


// const h1 = document.querySelector("h1");

// h1.innerText = "wazzap"
// h1.style.color = "blue"
// h1.style.backgroundColor = "yellow"

function shortenDescriptions(){
  const allDescriptions = document.querySelectorAll(".description-display");
  // console.log(allDescriptions)

  for(let description of allDescriptions){
    // console.log(description)
    if(description.innerText.length > 250){
      description.innerText = description.innerText.slice(0,250)
      description.innerHTML += "<a href='#'>...</a>"
    }
  }
}

function styleHighRatings(){
  const allRatings = document.querySelectorAll(".rating-display .value");

  for(let rating of allRatings){
    // console.log(typeof rating.innerText)
    //if the rating is higher than 4.6 then we will style it to be bold, underlined, and backgroudn color of yellow
    if(Number(rating.innerText) > 4.6){
      // rating.style.backgroundColor = "yellow";
      // rating.style.fontWeight = "bold";
      // rating.style.textDecoration = "underline";
      // rating.style.color = "red";
      // rating.style.border = "1px solid black";
      // rating.style.padding = "10px";
      // rating.style.margin = "10px";
      rating.classList.add("high-rating");
      rating.classList.remove("value");
    }
  }
}

function insertHeader(){
  //first find out how many parks we have
  const allParks = document.querySelectorAll(".park-display");
  //1. create the element we want to insert into the page
  const newElement = document.createElement("h2");

  //2. give the element its content and style as needed
  newElement.innerText = `There are ${allParks.length} parks to view.`

  // console.log(newElement)

  //3. select the parent container we will be putting the new element inside of
  const parentElement = document.querySelector("header")

  //4. Insert the newElement into the parentElement
  parentElement.appendChild(newElement);
}


function removeFirstPark(){
  // 1. Identify (select) the element we want to remove and put it in variable like elementToRemove
  const elementToRemove = document.querySelector(".park-display");
  // 2. Identify (select) the parent container of the element we want to remove like parentElement
  const parentElement = document.querySelector("main");

  // 3. parentElement.removeChild(elementToRemove)
  parentElement.removeChild(elementToRemove);
}

shortenDescriptions();
styleHighRatings();
insertHeader();
removeFirstPark();
