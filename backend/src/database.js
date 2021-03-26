//здесь подключаем базу данных
const { Sequelize } = require('sequelize');
//создаем DAO                   //База       //Логин     //Пароль
module.exports = new Sequelize('dev_db', 'postgres', 'password', {
    host: 'localhost',
    dialect: 'postgres',
});