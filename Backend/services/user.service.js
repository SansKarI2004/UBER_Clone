const userModel=require('../models/user.model');


module.exports.createUser=async({firstname,lastname,email,password})=>{
    
    if(!firstname || !lastname || !email || !password){
        throw new Error('A:: fields are required');
    }
    const user= UserModel.create({
    fullname:{
        firstname,
        lastname
    },
    email,
    password,
    })

    return user;
}