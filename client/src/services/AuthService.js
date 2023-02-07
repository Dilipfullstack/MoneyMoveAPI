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

export default {
  register,
  login,
  loginWithGoogle,
  getUsers_transaction_reminder
}
