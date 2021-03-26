//здесь описываем модели для виджетов и прочего
const { DataTypes, Model } = require('sequelize');
const db = require('../database');
//модель с админкой
//модель с журналом клиентов

class Image extends Model{} //Связывается с оверлеями и всеми картинками
Image.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:   "ImageName",
    },
    url:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:   "IMG1.jpg",
        //Тоха тут должна быть ссылка на статику. ps. ссылка не относительная,
        // а которая посылается с клиента, для этого экспресс раздаёт статику. пример : localhost:1337/media/URL
    }
}, {sequelize: db, modelName: 'image'});


class Text extends Model{}
Text.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    widget_id:{
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 1,
    },
    widget_index:{
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 1,
    },
    content:{
        type: DataTypes.STRING,
        allowNull:false,
        defaultValue:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
                        "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    }
}, {sequelize: db, modelName: 'text'});


module.exports = {
    Image,
    Paragraph,
};