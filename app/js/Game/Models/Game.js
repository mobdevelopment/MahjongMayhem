module.exports	 = function(game) {
	console.log("Game model:");
	console.log(game);
	var self = this;

	self.id = game.id;
	self.createdBy = game.createdBy;
	self.createdOn = game.createdOn;
	self.startedOn = game.startedOn;
	self.endedOn = game.endedOn;

	self.minPlayers = game.minPlayers;
	self.maxPlayers = game.maxPlayers;
	self.players = game.players;
	self.amountOfPlayers = game.players.length;

	self.gameTemplate = game.gameTemplate;
	self.state = game.state;

}