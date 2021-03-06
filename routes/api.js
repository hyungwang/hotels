const route = require('restify-router').Router;
const Router = new route();
const controller = require("../controller")


Router.get('/:page([0-9]*)', controller.index);

Router.get('/state/:state/:page([0-9]*)', controller.findByState);
Router.get('/state/:state/', controller.findByState);

Router.get('/city/:city/:page([0-9]*)', controller.findByCity);
Router.get('/city/:city/', controller.findByCity);

Router.get('/name/:name/:page([0-9]*)/', controller.findByName);
Router.get('/name/:name/', controller.findByName);

//api v1
Router.get('/api/v1/', controller.index);
Router.get('/api/v1/:page([0-9])', controller.index);

Router.get('/api/v1/state/:state/:page([0-9]*)', controller.findByState);
Router.get('/api/v1/state/:state/', controller.findByState);

Router.get('/api/v1/city/:city/:page([0-9]*)', controller.findByCity);
Router.get('/api/v1/city/:city/', controller.findByCity);

Router.get('/api/v1/name/:name/:page([0-9]*)/', controller.findByName);
Router.get('/api/v1/name/:name/', controller.findByName);
//api v2
Router.get("/api/v2/",controller.apiV2Index)
Router.get("/api/v2/:id",controller.apiV2Single)

module.exports = Router;