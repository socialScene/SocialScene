// Initializes the `users` service on path `/users`
const createService = require('feathers-sequelize');
const createModel = require('../../models/profile.model');
const hooks = require('./profile.hooks');
const filters = require('./profile.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'profile',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/profile', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('profile');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
