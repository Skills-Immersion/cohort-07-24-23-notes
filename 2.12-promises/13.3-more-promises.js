//Promises -> Are used to make it so we can WAIT for async code before running some sync code

const fs = require("fs");


// function readFromFile(fileName){
//   let quote = null; //sync
//   console.log("Finding a quote..."); //sync
//   fs.readFile(`quotes/${fileName}`, (error, buffer) => {
//     if (error) {
//       throw error;
//     }
//     const lines = buffer.toString().split("\n");
//     quote = lines[Math.floor(Math.random() * lines.length)];
//   }); //async
  
//   return quote; //sync
// }

function readFromFile(fileName){
  let quote = null; //sync
  console.log("Finding a quote..."); //sync

  return new Promise((resolve,reject)=>{
    //put the async code that we want to be able to wait for here
    fs.readFile(`quotes/${fileName}`, (error, buffer) => {
      if (error) {
        return reject(error)
      }
      const lines = buffer.toString().split("\n");
      quote = lines[Math.floor(Math.random() * lines.length)];
      //resolve the data we want from this async process
      return resolve(quote)
    }); //async
  })
  // return quote; //sync
}
const randomPokemon = readFromFile("pokemon.txt")
const randomQuote = readFromFile("quotes.txt")
const randomPlayer = readFromFile("basketballPlayers.txt")


console.log(randomPokemon)
console.log(randomQuote)

// setTimeout(()=>{
//   console.log(randomPokemon)
//   console.log(randomQuote)
// },1000)

//the parameter in the .then()'s callback function will represent whatever was resolved!!!
randomPokemon
  .then((resolvedVal)=>{
    console.log("resolvedVal is this", resolvedVal)
  })
  .catch((rejectedError)=>{
    console.log("reeejected! Heres why: ", rejectedError)
  })

randomQuote
  .then((resolvedVal)=>{
    console.log("resolvedVal is this", resolvedVal)
  })
  .catch((rejectedError)=>{
    console.log("reeejected! Heres why: ", rejectedError)
  })

randomPlayer
  .then((resolvedVal)=>{
    console.log("resolvedVal is this", resolvedVal)
  })
  .catch((rejectedError)=>{
    console.log("reeejected! Heres why: ", rejectedError)
  })