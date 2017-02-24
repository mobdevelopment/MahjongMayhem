module.exports = function ($stateProvider, $urlRouterProvider, $httpProvider) {
	$urlRouterProvider.otherwise('/login');

	$stateProvider
		.state('error404', {
			url: '/error404',
			templateUrl: '/js/general/views/error404.html'
		})
		.state('login', {
			url: '/login',
			templateUrl: '/js/general/views/login.html'
		})
		.state('logout', {
			url: '/logout',
			controller: function($localStorage, $state) {
				delete $localStorage.username;
				delete $localStorage.token;
				
				$state.go('login');
			}
		});

	$httpProvider.interceptors.push(require('../../configuration/httpInterceptor'));
};