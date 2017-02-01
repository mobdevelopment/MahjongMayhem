module.exports = function($scope, AuthService) {
	var self = this;
	// $scope.token = window.localStorage['token'];
	self.currentUser = AuthService.getUser();

};