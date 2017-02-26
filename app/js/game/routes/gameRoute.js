module.exports = function ($stateProvider) {
// console.log($stateProvider);
	$stateProvider
		.state('mahgame', {
			url: '/mahgame',
			templateUrl: '/js/game/views/mahgame.html',
			controller: 'gameController as gameCon'
		})
		// .state('games', { // view name
		// 	url: '/games', // url name
		// 	templateUrl: '/js/game/views/gameListView.html', // view location
		// 	controller: 'gameController as gameCon'
		// })
		.state('createGame', {
			url: '/createGame',
			templateUrl: '/js/game/views/createGameView.html',
			controller: 'gameController as gameCon'
		})
		.state('game', {
			url: '/game/:id',
			params: {'id': null },
			templateUrl: '/js/game/views/gameBoardView.html',
			controller: 'gameBoardController as gameCon'
			// controller: function ($scope, $state, $stateParams) {
			// 	$scope.gameId = $stateParams.id;
			// 	console.log($scope.gameId);
			// 	$state.go('gameboard');
			// }
		})
		.state('gameboard', {
			url: '/board',
			templateUrl: '/js/game/views/gameBoardView.html',
			controller: 'gameBoardController as gameCon'
		});

};