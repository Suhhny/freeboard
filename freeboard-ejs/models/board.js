var mongoose = require('mongoose');

var Board = new mongoose.Schema({
  title: { type : String },
  content: { type : String },
  create_at: { type : String },
  viewnumber: { type : Number, default: 0},
  author: { type : String }
});

module.exports = mongoose.model('board', Board);
