//здесь описываем модели для виджетов и прочего
const { Model, DataTypes } = require('sequelize');
const db = require('./database');
//модель с админкой
//модель с журналом клиентов
class User extends Model{}

User.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {db, modelName: 'user'});
//модель с сотрудниками
//на каждый виджет по модели

module.exports = User;