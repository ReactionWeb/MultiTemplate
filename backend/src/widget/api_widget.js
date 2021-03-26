const {getWidgetContent } = require('./query_widget');

const apiWidget = (app) => {
    app.get('/getContent', async(req, res) => {
        try{
            const id = req.query.id;
            let response = await getWidgetContent(id);
            res.json(response);
        } catch(e){
            console.log(e);
            res.send("Не получилось получить контент");
        }
    }),

    app.post('/setContent', async(req, res) => {
        try{

        } catch(e){

        }
    })
}   //нам нужно как то грамотно вгонять данные от пользователя и принимать их,
    //было бы круто иметь только два запроса, и крутить от них всё остальное.
    //Как получить контент в любой виджет с одного GET - ясно. Но как внести правку через один POST - проблема

module.exports = {
    apiWidget
}