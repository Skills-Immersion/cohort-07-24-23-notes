/* 
Forms have an event calls "submit". This event involves clicking on a "submit" button in a form element

It allows us to get information collected from a form and use that information for any functionality we want to build using user inputted data

*/

const submitHandler = (event) => {
  //prevent the default behavior of a form submission (reloading the page) from happening
  event.preventDefault();

  //formData will have all the form collected info in it
  const formData = new FormData(event.target);

  //send the formData to our form validator
  const errors = validateForm(formData)

  console.log("errors is this", errors)

  //if errors has 0 keys then we will add a park
  if(Object.keys(errors).length === 0){
    const name = formData.get("name");
    const location = formData.get("location");
    const description = formData.get("description");
    const established = formData.get("established");
    const area = formData.get("area");
    const rating = formData.get("rating");
  
    //create a section
    const newSection = document.createElement("section");
    newSection.classList.add("park-display");
  
    const newParkContent = `
      <h2>${name}</h2>
      <div class="location-display">${location}</div>
      <div class="description-display">
      ${description}
      </div>
      <button class="rate-button" title="Add to Favourites">&#9734;</button>
      <div class="stats">
        <div class="established-display stat">
          <h3>Established</h3>
          <div class="value">${established}</div>
        </div>
        <div class="area-display stat">
          <h3>Area</h3>
          <div class="value">${area} km<sup>2</sup></div>
        </div>
        <div class="rating-display stat">
          <h3>Rating</h3>
          <div class="value">${rating}</div>
        </div>
      </div>`;
  
      newSection.innerHTML = newParkContent
  
      //select the container that the new section will be inside
      const main = document.querySelector("main");
      main.appendChild(newSection);

  }else{
    // Display any new errors
    Object.keys(errors).forEach((key) => {
      // Find the specific error element
      const errorElement = document.querySelector(`#${key}-error`);
      errorElement.innerHTML = errors[key];
      errorElement.style.display = "block";
    });
  }
};

function validateExists(value) {
  return value && value.trim();
}

function validateNumber(value) {
  return !isNaN(value);
}

function validateRange(value, min, max) {
  return value >= min && value <= max;
}

function validateForm(formData) {
  const errors = {};

  // Check if name was not entered
  if (!validateExists(formData.get("name"))) {
    errors.name = "Please enter a name";
  }

  // Check if rating was not entered
  if (!validateExists(formData.get("rating"))) {
    errors.rating = "Please enter a rating";
  }else{
    //if they did provide a rating, validate that its withing the range of 1-5
    if (!validateNumber(formData.get("rating"))) {
      errors.rating = "Rating must be a number";
    } else {
      // Because it is a number, convert it
      const rating = Number(formData.get("rating"));
      // Check that the rating is between 1 and 5, inclusive
      if (!validateRange(rating, 1, 5)) {
        errors.rating = "Rating must be between 1 and 5 inclusive";
      }
    }
  }

  // Check if description was not entered
  if (!validateExists(formData.get("description"))) {
    errors.description = "Please enter short description";
  }

  // Check if established date was not entered
  if (!validateExists(formData.get("established"))) {
    errors.established = "Please enter date";
  }

  // Check if area was not entered
  if (!validateExists(formData.get("area"))) {
    errors.area = "Please enter the area of the park";
  }

  // Check if location date was not entered
  if (!validateExists(formData.get("location"))) {
    errors.location = "Please enter the location of the park";
  }

  return errors;
}


//select the form element and tell it it needs to listen for a "submit" event

//main() will select elements on the page and attach event listeners to them. main() will only run once the dom as fully loaded
function main() {
  const form = document.querySelector("form");
  form.addEventListener("submit", submitHandler);
}

window.addEventListener("DOMContentLoaded", main);
