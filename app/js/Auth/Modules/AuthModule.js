var authMdul = angular.module('auth', []);

// Factory's


// Controllers


// Filter's


// Directive's


// Service's
var authSrvs = require('../Services/AuthService');

// Route's
var authRout = require('../Routes/AuthRoute');


gameMdul.factory('AuthService', ['$http', authSrvs]);
gameMdul.config(authRout);

module.exports = authMdul;