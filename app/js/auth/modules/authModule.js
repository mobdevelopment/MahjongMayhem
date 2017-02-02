var authModule = angular.module('auth', []);

// Factory's

// Controllers

// Filter's

// Directive's

// Service's
var authService = require('../services/authService');

// Route's

authModule.factory('authService', authService);

module.exports = authModule;