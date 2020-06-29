
const config = require('../config');
const bcrypt = require('bcrypt');
const userRepo = require('../repositories/UsersRepo');
const jwtutil=require('../util/jwtUtil');
const commonRepo=require('../repositories/CommonRepo');

const login = async (req, res) => {
    try {
        let { username, password } = req.body;
        let currentUser = await userRepo.geUserByEmail(username);
        let roles=await commonRepo.getRoles(req);
        currentUser.role=roles.find(role=>role._id==currentUser.roleId);
        let result = await bcrypt.compare(password, currentUser.password);
        if (result) {
            res.json({
                error: null,
                data:jwtutil.generateJWTToken({
                    name: currentUser.name,
                    surname: currentUser.surname,
                    email: currentUser.email,
                    photo:currentUser.photo,
                    role:currentUser.role
                })
            });
        } else {
            res.json({
                error: "İstifadəçi tapılmadı",
                data: null
            })
        }
    } catch (err) {
        res.sendStatus(500);
        console.log(err);
    }
}


module.exports = {
    login
}