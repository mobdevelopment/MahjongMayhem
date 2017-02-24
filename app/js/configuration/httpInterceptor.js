module.exports = function ($rootScope, $localStorage, $q) {
	var service = this;

	service.request = function (config) {

		// Check if localStorage.jwt is set.
		var access_username = $localStorage.username,
			access_token 	= $localStorage.token;
			

		// Set the token on the header on authorization
		if (access_token && access_username) {
			// console.log('-- config headers: ' + access_username + ' -- ' + access_token);
			config.headers['x-token'] 		= access_token;
			config.headers['x-username'] 	= access_username;
		}
		return config;
	};

	service.responseError = function (response) {
		if (response.status === 401) {
			$rootScope.$broadcast('unauthorized');
		}
		return $q.reject(response);
	}

	return this;
};