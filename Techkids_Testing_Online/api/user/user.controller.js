'use strict';

var User = require('./user.model');
var logger = require('winston');

module.exports = {
  addUser: function(req, res) {
    if (req.body) {
      User.findOne({username: req.body.username}).exec(function(err, data){
        if (data) {
          res.json({status: false, message: "User are already exist!"})
        } else {
          var newUser = {
            username: req.body.username,
            password: req.body.password,
            age: req.body.age,
            name: req.body.name
          }

          User.create(newUser, function(err, data){
            res.json({status: true, message: "Success"});
          });
        }
      });
    }
  },

  findAll : function(req, res){
    User.find().exec(function(err, data){
      res.json(data);
    });
  },

  findByAccount : function(req, res){
    if (req.params.account) {
      logger.log("debug", "START- findByAccount %s", req.params.account);
      User.find({username: req.params.account}).exec(function(err, data){
        res.json(data);
        logger.log("debug", "END- findByAccount");
      });
    } else {
      res.json([]);
    }
  },

  findByName : function(req, res){
    if (req.params.name) {
      User.find({name: {"$regex": req.params.name}}).exec(function(err, data){
        res.json(data);
      });
    } else {
      res.json([]);
    }
  },
  
  login:function (req,res){
      res.json({
         status:true 
      });
  }
}
