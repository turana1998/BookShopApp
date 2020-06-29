const mongoose = require('mongoose');

const categoriesSchema = new mongoose.Schema({
    name:String,
    is_active:Boolean
});

module.exports=categoriesSchema;