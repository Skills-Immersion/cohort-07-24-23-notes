// pulling in dotenv here so that the PORT in our .env file is used
require('dotenv').config();
const { PORT = 5000 } = process.env;

const app = require("./app");
const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);
