const DataTypes=require("sequelize");
const sequelize= require("../InfraStructure/psqlconnetion")

 const User = sequelize.define('user', {
    // id: {
    //     type: DataTypes.INTEGER,
    //     primaryKey: true,
    //     autoIncrement: true,
    // },
    username: {
        type:DataTypes.STRING,
    },
    password: {
        type:DataTypes.STRING,
        // defaultValue: 'asghar@gmail.com',
    },
}, {
    tableName: 'user',
});

module.exports=User;