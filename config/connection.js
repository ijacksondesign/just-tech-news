// imports Sequilize constructor from the library
const Sequelize = require('sequelize');

// imports environment variables for mysql database connection
require('dotenv').config();

//creates connection to our databse by passing in MySQL information for username and password
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;