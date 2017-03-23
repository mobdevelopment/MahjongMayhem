var Game = require('../models/game');
var GameTemplate = require('../models/gameTemplate');
module.exports = function($scope, $http, $q, $timeout, gameService, authService){
	var self = this;
	self.games;
	self.gameTemplates;
	self.currentUser = authService.getUser();

	self.successMessage = '';
	self.errorMessage = '';
	self.gameDetail;

	init();
	
	function init() {
		getGames();
		getGameTemplates();
	}

	function getGames() {
		self.games = [];
		gameService.getGames()
			.then(function successCallback(response) {
				angular.forEach(response, function (game) {
					self.games.push(new Game(game));
				});
			}, function errorCallback(err) {
				console.log("ERR:: " + err);
			});
	};

	function getGameTemplates() {
		self.gameTemplates = [];
		gameService.getGameTemplates()
			.then(function successCallback(response) {
				angular.forEach(response, function (gameTemplate) {
					self.gameTemplates.push(new GameTemplate(gameTemplate));
				});
			}, function errorCallback(err) {
				console.log("ERR:: " + err);
			});
	};

	// Boolean checks if a player can join, start or play a game.
	self.canJoin = function(game) {
		if (self.currentUser.username == undefined || game.createdBy._id == self.currentUser.username || game.state != 'open' || game.maxPlayers <= game.players.length) {
			return false;
		}
		else {
			if (game.players.length > 0) {
				for (var i = 0; i < game.players.length; i++) {
					if (game.players[i]._id == self.currentUser.username) {
						return false;
					}
				}
			}
			return true;
		}
	};

	self.canPlay = function(game) {
		if (self.currentUser.username != undefined && game.state != 'open') {
			if (game.players.length > 0) {
				for (var i = 0; i < game.players.length; i++) {
					if (game.players[i]._id == self.currentUser.username) {
						return true;
					}
				}
			}
		}
		return false;
	};

	self.canStart = function(game) {
		return game.createdBy._id == self.currentUser.username && game.players.length >= game.minPlayers && game.state == "open";
	};

	self.canSpectate = function(game) {
		if (self.currentUser.username != undefined && game.state == 'playing') {
			var count = 0;
			for (var i = 0; i < game.players.length; i++) {
				if (game.players[i]._id == self.currentUser.username) {
					count++;
				}
			}
			if (count == 0) {
				return true;
			}
		}
		return false;
	}

	self.joinGame = function(gameId) {
		gameService.joinGame(gameId)
			.then(function successCallback(response) {
				self.successMessage = 'Successfully joined game';
				getGames();
				self.showMessageBox();
			}, function errorCallback(err) {
				self.errorMessage = err.statusText;
				self.showMessageBox();
			});
	};

	self.startGame = function(gameId) {
		gameService.startGame(gameId)
			.then(function (response) {
				self.successMessage = 'The game has started!';
				getGames();
			}, function (err) {
				self.errorMessage = err.data.message;
			});
	};

	self.createGame = function(game) {
		gameService.createGame(game)
			.then(function successCallback(response) {
				self.successMessage = 'Successfully created a game';
				self.showMessageBox();
			}, function errorCallback(err) {
				self.errorMessage = err.statusText;
				self.showMessageBox();
			});
	};

	self.showGameDetail = function(game) {
		// console.log(game);	
		self.gameDetail = game;
	};

	self.showMessageBox = function() {
		$timeout(function() {
			self.successMessage	 = '';
			self.errorMessage = '';
		}, 3000);
	};
};