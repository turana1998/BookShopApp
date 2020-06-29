const userRepo=require('../repositories/UsersRepo');
const commonRepo=require('../repositories/CommonRepo');
const bcrypt = require('bcrypt');
const config=require('../config')


saltRounds=config.saltRounds;
const addUser= async (req,res)=>{
    console.log(req.body);
    try{
        let hash = await bcrypt.hash(req.body.password, config.saltRounds)
        await userRepo.addUser(req,hash)
        res.sendStatus(201);
    }catch(err){
        res.status(500).json({'error':'Error occured','data':null});
        console.log(err);
    }
}


const getUsers= async(req,res)=>{
    let users=await userRepo.getUsers(req);
    let roles=await commonRepo.getRoles(req);
    users.forEach(user=>{
        user.role=roles.find(role=>role._id==user.roleId);
        user.roleId=undefined;
    })
    res.json(users);
}

const getById= async (req,res)=>{
    let user = await userRepo.getUserById(req.params.userId);
    res.json(user);
}

const update=async (req,res)=>{
    console.log(req);
    await userRepo.updateUser(req);
    res.sendStatus(200);
}

const deleteUser= async (req,res)=>{
    console.log(req);
    await userRepo.deleteUser(req);
    res.sendStatus(200);
}

const getMe=async(req,res)=>{
    try{
        let roles=await commonRepo.getRoles(req);
        let user=req.loggedUser;
        user.role=roles.find(role=>role._id==user.roleId);
        user.roleId=undefined;
        user.password=undefined;
        res.json(user);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
    }
}



module.exports={
    addUser,
    getUsers,
    update,
    deleteUser,
    getById,
    getMe
}

