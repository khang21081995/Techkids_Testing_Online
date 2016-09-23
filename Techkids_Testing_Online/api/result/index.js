'use strict';

var express = require('express');
var controller = require('./result.controller');

var router = express.Router();

router.get('/all', controller.findAll);
router.get('/user/:account', controller.findByUser);

module.exports = router;
