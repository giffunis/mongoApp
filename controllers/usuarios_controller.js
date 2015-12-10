
var mongoose = require('mongoose');

// Creación de variables para cargar el model
User = require('../models/usuarios');


exports.listaUsuarios = function (req, res) {
  User.find(function(err, users) {
    if (err) throw err;
    return res.render('pages/usuarios', { title: 'Resultados', usuarios: users });
  });
};

exports.usuario = function(req,res){
  User.findOne({username:req.params.id},function(err, user) {
    if (err) throw err;
    return res.render('pages/usuario', { usuario: user});
  });
};
