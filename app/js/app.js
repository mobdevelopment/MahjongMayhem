require('angular/angular');

// Create your app
var app = angular.module('MahjongMayhem', []);

// Controllers
var gameCtrl = require('../Game/Controllers/GameController');
var userCtrl = require('../User/Controllers/UserController');

// Factory's
var gameFtry = require('../Game/Services/GameFactory');
var userFtry = require('../User/Services/UserFactory');

app.factory('GameFactory', gameFtry);
app.factory('UserFactory', userFtry);

app.controller('GameController', ['$scope', '$http', '$q', 'GameFactory', gameController]);
app.controller('UserController', ['$scope', '$http', '$q', 'UserFactory', userController]);