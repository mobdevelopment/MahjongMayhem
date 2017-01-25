var authMdul = angular.module('auth', []);

// Factory's
var authFtry = require('../services/authFactory');

// Controllers


// Filter's


// Directive's


// Service's
// var authSrvs = require('../Services/AuthService');

// Route's
var authRout = require('../routes/authRoute');

authMdul.factory('authFactory', authFtry);
// authMdul.factory('AuthService', ['$http', authSrvs]);
authMdul.config(authRout);

module.exports = authMdul;