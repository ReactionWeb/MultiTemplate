//здесь описываем модели для виджетов и прочего
const { DataTypes, Model } = require('sequelize');
const db = require('./database');
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

class Widget extends Model{}
Widget.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    widget_index:{
        type: DataTypes.INTEGER,
        primaryKey: false,
        autoIncrement: false,
        defaultValue: 1,
    },
    about:{
        type: DataTypes.STRING,
        allowNull:true,
        defaultValue:   "Lorem ipsum dolor sit amet, consectetur adipiscing elit, " +
            "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
    }
}, {sequelize: db, modelName: 'Widget'});

class Content extends Model{}
Content.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
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
}, {sequelize: db, modelName: 'content'});

class User extends Model{}
User.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email:{
        type: DataTypes.STRING,
    },
    password: {
        type: DataTypes.STRING,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: "moderator"
    }
}, {sequelize: db, modelName: 'user'});

class Theme extends Model{}
Theme.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    primary_color: {
        type: DataTypes.STRING,
        defaultValue: "#AAA"
    },
    primary_color_light: {
        type: DataTypes.STRING,
        defaultValue: "#AAA"
    },
    primary_color_dark: {
    type: DataTypes.STRING,
        defaultValue: "#AAA"
    },
    secondary_color: {
        type: DataTypes.STRING,
        defaultValue: "#AAA"
    },
    secondary_color_light: {
        type: DataTypes.STRING,
        defaultValue: "#AAA"
    },
    secondary_color_dark: {
        type: DataTypes.STRING,
        defaultValue: "#AAA"
    }
}, {sequelize: db, modelName: 'theme'});

Widget.hasMany(Content);
Widget.hasMany(Image);

module.exports = {
    Image,
    Content,
    User,
    Theme,
    Widget,
};