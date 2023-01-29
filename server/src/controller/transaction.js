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

    // async show(req,res){
    //     await transaction.findOne({
    //         where:{ 
    //             user_id:req.params.user_id
    //         },
    //         include:[
    //             {
    //                 model:User
    //             }
    //         ]
    //     }).then((result) => res.status(200).json({
    //         transactionByUser:result 
    //     }))
    // },

    // async delete(req,res){
    //     await transaction.destroy({
    //         where:{
    //             id: req.params.id
    //         }
    //     }).then((result)=>{
    //         res.status(200).json({
    //             message: 'Transaction deleted successfully',
    //         })
    //     })
    // }
    
}