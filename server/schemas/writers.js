const mongoose = require('mongoose');
const writersSchema = new mongoose.Schema({
    name:String,
    surname:String,
    email:String,
    contact:String,
    bookCount:Number,
    content:String,
    is_active:Boolean,
    photo:String,
    categoryIds:[String]
});

module.exports=writersSchema;


