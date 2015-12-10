
/* GET home page. */
exports.home = function(req,res){
  res.render('pages/registrar', { title: 'Bienvenido a la página de registro' });
};

exports.registrar = function(req,res){

  var user = new User();
  user.username = req.body.username;
  user.password = req.body.password;
  user.email = req.body.email;

  user.save(function(err){
    if(err){
      //entrada duplicada
      if(err.code == 11000)
        return res.json({success: false, message: "Existe un usuario con el mismo correo"});
      else
        return res.send(err);
    }
    res.redirect('/usuarios');
  });
};
