// Initializes the `users` service on path `/users`
const createService = require('feathers-sequelize');
const createModel = require('../../models/posts.model');
const hooks = require('./posts.hooks');
const filters = require('./posts.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'posts',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/posts', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('posts');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
