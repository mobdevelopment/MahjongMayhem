var gameModule = angular.module('game', []);

// Factory's
var gameFactory = require('../services/gameFactory');

// Controllers
var gameController = require('../controllers/gameController');
var gameBoardController = require('../controllers/gameBoardController');
// Filter's


// Directive's
var tileDirective = require('../directives/tileDirective');

// Service's
var gameService = require('../services/gameService');
var gameSocket = require('../services/gameSocket');

// Route's
var gameRoute = require('../routes/gameRoute');


gameModule.factory('gameFactory', gameFactory);
gameModule.factory('gameService', ['$http', gameService]);
gameModule.factory('gameSocket', gameSocket);
gameModule.directive('tile', tileDirective);
gameModule.controller('gameController', gameController);
gameModule.controller('gameBoardController', gameBoardController);
gameModule.config(gameRoute);

module.exports = gameModule;