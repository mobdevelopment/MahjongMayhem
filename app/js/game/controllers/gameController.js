var Game = require('../models/game');
module.exports = function($scope, $http, $q, gameService, gameFactory, authService){
	var self = this;
	self.games;
	self.currentUser = authService.getUser();
	// var gameId;
	// var socket;
	// console.log(self.games);
	selecTiles = [];
	// console.log($scope.games);
	getGames();
	// self.init = function() {

	// }

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

	self.joinGame = function(game) {
		gameService.joinGame(game)
			.then(function successCallback(response) {
				self.successMessage = 'Successfully joined game';
				getGames();
				self.showMessageBox();
			}, function errorCallback(err) {
				self.errorMessage = err.statusText;
				self.showMessageBox();
			});
	};

	self.startGame = function(game) {
		gameService.startGame(game)
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
				self.successMessage = 'Successfully Created a game';
				self.showMessageBox();
			}, function errorCallback(err) {
				self.errorMessage = err.statusText;
				self.showMessageBox();
			});
	};

	self.showMessageBox = function() {
		$timeout(function() {
			self.successMessage = '';
			self.errorMessage = '';
		}, 3000);
	};
	// self.open = function(size) {
	// 	var modalInstance = $modal.open({
	// 		templateUrl: '',
	// 		controller: '',
	// 		size: size,
	// 		resolve: {
	// 			items: function () {
	// 				return $scope.items;
	// 			}
	// 		}
	// 	});

	// 	modalInstance.result.then(function (selectedItem) {
	// 		$scope.selected = selectedItem;
	// 	}, function () {
	// 		console.log("modal dismissed at: " + new Date());
	// 	});
	// };

	// self.isOwner = function(game) {
	// 	if (game.createdBy._id === window.localStorage.getItem("username")) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	// self.join = function(gameId) {
	// 	// $http.post("http://mahjongmayhem.herokuapp.com/games/" + gameId + "/players")
	// 	// .success(function (response) {
	// 	// 	console.log("join game response: " + response);
	// 		// window.location.href="/";

	// 	// })
	// 	// .error(function (response, status) {
	// 	// 	console.log("join game error response: " + response);
	// 	// 	console.log("join game error status: " + status);

	// 	// 	if (status == 400) {
	// 	// 		if (response.message == "") {
	// 	// 			alert("cant join a game twice");
	// 	// 		} else {
	// 	// 			alert("You have to be logged in");
	// 	// 		}
	// 	// 	}
	// 	// })
	// };

	// self.startGame = function(gameId) {
	// 	// $http.post("http://mahjongmayhem.herokuapp.com/games/" + gameId + "/start")
	// 	// .success(function (response) {
	// 	// 	console.log("start game response: " + response);
	// 	// 	// window.location.href="/";
	// 	// });
	// };

	$scope.init = function() {
		$scope.getGames(gameFactory);
	}

};