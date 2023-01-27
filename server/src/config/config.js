const path = require('path');

module.exports={
    port:3000,
    db:{
      database:'tabtracker',
      user:'tabtracker',
      password:'tabtracker',
      options:{
        dialect:'sqlite',
        host:'localhost',
        storage:path.resolve(__dirname,'../../tabtracker.sqlite')
      }
    },
    authenticate_Key:'secretKey'
}