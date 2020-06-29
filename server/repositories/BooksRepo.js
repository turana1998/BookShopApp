const BooksModel=require('../models/books');

const getBooks=async (req)=>{
    let books=await BooksModel.find({is_active:true},"name pageCount writerId stockCount photo price categoryIds content dateAdd").lean();
    return books;
}

const addBook=async(req)=>{
    let body = req.body;
    var book=new BooksModel({
        name:body.name,
        pageCount:body.pageCount,
        writerId:body.writerId,
        stockCount:body.stockCount,
        dateAdd:new Date(),
        addUserId:body.addUserId,
        categoryIds:body.categoryIds,
        content:body.content,
        photo:body.photo,
        price:body.price,
        is_active:true
    });
    let err=await book.save();
}

const updateBook=async(req)=>{
    let body = req.body;
    let currentBook=await BooksModel.findById(req.params.bookId);
    currentBook.name=body.name,
    currentBook.pageCount=body.pageCount,
    currentBook.writerId=body.writerId,
    currentBook.stockCount=body.stockCount,
    currentBook.content=body.content,
    currentBook.photo=body.photo,
    currentBook.price=body.price
    let err=await book.save();
}


const getById=async (req)=>{
    let body = req.body;
    let currentBook=await BooksModel.findById(req.params.bookId);
    return currentBook;
}


const deleteBook=async (req)=>{
    let body = req.body;
    let currentBook=await BooksModel.findById(req.params.bookId);
    currentBook.is_active=false;
    let err=await currentBook.save();
}

module.exports={
    getBooks,
    addBook,
    updateBook,
    deleteBook,
    getById
}