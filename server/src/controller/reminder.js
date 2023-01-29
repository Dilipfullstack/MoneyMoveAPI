const {reminder} = require('../models');

module.exports={
    async insert (req,res){
      await reminder.create(req.body).then((reminder)=>{
         res.status(200).json({
            message: 'Reminder created successfully',
            reminder: reminder
         })
      }).catch((error)=>{
         res.status(404).json({
            message: 'Reminder not created',
         })
      })
    }
}