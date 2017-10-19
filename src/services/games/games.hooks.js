const ObjectID = require('mongodb').ObjectID;

module.exports = {
  before: {
    all: [],
    find: [ function (hook) {
      if(hook.params.query._id) {
        hook.params.query._id  = new ObjectID(hook.params.query._id);
      }

      return Promise.resolve(hook);
    }],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
