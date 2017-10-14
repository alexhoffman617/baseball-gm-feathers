// Initializes the `seasons` service on path `/seasons`
const createService = require('feathers-mongodb');
const hooks = require('./seasons.hooks');
const filters = require('./seasons.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/seasons', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('seasons');

  mongoClient.then(db => {
    service.Model = db.collection('seasons');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
