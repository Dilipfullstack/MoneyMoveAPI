const {sequelize,DataTypes} = require ('sequelize')

module.exports=(sequelize,DataTypes)=>{
    const reminder = sequelize.define('reminder',{
        reminder_type:{
            type:DataTypes.STRING,
            allowNull:false
        },
        reminder_date:{
            type:DataTypes.STRING,
            allowNull:false
        },
        reminder_amount:{
            type:DataTypes.INTEGER,
            allowNull:false
        }
    })

    reminder.associate=(models)=>{
        reminder.belongsTo(models.User,{
            foreignKey:'user_id'
        })
    }

    return reminder
}