const Sequelize = require('sequelize');
const connection = new Sequelize('guiapress', 'bd', 'mysql*pass', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '-03:00'
});

module.exports = connection;