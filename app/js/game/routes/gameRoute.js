module.exports = function ($stateProvider) {
// console.log($stateProvider);
	$stateProvider
		.state('mahgame', {
			url: '/mahgame',
			templateUrl: '/js/game/views/mahgame.html',
			controller: 'gameController as gameCon'
		})
		.state('games', { // view name
			url: '/games', // url name
			templateUrl: '/js/game/views/gameListView.html', // view location
			controller: 'gameController as gameCon'
		})
		.state('createGame', {
			url: '/createGame',
			templateUrl: '/js/game/views/createGameView.html',
			controller: 'gameController as gameCon'
		});

		// .state('game', {
		// 	url: '/game/:id',
		// 	params: {'id': null },
		// 	templateUrl: '/js/game/views/gameView.html',
		// 	controller: function ($state, stateParams) {
		// 		$state.go('game.board');
		// 	}
		// });

		// .state('gameDetails', {
		// 	url: '/gameDetails/:id',
		// 	params: {'id': null },
		// 	templateUrl: '/js/game/views/gameDetailView.html',
		// 	controller: 'gameDetailController as gdc'
		// })

		// .state('game.board', {
		// 	url: '/board',
		// 	templateUrl: '/js/game/views/gameBoardView.html',
		// 	controller: 'gameDetailController as gdc'
		// })

		// .state('game.detail', {
		// 	url: '/gameDetails',
		// 	templateUrl: '/js/game/views/gameDetailView.html',
		// 	controller: 'gameDetailController as gdc'
		// });

};