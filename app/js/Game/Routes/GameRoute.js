module.exports = function ($stateProvider) {

	$stateProvider
		.state('games', {
			url: '/games',
			templateUrl: './Game/Views/GameListView.html',
			controller: 'GameCtrl as GameCtrl'
		});

}