const axios = require("axios");


function getCryptoCoins(){
  return axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")
    .then((response)=>{
      //RESPONSE IS AN OBJECT THAT CONTAINS THE PROPERTIES (STATUS, DATA)
      console.log("response.status is this", response.status)
      // console.log("response.data is this", response.data)
      const arrayOfCoins = response.data;
      arrayOfCoins.sort((coinA, coinB)=>{
        return coinB.price_change_percentage_24h - coinA.price_change_percentage_24h
      })
      console.log(arrayOfCoins.slice(0,3))
      return arrayOfCoins.slice(0,3)
    })
    .catch((err)=>{
      console.log(err.message)
      return err.message
    })
  // console.log(data);
}

async function getCryptoCoins2(){
  try{
    const response = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false")

    //RESPONSE IS AN OBJECT THAT CONTAINS THE PROPERTIES (STATUS, DATA)
    console.log("response.status is this", response.status)
    // console.log("response.data is this", response.data)
    const arrayOfCoins = response.data;
    arrayOfCoins.sort((coinA, coinB)=>{
      return coinB.price_change_percentage_24h - coinA.price_change_percentage_24h
    })
    console.log(arrayOfCoins.slice(0,3))
    return arrayOfCoins.slice(0,3)

  }catch(err){
    console.log(err.message)
    return err.message
  }
  
}

// console.log(getCryptoCoins2())
// console.log("running other processesss")

function getPokemon(){
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response)=>{
      const arrayOfPokemon = response.data.results;
      arrayOfPokemon.sort((pkmnA,pkmnB)=>{
        return pkmnA.name > pkmnB.name ? 1: -1
      })
      console.log(arrayOfPokemon)
    })
    .catch((err)=>{
      console.log(err.message)
      return err.message
    })
}

async function getPokemon2(){
  try{
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    // console.log(response)
    const arrayOfPokemon = response.data.results;
      arrayOfPokemon.sort((pkmnA,pkmnB)=>{
        return pkmnA.name > pkmnB.name ? 1: -1
      })
    // console.log(arrayOfPokemon)
    return arrayOfPokemon
  }catch(err){
    console.log(err.message)
    return err.message
  }
}

getPokemon2()
  .then((resolvedVal)=>{
    console.log("resolvedVal is this", resolvedVal)
  })
console.log("loading up other sync resources")

function getAllPlayers(){
  return axios.get("http://localhost:5000/players")
    .then((response)=>{
      console.log(response.data);
      return response.data;
    })
    .catch((err)=>{
      console.log(err.message)
    })
}

async function getAllPlayers2(){
  try{
    const response = await axios.get("http://localhost:5000/players")
    console.log(response.data);
    return response.data;
  }catch(err){
    console.log(err.message)
  }
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
  "name": "Lebron GOAT James",
  "team": "Lakers",
  "number_championships": 7,
  "state": "California"
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

// deletePlayer(6)