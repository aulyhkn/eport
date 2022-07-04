const controllers = require('../controllers/index');

function routers(app) {
  const exampleRoute = '/example';

  app.get(exampleRoute, controllers.ExampleController.index);
}

module.exports = routers;