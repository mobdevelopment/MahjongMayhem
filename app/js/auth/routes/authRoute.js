module.exports = function ($stateProvider) {

	$stateProvider
	// 	.state('authcallback', {
	// 		url: '/authcallback?:username&:token',
	// 		templateUrl: './game/views/profile.html',
	// 		controller: 'AuthController as AuCtrl'
	// 	});

	// .state('/authcallback', {
	// 	url: '/%23/authcallback?username&token',
	// 	resolve: {
	// 		auth: function($stateParams, $state, AuthFactory) {
	// 			AuthFactory.LogIn($stateParams);
	// 			$state.go('/games');
	// 		}
	// 	}
	// });
	.state('authcallback', {
        url: '/authCallback?username&token',
        templateUrl: './game/views/profile.html',
        controller: 'AuthCtrl as AuCtrl'
      });
};