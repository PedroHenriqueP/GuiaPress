const Sequelize = require('sequelize');
const connection = new Sequelize('guiapress', 'bd', 'mysql*pass', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;