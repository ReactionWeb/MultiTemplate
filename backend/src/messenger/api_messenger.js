//мэссенджер - взаимодействие с мессенджерами и соцсетями

const apiMessenger = (app) => {
    app.get("/send_email", async(request, response) => {
        console.log(request.query);
        response.send("Мы получили ваш эмайл!");
    })
}

module.exports = {
    apiMessenger,
}