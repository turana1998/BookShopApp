const booksSchema =require('../schemas/books');
const mongoose = require('mongoose');

const booksModel=mongoose.model('Books',booksSchema);

module.exports=booksModel;