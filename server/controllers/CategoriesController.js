const categoriesRepo=require('../repositories/CategoriesRepo');

const getCategories= async (req,res)=>{
    try{
        let categories=await categoriesRepo.getCategories();
        res.json(categories);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

const addCategory = async (req,res)=>{
    try{
        await categoriesRepo.addCategory(req);
        res.sendStatus(201);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

const deleteCategory = async (req,res)=>{
    try{
        await categoriesRepo.deleteCategory(req);
        res.json(categories);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

module.exports={
    getCategories,
    addCategory,
    deleteCategory
}