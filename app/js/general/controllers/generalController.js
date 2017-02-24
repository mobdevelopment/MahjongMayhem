module.exports = function($scope, authService) {
	var self = this;
	// $scope.token = window.localStorage['token'];
	self.currentUser = authService.getUser();

};