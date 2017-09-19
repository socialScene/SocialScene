// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;
const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');
const bodyParser=require('body-parser');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const users = sequelizeClient.define('users', {
     fullName:{
      type:DataTypes.STRING,
      allowNull:false
    },
  
    email: {
      type: DataTypes.STRING,
    validate:{
		isEmail:true,
   
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  }
});

app.service('users').hooks({
  before: {
    find(hook) {
      // Get the Sequelize instance. In the generated application via:
      const sequelize = hook.app.get('sequelizeClient');

      hook.params.sequelize = {
        include: [ users]
      }
    }
  },
});


 


/*users.sync({insert:true}).then(()=>{
  
  return users.create({
    fullName:this.fullName.push(data),
    email:this.email.push(data),
    password:this.password.push(data)

  
  });
   Promise.resolve(data);
});*/


users.sync({ alter: true }).then(() => {
  
 
  app.service('users').create(users).catch(function(users){
    app.use('/users', {
  fullName:[],
  email:[],
  password:[],
  create(data,params){
    this.fullName.push(data);
    this.email.push(data);
    this.password.push(data);

    return Promise.resolve(data);
  }
  
})
  console.log('new user has been created',users);
  })
  .then(function(authentication){
    console.log('Authenticated!', authentication)// do something here with authentication information
  })// On errors, just call our error middleware
 .catch(console.error);
}
);
  

  app.configure(jwt());
  app.configure(local());
app.use(bodyParser.urlencoded({ extended: true }));
  users.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return users;
};
