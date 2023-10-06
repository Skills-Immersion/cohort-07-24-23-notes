require('dotenv').config();
// Update with your config settings.
module.exports = {
  development: {
    client: "postgresql",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './src/db/migrations'
    }
  },
};