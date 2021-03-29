const path = require('path');
const express = require('express');
const {apiMailer} = require('./mailer/api_mailer');
const {apiMessenger} = require('./messenger/api_messenger');
const {apiUser} = require('./user/api_user');
const db = require('./database');
const {apiWidget} = require("./widget/api_widget");


const app = express()

async function start(){
    try {
        await db.authenticate();
        await db.sync();
        //запуск статического файлового сервера
        app.use(express.static(path.join(__dirname, "../media")));
        //подключаем возможность работы с JSON
        app.use(express.json());

        app.use(express.urlencoded());
        //подключаем возможность загружать на сервер файлы
        //решаем проблему с безопасностью CORS
        app.use((request,response,next) => {
        response.header("Access-Control-Allow-Origin", "*");
        response.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
        next();
        });

        //Кастомные апи с запросами
        //apiMailer(app);
        // apiUser(app);
        apiWidget(app);
        //слушаем порт
        app.listen(1337, () => {
        console.log("Сервер запущен.") //сделать логгер
        });
    } catch (error) {
        console.log("Ошибка сервера: ", error.message);
        process.exit(1);
    }
}

start();

