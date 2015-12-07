var express = require('express');
var registrarRoute = express.Router();
var registrarController = require('../controllers/registrar_controller');

/* GET tutorial page. */
registrarRoute.get('/', registrarController.home);
registrarRoute.post('/', registrarController.registrar);

module.exports = registrarRoute;
