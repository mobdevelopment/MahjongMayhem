module.exports = function ($stateProvider) {

	$stateProvider
		.state('authcallback', {
			url: '/authcallback?:username&:token',
			templateUrl: './Game/Views/GameListView.html',
			controller: 'GameCtrl as GameCtrl'
		});

}