const router = require('express').Router();
const AuthenticateController = require('./controller/Authenticate')

router.get('/',AuthenticateController.show)

router.post('/',AuthenticateController.insert)


module.exports = router