var authMdul = angular.module('auth', []);

// Factory's
var authFtry = require('../services/AuthFactory');

// Controllers
// var authCtrl = require('../controller/AuthController');

// Filter's


// Directive's


// Service's
// var authSrvs = require('../services/AuthService');

// Route's
var authRout = require('../routes/AuthRoute');

authMdul.factory('AuthFactory', authFtry);
// authMdul.factory('AuthService', ['$localStorage', authSrvs]);
// gameMdul.controller('AuthController', authCtrl);
authMdul.config(authRout);

module.exports = authMdul;