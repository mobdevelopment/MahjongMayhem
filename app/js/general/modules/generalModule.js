var generalModule = angular.module('general', []);

// Factory's


// Controllers
var generalController = require('../controllers/generalController');

// Filter's


// Directive's


// Service's


// Route's
var generalRoute = require('../routes/generalRoute');


generalModule.controller('generalController', generalController);
generalModule.config(generalRoute);

module.exports = generalModule; 