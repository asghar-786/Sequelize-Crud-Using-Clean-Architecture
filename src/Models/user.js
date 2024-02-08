const DataTypes=require("sequelize");
const sequelize= require("../InfraStructure/psqlconnetion")

 const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type:DataTypes.STRING,
    },
    email: {
        type:DataTypes.STRING,
        // defaultValue: 'asghar@gmail.com',
    },
}, {
    tableName: 'user',
});

module.exports=User;