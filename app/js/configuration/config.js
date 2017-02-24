module.exports = function (app) {
	app.config(function () {

	})
	.run(function ($rootScope, $templateCache, $state, $localStorage, $location, authService) {
		$rootScope.$on('$viewContentLoaded', function () {
			$templateCache.removeAll();
		});

		$rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams, options) {
			// console.log('-fromState- ' + fromState.name + ' - -toState- ' + toState.name + ' - -username- ' + $localStorage.username);

			if (toState.name !== 'login') {

				if ($localStorage.username === undefined || $localStorage.username === null) {
					var params = $location.search();

					// console.log('-params- ' + params.username + ' -- ' + params.token);
					if (params.username !== undefined) {
						if (params.username != "" && params.token != "") {

							authService.setUser(params.username, params.token);
							event.preventDefault();
							$state.go(toState);
						}
					} else {
						event.preventDefault();

						$state.go('login');
					}
				}
			} else {
				if ($localStorage.username !== undefined) {
					event.preventDefault();
					$state.go('mahgame');
				}
			}
		});
	});
}