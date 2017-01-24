module.exports = function ($stateProvider) {
console.log($stateProvider);
	$stateProvider

		.state('games', { // view name
			url: '/games', // url name
			templateUrl: '/js/Game/Views/GameListView.html', // view location
			controller: 'GameController', // controller used
			controllerAs: 'gc'
		})

		.state('createGame', {
			url: '/createGame',
			params: {'id': null },
			templateUrl: '/js/Game/Views/CreateGameView.html',
			controller: 'GameController as gc'
		})


		.state('game', {
			url: '/game/:id',
			params: {'id': null },
			templateUrl: '/js/Game/Views/GameView.html',
			controller: function ($state, stateParams) {
				$state.go('game.board');
			}
		})

		.state('gameDetails', {
			url: '/gameDerails/:id',
			params: {'id': null },
			templateUrl: '/js/Game/Views/GameDetailView.html',
			controller: 'GameDetailController as gdc'
		})

		.state('game.board', {
			url: '/board',
			params: {'id': null },
			templateUrl: '/js/Game/Views/GameBoardView.html',
			controller: 'GameDetailController as gdc'
		})

		.state('game.detail', {
			url: '/gameDetails',
			params: {'id': null },
			templateUrl: '/js/Game/Views/GameDetailView.html',
			controller: 'GameDetailController as gdc'
		});

};