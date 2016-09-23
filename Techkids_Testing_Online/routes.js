var path = require('path');

module.exports = function(app) {
  // Insert routes below
  app.use('/api/user', require('./api/user'));
  app.use('/api/test', require('./api/test'));
  app.use('/api/result', require('./api/result'));
}
