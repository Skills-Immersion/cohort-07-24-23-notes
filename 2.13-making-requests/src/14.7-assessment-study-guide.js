const axios = require("axios");

//GET ALL PLAYERS
function findAllPlayers(){

}
//GET ONE PLAYER BY ID
function findPlayerById(id){
  return axios.get(`http://localhost:5000/players/${id}`)
    .then((response)=>{
      console.log(response.data)
      return response.data;
    })
    .catch((err)=>{
      console.log(err.message)
      return err.message
    })
}

// findPlayerById(7)

//CREATE A NEW PLAYER
function createPlayer(info){
  return axios.post("http://localhost:5000/players",info)
  .then((response)=>{
    console.log(response.data)
    return response.data;
  })
  .catch((err)=>{
    console.log(err.message)
    return err.message
  })
} 

const newPlayer = {
  "name": "Bugs Bunny",
  "team": "Tune Squad",
  "number_championships": 1,
  "state": "California"
}

// createPlayer(newPlayer)


//UPDATE PLAYER BY ID
function updatePlayer(id, updatedData){
  return axios.put(`http://localhost:5000/players/${id}`,updatedData)
  .then((response)=>{
    console.log(response.data)
    return response.data;
  })
  .catch((err)=>{
    console.log(err.message)
    return err.message
  })
}

const updatedBron = {
  // "name": "Lebron GOAT James",
  // "team": "Lakers",
  "number_championships": 7,
  // "state": "California"
}

// updatePlayer(1, updatedBron)

//DELETE PLAYER BY ID
function deletePlayer(id){
  return axios.delete(`http://localhost:5000/players/${id}`)
    .then((response)=>{
      console.log(response.data)
      return id;
    })
    .catch((err)=>{
      console.log(err.message)
      return err.message
    })
}

deletePlayer(6)