// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const admin = sequelizeClient.define('admin', {
    name:{
      email: {
      type: DataTypes.STRING,
      allowNull: false

    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  	validate:{
		is:["^[a-z+$",'1'],
    
	}

  }, 
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });
admin.sync({alter: true})
  admin.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return admin;
};