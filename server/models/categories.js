const categoriesSchema =require('../schemas/categories');
const mongoose = require('mongoose');

const categoriesModel=mongoose.model('Categories',categoriesSchema);

module.exports=categoriesModel;