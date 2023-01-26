const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyparser = require('body-parser');
const cors = require('cors');
const {sequelize} = require('./models')
const dotenv = require('dotenv');
const router = require('./router')

dotenv.config();

app.use(morgan('dev'))
app.use(bodyparser.json());
app.use(cors())


app.use('/user',router)

sequelize.sync().then((res)=>{
    app.listen(3000, () => {
        console.log("Port is running on 3000");
    })
})