const bcrypt = require('bcrypt');
const User = require('./user_models');
const { tokenDecode, tokenSign} = require('./webtoken');


const registerUser = async(username, email, password) => {
    let hash_pass = await bcrypt.hash(password, 10); 
    try{
        const user = await User.create({userName: username, email: email, password: hash_pass});
    } catch(e) {
        console.log(e);
        throw('Ошибка при создании пользователя')
    }
}

const authUser = async(username, password) => {
    const user = await User.findOne({
        where: {
            userName: username
        },
    });
    if (user == null){
        console.log('Пользователь не найден');
    }
    else{
        const match = await bcrypt.compare(password, user.password);

        if (match){
            const token = tokenSign({ id: user.id,
                                       userName: user.userName});
            const authToken = {
                userName: username,
                token: token
            }
            return(authToken);
        }
        else{
            throw('Пароль введен неверно');
        }
    }
}

module.exports = {
    registerUser,
    authUser
}