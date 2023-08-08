//If we want to have our synchronous code WAIT for asynchronous code, we will use a promise

// WE WILL LOOK AT EXAMPLES FROM THE LEARNING PLATFORM FIRST


const fs = require("fs"); //fs -> file system -> library that lets us preform file system operations (read from file, create files with content, update file, delete file, etc)


console.log("Finding a quote..."); //sync

function readFile(fileName){
  let quote = null; //sync
  return new Promise((resolve,reject)=>{
    fs.readFile(`quotes/${fileName}`, (error, buffer) => {
      // console.log('buffer is this', buffer)
      if (error) {
        return reject(error);
      }
      const lines = buffer.toString().split("\n");
      // console.log('lines is this',lines)
      quote = lines[Math.floor(Math.random() * lines.length)];
      return resolve(quote)
    }); //async
  })
}

const randomQuoteTicket = readFile("quotes.txt")

// setTimeout(()=>{
//   console.log(randomQuoteTicket)

// },1000)

randomQuoteTicket
  .then((randomQuote)=>{
    console.log(`Your quote is: ${randomQuote}`); //sync
  })


console.log("loading other parts of app")


