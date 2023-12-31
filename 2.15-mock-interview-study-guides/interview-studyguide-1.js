/* 
Problem
For this use the CoinGecko Api to find market data for crypto coins.

getCoinMarketData()

Create a function called getCoinMarketData that takes a string as a parameter. The string represents a crypto currency coin such as "bitcoin", or "ethereum", or "solana"

The API endpoint will be similar to this endpoint to get bitcoin information: https://api.coingecko.com/api/v3/coins/bitcoin

Make sure to make the API call update based on the coin name that is passed into getCoinMarketData.

The function should return the market_data object from the result of the API call.

An example output would be

getCoinMarketData('bitcoin') 
getCoinMarketData('ethereum')
getCoinMarketData('dogecoin')

/* ->
  
{
    "current_price": {
      "aed": 70733,
      "ars": 2980147,
      "aud": 30582,
      "bch": 178.634,
      "bdt": 1959024,
      "bhd": 7261.67,
      "bmd": 19257.73,
      "bnb": 70.727,
      "brl": 101677,
      "btc": 1.0,
      "cad": 26438,
      "chf": 19274.37,
      "clp": 18944794,
      "cny": 139869,
      "czk": 476955,
      "dkk": 144991,
      "dot": 3299,
      "eos": 17993,
      "eth": 14.425859,
      "eur": 19492.33,
      "gbp": 17048.91,
      "hkd": 151172,
      "huf": 8069988,
      "idr": 300336961,
      "ils": 68482,
      "inr": 1594236,
      "jpy": 2866799,
      "krw": 27794194,
      "kwd": 5977.41,
      "lkr": 7033330,
      "ltc": 367.378,
      "mmk": 40245174,
      "mxn": 384275,
      "myr": 91243,
      "ngn": 8446557,
      "nok": 202752,
      "nzd": 33889,
      "php": 1133654,
      "pkr": 4221871,
      "pln": 93296,
      "rub": 1191572,
      "sar": 72375,
      "sek": 215675,
      "sgd": 27389,
      "thb": 734875,
      "try": 358212,
      "twd": 622686,
      "uah": 707768,
      "usd": 19257.73,
      "vef": 1928.28,
      "vnd": 478691307,
      "xag": 1006.15,
      "xau": 11.7,
      "xdr": 13707.23,
      "xlm": 175337,
      "xrp": 42424,
      "yfi": 2.547197,
      "zar": 355157,
      "bits": 1000030,
      "link": 2819,
      "sats": 100002999
}, ...other keys related to market data

*/

const axios = require("axios");
const base_url = "https://api.coingecko.com/api/v3/coins"

function getCoinMarketData(coinName=""){
  return axios.get(`${base_url}/${coinName}`)
    .then((response)=>{
      // console.log(response.data.market_data)
      return response.data.market_data;
    })
    .catch((err)=>{
      // console.log(err.message);
      return err.message;
    })
}

async function getCoinMarketData2(coinName=""){
  try{
    // const {data:{market_data}} = await axios.get(`${base_url}/${coinName}`);
    const response = await axios.get(`${base_url}/${coinName}`);
    return response.data.market_data;
  }catch(err){
    console.log(err.message);
    return err.message;
  }
}

// getCoinMarketData2("ethereum")
// .then((output)=>{
//   console.log("output is", output);
// })
// console.log(result)




function getAllCoins() {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  return axios.get(url)
    .then(response => {
      const coinData = response.data;

      const formattedCoins = coinData.map(coin => {
        return {
          name: coin.name,
          current_price: coin.current_price,
          price_change_percentage_24h: coin.price_change_percentage_24h
        };
      });

      return formattedCoins;
    })
    .catch(error => {
      console.error("Error fetching data from the API:", error);
      return [];
    });
}


// getAllCoins().then(console.log)

function getPokemonData(pokemonName) {
  const baseUrl = "https://pokeapi.co/api/v2/pokemon/";

  return axios.get(`${baseUrl}${pokemonName}`)
    .then(response => {
      const data = response.data;

      const abilities = data.abilities.map(ability => {
        return {
          abilityName: ability.ability.name,
          isHidden: ability.is_hidden
        };
      });

      const formattedData = {
        name: data.name,
        abilities: abilities,
        height: data.height,
        base_experience: data.base_experience
      };

      return formattedData;
    })
    .catch(error => {
      console.error("Error fetching data from the API:", error);
      return null;
    });
  }


  getPokemonData("pikachu").then(console.log)