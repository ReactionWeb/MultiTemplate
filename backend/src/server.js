const path = require('path')
const express = require('express')
const fileUpload = require('express-fileupload')
const {apiMailer} = require('./mailer/api_mailer')
const {apiMessenger} = require('./messenger/api_messenger')

const app = express()

//запуск статического файлового сервера
app.use(express.static(path.join(__dirname, "../media")));
//подключаем возможность работы с JSON
app.use(express.json());
//подключаем возможность загружать на сервер файлы
app.use(fileUpload());
//решаем проблему с безопасностью CORS
app.use((request,response,next) => {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Content-Type, X-Requested-With");
    next();
})

//Кастомные апи с запросами
apiMailer(app)
apiMessenger(app) //не факт что понадобится, т.к мб придётся объединять все реквесты

//слушаем порт
app.listen(1337, () => {
    console.log("Сервер запущен.") //сделать логгер
})
