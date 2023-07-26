/* 
Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way. Some of the key benefits of destructuring in JavaScript are:
*/

const product = {
  title: "The Golden Compass",
  priceInCents: 799,
  author: {
    firstName: "Philip",
    surname: "Pullman",
  },
};

// - EXAMPLE WITHOUT DESTRUCTURING

function printAuthorAndTitle(product) {
    return `${product.title} by ${product.author.firstName} ${product.author.surname}`;
}



// - EXAMPLE WITHOUT DESTRUCTURING BUT USING VARIABLES INSTEAD
function printAuthorAndTitle2(product) {
  const author = product.author;
  const title = product.title;

  return `${title} by ${author.firstName} ${author.surname}`;
}

// - EXAMPLE WITH DESTRUCTURING

function printAuthorAndTitle3(product) {

}



// - WHAT HAPPENS IF THERE IS MISSING KEYS?



// - DESTRUCTURING A NESTED OBJECT WITH NESTED KEYS



// - RENAMING A DESTRUCTURED VARIABLE TO BE DIFFERENT FROM THE KEY NAME




// - DESTRUCTURING ARRAYS

// const genres = [
//   "Fantasy",
//   "Fiction",
//   "Nonfiction",
//   "Science Fiction",
//   "Young Adult",
// ];



// - THE REST OPERATOR ON OBJECTS


// - THE REST OPERATOR ON ARRAYS



// - DESTRUCTURING PARAMETERS
