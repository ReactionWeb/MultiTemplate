//здесь подключаем базу данных
const { Sequelize } = require('sequelize');
//создаем DAO                   //База       //Логин     //Пароль
module.exports = new Sequelize('userstemp', 'postgres', '111111', {
    host: 'localhost',
    dialect: 'postgres',
    //пока не разобрался зачем, но без этой штуки ошибка подключения, хотя в документации можно без нее пишут
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});