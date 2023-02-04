const router = require('express').Router();
const AuthenticateController = require('../controller/Authenticate')
const transactionController = require('../controller/transaction')
const reminderController =  require('../controller/reminder')
const checkAuth =  require('../middleware/check-auth')

router.get('/',AuthenticateController.show)

router.post('/signIn',AuthenticateController.insert)

router.post('/login',AuthenticateController.login)

router.post('/getUser_reminder_transaction',checkAuth,AuthenticateController.getUser_reminder_transaction)

router.post('/transaction',checkAuth,transactionController.insert);

router.post('/reminder',checkAuth,reminderController.insert)




module.exports = router