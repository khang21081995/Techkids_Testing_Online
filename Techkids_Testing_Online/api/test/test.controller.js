'use strict';

var Test = require('./test.model');
var logger = require('winston');

module.exports = {
  findAll : function(req, res){
    Test.find().exec(function(err, data){
      res.json(data);
    });
  }
}
