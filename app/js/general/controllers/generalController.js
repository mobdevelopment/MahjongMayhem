module.exports = function($scope, authService) {
	var self = this;
	// $scope.token = window.localStorage['token'];
	self.currentUser = authService.getUser();

	if(window.localStorage['theme'] != 'undefined')
	{
		$scope.theme = window.localStorage['theme'];
	}

	self.theme = function(theme) {
		$scope.theme = theme;
		console.log(theme);
		window.localStorage['theme'] = theme;
	};

};