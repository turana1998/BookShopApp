const express = require('express')
const router=express.Router();
const usersctrl=require('./controllers/UsersController');
const commonctrl=require('./controllers/CommonController');
const uploadctrl=require('./controllers/UploadController');
const categoriesctrl=require('./controllers/CategoriesController');
const booksctrl=require('./controllers/BooksController');
const writersctrl=require('./controllers/WritersController');
const authctrl=require('./controllers/AuthController');
const jwtutil=require('./util/jwtUtil');
const userRepo=require('./repositories/UsersRepo');


router.use(async (req,res,next)=>{
    if(req.originalUrl=='/auth/login' || req.originalUrl.startsWith('/images')) next();
    else if(!req.headers['authorization']) {
        res.sendStatus(401);
    }else{
        let tokenHeader=req.headers['authorization'];
        let token=tokenHeader.replace('Bearer ','').trim();
        try{
            let decoded=jwtutil.verifyToken(token);
            let currentUser=await userRepo.geUserByEmail(decoded.email);
            if(currentUser) {
                req.loggedUser=currentUser;
                next();
            }
            else res.sendStatus(401);
        }catch(err){
            res.sendStatus(401);
            console.log(err);
        }
    }
})


//users
router.get('/users',usersctrl.getUsers);
router.get('/users/me',usersctrl.getMe);
router.post('/users',usersctrl.addUser);
router.get('/users/:userId',usersctrl.getById);
router.put('/users/:userId',usersctrl.update);
router.delete('/users/:userId',usersctrl.deleteUser);

//writers
router.get('/writers',writersctrl.getWriters);
router.post('/writers',writersctrl.addWriter);
router.get('/writers/:writerrId',writersctrl.getById);
router.put('/writers/:writerId',writersctrl.update);
router.delete('/writers/:writerId',writersctrl.deleteWriter);

//roles
router.get('/roles',commonctrl.getRoles);

//categories
router.get('/categories',categoriesctrl.getCategories);
router.post('/categories',categoriesctrl.addCategory);
router.delete('/categories/:categoryId',categoriesctrl.deleteCategory);

//books
router.get('/books',booksctrl.getBooks);
router.post('/books',booksctrl.addBook);
router.put('/books/:bookId',booksctrl.updateBook);
router.get('/books/:bookId',booksctrl.getBookById);
router.delete('/books/:bookId',booksctrl.deleteBook);


//file upload
router.post('/upload/user',uploadctrl.uploadAvatar)
router.post('/upload/book',uploadctrl.uploadBookImg)
router.post('/upload/writer',uploadctrl.uploadWriterImg)

router.post('/auth/login',authctrl.login);


module.exports=router;




