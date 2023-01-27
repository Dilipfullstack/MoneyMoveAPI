const {User} = require('../models');
const bcrypt =  require('bcrypt');
const jwt =  require('jsonwebtoken');
const config = require('../config/config'); 

function jwtToken(user){
    return jwt.sign({email:user.email,password:user.password},config.authenticate_Key,{expiresIn:'1d'})
    // const payload = {
    //     email:user.email,
    //     password:user.password
    // }
    // const options = {
    //     expiresIn: '1d'
    // }
    // return jwt.sign(payload,config.authenticate_Key,options)
}

module.exports ={

    // ---Get All Users --------------------------------
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

    // ---Add Users --(SignUp)------------------------------
    async insert(req,res){
        
      if(req.body>0){
        bcrypt.hash(req.body.password,10,(err,data)=>{
            if(err){
                res.status(400).json({
                    message:'was not able to encrypt password'
                })
            }
            else{
                req.body.password = data
                User.create(req.body).then((user)=>{
                    res.status(200).json({
                        success: true,
                        user:user
                    })
                }).catch((error)=>{
                    res.status(404).json({
                        message: "Was Not Able to Add User"
                    })
                })
            }

        })
      }
      else{
        res.status(404).json({
            message:"Please Provide User Details"
        })
      }  
    },

    // ---Login
    async login(req,res){
        await User.findOne({
            where:{
                email:req.body.email
            }
        }).then((user)=>{
            if(!user){
                res.status(404).json({
                    message:"User Not Found"})
            }
            else{
                bcrypt.compare(req.body.password,user.password,(err,result)=>{
                    if(err){
                        res.status(400).json({
                            message:"Error occured while decrypting"
                        })
                    }
                    else{
                        if(result){
                                res.status(200).json({
                                    message:"Login successful",
                                    token:jwtToken(user)
                                })
                            
                        }
                        else{
                            res.status(400).json({
                            message:"Password Mismatch",
                        })
                     }
                    }
                })
            }
        }).catch((error)=>{
            res.status(404).json({
                message:"User Not Registered"})
        })
    }
        
}