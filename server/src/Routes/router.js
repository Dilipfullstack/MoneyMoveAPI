const router = require('express').Router();
const AuthenticateController = require('../controller/Authenticate')
const transactionController = require('../controller/transaction')
const reminderController =  require('../controller/reminder')

router.get('/',AuthenticateController.show)

router.post('/signIn',AuthenticateController.insert)

router.post('/login',AuthenticateController.login)

router.post('/getUser_transaction',AuthenticateController.getUser_transaction)

router.post('/transaction',transactionController.insert);

router.get('/transaction_Users',transactionController.showAll)

router.post('/reminder',reminderController.insert)




module.exports = router