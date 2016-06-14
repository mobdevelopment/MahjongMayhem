module.exports = function(){
	var factory = {};

	factory.games = [];
	factory.tiles = [];
	factory.matches = [];
	factory.players = [];
	// console.log(factory.games);

	factory.addGame = function(game) {
		factory.games.push({
			id: game.id,
			minPlayers: game.minPlayers,
			maxPlayers: game.maxPlayers,
			players: game.state,
			createdBy: game.createdBy
		});
	};

	// factory.loadGames = function(response) {
	// 	factory.games = response;
	// };

	factory.joinGame = function(player, gameId) {
		// console.log(gameId);

		// factory.games.forEach( function (game) {
		// 	if (game.id == gameId) {
		// 		if (game.state == "open") {
		// 			game.players.push(player);
		// 		}
		// 		console.log("game is not open");
		// 		return;
		// 	}
		// });
	};
	return factory;
}