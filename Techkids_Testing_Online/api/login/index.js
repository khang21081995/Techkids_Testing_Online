'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

/**
 * @api {get} /user/all Aet all users
 * @apiName GetAllUser
 * @apiGroup User
 *
 * @apiSuccess {String} account account of the User.
 * @apiSuccess {String} password pasword of the User.
 * @apiSuccess {String} Name name of the User.

 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "account": "admin",
 *       "pasword": "123456",
 *       "name": "Thanh Cuong"
 *     }
 */
router.get('/all', controller.findAll);
router.get('/account/:account', controller.findByAccount);
router.get('/name/:name', controller.findByName);

module.exports = router;
