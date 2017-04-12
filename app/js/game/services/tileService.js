module.exports = function(gameService, gameFactory, authService) {
	var service = {};
	var self = this;

	self.matchTile = null;

	service.checkTile = function(tile) {
		if (checkTileSelectable(tile)) {
			if (self.matchTile == null) {
				selectTile(tile);
				self.matchTile = tile;

				return null;
			} else if (self.matchTile != null) {
				if (self.matchTile._id != tile._id) {

					var match = checkTileMatch(self.matchTile, tile);
					// if (gameFactory.getCurrentGameMode() == 'play' && match) {
					if (match) {
						gameService.postMatchedTiles(gameFactory.getCurrentGameId(), self.matchTile._id, tile._id);
						console.log('real:: pushing match to api');
						// console.log('fake:: pushing match to api');
						var user = authService.getUser();
						// setScore(user.username);
						removeTile(self.matchTile._id);
						removeTile(tile._id);
						setGameOver();
					}
				}
				deselectTile();
				self.matchTile = null;

				return null;
			}

		}
		return self.matchTile;
	}

	service.cheatTile = function() {
		var tiles = gameFactory.getCurrentBoard();
		var selectableTiles = [];
		// look for all selectable tiles;
		tiles.forEach(function (tileElem) {
			if (checkTileSelectable(tileElem)) {
				selectableTiles.push(tileElem);
			}
		});

		for (var l = 0; l < selectableTiles.length; l++) {
			for (var r = 0; r < selectableTiles.length; r++) {
				if (selectableTiles[l]._id != selectableTiles[r]._id) {
					if (checkTileMatch(selectableTiles[l], selectableTiles[r])) {
						// tiles can be matched
						selectCheatTile(selectableTiles[l]);
						selectCheatTile(selectableTiles[r]);
						return;
					}
				}
			}
		}
	}

	function selectTile(tile) {
		$('div[tileid="' + tile._id + '"]').addClass('selected');
	}

	function deselectTile() {
		$('.board .tile').each(function (i) {
			var element = $(this);
			var id = $(this).attr('tileId');
			element.removeClass('selected');
		});
	}
	function selectCheatTile(tile) {
		$('div[tileid="' + tile._id + '"]').addClass('cheat');
	}

	service.linkSetScore = function(username) {
		setScore(username);
	}

	function setScore(username) {
		var game = gameFactory.getCurrentGame();
		game.players.forEach(function (userElem) {
			if (userElem._id == username) {
				userElem.numberOfMatches = userElem.numberOfMatches+1;
			}
		});
		gameFactory.setCurrentGame(game);
	}

	function gameOverCheck() {
		var tiles = gameFactory.getCurrentBoard();
		var selectableTiles = [];
		// look for all selectable tiles;
		tiles.forEach(function (tileElem) {
			if (checkTileSelectable(tileElem)) {
				selectableTiles.push(tileElem);
			}
		});

		for (var l = 0; l < selectableTiles.length; l++) {
			for (var r = 0; r < selectableTiles.length; r++) {
				if (selectableTiles[l]._id != selectableTiles[r]._id) {
					if (checkTileMatch(selectableTiles[l], selectableTiles[r])) {
						// tiles can be matched
						return false;
					}
				}
			}
		}
		return true;
	}

	function setGameOver() {
		if (gameOverCheck()) {
			var game = gameFactory.getCurrentGame();
			game.state = 'finished';
			// set gameover??
			// gameService
			console.log('gameover');
		}
	}


	function removeTile(tileId) {
		$('div[tileid="' + tileId + '"]').remove();
		updateBoard(tileId);
	}

	service.linkRemoveTile = function(tileId) {
		removeTile(tileId);
	}

	function checkTileMatch(tile1, tile2) {
		if(tile1.tile.matchesWholeSuit && tile2.tile.matchesWholeSuit) {
			if (tile1.tile.suit == tile2.tile.suit) {
				return true;
			}
		}
		return (tile1.tile.suit + tile1.tile.name) == (tile2.tile.suit + tile2.tile.name);
	}

	function checkTileSelectable(tile) {
		var tiles = gameFactory.getCurrentBoard();
		var tileLeft = false;
		var tileRight = false;
		var result = true;
		// tile is not selectable if there is a tile on top of it. 
		// 		((z+1), (y-1, y, y+1), (x-1, x, x+1)) 		* 9 possibilities

		// tile is not selectable if the tile has there are tiles adjacent to **both** long sides of the tile.
		// 		((z), (y-1, y, y+1), (x-2))					* 3 possibilities
		// 		((z), (y-1, y, y+1), (x+2))					* 3 possibilities

		tiles.forEach(function (tileElem) {
			// only check the tiles around and on top of the tile that is selected
			if ((tileElem.zPos >= tile.zPos) && 
				(tileElem.xPos >= (tile.xPos - 2) && tileElem.xPos <= (tile.xPos + 2)) &&
				(tileElem.yPos >= (tile.yPos - 1) && tileElem.yPos <= (tile.yPos + 1))) {
				// check for tiles on top of the tiles
				if (tileElem.zPos > tile.zPos) {
					// console.log('topcheck');
					// console.log(tileElem);
					if ((tileElem.xPos >= (tile.xPos - 1) && tileElem.xPos <= (tile.xPos + 1))) {
						// console.log('false:: top enclosed ');

						return result = false;
					}
				}
				//check if the tile is surrounded at both sides
				if (tileElem.zPos == tile.zPos) {
					// check the left side.
					if (tileElem.xPos == (tile.xPos - 2)) {
						// console.log('leftcheck');
						// console.log(tileElem);
						if (tileRight) {
							// console.log('false:: left and right enclosed (left)');
							return result = false;
						}
						tileLeft = true;
					}
					// check the right side.
					if(tileElem.xPos == (tile.xPos + 2)) {
						// console.log('rightcheck');
						// console.log(tileElem);
						if (tileLeft) {
							// console.log('false:: left and right enclosed (right)');
							return result = false;
						}
						tileRight = true;
					}
				}
			}
		});
		return result;
	}

	function updateBoard(tileId) {
		gameFactory.setCurrentBoard(gameFactory.getCurrentBoard().filter(function (elem) {
			return elem._id !== tileId;
		}));
	}

	return service;
};