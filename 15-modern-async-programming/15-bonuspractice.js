const axios = require("axios");

//When you have a function that returns a promise and that promise already has the .then() .catch() attached to it, it just means the function returns back a promise that once it is resolved, it will further resolve it to something else
function getPokemon(){
  return axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
    .then((response)=>{
      const arrayOfPokemon = response.data.results;
      arrayOfPokemon.sort((pkmnA,pkmnB)=>{
        return pkmnA.name > pkmnB.name ? 1: -1
      })
      // console.log(arrayOfPokemon.slice(0,10))
      return arrayOfPokemon.slice(0,10)
      // return "wazzaaap"
    })
    .catch(err=>{
      console.log("errror happened", err.message)
      return err.message
    })
}

getPokemon()
  .then((topTenPokemon)=>{
    console.log("*****", topTenPokemon)
  })
  .catch((err)=>{
    console.log(err.message)
  })

