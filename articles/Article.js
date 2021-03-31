const Sequelize = require('sequelize');
const connection = require('../database/database');
const Category = require('../categories/Category');

const Article = connection.define('articles', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Article.belongsTo(Category); //um artigo pertence a uma categoria
Category.hasMany(Article); //uma categoria tem vários artigos

//Article.sync({ force :  true }); //pra recriar tabela caso haja uma modificação nessa página

module.exports = Article;