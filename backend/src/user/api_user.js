const { registerUser, authUser } = require('./query_user');

const apiUser = (app) => {
    app.post('/reg', async(req, res) => {
        try{
            const userName = req.body.userName;
            const email = req.body.email;
            const password = req.body.password;
            await registerUser(userName, email, password);
            res.send("Пользователь зарегистрирован");
        } catch(e){
            console.log(e);
            res.send("Ошибка при попытке регистрации");
        }
    })
}

module.exports = {
    apiUser
}