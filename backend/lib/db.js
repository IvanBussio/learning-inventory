require('dotenv').config();

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const { neon } = require('@neondatabase/serverless');

const sql = neon(process.env.DATABASE_URL);

module.exports = sql;