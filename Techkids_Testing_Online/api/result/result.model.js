'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var result = new Schema({
    test: {type: Number, ref: "Test"},
    startTime: Date,
    endTime: Date,
    answers: [{
      test: String,
      user: {type: Schema.Types.ObjectId, ref: "User"},
      choosen: {answers: [String], correct: Boolean}
    }]
  });

module.exports = mongoose.model('Result', result);
