//GLOBAL VARIABLE - variable that is created outside of functions and loops and conditionals, thus they are available to use for any line after they were created
const fav_color = "pink";


//GLOBAL FUNCTION
function saySomething(word){
  console.log(`Hi, ima say ${word}`)
  const x = "Gona give it ya"; //x is functionally scoped, not globally scoped. We can only access x within the function its declared in
}

// console.log(x)
saySomething("Wazzzzaaap")

//FUNCTIONS CREATE THEIR OWN SCOPE-> ANYTHING CREATED INSIDE A FUNCTION IS ONLY VISIBLE WITHIN THAT FUNCTION

//LOOPS AND CONDITIONALS (BLOCKS) CREATE THEIR OWN SCOPE-> ANYTHING CREATED INSIDE A BLOCK IS ONLY VISIBLE WITHIN THAT BLOCK

for(let i = 0; i<10; i++){
  console.log(i)
  const y = i*10 //blocked scoped -> y is created in a for loop blockk so its only available in the for loop
}


if(1+1 ===3){
  const firstname = "Rob"
}

console.log(firstname)

