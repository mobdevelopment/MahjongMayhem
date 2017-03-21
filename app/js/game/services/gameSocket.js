module.exports = function ($rootScope) {
	var service = {}; 
	var socketConnectUrl = "http://mahjongmayhem.herokuapp.com?gameId="
	var socket;

	service.connect = function (gameId) {
		socket = io.connect(socketConnectUrl + gameId);
	}

	service.on = function (eventName, callback) {
		socket.on(eventName, function () {
			var args = arguments;
			$rootScope.$apply(function () {
				callback.apply(socket, args);
			});
		});
	}

	service.emit = function (eventName, data, callback) {
		socket.emit(eventName, data, function () {
			var args = arguments;
			$rootScope.$apply(function () {
				if (callback) {
					callback.apply(socket, args);
				}
			});
		});
	}
	
	return service;
};