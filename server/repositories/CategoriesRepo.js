const CategoriesModel=require('../models/categories');

const getCategories= async (req)=>{
    let categories=await CategoriesModel.find({is_active:true},"name");
    return categories;
}


const addCategory= async (req)=>{
    let category=new CategoriesModel({
        name:req.body.name,
        is_active:true
    });

    let err=await category.save();
}


const deleteCategory= async (req)=>{

    let category=CategoriesModel.findById(req.params.categoryId);
    console.log(category);
    category.is_active=false;
    let err=await category.save();
}


module.exports={
    getCategories,
    addCategory,
    deleteCategory
}