var express = require('express');
var usuariosRoute = express.Router();
var usuariosController = require('../controllers/usuarios_controller');

/* GET tutorial page. */
usuariosRoute.get('/', usuariosController.listaUsuarios);

usuariosRoute.get('/:id', usuariosController.usuario);

module.exports = usuariosRoute;
