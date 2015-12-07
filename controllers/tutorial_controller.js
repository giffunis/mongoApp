
/* GET home page. */
exports.home = function(req,res){
  res.render('pages/tutorial', { title: 'Express' });
};

exports.mongodb_get = function(req,res){
  res.render('pages/mongodb');
};
