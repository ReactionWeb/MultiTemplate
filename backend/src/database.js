//здесь подключаем базу данных
const { Sequelize } = require('sequelize');
//создаем DAO                   //База       //Логин     //Пароль
module.exports = new Sequelize('userstemp', 'postgres', '111111', {
    host: 'localhost',
    dialect: 'postgres',
});