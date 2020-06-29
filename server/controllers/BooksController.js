const bookRepo=require('../repositories/BooksRepo');
const categoriesRepo=require('../repositories/CategoriesRepo');
const writersRepo=require('../repositories/WritersRepo');

const getBooks=async(req,res)=>{
    try{
        let books=await bookRepo.getBooks();
        let categories=await categoriesRepo.getCategories(req);
        let writers=await writersRepo.getWriters(req);
        books.forEach(book=>{
            book.categories=[];
            book.categoryIds.forEach(catId=>{
                book.categories.push(categories.find(cat=>{
                    return cat._id==catId;
                }));
            })
            book.writer=writers.find(writer=>{
                return book.writerId==writer._id;
            })
        })
        res.json(books);
        
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}


const addBook=(req,res)=>{
    try{
        bookRepo.addBook(req);
        res.sendStatus(201);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

const getBookById=(req,res)=>{
    try{
        bookRepo.getBookById(req);
        res.sendStatus(200);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

const updateBook=(req,res)=>{
    try{
        bookRepo.updateBook(req);
        res.sendStatus(200);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}


const deleteBook=(req,res)=>{
    try{
        bookRepo.deleteBook(req);
        res.sendStatus(201);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}

module.exports={
    getBooks,
    addBook,
    getBookById,
    deleteBook,
    updateBook
}