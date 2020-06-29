const mongoose = require('mongoose');
const booksSchema = new mongoose.Schema({
    name:String,
    pageCount:Number,
    writerId:String,
    stockCount:Number,
    dateAdd:Date,
    addUserId:String,
    categoryIds:[String],
    content:String,
    photo:String,
    price:Number,
    is_active:Boolean
});

module.exports=booksSchema;


