const knex = require("knex");

const db_connection = knex({
    // configuration obj
    // client driver
    client: "pg",
    // connect to our DB
    connection: "postgres://dkevcfwd:8WnAbBRYuP9BfriCWsL_UpvRFsZL4yFV@otto.db.elephantsql.com/dkevcfwd"
})

db_connection.select("*")