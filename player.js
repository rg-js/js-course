var Player = function(){
	this.field = new Field();
	// this.name = window.prompt('Your name?');
	this.name = 'RG';
	
	this.isLooser = function() {
		return this.field.isAnyShipAlive();
	};
};
