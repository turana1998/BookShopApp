const WritersModel = require('../models/writers');


const getWriters=async (req)=>{
    let writers=await WritersModel.find({is_active:true},"name surname email contact bookCount photo categoryIds content").lean();
    return writers;
}

const addWriter=async(req)=>{
    let body = req.body;
    var writer=new WritersModel({
        name:body.name,
        surname:body.surname,
        bookCount:body.bookCount,
        email:body.email,
        contact:body.contact,
        categoryIds:body.categoryIds,
        content:body.content,
        photo:body.photo,
        is_active:true
    });
    let err=await writer.save();
}

const updateWriter=async(req)=>{
    let body = req.body;
    let currentWriter=await WritersModel.findById(req.params.writerId);
    currentWriter.name=body.name,
    currentWriter.contact=body.contact,
    currentWriter.surname=body.surname,
    currentWriter.bookCount=body.bookCount,
    currentWriter.email=body.email,
    currentWriter.content=body.content,
    currentWriter.photo=body.photo,
    currentWriter.categoryIds=body.categoryIds
    let err=await currentWriter.save();
}


const getById=async (req)=>{
    let body = req.body;
    let currentWriter=await WritersModel.findById(req.params.writerId);
    return currentWriter;
}


const deleteWriter=async (req)=>{
    let body = req.body;
    let currentWriter=await WritersModel.findById(req.params.writerId);
    currentWriter.is_active=false;
    let err=await currentWriter.save();
}



module.exports={
    getWriters,
    addWriter,
    updateWriter,
    deleteWriter,
    getById
}