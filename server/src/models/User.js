const { sequelize,DataTypes } = require("sequelize");


module.exports=(sequelize,DataTypes)=>{
   const User = sequelize.define('User',{
    email: {
        type:DataTypes.STRING,
        allowNull:false,
        unique:true
    },
    password: {
        type:DataTypes.STRING,
        allowNull:false
    }
   })


  User.associate = (models)=>{
    User.hasMany(models.transaction,{
        foreignKey:'user_id',
    })
    User.hasMany(models.reminder,{
      foreignKey:'user_id',
  })
  }



   return User
}