const knex = require("knex");
const { PASSWORD } = require('./config.js')

const database = require('knex')({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: PASSWORD,
        database: 'postgres',
        port: 5432
    }
})

module.exports = { database };