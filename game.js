var Game = function(){
	this.numsPlayers = null;
	this.players = [];
	
	
	this.play = function() {
	
		var player = this.players[0];
		do {
			var limit = player.field.size - 1;
			var shotX = Number(window.prompt('Shot X Axis ? [0 - ' + limit + ']'));
			var shotY = Number(window.prompt('Shot Y Axis? [0 - ' + limit + ']'));
			
			player.field.evalShot(shotX,shotY);
			
		//} while(this.players[0].status == 'LOOSER');
		} while(player.isLooser());
	};
	
	this.start = function(numsPlayers){
		this.numsPlayers = numsPlayers;
		for (var i = 0 ; i < numsPlayers; i++) {
			this.players.push(new Player());
		}
		this.play();
	}

};
