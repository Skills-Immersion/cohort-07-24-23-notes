//What will be logged?
function one(){
  let fortune = null;
  
  if (!fortune) {
    setTimeout(() => {
      fortune = "A pleasant surprise is waiting for you.";
    });
  }
  
  console.log(`Your fortune is: ${fortune}`);
}

// one()


//What will be the state of the promise below after 1,000 milliseconds?
function two(){
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Completed!');
    }, 100);
  });

  setTimeout(()=>{
    console.log(promise)
  },10)
}
//Pending, Fulfilled (resolved), Rejected
// two()

//What will be the state of the promise below after 1,000 milliseconds?
function three(){
  const promise = new Promise((resolve, reject) => {
    resolve("hello")
  });

  console.log(promise)
}

// three()


