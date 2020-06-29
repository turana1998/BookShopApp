const writersSchema =require('../schemas/writers');
const mongoose = require('mongoose');

const writersModel=mongoose.model('Writers',writersSchema);

module.exports=writersModel;