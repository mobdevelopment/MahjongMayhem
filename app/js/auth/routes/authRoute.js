module.exports = function ($stateProvider) {

	$stateProvider
		.state('authcallback', {
			url: '/authcallback?:username&:token',
			templateUrl: './game/views/gameListView.html',
			controller: 'GnrlCtrl as GnrlCtrl'
		});

};