const { Sequelize } = require('sequelize');
const {database} = require('./configs')
console.log(database.name, database.username, database.password,database.host)
async function db() {
  const sequelize = new Sequelize(database.name, database.username, database.password, {
    host: database.host,
    dialect: 'mariadb'
  });
  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);    
  }
}

module.exports = db;