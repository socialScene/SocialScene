// Initializes the `social` service on path `/social`
const createService = require('feathers-sequelize');
const createModel = require('../../models/social.model');
const hooks = require('./social.hooks');
const filters = require('./social.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'social',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/social', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('social');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
