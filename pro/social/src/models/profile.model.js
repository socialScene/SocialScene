// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const profile = sequelizeClient.define('profile', {
  
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false
    },
  description: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    backgroundphoto: {
      type: DataTypes.STRING,
      allowNull: false
    },
  
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

profile.sync({alter: true})
  return profile;
};