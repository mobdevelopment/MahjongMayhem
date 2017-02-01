var authModule = angular.module('auth', []);

// Factory's
// var authFtry = require('../services/AuthFactory');

// Controllers
// var authCtrl = require('../controller/AuthController');

// Filter's


// Directive's


// Service's
var authService = require('../services/authService');
// var authConfig = require('../services/AuthConfig');

// Route's
// var authRout = require('../routes/AuthRoute');

// authMdul.factory('AuthFactory', authFtry);
authModule.factory('authService', authService);
// gameMdul.controller('AuthController', authCtrl);
// authMdul.config(authRout);
// authMdul.config(authConfig);

module.exports = authModule;