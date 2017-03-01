module.exports = function() {
	return {
		restrict: 'EA',
		replace: 'true',
		templateUrl: '/js/game/views/partials/tile.html',
		scope: {
			model: '='
		},
		controller: function($scope) {
			console.log("kom ik hier");
			// $scope.click = function(tile) {
			// 	// do stuff
			// 	console.log('see me clicking');
			// }

			// $("").each(function() {
			// 	var elem = $(this);
			// 	var id = elem.attr('tileId');

			// 	if(tile.id == id) {
			// 		//selected
			// 	}
			// });
		},
		link: function(scope, element, attrs) {
			// console.log("scope:: ");
			// console.log(scope);
			// element.css((scope.model.tile))
			// element.css((scope.model.tile.suit + scope.model.tile.name));
		}
	};
};