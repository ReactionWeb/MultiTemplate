const bcrypt = require('bcrypt');
const { User } = require('../models');
const { tokenDecode, tokenSign} = require('./webtoken');

const registerUser = async(username, email, password) => {
    let salt = await bcrypt.genSalt(10);
    let hash_pass = await bcrypt.hash(password, salt); 
    try{
        await User.create({

        })
    } catch(e) {
        
    }
}