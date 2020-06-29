const mongoose = require('mongoose');

const rolesSchema = new mongoose.Schema({
    name:String,
    is_admin:Boolean
});

module.exports=rolesSchema;