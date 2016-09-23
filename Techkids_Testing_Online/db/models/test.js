var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var test = new Schema({
    _id: Number,
    title: String,
    qas: [{type: Number, ref: "QA"}],
    setting: {
      pass: Number,
      total: Number,
      duration: Number
    }
  });

module.exports = mongoose.model('Test', test);
