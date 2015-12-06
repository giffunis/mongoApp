var express = require('express');
var buscarRoute = express.Router();
var buscarController = require('../controllers/buscar_controller');

/* GET tutorial page. */
buscarRoute.get('/', buscarController.listaUsuarios);

module.exports = buscarRoute;
