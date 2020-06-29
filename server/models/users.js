const usersSchema =require('../schemas/users');
const mongoose = require('mongoose');

const usersModel=mongoose.model('Users',usersSchema);

module.exports=usersModel;