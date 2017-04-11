module.exports = function($scope, authService) {
	var self = this;
	// $scope.token = window.localStorage['token'];
	self.currentUser = authService.getUser();

	// if(window.localStorage['theme'] != 'undefined')
	// {
	// 	$scope.myDynamicClass = window.localStorage['theme'];
	// }

	// self.theme = function(theme) {
	// 	$scope.myDynamicClass = theme;
	// 	window.localStorage['theme'] = theme;
	// };

};