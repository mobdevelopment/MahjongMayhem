module.exports = function(){
	var factory = {};

	factory.games = [];
	factory.tiles = [];
	factory.matches = [];
	factory.players = [];
	// console.log(factory.games);

	factory.addGame = function(game) {
		factory.games.push({
			id: game._id,
			minPlayers: game.minPlayers,
			maxPlayers: game.maxPlayers,
			players: game.players,
			state: game.state,
			createdBy: game.createdBy
		});
	};

	// factory.loadGames = function(response) {
	// 	factory.games = response;
	// };

	factory.addTile = function(tile) {
		factory.tiles.push(tile);
	};

	factory.addMatch = function(match) {
		factory.matches.push(match);
	};

	factory.joinGame = function(game, player) {
		factory.games[factory.games.indexsOf(game)].players.push(player);
	};
	
	return factory;
};