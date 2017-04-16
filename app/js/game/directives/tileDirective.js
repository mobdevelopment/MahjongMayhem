module.exports = function() {
	return {
		restrict: 'EA',
		replace: 'true',
		templateUrl: '/js/game/views/partials/tile.html',
		scope: {
			model: '='
		},
		controller: function($scope, $stateParams, tileService) {

			$scope.click = function(tile) {
				// do stuff
				var checkTile = tileService.checkTile(tile);
			}
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