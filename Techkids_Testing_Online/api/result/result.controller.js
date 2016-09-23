'use strict';

var Result = require('./result.model');
var User = require('./../user/user.model');
var ObjectId = require('mongoose').Types.ObjectId;

module.exports = {
  findAll : function(req, res) {
    Result.find().populate("answers.user").exec(function(err, data){
      res.json(data);
    });
  },
  findByUser : function(req, res){
    User.findOne({username: req.params.account}).exec(function(err, data){
      if (!err && data._id) {
        Result.find({"answers.user" : new ObjectId(data._id)}).exec(function(err, data){
          res.json(data);
        });
      }

      res.json([]);
    })
  }
}
