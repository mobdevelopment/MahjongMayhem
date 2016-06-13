module.exports = function($scope, $http, $q, GameFactory){
	var self = this;
	this.games  = GameFactory;
	var gameId;
	var socket;
	selecTiles = [];
	// console.log($scope.games);

	$scope.getGames = function(gameFactory) {
		$http.get("http://mahjongmayhem.herokuapp.com/games")
		.success(function (response) {
			gameFactory.loadGames(response);
		});
	};

	self.open = function(size) {
		var modalInstance = $modal.open({
			templateUrl: '',
			controller: '',
			size: size,
			resolve: {
				items: function () {
					return $scope.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			$scope.selected = selectedItem;
		}, function () {
			console.log("modal dismissed at: " + new Date());
		});
	};

	self.isOwner = function(game) {
		if (game.createdBy._id === window.localstorage.getItem("username")) {
			return true;
		} else {
			return false;
		}
	}

	self.join = function(gameId) {
		$http.post("http://mahjongmayhem.herokuapp.com/games/" + gameId + "/players")
		.success(function (response) {
			console.log("join game response: " + response);
			// window.location.href="/";

		})
		.error(function (response, status) {
			console.log("join game error response: " + response);
			console.log("join game error status: " + status);

			if (status == 400) {
				if (response.message == "") {
					alert("cant join a game twice");
				} else {
					alert("You have to be logged in");
				}
			}
		})
	};

	self.startGame = function(gameId) {
		$http.post("http://mahjongmayhem.herokuapp.com/games/" + gameId + "/start")
		.success(function (response) {
			console.log("start game response: " + response);
			// window.location.href="/";
		});
	};

	$scope.init = function() {
		$scope.getGames(GameFactory);
	}


	// self.createGame = function(){
	// 	var id = $scope.id;
	// 	var minPlayers = $scope.minPlayers;
	// 	var maxPlayers = $scope.maxPlayers
	// 	GameFactory.addGame(id,minPlayers,maxPlayers);
	// }

	// self.deleteGame = function(){

	// }

	// self.endGame = function(){

	// }

	// self.joinGame = function(){

	// }

	// self.showPlayers = function(){
		
	// }
}