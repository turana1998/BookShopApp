const writerRepo=require('../repositories/WritersRepo');
const categoriesRepo=require('../repositories/CategoriesRepo');


const getWriters= async (req,res)=>{
    try{
        let writers=await writerRepo.getWriters(req);
        let categories=await categoriesRepo.getCategories(req);
        writers.forEach(writer=>{
            writer.categories=[];
            writer.categoryIds.forEach(catId=>{
                writer.categories.push(categories.find(cat=>{
                    return cat._id==catId;
                }));
            })
        })
        res.json(writers);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}


const addWriter=(req,res)=>{
    try{
        writerRepo.addWriter(req);
        res.sendStatus(201);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

const getById=(req,res)=>{
    try{
        writerRepo.getWriterById(req);
        res.sendStatus(200);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

const update=(req,res)=>{
    try{
        writerRepo.updateWriter(req);
        res.sendStatus(200);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}


const deleteWriter=(req,res)=>{
    try{
        writerRepo.deleteWriter(req);
        res.sendStatus(201);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

module.exports={
    getWriters,
    addWriter,
    getById,
    deleteWriter,
    update
}