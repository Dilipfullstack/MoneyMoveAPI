const jwt = require('jsonwebtoken');
const config = require('../config/config')


module.exports = (req, res, next) => {
    console.log(req.headers);
    console.log(req.headers.authorization);
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, config.authenticate_Key);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Auth failed'
        });
    }
}
