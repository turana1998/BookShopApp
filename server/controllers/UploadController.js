const uploadAvatar=(req,res)=>{
    try {
        req.files.file.mv('./client/images/avatars/'+req.files.file.name);
        res.send('/images/avatars/'+req.files.file.name);
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
   
}


const uploadBookImg=(req,res)=>{
    try {
        req.files.file.mv('./client/images/books/'+req.files.file.name);
        res.send('/images/books/'+req.files.file.name);
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
   
}

const uploadWriterImg=(req,res)=>{
    try {
        req.files.file.mv('./client/images/writers/'+req.files.file.name);
        res.send('/images/writers/'+req.files.file.name);
    } catch (error) {
        res.sendStatus(500);
        console.log(error)
    }
   
}

module.exports={
    uploadAvatar,
    uploadWriterImg,
    uploadBookImg
}