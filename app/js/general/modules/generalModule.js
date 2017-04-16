var generalModule = angular.module('general', []);

// Factory's


// Controllers
var generalController = require('../controllers/generalController');

// Filter's


// Directive's
var alertDirective = require('../directive/alertDirective');

// Service's
var alertService = require('../services/alertService');

// Route's
var generalRoute = require('../routes/generalRoute');

generalModule.factory('alertService', alertService);
generalModule.directive('alert', alertDirective);
generalModule.controller('generalController', generalController);
generalModule.config(generalRoute);

module.exports = generalModule; 