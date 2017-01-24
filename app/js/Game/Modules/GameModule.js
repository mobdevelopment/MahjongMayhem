var gameMdul = angular.module('game', []);

// Factory's
var gameFtry = require('../Services/GameFactory');

// Controllers
var gameCtrl = require('../Controllers/GameController');
var gamDCtrl = require('../Controllers/GameDetailController');
// Filter's


// Directive's


// Service's
var gameSrvs = require('../Services/GameService');
var gameSckt = require('../Services/GameSocket');

// Route's
var gameRout = require('../Routes/GameRoute');


gameMdul.factory('GameFactory', gameFtry);
gameMdul.factory('GameService', ['$http', gameSrvs]);
gameMdul.factory('GameSocket', gameSckt);
gameMdul.controller('GameController', gameCtrl);
gameMdul.controller('GameDetailController', gamDCtrl);
gameMdul.config(gameRout);

module.exports = gameMdul;