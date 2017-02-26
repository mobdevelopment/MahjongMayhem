var Game = require('../models/game');
var GameTemplate = require('../models/gameTemplate');
module.exports = function($scope, $stateParams, $http, $q, $timeout, gameService, gameFactory, authService){
	var self = this;
	self.gameTemplates;
	self.currentUser = authService.getUser();
	self.tiles;
	self.gameId;
	// var socket;
	selectedTiles = [];

	self.successMessage = '';
	self.errorMessage = '';
	self.gameDetail;

	init();

	function getGameBoard(gameId) {
		self.gameId = gameId
		self.tiles = [];
		gameService.getGameBoard(self.gameId)
			.then(function successCallback(response) {
				angular.forEach(response, function (tile) {
					self.tiles.push(tile);
				});
			}, function errorCallback(err) {
				console.log("ERR:: " + err);
			});
			console.log(self.tiles);
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
		self.gameId = $stateParams.id;
		getGameBoard(self.gameId);

	}

};