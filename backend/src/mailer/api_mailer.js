//майлер - взаимодействие с эмайлом

const apiMailer = (app) => {
    app.get("/send_email", async(request, response) => {
        console.log(request.query);
        response.send("Мы получили ваш эмайл!");
    })
}

module.exports = {
    apiMailer,
}