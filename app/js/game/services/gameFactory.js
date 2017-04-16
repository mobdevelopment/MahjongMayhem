module.exports = function(){
	var factory = {};

	factory.currentBoard = [];
	factory.currentGameMode;
	factory.currentGameId;
	factory.currentGame = [];

	factory.setCurrentBoard = function(boardTiles) {
		factory.currentBoard = boardTiles;
	};

	factory.getCurrentBoard = function() {
		return factory.currentBoard;
	};

	factory.setCurrentGameMode = function(gameMode) {
		factory.currentGameMode = gameMode;
	};

	factory.getCurrentGameMode = function() {
		return factory.currentGameMode;
	};

	factory.setCurrentGameId = function(gameId) {
		factory.currentGameId = gameId;
	};

	factory.getCurrentGameId = function() {
		return factory.currentGameId;
	};

	factory.setCurrentGame = function(game) {
		factory.currentGame = game;
	};

	factory.getCurrentGame = function() {
		return factory.currentGame;
	};

	factory.getPlayers = function() {
		return factory.currentGame.players;
	}
	
	return factory;
};