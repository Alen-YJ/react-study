'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/client.js')(app)
  require('./router/admin.js')(app)
};
