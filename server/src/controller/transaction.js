const {transaction} = require('../models')
const {User} = require('../models')

module.exports={
 
    async insert(req,res){
       
        console.log(req.body);
        await transaction.create(req.body).then((result)=>{
            res.status(200).json({
                message: 'Transaction created successfully',
                data: result
            })
        })


    },

    async showAll(req,res){
       await transaction.findAll({
        include:[
            {
                model:User
            }
        ]
       }).then((user_trans)=>{
        res.status(200).json({
            message: 'All transactions',
            data: user_trans
        })
       })
    },

    
}