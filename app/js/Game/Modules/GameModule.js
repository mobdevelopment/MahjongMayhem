var gameMdul = angular.module('game', []);

// Factory's
var gameFtry = require('../Services/GameFactory');

// Controllers
var gameCtrl = require('../Controllers/GameController');

// Filter's


// Directive's


// Service's
var gameSrvs = require('../Services/GameService');

// Route's
var gameRout = require('../Routes/GameRoute');


gameMdul.factory('GameFactory', gameFtry);
gameMdul.factory('GameService', ['$http', gameSrvs]);
gameMdul.controller('GameController', gameCtrl);
gameMdul.config(gameRout);

module.exports = gameMdul;