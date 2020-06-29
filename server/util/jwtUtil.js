const config = require('../config');
const jwt = require('jsonwebtoken');


module.exports={
    generateJWTToken: (userData) => {
        userData.exp=Math.floor(Date.now() / 1000) + (60 * 60*5); //1 saatliq
        return jwt.sign(userData, config.SECRET_KEY);
    },
    verifyToken : (jwtToken) => {
        try {
            return jwt.verify(jwtToken, config.SECRET_KEY);
        } catch (e) {
           throw e;
        }
    }
}
