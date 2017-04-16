module.exports = function ($stateProvider) {
// console.log($stateProvider);
	$stateProvider
		.state('mahgame', {
			url: '/mahgame',
			templateUrl: '/js/game/views/mahgame.html',
			controller: 'gameController as gameCon'
		})
		.state('createGame', {
			url: '/createGame',
			templateUrl: '/js/game/views/createGameView.html',
			controller: 'gameController as gameCon'
		})
		.state('game', {
			url: '/game/:id',
			params: {'id': null, mode: null},
			templateUrl: '/js/game/views/gameBoardView.html',
			controller: 'gameBoardController as gameBoardCon'
		});

};