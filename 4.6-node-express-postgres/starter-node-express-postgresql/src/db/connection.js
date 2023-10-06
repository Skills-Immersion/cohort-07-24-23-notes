// the same four lines, every time
const env = process.env.NODE_ENV || "development";
const config = require("../../knexfile")[env];
const knex = require("knex")(config);

module.exports = knex;
