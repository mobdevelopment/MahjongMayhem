var gameMdul = angular.module('game', []);

// Factory's
var gameFtry = require('../services/GameFactory');

// Controllers
var gameCtrl = require('../controllers/GameController');
// var gamDCtrl = require('../controllers/gameDetailController');
// Filter's


// Directive's


// Service's
var gameSrvs = require('../services/GameService');
var gameSckt = require('../services/GameSocket');

// Route's
var gameRout = require('../routes/GameRoute');


gameMdul.factory('GameFactory', gameFtry);
gameMdul.factory('GameService', ['$http', gameSrvs]);
gameMdul.factory('GameSocket', gameSckt);
gameMdul.controller('GameController', gameCtrl);
// gameMdul.controller('gameDetailController', gamDCtrl);
gameMdul.config(gameRout);

module.exports = gameMdul;