const jwt = require('jsonwebtoken');
const config = require('../config/config')


module.exports = (req,res,next)=>{
    try {
        const token =  req.headers.authorization.split(' ')[1]
        const verify =  jwt.verify(token,config.authenticate_Key)
        req.userData= verify,
        next()

    } catch (error) {
        return res.status(401).json({
            message:"Authorization Failed"
        })
    }
}
