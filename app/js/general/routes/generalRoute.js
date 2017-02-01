module.exports = function ($stateProvider, $urlRouterProvider, $httpProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('error404', {
			url: '/error404',
			templateUrl: '/js/general/views/error404.html'
		})
		.state('preHome', {
			url: '/preHome',
			templateUrl: '/js/general/views/preHome.html'
		})
		.state('overview', {
			url: '/',
			templateUrl: '/js/general/views/overview.html'
		});

	$httpProvider.interceptors.push(require('../../configuration/httpInterceptor'));
};