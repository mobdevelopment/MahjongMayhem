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
	// qprint();
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

function qprint() {
	console.log("hallo pi");
	console.log($stateParams.id);
};

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