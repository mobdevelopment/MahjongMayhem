module.exports = function(alertService) {
	return {
		restrict: 'EA',
		link: function(scope, element, attrs) {
			scope.alert = alertService.alertObject;
		},
		template: '<div class="alert" ng-class="alert.type" ng-show="alert.show">{{ alert.message }}</div>'
	};
};