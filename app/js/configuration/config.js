module.exports = function (app) {
	app.config(function () {

	})
	.run(function ($rootScope, $templateCache, $state, $window, $location, authService) {
		$rootScope.$on('$viewContentLoaded', function () {
			$templateCache.removeAll();
		});

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
			if (toState.name !== 'preHome') {
				if ($window.localStorage['ngStorage-username'] === undefined || $window.localStorage['ngStorage-username'] === null) {
					var params = $location.search();

					if (params.username !== undefined) {
						if (params.username != "" && params.token != "") {
							authService.setUser(params.username, params.token);
							event.preventDefault();
							$state.go(toState);
						}
					} else {
						event.preventDefault();
						$state.go('preHome');
					}
				}
			} else {
				if ($window.localStorage['ngStorage-username'] !== undefined) {
					event.preventDefault();
					$state.go('profile');
				}
			}
		});
	});
}