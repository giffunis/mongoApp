// Creación de la Conexión
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/registros');

// Creación de variables para cargar el model
User = require('../models/usuarios');


exports.listaUsuarios = function (req, res, next) {
  User.find(function(err, users) {
    if (err) throw err;
    return res.render('pages/buscar', { title: 'Resultados', usuarios: users });
  });
};
