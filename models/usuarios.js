// grab the things we need
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username: String,
  password: String,
  email: {type: String, required: true, index:{unique:true}}
});

var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;
