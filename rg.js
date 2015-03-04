var Field = function(){
	// Constructor code
	this.size = 8; // Optional
	this.numShips = 1; // Optional
	this._field = [];
	this._ships = [];
	
	// Defintion of class method
	this._initField = function() {
		for (var i = 0; i < this.size; i++) {
			this._field[i] = new Array(this.size);
			for (var j = 0; j < this.size; j++) {
				this._field[i][j] = '0';
			}
		}
	};
	
	
	this.drawn = function() {
			for (var i=0; i < this.size; i++){
				console.log('TEST: ', this._field[i].join('-'));
				//console.log('PLAYER: ', this._field[i].join('-').replace(/1/g, '0'));
			}
	};
	
	
	
	this._drawShip = function(ship){
		for (var i = 0; i < this.size; i++) {
		var initPos = parseInt(Math.random() * (this.size - ship.size));
			for (var j = initPos; j < (initPos + ship.size); j++) {
				this._field[i][j] = ship.id;
			}
		}
	};
	
	this._initShips = function() {
		for (var i = 1; i <= this.numShips; i++) {
			var ship = new Ship(i);
			this._ships[i] = new Array(this.numShips);
				for (var j = 0; j < this.numShips; j++) {
					this._ships[i][ship.id] = ship;
					this._drawShip(ship);
				}
				
		}

	};
	
	
	this.evalShot = function(posX,posY) {
	
		var val = this._field[posX][posY];
		if (val != '0') {
			var ship = this._ships[1][val];
			ship.getShot();
			this._field[posX][posY] = 'H';
			console.log(ship.status);
		}
		else {
			this._field[posX][posY] = 'F';
			console.log('FAIL');
		}
		this.drawn();
	};
	
	this.isAnyShipAlive = function() {
		for (var i = 1; i < this._ships.length; i++) {
			if (this._ships[i].status != 'KILL')
				return true;
		}
	};
	
	this._initField();
	this._initShips();
	this.drawn();	
	
};
