var gameModule = angular.module('game', []);

// Factory's
var gameFactory = require('../services/gameFactory');

// Controllers
var gameController = require('../controllers/gameController');
// var gameDetailController = require('../controllers/gameDetailController');
// Filter's


// Directive's


// Service's
var gameService = require('../services/gameService');
var gameSocket = require('../services/gameSocket');

// Route's
var gameRoute = require('../routes/gameRoute');


gameModule.factory('gameFactory', gameFactory);
gameModule.factory('gameService', ['$http', gameService]);
gameModule.factory('gameSocket', gameSocket);
gameModule.controller('gameController', gameController);
// gameModule.controller('gameDetailController', gameDetailController);
gameModule.config(gameRoute);

module.exports = gameModule;