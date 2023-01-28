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
    authenticate_Key:'secretKey',
    googleClient_id:'63228050323-ppmgdv9ejh3045ce1hvis0atiiek9dmf.apps.googleusercontent.com',
    googleClient_secret:'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'
}
