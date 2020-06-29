const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    password:String,
    passwordStr:String,
    is_active:Boolean,
    photo:String,
    roleId:String
});

module.exports=usersSchema;


