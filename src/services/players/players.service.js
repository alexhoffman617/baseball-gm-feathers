// Initializes the `players` service on path `/players`
const createService = require('feathers-mongodb');
const hooks = require('./players.hooks');
const filters = require('./players.filters');

module.exports = function () {
  const app = this;
  const paginate = app.get('paginate');
  const mongoClient = app.get('mongoClient');
  const options = { paginate };

  // Initialize our service with any options it requires
  app.use('/players', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('players');

  mongoClient.then(db => {
    service.Model = db.collection('players');
  });

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
