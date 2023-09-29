// stolen from dinosaur app

// pull in what port to use from an environment variable (default 5000)
const { PORT = 8080 } = process.env;
// gets all of the code we've written in app.js
const app = require("./app");

const listener = () => console.log(`Listening on Port ${PORT}!`);
// start the server listening
app.listen(PORT, listener);
