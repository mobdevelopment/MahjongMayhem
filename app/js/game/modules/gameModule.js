var gameMdul = angular.module('game', []);

// Factory's
var gameFtry = require('../services/gameFactory');

// Controllers
var gameCtrl = require('../controllers/gameController');
var gamDCtrl = require('../controllers/gameDetailController');
// Filter's


// Directive's


// Service's
var gameSrvs = require('../services/gameService');
var gameSckt = require('../services/gameSocket');

// Route's
var gameRout = require('../routes/gameRoute');


gameMdul.factory('gameFactory', gameFtry);
gameMdul.factory('gameService', ['$http', gameSrvs]);
gameMdul.factory('gameSocket', gameSckt);
gameMdul.controller('gameController', gameCtrl);
gameMdul.controller('gameDetailController', gamDCtrl);
gameMdul.config(gameRout);

module.exports = gameMdul;