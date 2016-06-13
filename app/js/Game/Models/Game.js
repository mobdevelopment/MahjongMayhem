var Game = function() {
	var self = this;

	self.id = "";
	self.createdBy = new Person();
	self.createdOn = new Date();
	self.startedOn = new Date();
	self.gameTemplate = new GameTemplate;
	self.players = [];
	self.maxPlayers = 0
	self.minPlayers = 0;
	self.state = "";
}