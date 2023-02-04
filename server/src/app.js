const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const {sequelize} = require('./models')
const dotenv = require('dotenv');
const router = require('./Routes/router')
const passport = require('passport');
const googleRouter = require('./Routes/googleRouter')

const cookieSession = require('cookie-session')

dotenv.config();

app.use(morgan('dev'))
app.use(bodyparser.json());
app.use(cors())


app.use(cookieSession({
  name: 'google-auth-session',
  keys: ['key1', 'key2']
}))
app.use(passport.initialize());
app.use(passport.session());



app.use('/',router)

app.use('/google',googleRouter)


sequelize.sync({force:false}).then((res)=>{
    app.listen(3000, () => {
        console.log("Port is running on 3000");
    })
})