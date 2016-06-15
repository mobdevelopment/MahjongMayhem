var authMdul = angular.module('auth', []);

// Factory's
var authFtry = require('../Services/AuthFactory');

// Controllers


// Filter's


// Directive's


// Service's
// var authSrvs = require('../Services/AuthService');

// Route's
var authRout = require('../Routes/AuthRoute');

authMdul.factory('AuthFactory', authFtry);
// authMdul.factory('AuthService', ['$http', authSrvs]);
authMdul.config(authRout);

module.exports = authMdul;