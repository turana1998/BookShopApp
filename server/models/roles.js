const rolesSchema =require('../schemas/roles');
const mongoose = require('mongoose');

const rolesModel=mongoose.model('Roles',rolesSchema);

module.exports=rolesModel;