/* 
Destructuring in JavaScript is a powerful feature that allows you to extract values from arrays or objects and assign them to variables in a more concise and readable way. Some of the key benefits of destructuring in JavaScript are:
*/

const product = {
  title: "The Golden Compass",
  priceInCents: 799,
  companyName: "Microsoft",
  author: {
    firstName: "Philip",
    surname: "Pullman",
  },
};

// - EXAMPLE WITHOUT DESTRUCTURING

function printAuthorAndTitle(product) {
    return `${product.title} by ${product.author.firstName} ${product.author.surname}`;
}

// console.log(printAuthorAndTitle(product))

// - EXAMPLE WITHOUT DESTRUCTURING BUT USING VARIABLES INSTEAD
function printAuthorAndTitle2(product) {
  const author = product.author;
  const title = product.title;

  return `${title} by ${author.firstName} ${author.surname}`;
}

// console.log(printAuthorAndTitle2(product))

// - EXAMPLE WITH DESTRUCTURING

function printAuthorAndTitle3(product) {
  const {title, author, dateCreated} = product
  console.log("date created is this", dateCreated)
  return `${title} by ${author.firstName} ${author.surname}`;
}

// console.log(printAuthorAndTitle3(product))


// - WHAT HAPPENS IF THERE IS MISSING KEYS? - Undefined!



// - DESTRUCTURING A NESTED OBJECT WITH NESTED KEYS
function printAuthorAndTitle4(product) {
  const {title, author:{firstName,surname}} = product;

  return `${title} by ${firstName} ${surname}`;
}

// console.log(printAuthorAndTitle4(product))

// - RENAMING A DESTRUCTURED VARIABLE TO BE DIFFERENT FROM THE KEY NAME
function printAuthorAndTitle5(product) {
  const {title:productTitle, author:{firstName,surname:lastName}} = product;
  return `${productTitle} by ${firstName} ${lastName}`;
}

// console.log(printAuthorAndTitle5(product))


// - DESTRUCTURING ARRAYS

const genres = [
  "Fantasy", //0
  "Fiction",//1
  "Nonfiction",
  "Science Fiction",
  "Young Adult",
];

// const secondItem = genres[1]
// const fourthItem = genres[3]
// const [,secondItem,,fourthItem] = genres;
// console.log(secondItem, fourthItem)

// - THE REST OPERATOR ON OBJECTS - used to get the rest of the key value pairs
// const {title, priceInCents, ...beef} = product;
// console.log(title)
// console.log(beef)

// - THE REST OPERATOR ON ARRAYS - used to get the rest of the elements
const [,x, ...cheese] = genres
// console.log(x)
// console.log(cheese)

// - DESTRUCTURING PARAMETERS
function printAuthorAndTitle6({title, author:{firstName,surname}}, anotherParam) {
  return `${title} by ${firstName} ${surname}`;
}

// console.log(printAuthorAndTitle6(product, "hello"))



const {title:nameOfProduct, ...everythingElse} = product;
console.log(nameOfProduct)
console.log(everythingElse)

