const commonRepo=require('../repositories/CommonRepo');

const getRoles=async (req,res)=>{
    try{
        let roles=await commonRepo.getRoles(req);
        res.json(roles);
    }catch(err){
        res.sendStatus(500);
    }   
}


module.exports={
    getRoles
}