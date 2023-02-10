import HTTP from '../services/baseInstance'

function register (credentials) {
  return HTTP().post('signIn', credentials)
}

function login (credentials) {
  return HTTP().post('login', credentials)
}

function loginWithGoogle () {
  return HTTP().get('google/auth')
}

// eslint-disable-next-line camelcase
function getUsers_transaction_reminder (UserEmail) {
  // -- Request Body should be same as it was in Postman . So, therefore we have created a object with key ' email'
  return HTTP().post('getUser_reminder_transaction', { email: UserEmail })
}

// ----Transaction requires user_id so that we can create a transaction for the specific user
function addTransaction (transaction) {
  return HTTP().post('transaction', transaction)
}

function addreminder (reminder) {
  return HTTP().post('reminder', reminder)
}

export default {
  register,
  login,
  loginWithGoogle,
  getUsers_transaction_reminder,
  addTransaction,
  addreminder
}
