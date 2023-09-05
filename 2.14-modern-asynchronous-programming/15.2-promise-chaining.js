const axios = require("axios");
const BASE_URL = "http://localhost:5000";

const player1 = {
  name: "Lebron GOAT James",
  team: "Lakers",
  number_championships: 4,
  state: "California"
}

const player2 = {
  name: "Larry Bird",
  team: "Celtics",
  number_championships: 4,
  state: "Mass"
}

// PROBLEM: WE NEED TO CHECK IF A PLAYER BY A GIVEN NAME EXISTS, IF THEY DO NOT, THEN WE WILL CREATE A PLAYER BY THAT NAME
function createIfNotExists(body={}){
  //retrieve a list of all the players from the backend (api) server and search if at least one player has the same name as the inputted name

  // return axios.get(`${BASE_URL}/players`)
  //   .then(({data})=>{
  //     const isPlayerThere = data.some((playerObj)=>{
  //       return playerObj.name === body.name;
  //     })
  //     //if the player already exists, then we won't create someone new and throw an error
  //     if(isPlayerThere === true){
  //       throw new Error("Player already exists, please try another player")
  //     }
  //     //if the player does not exist, then we will send a request to api to CREATE a player with the inputted information
  //     axios.post(`${BASE_URL}/players`, body)
  //       .then(({data})=>{
  //         console.log("Successfully created your account", data)
  //       })
  //   })
  //   .catch((error)=>{
  //     console.log(error.message)
  //     return error.message;
  //   })


    return axios.get(`${BASE_URL}/players`)
    .then(({data})=>{
      const isPlayerThere = data.some((playerObj)=>{
        return playerObj.name === body.name;
      })
      //if the player already exists, then we won't create someone new and throw an error
      if(isPlayerThere === true){
        throw new Error("Player already exists, please try another player")
      }
      //if the player does not exist, then we will send a request to api to CREATE a player with the inputted information
      return axios.post(`${BASE_URL}/players`, body)
      
    })
    .then(({data})=>{
      console.log("Successfully created your account", data)
    })
    .catch((error)=>{
      console.log(error.message)
      return error.message;
    })
}

// createIfNotExists(player2)

function updateIfExists(id, body) {
  //check if the player with the given id is in our server
  return axios.get(`${BASE_URL}/players/${id}`)
    .then((response)=>{
      console.log(response.data)
      //make an update request for this player who was found
      return axios.put(`${BASE_URL}/players/${id}`,body)
        
    })
    .then((response)=>{
      console.log(response.data)
      return response.data;
    })
    .catch((error)=>{
      console.log("errrrrrr Player not found, could not update", error.message)
      return error
    })
}


const updateData = {
  name: "Larry Legend Bird",
  team: "Bulls",
  number_championships: 4,
  state: "Illinois"
}
updateIfExists("emT90tf", updateData)