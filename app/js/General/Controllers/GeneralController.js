module.exports = function($scope) {
	var self = this;
	$scope.token = window.localStorage['token'];
}