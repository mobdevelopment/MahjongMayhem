var Game = require('../models/game');
var GameTemplate = require('../models/gameTemplate');
module.exports = function($scope, $http, $q, $timeout, gameService, gameFactory, authService){
	var self = this;
	self.games;
	self.gameTemplates;
	self.currentUser = authService.getUser();
	// var gameId;
	// var socket;
	selecTiles = [];

	self.successMessage = '';
	self.errorMessage = '';
	self.gameDetail;



	self.showMessageBox = function() {
		$timeout(function() {
			self.successMessage	 = '';
			self.errorMessage = '';
		}, 3000);
	};

	$scope.init = function() {
		
	}

};