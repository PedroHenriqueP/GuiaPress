const Sequelize = require('sequelize');
const connection = require('../database/database');

const Category = connection.define('categories', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//Category.sync({ force :  true }); //pra recriar tabela caso haja uma modificação nessa página

module.exports = Category;