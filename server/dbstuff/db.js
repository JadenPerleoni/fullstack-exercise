const { Pool } = require('pg')


const pool = new Pool({
  user: 'Jadem',
  database: 'members',
  password: 'swaggoat12',
  port: 5432,
  host: 'localhost',
})

module.exports = { pool };