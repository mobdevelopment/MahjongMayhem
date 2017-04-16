// var Game = require('../models/game');
// var GameTemplate = require('../models/gameTemplate');
module.exports = function($scope, $stateParams, $http, $q, gameService, gameFactory, gameSocket, authService, tileService, alertService){
	var self = this;
	self.currentUser = authService.getUser();
	self.tiles = [];
	self.game = [];

	init();

	function init() {
		gameFactory.setCurrentGameId($stateParams.id);
		gameFactory.setCurrentGameMode($stateParams.mode);
		gameSocket.connect($stateParams.id);
		
		getGameBoard();
		getGame();
	}

	function getGame() {
		gameService.getGame(gameFactory.getCurrentGameId())
			.then(function successCallback(response) {
				self.game = response;
				gameFactory.setCurrentGame(self.game);
				// console.log("game Data:: ");
				// console.log(self.game);
			}, function errorCallback(err) {
				console.log("ERR:: " + err);
			});
	};

	function getGameBoard() {
		gameService.getGameBoard(gameFactory.getCurrentGameId())
			.then(function successCallback(response) {
				angular.forEach(response, function (tile) {
					if (tile.match != undefined) {
						// console.log('mached tile');
						// console.log(tile);
					} else {
						self.tiles.push(tile);
					}
				});
				// console.log('gameBoardList');
			}, function errorCallback(err) {
				console.log("ERR:: " + err);
			});
		gameFactory.setCurrentBoard(self.tiles);
	};

	/// Sockets

	gameSocket.on('start', function (data) {
		alertService.success('This game has started.');
	});
	gameSocket.on('end', function (data) {
		alertService.success('There are no more moves left. The game is over.');
		console.log('game end!!!');
		self.game.state = 'finished'; // can it be fluid
	});
	gameSocket.on('playerjoined', function (data) {
		alertService.success('player: ' + data.data._id + ' joined the game.');
		// TODO add player to game
	});
	gameSocket.on('match', function (data) {
		// console.log(data);
		for (var i =0; i < data.length; i++) {
			// removeTile(data.data[i]._id);
			tileService.linkRemoveTile(data[i]._id)
		}
		// set new score of opponent.
		console.log('opponent has a found a new match.');

		tileService.linkSetScore(data[0].match.foundBy);
	});

	self.cheat = function() {
		tileService.cheatTile();
	}
};