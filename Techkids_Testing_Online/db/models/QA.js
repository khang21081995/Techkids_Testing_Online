var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var qa = new Schema({
    _id: Number,
    question: String,
    single: Boolean,
    answers: [
      {
        text: String,
        status: Boolean
      }
    ]
  });

module.exports = mongoose.model('QA', qa);
