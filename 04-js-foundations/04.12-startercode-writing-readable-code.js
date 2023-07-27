const authors = [
  {
    id: 1,
    name: {
      firstName: "Philip",
      surname: "Pullman",
    },
    series: ["His Dark Materials", "Sally Lockhart"],
  },
  {
    id: 2,
    name: {
      firstName: "Terry",
      lastName: "Pratchett",
    },
    series: ["Discworld", "Long Earth"],
  },
];


/* 
1. DONT REPEAT YOURSELF: THE BELOW FUNCTION WORKS, HOWEVER WE CAN REFACTOR THE "authors[i]" TO BE MORE READABLE BY ASSIGNING IT TO A VARIABLE:

*/
function getAllSeries(authors=[]) {
  const result = [];
  for (let i = 0; i < authors.length; i++) {
    const currentAuthorSeries = authors[i].series;
    for (let j = 0; j < currentAuthorSeries.length; j++) {
      result.push(currentAuthorSeries[j]);
    }
  }
  return result;
}

//console.log(getAllSeries(authors)); // [ 'His Dark Materials', 'Sally Lockhart', 'Discworld', 'Long Earth' ]

/* 
Solution for 1:

const author = authors[i];
for (let j = 0; j < author.series.length; j++) {
  result.push(author.series[j]);
}

*/





/* 
2. RETURN EARLY- GUARD CLAUSE (WHAT IS IT AND WHEN TO USE IT?)
*/

function getSeriesListById(authors=[], id=null) {
  if(!id){
    return "No ID provided."
  }
  
  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }

  if(!selected) return [];

  const message = `Series list: ${selected.series.join(", ")}`;
  return message;

}

console.log(getSeriesListById(authors,5))

/*
SOLUTION FOR 2:

function getSeriesListById(authors, id) {
  if (!id) return "No ID provided.";

  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }
  if (!selected) return [];

  return `Series list: ${selected.series.join(", ")}`;
}
*/



/* 
3. AVOID BOOLEAN RETURNS: WE CAN AVOID EXPLICITLY RETURNING TRUE OR FALSE BASED ON A CONDITION BY JUST RETURNING THE EXPRESSION/CONDITION THAT EVALUATES TO TRUE/FALSE:
*/
function search(arr,num){
  // if(arr.includes(num)){
  //   return true;
  // }
  // else{
  //   return false;
  // }

  return arr.includes(num)
}

// console.log(search([2,4,6], 7))
// console.log([2,4,6].includes(6))
let x = [1,3,4]
let y = x

// console.log(x=== y)

function moreThanThreeAuthors(authors=[]) {
  // if (authors.length > 3) {
  //   return true;
  // } else {
  //   return false;
  // }
  return authors.length > 3;
}
console.log(moreThanThreeAuthors(authors))

/* 
SOLUTION FOR 3:

function moreThanThreeAuthors(authors) {
  return authors.length > 3;
}

*/