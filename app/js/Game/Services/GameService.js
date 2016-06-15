module.exports = function($http){
	var service = {}; 
	var apiBaseUrl = "http://mahjongmayhem.herokuapp.com"

	// GET :: /Games
	service.getGames = function () {
		return $http({
			method: 'GET',
			url: apiBaseUrl + '/Games'
		}).then(function (response) {
			return response.data;
		});
	}

	// POST :: /Games
	service.newGame = function (game) {
		return $http({
			method: 'POST',
			url: apiBaseUrl + '/Games',
			data: game,
			dataType: 'json'
		}).then(function (response) {
			return response.data;
		});
	}

	// GET :: /GameStates
	service.getGameStates = function () {
		return $http({
			method: 'GET',
			url: apiBaseUrl + '/GameStates/'
		}).then(function (response) {
			return response.data;
		});
	}

	// GET :: /Games/:id
	service.getGame = function (gameId) {
		return $http({
			method: 'GET',
			url: apiBaseUrl + '/Games/' + gamedId
		}).then(function (response) {
			return response.data;
		});
	}

	// DELETE :: /Games/:id
	service.deleteGame = function (gameId) {
		return $http({
			method: 'DELETE',
			url: apiBaseUrl + '/Games/' + gameId
		}).then(function (response) {
			return response.data;
		});
	}

	// POST :: /Game/:id/Start
	service.startGame = function (gameId) {
		return $http({
			method: 'POST',
			url: apiBaseUrl + '/Game/' + gameId + '/Start'
		}).then(function (response) {
			return response.data;
		});
	}

	// POST :: /Games/:id/Players
	service.joinGame = function (gameid) {
		return $http({
			method: 'POST',
			url: apiBaseUrl + '/Games/' + gameId + '/Players'
		}).then(function (response) {
			return response.data;
		});
	}

	// GET :: /Games/:id/Tiles
	service.gameTiles = function (gameId) {
		return $http({
			method: 'GET',
			url: apiBaseUrl + '/Games/' + gameId + '/Tiles'
		}).then(function (response) {
			return response.data;
		});
	}

	// /Games/:id/Tiles?matched=true|false


	// GET :: /Games/:id/Tiles/matches

	// POST :: /Games/:id/Tiles/matches
	service.matchTile = function (gameId, tile1, tile2) {
		return $http({
			method: 'POST',
			url: apiBaseUrl + '/Games/' + gameId + '/Tiles/matches',
			data: { tile1Id: tile1, tile2Id: tile2 }
		}).then(function (response) {
			return response.data;
		});
	}

	// GET :: /GameTemplates
	service.getTemplates = function() {
		return $http({
			method: 'GET',
			url: apiBaseUrl + '/GameTemplates'
		}).then(function (response) {
			return response.data;
		});
	}

	// GET :: /GameTemplates/:id
	service.getTemplate = function(templateId) {
		return $http({
			method: 'GET',
			url: apiBaseUrl + '/GameTemplates/' + templateId
		}).then(function (response) {
			return response.data;
		});
	}
	return service;
}