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
1. DONT REPEAT YOURSELF: THE ABOVE FUNCTION WORKS, HOWEVER WE CAN REFACTOR THE "authors[i]" TO BE MORE READABLE BY ASSIGNING IT TO A VARIABLE:

*/
function getAllSeries(authors) {
  const result = [];
  for (let i = 0; i < authors.length; i++) {
    for (let j = 0; j < authors[i].series.length; j++) {
      result.push(authors[i].series[j]);
    }
  }
  return result;
}

getAllSeries(authors); // [ 'His Dark Materials', 'Sally Lockhart', 'Discworld', 'Long Earth' ]

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

function getSeriesListById(authors, id) {
  let selected = null;
  for (let i = 0; i < authors.length; i++) {
    const author = authors[i];
    if (author.id === id) selected = author;
  }

  if (id) {
    if (selected) {
      const message = `Series list: ${selected.series.join(", ")}`;
      return message;
    } else {
      return [];
    }
  } else {
    return "No ID provided.";
  }
}

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

function moreThanThreeAuthors(authors) {
  if (authors.length > 3) {
    return true;
  } else {
    return false;
  }
}


/* 
SOLUTION FOR 3:

function moreThanThreeAuthors(authors) {
  return authors.length > 3;
}

*/