'use strict';

var express = require('express');
var controller = require('./test.controller');

var router = express.Router();

router.get('/all', controller.findAll);

module.exports = router;
