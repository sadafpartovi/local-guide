const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(proxy('visitor', {target: 'http://localhost8080'}));
  app.use(proxy('local', {target: 'http://localhost8080'}));
  app.use(proxy('home', {target: 'http://localhost8080'}));
  app.use(proxy('signup', {target: 'http://localhost3010'}));
  app.use(proxy('/', {target: 'http://localhost3010'}));
}