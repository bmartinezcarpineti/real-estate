const { Pool, Client } = require('pg');
const config = require('./config');

const db_config = {
    user: config.DB_USER,
    host: config.DB_HOST,
    password: config.DB_PASSWORD,
    database: config.DB_DATABASE,
    port: config.DB_PORT,
};

const db = new Pool(db_config);

module.exports = db;