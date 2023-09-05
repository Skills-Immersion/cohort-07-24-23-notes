// Lets look at examples from the learning module
const axios = require("axios");
const BASE_URL = "http://localhost:5001";

function update(id, body) {
  if (!id || !body) return Promise.reject("Id or body needed");

  const url = `${BASE_URL}/constellations/${id}`;
  return axios.put(url, body);
}


const hydrus = {
  name: "Hydrus",
  meaning: "Water Snake",
  starsWithPlanets: 5,
  quadrant: "SQ1",
};

// update("UPtAzfV", hydrus)
//   .then(({ data }) => console.log(data))
//   .catch((err)=>console.log(err));
//   // .catch(console.log);


// update()
//   .then(({ data }) => console.log(data))
//   .catch(console.log);

//guess the result
/* 

Promise.resolve("hello")
.then((value) => Promise.reject(value + " world"))
.then((result) => console.log("I said", result))
.catch((result) => console.log("They said: ", result));


//guess the result
Promise.resolve({ name: "Lebron" })
.then((value) => {
  return value.team
  ? Promise.reject(value)
  : Promise.resolve({ error: "Missing key." });
})
.then((result) => console.log("Success:", result))
.catch((result) => console.log("Failure:", result));

*/

// Promise.resolve("hello")
//   .then((value) => Promise.reject(value + " world"))
//   .then((result) => console.log("I said", result))
//   .catch((result) => console.log("They said: ", result));


Promise.resolve({ name: "Lebron" })
.then((value) => {
  return value.team
  ? Promise.reject(value)
  : Promise.resolve({ error: "Missing key." });
})
.then((result) => console.log("Success:", result))
.catch((result) => console.log("Failure:", result));