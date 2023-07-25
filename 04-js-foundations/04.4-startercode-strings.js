//Concept: all strings are immutable
let cool_quote = "how YOU DO anyTHInG is How You dO eVERyThING"
//                0123
// console.log(cool_quote[1])
cool_quote[1] = "L" //this does not work - string is immutable
// cool_quote += "!!!"
cool_quote = cool_quote + "!!!" //this works because im updating the variable to be whatever it had plus some more string

// console.log(cool_quote)


// Strings have indices



// You can get length of a string
// console.log(cool_quote.length)



// You can loop through a string
// for(let i = 0; i<cool_quote.length; i++){
//   console.log(cool_quote[i])
// }



// lets create the sentence case function
function sentenceCase(inputString){
  let result = inputString[0].toUpperCase();
  for(let i = 1; i<inputString.length; i++){
    result += inputString[i].toLowerCase()
  }
  return result
}

// console.log(sentenceCase("waZZAAAP though?")) //Wazzaaap though?


// the substring() method: Gives you a portion of a string
// console.log("hey its hot outside".substring(4,6))

// lets do sentence case function using the substring method!
function sentenceCase2(inputString){
  let result = inputString[0].toUpperCase();
  let restOfCharacters = inputString.substring(1).toLowerCase()
  result += restOfCharacters;
  return result
  // return inputString.substring(0,1).toUpperCase() + inputString.substring(1).toLowerCase()
}

// console.log(sentenceCase2("waZZAAAP though?")) //Wazzaaap though?



// Splitting a string: Split string at each indicated character and put it into an array

let statement = "Its really hot outside and i am thirsty";
//console.log(statement.split("a")) //[ 'Its re', 'lly hot outside ', 'nd i ', 'm thirsty' ]

// Joining elements from an array into a string
let arr = ["Lets", "get", "this", "party", "started"]
//console.log(arr.join(" "))

// Explain how titelize works in platform using split and join
function titelize(inputString){
  //create variable for result
  let result = "";
  //split the string into an array with only the words
  const arrayOfWords = inputString.split(' ')
  // console.log(arrayOfWords)
  //loop through the array, and call sentenceCase on each word in the array
  for(let i = 0; i<arrayOfWords.length; i++){
    const word = arrayOfWords[i];
    arrayOfWords[i] = sentenceCase(word)
  }
  // console.log(arrayOfWords)
  return arrayOfWords.join(" ")
}

// console.log(titelize(statement))


// Template literals
const name = "Bronny"
const adjective = "Red"
const height = "4 feet 7 inches"
//Bronny wears red and dunks on a rim that is 4 feet 7 inches tall"
// let sentence = name + " " + "wears " + adjective + " and dunks on a rim that is " + height + " tall";
let sentence = `${name} wears ${adjective} and dunks on a rim that is ${height} tall. \nLets get it ${titelize("ya dig!")}`
console.log(sentence) 
// Escaping strings



// Study guide time!

