const router = require('express').Router();
const AuthenticateController = require('../controller/Authenticate')


router.get('/',AuthenticateController.show)

router.post('/signIn',AuthenticateController.insert)

router.post('/login',AuthenticateController.login)



module.exports = router