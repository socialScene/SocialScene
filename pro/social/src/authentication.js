const feathers = require('feathers');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');
const hooks = require('feathers-hooks');
const memory = require('feathers-memory');
const bodyParser = require('body-parser');
const errorHandler = require('feathers-errors/handler');
const authentication = require('feathers-authentication');
const jwt = require('feathers-authentication-jwt');
const local = require('feathers-authentication-local');
const Verifier =require( 'feathers-authentication-local');

module.exports = function () {
  const app = this;
  const config = app.get('authentication');

  // Set up authentication with the secret
  //app.configure(authentication(config));
app.configure(authentication({ secret: 'supersecret' }))


  app.configure(jwt());
  app.configure(local());
 
  app.use('/users', memory())
  app.use(errorHandler());
app.configure(rest())
 app .configure(socketio())

  // Needed for parsing bodies (login)
 app .use(bodyParser.json())
 app .use(bodyParser.urlencoded({ extended: true }))

  // The `authentication` service is used to create a JWT.
  // The before `create` hook registers strategies that can be used
  // to create a new valid JWT (e.g. local or oauth2)
  app.service('authentication').hooks({
    before: {
      create: [
        authentication.hooks.authenticate(['jwt', 'local']),
      ],
      remove: [
        authentication.hooks.authenticate('jwt')
      ]
    }
  });
};










