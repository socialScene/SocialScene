const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');
const user=require('./models/users.model.js');
const sequelize = require('../sequelize')

const app=feathers();
 router.post('/Users', function(req, res) {
  // register
 users.create({
    fullName:fullName,
    email:email,
    password:password,
  }).then(function() {
    res.send(`
      <h2>Thank you, you can <a href="/login">login</a> now</h2>
    `)
  })
  .catch(function(e) {
    res.send('Error registering')
    console.log(e)
  })
})

