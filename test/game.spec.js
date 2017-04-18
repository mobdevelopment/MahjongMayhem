describe('gameController', function(){
	var gameFactory;
	var scope;
	var gameCtrl;
	var httpBackend;
	var scope;

	var _game = {
		_id: "58b099a8d18b941200130345",
		createdBy: {
			name: "Michael Schouten",
			__v: 0,
			_id: "man.schouten@student.avans.nl"
		},
		createdOn: "2017-02-24T20:38:00:038Z",
		startedOn: "2017-04-16T21:15:23.135Z",
		endedOn: "",
		gameTemplate: {
			id: "Ram",
			__v: 0,
			_id: "Ram"
		},
		id: "58b099a8d18b941200130345",
		maxPlayers: 2,
		minPlayers: 1,
		players: [{
			name: "Michael Schouten",
			numberOfMatches: 0,
			__v: 0,
			_id: "man.schouten@student.avans.nl"
		}],
		state: "playing",
		__v: 1
	}
	var currentUser = {
		username: "man.schouten@student.avans.nl",
		token: "65454198894843"
	}


	beforeEach(module('mahjongMayhem'));

	// Inject the modules and get them in global variables
	beforeEach(inject(function($rootScope, $controller, $httpBackend, $injector){
		scope = $rootScope.$new();
		httpBackend = $httpBackend;

		authService = $injector.get('authService');
		authService.setUser('man.schouten@student.avans.nl', '65454198894843');
		gameFactory = $injector.get('gameFactory');
		gameService = $injector.get('gameService');
		tileService = $injector.get('tileService');		

		gameController = $controller('gameController', { $scope: scope });
		// gameBoardController = $controller('gameBoardController', { $scope: scope });

		

	}));

	describe('canJoin', function(){
		it('should return false when already full', function() {
			// Given
			var game = {
				maxPlayers: 4,
				minPlayers: 2,
				players: [ {} , {}, {}, {}],
				state: "open",
				createdBy: {
					name: "Mark van Kleef",
					__v: 0,
					_id: "mv.kleef@student.avans.nl"
				},
			}
			// When
			canJoin = gameController.canJoin(game);
			// Then
			expect(canJoin).to.equal(false);

		});

		it('should return true when not enough players', function() {
			// Given
			var game = {
				maxPlayers: 4,
				minPlayers: 2,
				players: [ {} , {}, {}],
				state: "open",
				createdBy: {
					name: "Mark van Kleef",
					__v: 0,
					_id: "mv.kleef@student.avans.nl"
				},			}
			// When
			canJoin = gameController.canJoin(game);
			// Then
			expect(canJoin).to.equal(true);

		});

		it('should return false when game is players are less than minimum', function() {
			// Given
			var game = {
				maxPlayers: 4,
				minPlayers: 4,
				players: [ {} , {}, {}],
				state: "open",
				createdBy: {
					name: "Mark van Kleef",
					__v: 0,
					_id: "mv.kleef@student.avans.nl"
				},
			}
			// When
			canPlay = gameController.canPlay(game);
			// Then
			expect(canPlay).to.equal(false);

		});

		it('should return false when not open', function() {
			var game = {
				maxPlayers: 4,
				minPlayers: 2,
				players: [
					{
						_id: "man.schouten@student.avans.nl",
						name: "Michael Schouten",
						__v: 0
					}
				],
				state: "closed",
				createdBy: {
					name: "Mark van Kleef",
					__v: 0,
					_id: "mv.kleef@student.avans.nl"
				},
			}
			// When
			canJoin = gameController.canJoin(game);
			// Then

			expect(canJoin).to.equal(false);
		});
	});

	// describe('canMatch', function(){

	// 	var gameBoard = [
	// 	{
	// 		"xPos": 1,
	// 		"yPos": 1,
	// 		"zPos": 1,
	// 		"tile": {
	// 			"_id": 1,
	// 			"suit": "Bamboo",
	// 			"name": "1",
	// 			"matchesWholeSuit": false,
	// 			"__v": 0,
	// 			"id": "1"
	// 		},
	// 		"_id": "58b099a8d18b941200130348"
	// 	},{
	// 		"xPos": 3,
	// 		"yPos": 1,
	// 		"zPos": 1,
	// 		"tile": {
	// 			"_id": 1,
	// 			"suit": "Bamboo",
	// 			"name": "2",
	// 			"matchesWholeSuit": false,
	// 			"__v": 0,
	// 			"id": "1"
	// 		},
	// 		"_id": "58b099a8d18b941200130348"
	// 	},{
	// 		"xPos": 5,
	// 		"yPos": 1,
	// 		"zPos": 1,
	// 		"tile": {
	// 			"_id": 1,
	// 			"suit": "Bamboo",
	// 			"name": "2",
	// 			"matchesWholeSuit": false,
	// 			"__v": 0,
	// 			"id": "1"
	// 		},
	// 		"_id": "58b099a8d18b941200133048"
	// 	},{
	// 		"xPos": 7,
	// 		"yPos": 1,
	// 		"zPos": 1,
	// 		"tile": {
	// 			"_id": 1,
	// 			"suit": "Bamboo",
	// 			"name": "1",
	// 			"matchesWholeSuit": false,
	// 			"__v": 0,
	// 			"id": "1"
	// 		},
	// 		"_id": "58b099a8d18b941200130384"
	// 	}];


	// 		var tile1 = {
	// 			"xPos": 1,
	// 			"yPos": 1,
	// 			"zPos": 1,
	// 			"tile": {
	// 				"_id": 1,
	// 				"suit": "Bamboo",
	// 				"name": "1",
	// 				"matchesWholeSuit": false,
	// 				"__v": 0,
	// 				"id": "1"
	// 			},
	// 			"_id": "58b099a8d18b941200130348"
	// 		}

	// 		var tile2 = {
	// 			"xPos": 7,
	// 			"yPos": 1,
	// 			"zPos": 1,
	// 			"tile": {
	// 				"_id": 2,
	// 				"suit": "Bamboo",
	// 				"name": "1",
	// 				"matchesWholeSuit": false,
	// 				"__v": 0,
	// 				"id": "2"
	// 			},
	// 			"_id": "58b099a8d18b941200130384"
	// 		}

	// 		var tile3 = {
	// 			"xPos": 3,
	// 			"yPos": 1,
	// 			"zPos": 1,
	// 			"tile": {
	// 				"_id": 1,
	// 				"suit": "Bamboo",
	// 				"name": "2",
	// 				"matchesWholeSuit": false,
	// 				"__v": 0,
	// 				"id": "1"
	// 			},
	// 			"_id": "58b099a8d18b941200130348"
	// 		}

	// 		var tile4 = {
	// 			"xPos": 5,
	// 			"yPos": 1,
	// 			"zPos": 1,
	// 			"tile": {
	// 				"_id": 1,
	// 				"suit": "Bamboo",
	// 				"name": "2",
	// 				"matchesWholeSuit": false,
	// 				"__v": 0,
	// 				"id": "1"
	// 			},
	// 			"_id": "58b099a8d18b941200133048"
	// 		}

	// 	it('should be possible to match identical tiles', function() {
	// 		gameFactory.setCurrentGame(_game);
	// 		gameFactory.setCurrentBoard(gameBoard);

	// 		authService.setUser('man.schouten@student.avans.nl', '781872367823647812346983746');

	// 		tileService.checkTile(tile1);
	// 		tileService.checkTile(tile2);

	// 		var gameState = gameFactory.getCurrentGame();
	// 		expect(gameState.state).to.equal('playing');
	// 	});

	// 	it('should be finish the game', function() {
	// 		gameFactory.setCurrentGame(_game);
	// 		gameFactory.setCurrentBoard(gameBoard);

	// 		authService.setUser('man.schouten@student.avans.nl', '781872367823647812346983746');

	// 		tileService.checkTile(tile1);
	// 		tileService.checkTile(tile2);

	// 		tileService.checkTile(tile3);
	// 		tileService.checkTile(tile4);

	// 		var gameState = gameFactory.getCurrentGame();
	// 		expect(gameState.state).to.equal('finished');
	// 	});
	// });
});