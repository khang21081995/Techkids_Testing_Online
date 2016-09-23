'use strict';

var express = require('express');
var controller = require('./user.controller');

var router = express.Router();

/**
 * @api {GET} /api/user/all get all users
 * @apiName GetAllUser
 * @apiGroup User
 *
 * @apiSuccess {String} account account of the User.
 * @apiSuccess {String} password pasword of the User.
 * @apiSuccess {String} Name name of the User.

 * @apiSuccessExample {json} Success-Response:
 *     [{
 *       "account": "admin",
 *       "pasword": "123456",
 *       "name": "Thanh Cuong"
 *     }]
 */
router.get('/all', controller.findAll);

router.post('/', controller.addUser);
router.post('/login',controller.login);
/**
 * @api {GET} /api/user/:account get user by account
 * @apiName GetUserByAccount
 * @apiGroup User
 *
 * @apiParam {String} account Users Account.
 *
 * @apiSuccess {String} account account of the User.
 * @apiSuccess {String} password pasword of the User.
 * @apiSuccess {String} Name name of the User.

 * @apiSuccessExample {json} Success-Response:
 *     {
 *       "account": "admin",
 *       "pasword": "123456",
 *       "name": "Thanh Cuong"
 *     }
 */
router.get('/account/:account', controller.findByAccount);

router.get('/name/:name', controller.findByName);

module.exports = router;
