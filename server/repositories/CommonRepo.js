const RolesModel=require('../models/roles');

const getRoles=async (req)=>{
    let roles=await RolesModel.find().lean();
    return roles;
}

const getRoleById=async(roleId)=>{
    let role=await RolesModel.findById(roleId);
    return role;
}

module.exports={
    getRoles,
    getRoleById
}