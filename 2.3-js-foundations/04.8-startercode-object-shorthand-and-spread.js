/* 
Object shorthand: 
JavaScript syntax that supports the creation of objects using values stored in variables, where the variable name becomes the key and the stored value becomes the value in the key-value pair

*/


const title = "The Presence Process"; 
const author = "Michael Brown";
// CREATE AN OBJECT USING THOSE VARIABLES AS KEYS AND THEIR VALUES AS VALUES- NAME IT "PRODUCT"
// const product = {
//   title: title,
//   author: author
// }

//OBJECT SHORTHAND- EXAMPLE:
const product = {
  title,
  author
}

// const {...everythingElse} = product
// console.log(product)

//THE SPREAD OPERATOR-> USE IT TO MAKE A COPY OF AN OBJECT OR ARRAY
const newProduct = {
  ...product,
  numPages: 100
}

// console.log(newProduct)

//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO ARRAYS INTO ONE
const ownedBooks = ["Infernal Devices", "Foundation"];
const wishlist = ["Good Omens", "Guards! Guards!"];

const allBooks = [...ownedBooks, ...wishlist]
console.log(allBooks)

//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO OBJECTS INTO ONE
const salesTax = { state: "Washington", tax: 0.065 };
//combine salesTax with the product variable from above
const finalProduct = {
  ...product,
  ...salesTax,
  // numPages: 100
  state: "Virginia"
}

console.log(finalProduct)


//THE SPREAD OPERATOR-> USE IT TO COMBINE TWO OBJECTS INTO ONE AND OVERWRITE ONE OF THE EXISTING KEYS 
