module.exports = function() {
	return {
		restrict: 'EA',
		replace: 'true',
		templateUrl: '/js/game/views/partials/tile.html',
		scope: {
			model: '='
		},
		controller: function($scope) {
			// console.log("kom ik hier");
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
			/// set z-index for the tiles
			var x = (30 - scope.model.xPos);
			var y = scope.model.yPos;
			var z = scope.model.zPos * 10000;

			element.css('z-index', (z+x+y));
		}
	};
};