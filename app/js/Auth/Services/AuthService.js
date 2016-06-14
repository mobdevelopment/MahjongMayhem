// module.exports = function($http){
// 	var service = {}; 
// 	var apiBaseUrl = "http://mahjongmayhem.herokuapp.com/auth/avans?callbackUrl="

// 	//	We gebruiken Avans OAuth en hebben hier een url voor opengesteld:

// 	//	Voer het volgende uit:

// 	//	GET http://mahjongmayhem.herokuapp.com/auth/avans?callbackUrl=<<Jouw callback hier (http://localhost:8080/authcallback bijvoorbeeld)>>
// 	//	Je komt door de avans authenticatieschermen heen
// 	//	Je callback wordt aangeroepen met <<Jouw callback hier>>?username=your.email@student.avans.nl&token=hierkomenveelkarakters
// 	//	Voorbeeld: http://localhost:8080/#/login?username=mmaa.schuurmans@avans.nl&token=secret
// 	//	Je kan deze met de juiste AngularJS provider ($routeParams) van de querystring afhalen en in memory/localstorage/cookies/iets anders bewaren
// 	//	Elke vervolgende request kan je dan voorzien van een tweetal headers
// 	//	x-username
// 	//	x-token
// 	//	Vul deze waarden bij elke http methode in. Kleine hint:
// 	//	app.factory('httpRequestInterceptor', function ($rootScope) {  return {    request: function (config) { ...... } });

// 	//	app.config(function ($httpProvider) {  $httpProvider.interceptors.push('httpRequestInterceptor'); });

// 	// GET :: /auth/avans?callbackUrl=
// 	service.logIn = function () {
// 		return $http({
// 			method: 'GET',
// 			url: apiBaseUrl + '/Games'
// 		}).then(function (response) {
// 			return response.data;
// 		});
// 	}


// 	return service;
// }