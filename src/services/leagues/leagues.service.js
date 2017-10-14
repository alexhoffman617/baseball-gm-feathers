// Initializes the `leagues` service on path `/leagues`
const createService = require('feathers-mongodb');
const hooks = require('./leagues.hooks');
const filters = require('./leagues.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/leagues', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('leagues');

  mongoClient.then(db => {
    service.Model = db.collection('leagues');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
