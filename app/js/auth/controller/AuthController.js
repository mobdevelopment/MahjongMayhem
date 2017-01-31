// module.exports = function($scope, $state, $stateParams){
// 	var self = this;
// 	self.username;
// 	self.token;

// 	self.init = function() {
// 		if ($statParams.username === undefined) {
// 			self.username = window.localStorage['username'];
// 		} else {
// 			self.username = $stateParams.username;
// 		}
// 		self.token = $stateParams.token;

// 		if (window.localStorage['token'] === undefined && window.localStorage['username'] === undefined) {
// 			if ($stateParams.token != undefined && $stateParams.username != undefined) {
// 				window.localStorage['username'] = self.username;
// 				window.localStorage['token'] = $stateParams.token;
// 			}
// 		}
// 		console.log(self.username);
// 		$state.transitionTo('games', {userid: self.username});
// 	};
// };

// module.exports = function ($scope, $stateParams, $state, $localStorage) {

//   $scope.auth = "Auth";
  
//   // TODO: inject into header by means of an interceptor
//   console.log($stateParams.username);

//   $localStorage.username = $stateParams.username;
//   $localStorage.token = $stateParams.token;

//   $state.go('games');

// }
