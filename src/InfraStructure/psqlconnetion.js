const Sequelize= require('sequelize');

const sequelize = new Sequelize('crudapi', 'postgres', 'Asghar@123', {
    host: 'localhost',
    dialect: 'postgres'
  });
const authenticate=(async()=>{
    try{
    await sequelize.sync({ force: false });
    sequelize.authenticate();
    console.log('Connection has been established successfully.');
    }
   catch (error) {
    console.error('Unable to connect to the database:', error);
   }

})
authenticate();
    
     
  

  module.exports=sequelize;