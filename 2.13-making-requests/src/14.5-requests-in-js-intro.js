//1. Axios is the package that allows us to make api requests OR http verbs (GET, POST, PUT, DELETE) using JS
const axios = require("axios");

// MAKE AN API CALL TO THE CRYPTOCURRENCY SERVER AND LOG ALL THE COINS
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
    })
  // console.log(data);
}

// getCryptoCoins()
console.log("Loading up other resources...")
console.log("Texting a friend")



// MAKE AN API CALL TO THE POKEMON API AND LOG ALL THE POKEMON
function getPokemon(){
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response)=>{
      const arrayOfPokemon = response.data.results;
      arrayOfPokemon.sort((pkmnA,pkmnB)=>{
        return pkmnA.name > pkmnB.name ? 1: -1
      })
      console.log(arrayOfPokemon)
    })
}

// getPokemon()


// MAKE AN API CALL TO OUR PLAYERS SERVER (LOCALLY RUN SERVER) AND LOG ALL THE PLAYERS
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

// getAllPlayers()
// MAKE AN API CALL TO OUR PLAYERS SERVER AND SHOW ONLY THE NAMES OF THE PLAYERS IN AN ARRAY
function getPlayerNamesOnly(){
  return axios.get("http://localhost:5000/players")
  .then((response)=>{
    const namesOnly = response.data.map((element)=>{
      return element.name
    })
    console.log(namesOnly)
    return namesOnly
  })
  .catch((err)=>{
    console.log(err.message)
  })
}

// getPlayerNamesOnly()

// MAKE AN API CALL TO OUR PLAYERS SERVER AND SHOW ONLY PLAYERS FROM A GIVEN STATE
function getPLayersByState(stateName){
  return axios.get("http://localhost:5000/players")
  .then((response)=>{
    //WHAT DO YOU DO TO RESPONSE.DATA (WHICH IS AN ARRAY IN THIS CASE), TO GET ONLY PLAYER OBJECTS THAT ARE FROM THE STATE OF THE GIVEN STATENAME 
    console.log(response.data);
    return response.data;
  })
  .catch((err)=>{
    console.log(err.message)
  })
}

getPLayersByState("California")

