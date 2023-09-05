/* 
Higher order functions -> A function that either accepts a function as a parameter (input) and/or a function that returns a function
 A. Callback functions -> A function that is given as an input to another function
 B. Closures - A function that returns a function

*/


const dishes = ["Calamari", "Pasta", "Lasagna", "Garlic Bread", "Salad", "Pizza"];
// 1. GIVEN AN ARRAY OF FOOD ITEMS, PRINT EACH ITEM USING REGULAR FOR LOOP
// for(let i = 0; i< dishes.length; i++){
//   const element = dishes[i];
// }

// for(let element of dishes){
  
// }

// 1.1 GIVEN AN ARRAY OF FOOD ITEMS, PRINT EACH ITEM USING .FOREACH()
function logIt(element,idx){
  console.log(`Your element is this: ${element} and its located in index: ${idx}`)
}

// dishes.forEach(logIt)
// logIt("Calamari", 0)
// logIt("Pasts", 1)


// dishes.forEach((element,idx)=>{
//   console.log(`Your element is this: ${element} and its located in index: ${idx}`);
// })

// dishes.forEach((firstWord)=>{
//   console.log(firstWord)
// })

// 2. USE FOREACH() TO LOOP THROUGH AN ARRAY OF OBJECTS AND SHOW THEIR DETAILS: "The rapper Drake earned 10000000 from rapping career with a fire level of 10."

const rappers = [
  {
    name: "Drake",
    fireLevel: "10",
    moneyEarnedFromRapping: 10000000
  },
  {
    name: "Lupe Fiasco",
    fireLevel: "10",
    moneyEarnedFromRapping: 5000000
  },
  {
    name: "Rob D",
    fireLevel: "5",
    moneyEarnedFromRapping: 0
  }
];


// rappers.forEach((element,idx)=>{
//   const {name, moneyEarnedFromRapping, fireLevel} = element;
//   console.log(`The rapper ${name} earned ${moneyEarnedFromRapping} from rapping career with a fire level of ${fireLevel}.`)
// })

//destructure the parameter
rappers.forEach(({name, moneyEarnedFromRapping, fireLevel},idx)=>{
  // console.log(`The rapper ${name} earned ${moneyEarnedFromRapping} from rapping career with a fire level of ${fireLevel}.`)
})


/* 
GENERAL RULES OF .FOREACH()

.forEach() -> accepts a callbackfunction as its agrument. It will apply the callback function to each element in the array. 

-The first parameter in CB represents current element in the loop
-The second parameter in CB represents index number of current element

*/


// 3. USE FOREACH TO ADD UP THE FIRELEVELS OF THE ARTISTS ABOVE AND GIVE BACK THE TOTALFIRE AND AVERAGEFIRE
let total = 0;
let avg = 0;

// for(let i = 0; i< rappers.length; i++){
//   const element = rappers[i];
//   total += element.fireLevel;
// }

function calculateTotalAndAverage(){
  rappers.forEach((rapperObj)=>{
    total += Number(rapperObj.fireLevel)
  })
  
  console.log(total)
  avg = total/rappers.length
  console.log(avg)
}


// 4. USE FOREACH TO BUILD A STATEMENT FROM GIVEN DATA ABOVE "MY TOP RAPPERS LIST ARE: DRAKE, LUPE FIASCO, ROB D, AND THEY ARE ALL FUEGO.
function buildStatement(rappers=[]){
  //MY TOP RAPPERS LIST ARE: DRAKE, LUPE FIASCO, ROB D, AND THEY ARE ALL FUEGO.
  let result = "MY TOP RAPPERS LIST ARE: ";
  rappers.forEach((element,idx)=>{
    result += `${element.name}, `
  })
  result += "AND THEY ARE ALL FUEGO."
  return result;
}

// console.log(buildStatement(rappers))

// 5. USE FOREACH TO LOG THE MONEYEARNEDFROMRAPPING FOR EACH ARTIST ABOVE AND FORMAT USING THE DOLLAR SIGN TO SHOW AMOUNT IN DOLLARS

function logMoneyEarned(rappers=[]){
  rappers.forEach((element)=>{
    console.log(`$${(element.moneyEarnedFromRapping/100).toFixed(2)}`)
  })
}

// console.log(logMoneyEarned(rappers))






