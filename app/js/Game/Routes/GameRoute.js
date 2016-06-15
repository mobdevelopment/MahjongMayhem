module.exports = function ($stateProvider) {
console.log($stateProvider);
	$stateProvider

		.state('games', { // view name
			url: '/games', // url name
			templateUrl: '/js/Game/Views/GameListView.html', // view location
			controller: 'GameController', // controller used
			controllerAs: 'gc'
		})

		.state('game', {
			url: '/gamesw',
			templateUrl: '/js/Game/Views/games.html',
			controller: 'GameController as gc'
		});

}