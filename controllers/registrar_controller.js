
/* GET home page. */
exports.home = function(req,res){
  res.render('pages/registrar', { title: 'Bienvenido a la página de registro' });
};

exports.registrar = function(req,res){


  user.save(function(err){
    if(err){
      //entrada duplicada
      if(err.code == 11000)
        res.redirect('/');
        // return res.json({success: false, message: "Existe un usuario con el mismo correo"});
      else
        return res.send(err.message);
    }else{
    res.redirect('/usuarios');}
  });
};
