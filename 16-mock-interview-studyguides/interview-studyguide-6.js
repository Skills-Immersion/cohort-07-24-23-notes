/* 

Write a function called getFormattedCoinData that accepts a coin name. It should make a call to an api endpoint similar to this: https://api.coingecko.com/api/v3/coins/bitcoin

it should return a response that looks like this (depending on the coin)
{
    coinName: "Bitcoin",
    genesis_date: "2009-01-03",
    usd_price: 20681, (hint: you'll find the usd price under the market data property somewhere nested in there)
    ath_usd: 69045 (hint: you will also find the ath usd price in the market data property somewhere nested in there),
    price_change_percentage_24h: -0.93073
}

*/