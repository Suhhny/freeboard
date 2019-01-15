var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

var User = new mongoose.Schema({
  id: {type : String},
  password: {type : String},
  name: {type : String}
});

User.methods.generateHash = function(password){
  return bcrypt.hashSync(password, 8);
}

User.methods.validateHash = function(password){
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('user', User);
