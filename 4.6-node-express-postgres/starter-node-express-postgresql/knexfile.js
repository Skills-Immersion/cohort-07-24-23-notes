// Update with your config settings.
const path = require("path");
require("dotenv").config();
const { DATABASE_URL } = process.env
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: DATABASE_URL,
    // migrations
    migrations: {
      directory: path.join(__dirname, "src", "db", "migrations")
    },
    // seeds
    seeds: {
      directory: path.join(__dirname, "src", "db", "seeds")
    }
  },

};
