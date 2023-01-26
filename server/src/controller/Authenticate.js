const {User} = require('../models');

module.exports ={
    async show(req,res){

            await User.findAll().then((users)=>{
            res.status(200).json({
                success:0,
                users:users
            })
       }).catch((err)=>{
           res.status(404).json({
            message: "Was Not Able to Display Users",
            error:err
        });
       })

    },

    async insert(req,res){
        await User.create(req.body).then((user)=>{
            res.status(200).json({
                success:user
            })
        }).catch((error)=>{
            res.status(404).json({
                message: "Was Not Able to Add User"
            })
        })
    }
}