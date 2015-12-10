
var mongoose = require('mongoose');

// Creación de variables para cargar el model



exports.listaUsuarios = function (req, res) {
  User.find(function(err, users) {
    if (err) throw err;
    return res.render('pages/usuarios', { title: 'Resultados', usuarios: users });
  });
};

exports.usuario = function(req,res){

};
