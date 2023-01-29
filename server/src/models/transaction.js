const { sequelize,DataTypes } = require("sequelize");


module.exports=(sequelize,DataTypes)=>{
    const transaction = sequelize.define('transaction',{
        transaction_amount:{
            type:DataTypes.INTEGER,
            allowNull:false,
        },
        type:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    })

    transaction.associate= (models)=>{
        transaction.belongsTo(models.User,{
            foreignKey:'user_id'
        })
    }

    return transaction
    
}