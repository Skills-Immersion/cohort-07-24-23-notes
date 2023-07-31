/* 
.reduce() -> loop through the array and accumulate a value based on a condition.
  -INPUT: CALLBACK FUNCTION, INITIAL VALUE
  -RETURNS: ACCUMULATED VALUE
  -CALLBACK FUNCTION DETAILS:
    -CB PARAMETERS: ACCUMULATOR, ELEMENT AND INDEX
    -CB RULE: RETURN AN ACCUMULATION - the callback function has to return a value that will be accumulated with the previous values on each iteration.
*/





const numbers = [768, 1004.2, 433.1];

function sumNumsForEachWay(nums=[]){
  let total = 0;
  nums.forEach((elem, idx)=>{
    total += elem;
  })
  return total;
}

// console.log(sumNumsForEachWay(numbers))

function sumNums(nums){
  const total = nums.reduce((accumulator,element,idx)=>{
    //whatever you return in the cb function for .reduce() is what we are setting accumulator to for the next iteration
    //1. accumulate to the accumulator
    accumulator += element;
    //2. return the accumulator
    return accumulator
  },0)

  return total;

}

// console.log(sumNums(numbers))


const movies = [
  {
      title: "Austin Powers",
      views: 1000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
  {
      title: "Finding Nemo",
      views: 2000,
      producer: { 
          name: "Disney",
          city: "Orlando"
      }
  },
  {
      title: "Forrest Gump",
      views: 3000,
      producer: { 
          name: "Universal Studios",
          city: "Los Angeles"
      }
  },
];


/* ADD UP ALL THE VIEWS FROM ALL THE MOVIE OBJECTS IN THE MOVIES ARRAY */

function totalViews(movies=[]){
  const total = movies.reduce((acc,element,idx)=>{
    acc += element.views;
    return acc;
  },0)

  return total;
}

// console.log(totalViews(movies))



/* HOW TO ACCUMULATE ONTO OBJECTS- GIVEN AN ARRAY OF MOVIE OBJECTS, RETURN AN OBJECT WHERE EACH KEY IS A MOVIE TITLE, AND THE VALUE IS THE PRODUCER NAME 
EXAMPLE OUTPUT:

{
  'Austin Powers': 'Universal Studios',
  'Finding Nemo': 'Disney',
  'Forrest Gump': 'Universal Studios'
}
*/
function movieAndProducerNameForEach(movies=[]){
  const result = {};

  movies.forEach((element)=>{
    result[element.title] = element.producer.name;
  })
  return result;
}

// console.log(movieAndProducerNameForEach(movies))


function movieAndProducerName(movies=[]){
  const result = movies.reduce((acc,element,idx)=>{
    //1. accumulate to the accumulator
    acc[element.title] = element.producer.name;
    //2. return accumulator
    return acc;
  },{})

  return result;
}

// console.log(movieAndProducerName(movies));

/* ADVANCED PROBLEM- HINT FOR YOUR ASSESSMENT:  GIVEN AN ARRAY OF MOVIE OBJECTS, RETURN AN OBJECT WHERE EACH KEY IS THE PRODUCER NAME, AND EACH VALUE IS AN ARRAY OF MOVIES ASSOCIATED WITH THAT PRODUCER NAME 

EXAMPLE OUTPUT: 

{
  'Universal Studios': [
      { title: 'Austin Powers', views: 1000, producer: [Object] },
      { title: 'Forrest Gump', views: 3000, producer: [Object] }
    ],
  Disney: [ { title: 'Finding Nemo', views: 2000, producer: [Object] } ]
}


*/

function movieByProducer(movies=[]){
  const result = movies.reduce((acc,element,idx)=>{
    if(acc[element.producer.name] === undefined){
      acc[element.producer.name] = [element]
    }else{
      acc[element.producer.name].push(element);
    }
    return acc;
  },{})
  return result
}

/* 
acc = {
  "Universal studios": [{Austin Powers}, {Forrest Gump} ],
  "Disney": [{Finding Nemo}]

}
*/

console.log(movieByProducer(movies))