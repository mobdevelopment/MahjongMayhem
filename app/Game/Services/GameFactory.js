module.exports = function($http){
	var factory = {};

	factory.games = [
		// {id: 1 , minPlayers: 2, maxPlayers: 4},
	 // 	{id: 2 , minPlayers: 3, maxPlayers: 6},
	 // 	{id: 3 , minPlayers: 2, maxPlayers: 30}
	 ];
	// console.log(factory.games);

	factory.addGame = function(game) {
		// factory.games.push({id: id, minPlayers: minPlayers, maxPlayers: maxPlayers});
		factory.games.push(
			{ createdBy: {id: game.usermail, name: username },
			  createdOn: Date.now(), 
			  templateName: game.board, 
			  players: [], 
			  maxPlayers: game.maxPlayers,
			  minPlayers: game.minPlayers,
			  state: "open", 
			  id: "" });
	};

	factory.loadGames = function(response) {
		factory.games = response;
	};

	factory.joingame = function(player, gameId) {
		console.log(gameId);

		factory.games.forEach( function (game) {
			if (game._id == gameId) {
				if (game.state == "open") {
					game.players.push(player);
				}
				console.log("game is not open");
				return;
			}
		});
	};
	return factory;
}