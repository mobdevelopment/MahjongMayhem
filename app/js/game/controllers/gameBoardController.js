var Game = require('../models/game');
var GameTemplate = require('../models/gameTemplate');
module.exports = function($scope, $stateParams, $http, $q, $timeout, gameService, gameFactory, gameSocket, authService){
	var self = this;
	self.gameTemplates;
	self.currentUser = authService.getUser();
	self.tiles = [];
	self.matchedTiles = []
	self.game = [];
	// var socket;
	// selectedTiles = [];

	self.successMessage = '';
	self.errorMessage = '';
	self.gameDetail;

	init();

	function getGame() {
		gameService.getGame(gameFactory.getCurrentGameId())
			.then(function successCallback(response) {
				self.game = response;
	
				console.log("game Data:: ");
				console.log(self.game);
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
						// self.matchedTiles.push(tile);
					} else {
						self.tiles.push(tile);
					}
				});
				console.log('gameBoardList');
			}, function errorCallback(err) {
				console.log("ERR:: " + err);
			});
		gameFactory.setCurrentBoard(self.tiles);
	};

	/// Werkt niet nog niet. tegels die matchen of wholesuits moeten vrij liggen om te kunnen matchen
	/// check moet: 
	///	- kopie maken van alle tegels in spel
	/// - alle niet vrijliggende tiles verwijderen van de kopie
	/// - controleren of de vrijliggende tiles een wholeSuit = true bevat en of 2 tiles matchen

	// self.endGame = function() {
	// 	var matchCount = 0;
	// 	var wholeSuitCount = 0;
	// 	for (var l = 0; l < self.tiles.length; l++) {
	// 		if (!self.tiles[l].tile.matchesWholeSuit) {
	// 			for (var r = 0; r < self.tiles.length; r++) {
	// 				if ((!self.tiles[l] == self.tiles[r])) {
	// 					if (self.tiles[l].)
	// 				}
	// 			}
	// 			wholeSuitCount++;
	// 		}
	// 	}
	// }


	self.showMessageBox = function() {
		$timeout(function() {
			self.successMessage	 = '';
			self.errorMessage = '';
		}, 3000);
	};

	function init() {
		gameFactory.setCurrentGameId($stateParams.id);
		gameFactory.setCurrentGameMode($stateParams.mode);

		getGameBoard();
		getGame();

		gameSocket.connect($stateParams.id);
	}

	/// Sockets

	gameSocket.on('start', function (data) {
		self.successMessage = 'This game has started.';
		self.showMessageBox();
	});
	gameSocket.on('end', function (data) {
		self.successMessage = 'There are no more moves left. The game is over.';
		self.showMessageBox();
	});
	gameSocket.on('playerjoined', function (data) {
		self.successMessage = 'player: ' + data.data._id + ' joined the game.';
		self.showMessageBox();
	});
	gameSocket.on('match', function (data) {
		for (var i =0; i < data.data.length; i++) {
			removeTile(data.data[i]._id);
		}

		// set new score of opponent.
		console.log('opponent has a found a new match.');
		console.log(data);
	});

	function removeTile(tileId) {
		$('div[tileid="' + tileId + '"]').remove();
	}

	self.test = function() {

	}
};